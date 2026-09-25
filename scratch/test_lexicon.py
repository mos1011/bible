import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

with open(os.path.join(BASE_DIR, 'korean_strongs_map.json'), 'r', encoding='utf-8') as f:
    kr_map = json.load(f)

with open(os.path.join(BASE_DIR, 'strongs_dictionary.json'), 'r', encoding='utf-8') as f:
    s_dict = json.load(f)

test_terms = ['하나님', '태초', '창조', '사랑', '빛', '예수', '말씀', '은혜', '평강', '생명']
for term in test_terms:
    s_ids = kr_map.get(term, [])
    print(f"=== [{term}] ===")
    print("  Strong IDs:", s_ids)
    for s_id in s_ids:
        item = s_dict.get(s_id, {})
        print(f"   - {s_id}: Lemma={item.get('lemma')}, Pron={item.get('pron_kr')}, Meaning={item.get('kr_meaning')}")
    print()
