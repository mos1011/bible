import urllib.request
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Directories
HEBREW_DIR = os.path.join(os.path.dirname(__file__), 'data_hebrew')
GREEK_DIR = os.path.join(os.path.dirname(__file__), 'data_greek')

os.makedirs(HEBREW_DIR, exist_ok=True)
os.makedirs(GREEK_DIR, exist_ok=True)

# 66 Book Definitions
BOOKS = [
    (1, '창세기', 'Genesis', 'OT'),
    (2, '출애굽기', 'Exodus', 'OT'),
    (3, '레위기', 'Leviticus', 'OT'),
    (4, '민수기', 'Numbers', 'OT'),
    (5, '신명기', 'Deuteronomy', 'OT'),
    (6, '여호수아', 'Joshua', 'OT'),
    (7, '사사기', 'Judges', 'OT'),
    (8, '룻기', 'Ruth', 'OT'),
    (9, '사무엘상', '1 Samuel', 'OT'),
    (10, '사무엘하', '2 Samuel', 'OT'),
    (11, '열왕기상', '1 Kings', 'OT'),
    (12, '열왕기하', '2 Kings', 'OT'),
    (13, '역대상', '1 Chronicles', 'OT'),
    (14, '역대하', '2 Chronicles', 'OT'),
    (15, '에스라', 'Ezra', 'OT'),
    (16, '느헤미야', 'Nehemiah', 'OT'),
    (17, '에스더', 'Esther', 'OT'),
    (18, '욥기', 'Job', 'OT'),
    (19, '시편', 'Psalms', 'OT'),
    (20, '잠언', 'Proverbs', 'OT'),
    (21, '전도서', 'Ecclesiastes', 'OT'),
    (22, '아가', 'Song of Solomon', 'OT'),
    (23, '이사야', 'Isaiah', 'OT'),
    (24, '예레미야', 'Jeremiah', 'OT'),
    (25, '예레미야애가', 'Lamentations', 'OT'),
    (26, '에스겔', 'Ezekiel', 'OT'),
    (27, '다니엘', 'Daniel', 'OT'),
    (28, '호세아', 'Hosea', 'OT'),
    (29, '요엘', 'Joel', 'OT'),
    (30, '아모스', 'Amos', 'OT'),
    (31, '오바댜', 'Obadiah', 'OT'),
    (32, '요나', 'Jonah', 'OT'),
    (33, '미가', 'Micah', 'OT'),
    (34, '나훔', 'Nahum', 'OT'),
    (35, '하박국', 'Habakkuk', 'OT'),
    (36, '스바냐', 'Zephaniah', 'OT'),
    (37, '학개', 'Haggai', 'OT'),
    (38, '스가랴', 'Zechariah', 'OT'),
    (39, '말라기', 'Malachi', 'OT'),
    (40, '마태복음', 'Matthew', 'NT'),
    (41, '마가복음', 'Mark', 'NT'),
    (42, '누가복음', 'Luke', 'NT'),
    (43, '요한복음', 'John', 'NT'),
    (44, '사도행전', 'Acts', 'NT'),
    (45, '로마서', 'Romans', 'NT'),
    (46, '고린도전서', '1 Corinthians', 'NT'),
    (47, '고린도후서', '2 Corinthians', 'NT'),
    (48, '갈라디아서', 'Galatians', 'NT'),
    (49, '에베소서', 'Ephesians', 'NT'),
    (50, '빌립보서', 'Philippians', 'NT'),
    (51, '골로새서', 'Colossians', 'NT'),
    (52, '데살로니가전서', '1 Thessalonians', 'NT'),
    (53, '데살로니가후서', '2 Thessalonians', 'NT'),
    (54, '디모데전서', '1 Timothy', 'NT'),
    (55, '디모데후서', '2 Timothy', 'NT'),
    (56, '디도서', 'Titus', 'NT'),
    (57, '빌레몬서', 'Philemon', 'NT'),
    (58, '히브리서', 'Hebrews', 'NT'),
    (59, '야고보서', 'James', 'NT'),
    (60, '베드로전서', '1 Peter', 'NT'),
    (61, '베드로후서', '2 Peter', 'NT'),
    (62, '요한1서', '1 John', 'NT'),
    (63, '요한2서', '2 John', 'NT'),
    (64, '요한3서', '3 John', 'NT'),
    (65, '유다서', 'Jude', 'NT'),
    (66, '요한계시록', 'Revelation', 'NT')
]

def fetch_json(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode('utf-8'))

def process_translation(data, target_dir, book_filter_fn, version_name):
    books_index = []
    
    # Group verses by book -> chapter
    grouped = {}
    for item in data:
        b_id = item['book']
        if not book_filter_fn(b_id):
            continue
        c_num = item['chapter']
        v_num = item['verse']
        text = item['text']
        
        if b_id not in grouped:
            grouped[b_id] = {}
        if c_num not in grouped[b_id]:
            grouped[b_id][c_num] = []
            
        grouped[b_id][c_num].append({
            'verse': v_num,
            'text': text
        })
        
    for b_id, name_ko, name_en, testament in BOOKS:
        if not book_filter_fn(b_id):
            continue
        
        if b_id in grouped:
            chaps_data = []
            sorted_chaps = sorted(grouped[b_id].keys())
            for c_num in sorted_chaps:
                verses_list = sorted(grouped[b_id][c_num], key=lambda x: int(x['verse']) if isinstance(x['verse'], int) or str(x['verse']).isdigit() else 0)
                chaps_data.append({
                    'chapter': c_num,
                    'verses': verses_list
                })
            
            book_obj = {
                'book': name_ko,
                'book_en': name_en,
                'version': version_name,
                'chapters': chaps_data
            }
            
            # Save file as Genesis.json / 창세기.json
            file_name = f"{name_ko}.json"
            file_path = os.path.join(target_dir, file_name)
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(book_obj, f, ensure_ascii=False, indent=2)
                
            books_index.append({
                'id': b_id,
                'name': name_ko,
                'name_en': name_en,
                'chapters': len(chaps_data)
            })
            print(f"Saved: {file_name} ({len(chaps_data)} chapters)")

    index_path = os.path.join(target_dir, 'books.json')
    with open(index_path, 'w', encoding='utf-8') as f:
        json.dump(books_index, f, ensure_ascii=False, indent=2)
    print(f"Saved index: {index_path}")

def main():
    print("Fetching WLC (Hebrew OT)...")
    wlc_raw = fetch_json('https://bolls.life/static/translations/WLC.json')
    print(f"WLC total verses: {len(wlc_raw)}")
    process_translation(wlc_raw, HEBREW_DIR, lambda b: 1 <= b <= 39, 'WLC')

    print("\nFetching TR (Greek NT)...")
    tr_raw = fetch_json('https://bolls.life/static/translations/TR.json')
    print(f"TR total verses: {len(tr_raw)}")
    process_translation(tr_raw, GREEK_DIR, lambda b: 40 <= b <= 66, 'TR')
    
    print("\nFetching SBLGNT (Greek NT alternative)...")
    sbl_dir = os.path.join(os.path.dirname(__file__), 'data_greek_sblgnt')
    os.makedirs(sbl_dir, exist_ok=True)
    sbl_raw = fetch_json('https://bolls.life/static/translations/SBLGNT.json')
    print(f"SBLGNT total verses: {len(sbl_raw)}")
    process_translation(sbl_raw, sbl_dir, lambda b: 40 <= b <= 66, 'SBLGNT')

    print("\nAll downloads and JSON formatting completed successfully!")

if __name__ == '__main__':
    main()
