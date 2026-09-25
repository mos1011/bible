import json
import os
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
INDEX_FILE = os.path.join(BASE_DIR, 'strongs_index.json')

# Cache loaded JSONs
INDEX_DATA = None
BIBLE_CACHE = {}

def load_index():
    global INDEX_DATA
    if INDEX_DATA is None:
        if not os.path.exists(INDEX_FILE):
            print(f"Error: {INDEX_FILE} not found. Please run build_strongs_search_system.py first.")
            sys.exit(1)
        with open(INDEX_FILE, 'r', encoding='utf-8') as f:
            INDEX_DATA = json.load(f)
    return INDEX_DATA

def load_verse_text(version_dir, book_ko, chapter, verse):
    key = f"{version_dir}/{book_ko}"
    if key not in BIBLE_CACHE:
        file_path = os.path.join(BASE_DIR, version_dir, f"{book_ko}.json")
        if not os.path.exists(file_path):
            return None
        with open(file_path, 'r', encoding='utf-8') as f:
            BIBLE_CACHE[key] = json.load(f)
            
    b_data = BIBLE_CACHE[key]
    for c in b_data.get('chapters', []):
        if str(c.get('chapter')) == str(chapter):
            for v in c.get('verses', []):
                if str(v.get('verse')) == str(verse):
                    return v.get('text', '')
    return None

def search_strongs(strongs_id, max_results=10):
    start_time = time.time()
    strongs_id = strongs_id.strip().upper()
    
    # If user passed just numbers like '7225' without H/G, try both or require H/G
    if not (strongs_id.startswith('H') or strongs_id.startswith('G')):
        strongs_id = 'H' + strongs_id

    idx = load_index()
    hits = idx.get(strongs_id, [])
    elapsed_ms = (time.time() - start_time) * 1000

    results = []
    for hit in hits[:max_results]:
        book_ko = hit['book_ko']
        chap = hit['chapter']
        verse = hit['verse']
        b_id = hit['book']

        krv_text = load_verse_text('data', book_ko, chap, verse)
        
        orig_dir = 'data_hebrew' if b_id <= 39 else 'data_greek'
        orig_text = load_verse_text(orig_dir, book_ko, chap, verse)

        results.append({
            'reference': f"{book_ko} {chap}:{verse}",
            'krv': krv_text,
            'original': orig_text
        })

    return {
        'strongs_id': strongs_id,
        'total_count': len(hits),
        'elapsed_ms': round(elapsed_ms, 2),
        'results': results
    }

if __name__ == '__main__':
    query = sys.argv[1] if len(sys.argv) > 1 else 'H1254'
    limit = int(sys.argv[2]) if len(sys.argv) > 2 else 5

    res = search_strongs(query, max_results=limit)

    print(f"=== 스트롱코드 [{res['strongs_id']}] 검색 결과 ===")
    print(f"총 검색된 구절 수: {res['total_count']}개 (검색 소요 시간: {res['elapsed_ms']}ms)\n")

    for i, item in enumerate(res['results'], 1):
        print(f"[{i}] {item['reference']}")
        print(f"  - 개역한글: {item['krv']}")
        print(f"  - 원문:     {item['original']}\n")
