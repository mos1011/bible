import sys, os, json, re, urllib.request, collections, bisect
}

def build_index():
    print("Downloading KJV Strong's dataset...")
    url = 'https://bolls.life/static/translations/KJV.json'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        kjv_data = json.loads(resp.read().decode('utf-8'))
        
    print(f"Total verse records downloaded: {len(kjv_data)}")
    
    strongs_index = {}
    pattern = re.compile(r'<S>(\d+)</S>')
    
    for item in kjv_data:
        b_id = item['book']
        chap = item['chapter']
        verse = item['verse']
        text = item['text']
        
        matches = pattern.findall(text)
        prefix = 'H' if b_id <= 39 else 'G'
        
        for tag in set(matches):
            s_id = f"{prefix}{tag}"
            if s_id not in strongs_index:
                strongs_index[s_id] = []
                
            strongs_index[s_id].append({
                'book': b_id,
                'book_ko': BOOK_NAMES.get(b_id, str(b_id)),
                'chapter': chap,
                'verse': verse
            })
            
    print(f"Saving Strong's index with {len(strongs_index)} unique keys to {INDEX_FILE}...")
    with open(INDEX_FILE, 'w', encoding='utf-8') as f:
        json.dump(strongs_index, f, ensure_ascii=False)
        
    print("Strong's index build complete!")

if __name__ == '__main__':
    build_index()
