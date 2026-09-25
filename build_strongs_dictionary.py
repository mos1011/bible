import urllib.request
import json
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
INDEX_FILE = os.path.join(BASE_DIR, 'strongs_index.json')
DICT_FILE = os.path.join(BASE_DIR, 'strongs_dictionary.json')
KR_MAP_FILE = os.path.join(BASE_DIR, 'korean_strongs_map.json')

# Full Bible Keyword Mapping Array (From app.js & Lexicon entries)
BIBLE_KEYWORD_MAP = [
  { "kr": ["하나님", "신"], "he": ["אלהים", "אל", "אלוה"], "gr": ["θεος", "θεου", "θεον", "θεω"], "strongs": ["H430", "H410", "G2316"], "pron_he": "엘로힘 / 알", "pron_gr": "테오스", "mean": "하나님, 창조주, 신" },
  { "kr": ["여호와", "주", "야훼"], "he": ["יהוה", "יה", "אדון", "אדני"], "gr": ["κυριος", "κυριου", "κυριον"], "strongs": ["H3068", "H136", "G2962"], "pron_he": "야훼 / 아도나이", "pron_gr": "키리오스", "mean": "여호와, 주님, 주인" },
  { "kr": ["태초", "시작"], "he": ["ראשית", "בראשית", "תחלה"], "gr": ["αρχη", "αρχης", "αρχην"], "strongs": ["H7225", "H8462", "G746"], "pron_he": "레시트", "pron_gr": "아르케", "mean": "태초, 시작, 근원" },
  { "kr": ["창조", "지으", "만드"], "he": ["ברא", "עשה", "יצר"], "gr": ["κτιζω", "ποιεω"], "strongs": ["H1254", "H6213", "H3335", "G2936"], "pron_he": "바라 / 아사", "pron_gr": "크티조", "mean": "창조하다, 지으시다, 만들다" },
  { "kr": ["빛", "광명"], "he": ["אור", "מאור"], "gr": ["φως", "φωτος"], "strongs": ["H216", "H215", "G5457"], "pron_he": "오르", "pron_gr": "포스", "mean": "빛, 광명, 햇빛" },
  { "kr": ["어두움", "흑암", "어둠"], "he": ["חשך", "אפלה"], "gr": ["σκοτος", "σκοτια"], "strongs": ["H2822", "G4655", "G4653"], "pron_he": "호셰크", "pron_gr": "스코토스", "mean": "어두움, 흑암, 어둠" },
  { "kr": ["하늘", "궁창"], "he": ["שמים", "רקיע"], "gr": ["ουρανος", "ουρανου"], "strongs": ["H8064", "H7549", "G3772"], "pron_he": "샤마임", "pron_gr": "우라노스", "mean": "하늘, 궁창, 공중" },
  { "kr": ["땅", "지면", "흙"], "he": ["ארץ", "אדמה", "עפר"], "gr": ["γη", "γης"], "strongs": ["H776", "H127", "H6083", "G1093"], "pron_he": "에레츠", "pron_gr": "게", "mean": "땅, 지면, 흙, 세상" },
  { "kr": ["물", "바다", "강"], "he": ["מים", "ים", "נהר"], "gr": ["υδωρ", "θαλασσα", "ποταμος"], "strongs": ["H4325", "H3220", "H5104", "G5204", "G2281"], "pron_he": "마임", "pron_gr": "휘도르", "mean": "물, 바다, 강" },
  { "kr": ["말씀", "도", "명"], "he": ["דבר", "אמר", "אמרה"], "gr": ["λογος", "ρημα"], "strongs": ["H1697", "H559", "G3056", "G4487"], "pron_he": "다바르 / 아마르", "pron_gr": "로고스 / 레마", "mean": "말씀, 도, 진리" },
  { "kr": ["사랑", "인자", "자비"], "he": ["אהבה", "אהב", "חסד", "רחמים"], "gr": ["αγαπη", "αγαπαω", "ελεος"], "strongs": ["H157", "H2617", "H7356", "G26", "G25", "G1656"], "pron_he": "헤세드 / 아하브", "pron_gr": "아가페", "mean": "사랑, 인자, 자비, 은혜" },
  { "kr": ["믿음", "신앙"], "he": ["אמונה", "אמן"], "gr": ["πιστις", "πιστευω", "πιστος"], "strongs": ["H530", "H539", "G4102", "G4100", "G4103"], "pron_he": "에무나", "pron_gr": "피스티스", "mean": "믿음, 신앙, 확신" },
  { "kr": ["은혜", "은총"], "he": ["חן", "חסד"], "gr": ["χαρις"], "strongs": ["H2580", "H2617", "G5485"], "pron_he": "헨 / 헤세드", "pron_gr": "카리스", "mean": "은혜, 은총, 카리스" },
  { "kr": ["평강", "평화", "화평"], "he": ["שלום", "שלם"], "gr": ["ειρηνη"], "strongs": ["H7965", "G1515"], "pron_he": "샬롬", "pron_gr": "에이레네", "mean": "평강, 평화, 안념" },
  { "kr": ["생명", "영생", "살"], "he": ["חיים", "חי", "חיה"], "gr": ["ζωη", "ζιν"], "strongs": ["H2416", "H2421", "G2222"], "pron_he": "하이 / 하임", "pron_gr": "조에", "mean": "생명, 영생, 삶" },
  { "kr": ["구원", "구속"], "he": ["ישועה", "ישע", "גאל"], "gr": ["σωτηρια", "σωζω"], "strongs": ["H3444", "H3467", "H1350", "G4991", "G4982"], "pron_he": "예슈아", "pron_gr": "소테리아", "mean": "구원, 구속, 해방" },
  { "kr": ["의", "의인"], "he": ["צדק", "צדקה", "צדיק"], "gr": ["δικαιοσυνη", "δικαιος"], "strongs": ["H6664", "H6666", "H6662", "G1343", "G1342"], "pron_he": "체덱", "pron_gr": "디카이오수네", "mean": "의, 의로움, 공의" },
  { "kr": ["영", "성령", "신", "바람"], "he": ["רוח"], "gr": ["πνευμα", "πνευματος"], "strongs": ["H7307", "G4151"], "pron_he": "루아흐", "pron_gr": "프네우마", "mean": "영, 성령, 바람, 호흡" },
  { "kr": ["거룩", "성"], "he": ["קדש", "קדוש"], "gr": ["αγιος", "αγιωσυνη"], "strongs": ["H6944", "H6918", "G40"], "pron_he": "코데시", "pron_gr": "하기오스", "mean": "거룩, 성결, 구별됨" },
  { "kr": ["죄", "허물", "악"], "he": ["חטאת", "חטא", "פשע", "רע"], "gr": ["αμαρτια", "πονηρος"], "strongs": ["H2403", "H6588", "H7451", "G266"], "pron_he": "하타트", "pron_gr": "하마르티아", "mean": "죄, 허물, 과오" },
  { "kr": ["회개"], "he": ["שוב", "נחם"], "gr": ["μετανοια", "μετανοεω"], "strongs": ["H7725", "G3341"], "pron_he": "슈브", "pron_gr": "메타노이아", "mean": "회개, 돌이킴" },
  { "kr": ["소망"], "he": ["תקוה", "יחל"], "gr": ["ελπις"], "strongs": ["H8615", "G1680"], "pron_he": "티크바", "pron_gr": "엘피스", "mean": "소망, 희망, 바람" },
  { "kr": ["기쁨", "즐거움"], "he": ["שמחה", "שמח"], "gr": ["χαρα", "χαιρω"], "strongs": ["H8057", "G5479"], "pron_he": "심하", "pron_gr": "카라", "mean": "기쁨, 즐거움, 희락" },
  { "kr": ["찬송", "찬양", "영광"], "he": ["תהלה", "הלל", "כבוד"], "gr": ["δοξα", "αινειν"], "strongs": ["H8416", "H1984", "H3519", "G1391"], "pron_he": "테힐라 / 카보드", "pron_gr": "독사", "mean": "찬송, 영광, 찬양" },
  { "kr": ["진리", "참"], "he": ["אמת", "אמונה"], "gr": ["αληθεια", "αληθης"], "strongs": ["H571", "G225"], "pron_he": "에메트", "pron_gr": "알레테이아", "mean": "진리, 참, 실재" },
  { "kr": ["지혜", "명철"], "he": ["חכמה", "בינה"], "gr": ["σοφια"], "strongs": ["H2451", "H998", "G4678"], "pron_he": "호크마", "pron_gr": "소피아", "mean": "지혜, 명철" },
  { "kr": ["지식", "알"], "he": ["דעת", "ידע"], "gr": ["γνωσις", "γινωσκω"], "strongs": ["H1847", "H3045", "G1108"], "pron_he": "다아트", "pron_gr": "그노시스", "mean": "지식, 알다" },
  { "kr": ["복", "축복"], "he": ["ברך", "ברכה", "אשר"], "gr": ["ευλογια", "μακαριος"], "strongs": ["H1288", "H1293", "H835", "G2129", "G3107"], "pron_he": "베라카 / 바루크", "pron_gr": "율로기아 / 마카리오스", "mean": "복, 축복, 복되다" },
  { "kr": ["심판", "재판"], "he": ["משפט", "שפט"], "gr": ["κρισις", "κρινω"], "strongs": ["H4941", "H8199", "G2920"], "pron_he": "미슈파트", "pron_gr": "크리시스", "mean": "심판, 재판, 판결" },
  { "kr": ["언약", "약속"], "he": ["ברית"], "gr": ["διαθηκη", "επαγγελια"], "strongs": ["H1285", "G1242", "G1860"], "pron_he": "베리트", "pron_gr": "디아테케", "mean": "언약, 약속" },
  { "kr": ["예수", "예수님"], "he": ["ישוע"], "gr": ["ιησους", "ιησου", "ιησουν"], "strongs": ["H3442", "G2424"], "pron_he": "예슈아", "pron_gr": "예수스", "mean": "예수, 구원자" },
  { "kr": ["그리스도", "메시아"], "he": ["משיח"], "gr": ["χριστος", "χριστου", "χριστον"], "strongs": ["H4899", "G5547"], "pron_he": "마시아흐", "pron_gr": "크리스토스", "mean": "그리스도, 메시아" },
  { "kr": ["아담", "사람", "인간"], "he": ["אדם", "איש"], "gr": ["ανθρωπος", "ανθρωπου"], "strongs": ["H120", "H376", "G444"], "pron_he": "아담 / 이쉬", "pron_gr": "안트로포스", "mean": "아담, 사람, 인간" },
  { "kr": ["여자", "아내"], "he": ["אשה"], "gr": ["γυνη", "γυναικος"], "strongs": ["H802", "G1135"], "pron_he": "이샤", "pron_gr": "구네", "mean": "여자, 아내, 여인" },
  { "kr": ["남편", "남자"], "he": ["איש", "בעל"], "gr": ["ανηρ", "ανδρος"], "strongs": ["H376", "H1167", "G435"], "pron_he": "이쉬 / 바알", "pron_gr": "아네르", "mean": "남편, 남자" },
  { "kr": ["아버지", "아비"], "he": ["אב", "אבות"], "gr": ["πατηρ", "πατρος"], "strongs": ["H1", "G3962"], "pron_he": "아브", "pron_gr": "파테르", "mean": "아버지, 아비" },
  { "kr": ["어머니", "어미"], "he": ["אם"], "gr": ["μητηρ", "μητρος"], "strongs": ["H517", "G3384"], "pron_he": "엠", "pron_gr": "메테르", "mean": "어머니, 어미" },
  { "kr": ["아들", "자식"], "he": ["בן", "בנים"], "gr": ["υιος", "υιου", "τεκνον"], "strongs": ["H1121", "G5207"], "pron_he": "벤", "pron_gr": "휘이오스", "mean": "아들, 자손" },
  { "kr": ["딸"], "he": ["בת", "בנות"], "gr": ["θυγατηρ"], "strongs": ["H1323", "G2364"], "pron_he": "바트", "pron_gr": "투가테르", "mean": "딸" },
  { "kr": ["형제", "아우"], "he": ["אח", "אחים"], "gr": ["αδελφος"], "strongs": ["H251", "G80"], "pron_he": "아흐", "pron_gr": "아델포스", "mean": "형제, 아우" },
  { "kr": ["왕", "임금"], "he": ["מלך", "מלכים"], "gr": ["βασιλευς"], "strongs": ["H4428", "G935"], "pron_he": "메렉", "pron_gr": "바실레우스", "mean": "왕, 임금" },
  { "kr": ["제사장"], "he": ["כהן", "כהנים"], "gr": ["ιερευς"], "strongs": ["H3548", "G2409"], "pron_he": "코헨", "pron_gr": "히에레우스", "mean": "제사장" },
  { "kr": ["선지자", "예언자"], "he": ["נביא"], "gr": ["προφητης"], "strongs": ["H5030", "G4396"], "pron_he": "나비", "pron_gr": "프로페테스", "mean": "선지자, 예언자" },
  { "kr": ["사도"], "he": [], "gr": ["αποστολος"], "strongs": ["G652"], "pron_he": "-", "pron_gr": "아포스톨로스", "mean": "사도, 보내심을 받은 자" },
  { "kr": ["제자"], "he": [], "gr": ["μαθητης"], "strongs": ["G3101"], "pron_he": "-", "pron_gr": "마테테스", "mean": "제자, 문도" },
  { "kr": ["종", "하인"], "he": ["עבד", "עבדים"], "gr": ["δουλος"], "strongs": ["H5650", "G1401"], "pron_he": "에베드", "pron_gr": "둘로스", "mean": "종, 하인, 종복" },
  { "kr": ["백성", "민족"], "he": ["עם", "גוי"], "gr": ["λαος", "εθνος"], "strongs": ["H5971", "H1471", "G2992", "G1484"], "pron_he": "암 / 고이", "pron_gr": "라오스 / 에트노스", "mean": "백성, 민족, 이방인" },
  { "kr": ["마음", "중심"], "he": ["לב", "לבב", "קרב"], "gr": ["карδια", "карδιας"], "strongs": ["H3820", "H3824", "G2588"], "pron_he": "레브", "pron_gr": "카르디아", "mean": "마음, 중심" },
  { "kr": ["눈", "안"], "he": ["עין", "עינים"], "gr": ["οφθαλμος"], "strongs": ["H5869", "G3788"], "pron_he": "아이인", "pron_gr": "오프탈모스", "mean": "눈, 안목" },
  { "kr": ["손"], "he": ["יד", "ידים", "כף"], "gr": ["χειρ", "χειρος"], "strongs": ["H3027", "H3709", "G5495"], "pron_he": "야드", "pron_gr": "케이르", "mean": "손, 권능" },
  { "kr": ["몸", "육체", "살"], "he": ["בשר", "גוף"], "gr": ["σωμα", "σαρξ"], "strongs": ["H1320", "G4983", "G4561"], "pron_he": "바사르", "pron_gr": "소마 / 사르크스", "mean": "몸, 육체, 육신" },
  { "kr": ["산", "언덕"], "he": ["הר", "הרים"], "gr": ["ορος"], "strongs": ["H2022", "G3735"], "pron_he": "하르", "pron_gr": "오로스", "mean": "산, 언덕" },
  { "kr": ["길"], "he": ["דרך", "אורח"], "gr": ["οδος"], "strongs": ["H1870", "G3598"], "pron_he": "데레크", "pron_gr": "호도스", "mean": "길, 도로, 행로" },
  { "kr": ["집", "성전"], "he": ["בית", "היכל", "משכן"], "gr": ["οικος", "ναος", "ιερον"], "strongs": ["H1004", "H1964", "G3624", "G3485"], "pron_he": "베이트", "pron_gr": "오이코스 / 나오스", "mean": "집, 성전, 처소" },
  { "kr": ["나무", "실과", "열매"], "he": ["עץ", "פרי"], "gr": ["δενδρον", "καρπος"], "strongs": ["H6086", "H6529", "G1265", "G2590"], "pron_he": "에츠 / 페리", "pron_gr": "덴드론 / 카르포스", "mean": "나무, 열매, 결실" },
  { "kr": ["풀", "채소"], "he": ["דשא", "עשב"], "gr": ["χορτος"], "strongs": ["H1877", "H6212", "G5528"], "pron_he": "데셰", "pron_gr": "콜토스", "mean": "풀, 채소" },
  { "kr": ["짐승", "육축", "새"], "he": ["בהמה", "חיה", "עוף"], "gr": ["θηριον", "πετεινον"], "strongs": ["H929", "H2416", "H5775", "G2342", "G4071"], "pron_he": "베헤마", "pron_gr": "테리온", "mean": "짐승, 동물, 새" },
  { "kr": ["밤", "저녁"], "he": ["לילה", "ערב"], "gr": ["νυξ", "οψια"], "strongs": ["H3915", "H6153", "G3571"], "pron_he": "라이라 / 에레브", "pron_gr": "뉘크스", "mean": "밤, 저녁" },
  { "kr": ["아침", "낮"], "he": ["בקר", "יומם"], "gr": ["πρωι", "ημερα"], "strongs": ["H1242", "G4404"], "pron_he": "보케르", "pron_gr": "프로이", "mean": "아침, 낮" },
  { "kr": ["이름"], "he": ["שם", "שמות"], "gr": ["ονομα"], "strongs": ["H8034", "G3686"], "pron_he": "쉠", "pron_gr": "오노마", "mean": "이름, 명성" },
  { "kr": ["일", "노역", "행위"], "he": ["מלאכה", "מעשה", "עבודה"], "gr": ["εργον"], "strongs": ["H4399", "H4639", "G2041"], "pron_he": "멜라카 / 마아세", "pron_gr": "에르고논", "mean": "일, 행위, 사역" },
  { "kr": ["힘", "능력", "권세"], "he": ["כח", "חיל", "עז"], "gr": ["δυναμις", "εξουσια"], "strongs": ["H3581", "H2428", "G1411", "G1849"], "pron_he": "코아흐 / 하일", "pron_gr": "듀나미스 / 엑수시아", "mean": "힘, 능력, 권세" },
  { "kr": ["무화과"], "he": ["תאנה"], "gr": ["συκη"], "strongs": ["H8384", "G4808"], "pron_he": "테에나", "pron_gr": "스케", "mean": "무화과, 무화과나무" },
  { "kr": ["포도주", "포도나무"], "he": ["יין", "גפן"], "gr": ["οινος", "αμπελος"], "strongs": ["H3196", "H1612", "G3631", "G288"], "pron_he": "야인 / 게펜", "pron_gr": "오이노스", "mean": "포도주, 포도나무" },
  { "kr": ["방주", "배"], "he": ["תבה", "אניה"], "gr": ["κιβωτος", "πλοιον"], "strongs": ["H8392", "H591", "G2787", "G4143"], "pron_he": "테바", "pron_gr": "키보토스", "mean": "방주, 배" },
  { "kr": ["뱀", "간교"], "he": ["נחש", "ערום"], "gr": ["οφις"], "strongs": ["H5175", "H6175", "G3789"], "pron_he": "나하쉬", "pron_gr": "오피스", "mean": "뱀, 간교함" },
  { "kr": ["불", "화염"], "he": ["אש", "להבה"], "gr": ["πυρ"], "strongs": ["H784", "H3852", "G4442"], "pron_he": "에쉬", "pron_gr": "퓌르", "mean": "불, 화염" }
]

def fetch_js_dict_clean(url):
    print(f"Downloading {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        content = resp.read().decode('utf-8')
    start_idx = content.find('{')
    end_idx = content.rfind('}')
    if start_idx != -1 and end_idx != -1:
        json_str = content[start_idx:end_idx+1]
        return json.loads(json_str)
    raise ValueError("Failed to extract JSON object")

def build_all():
    hebrew_url = 'https://raw.githubusercontent.com/openscriptures/strongs/master/hebrew/strongs-hebrew-dictionary.js'
    greek_url = 'https://raw.githubusercontent.com/openscriptures/strongs/master/greek/strongs-greek-dictionary.js'

    hebrew_dict = fetch_js_dict_clean(hebrew_url)
    greek_dict = fetch_js_dict_clean(greek_url)

    combined = {}
    kr_to_strongs = {}

    def add_kr_map(kr_word, s_id):
        if not kr_word: return
        kr_clean = kr_word.strip()
        if kr_clean not in kr_to_strongs:
            kr_to_strongs[kr_clean] = []
        if s_id not in kr_to_strongs[kr_clean]:
            kr_to_strongs[kr_clean].append(s_id)

    # 1. Load entries from BIBLE_KEYWORD_MAP
    keymap_info = {}
    for entry in BIBLE_KEYWORD_MAP:
        s_list = entry.get('strongs', [])
        kr_words = entry.get('kr', [])
        mean = entry.get('mean', '')
        p_he = entry.get('pron_he', '')
        p_gr = entry.get('pron_gr', '')

        for s_id in s_list:
            s_id_u = s_id.upper()
            if s_id_u not in keymap_info:
                keymap_info[s_id_u] = {
                    'kr_keywords': kr_words,
                    'kr_meaning': mean,
                    'pron_kr': p_he if s_id_u.startswith('H') else p_gr
                }
            for kw in kr_words:
                add_kr_map(kw, s_id_u)

    # 2. Process Hebrew Dictionary
    for code, info in hebrew_dict.items():
        s_id = code.upper()
        lemma = info.get('lemma', '')
        translit = info.get('translit', '')
        strongs_def = info.get('strongs_def', info.get('kjv_def', ''))
        kjv_def = info.get('kjv_def', '')

        pron_kr = translit
        km = keymap_info.get(s_id, {})
        kr_meaning = km.get('kr_meaning', strongs_def or kjv_def)
        if km.get('pron_kr'):
            pron_kr = km['pron_kr']
        kr_keywords = km.get('kr_keywords', [])

        combined[s_id] = {
            'strongs_id': s_id,
            'lang': 'hebrew',
            'lemma': lemma,
            'translit': translit,
            'pron_kr': pron_kr,
            'strongs_def': strongs_def,
            'kjv_def': kjv_def,
            'kr_meaning': kr_meaning,
            'kr_keywords': kr_keywords
        }

    # 3. Process Greek Dictionary
    for code, info in greek_dict.items():
        s_id = code.upper()
        lemma = info.get('lemma', '')
        translit = info.get('translit', '')
        strongs_def = info.get('strongs_def', info.get('kjv_def', ''))
        kjv_def = info.get('kjv_def', '')

        pron_kr = translit
        km = keymap_info.get(s_id, {})
        kr_meaning = km.get('kr_meaning', strongs_def or kjv_def)
        if km.get('pron_kr'):
            pron_kr = km['pron_kr']
        kr_keywords = km.get('kr_keywords', [])

        combined[s_id] = {
            'strongs_id': s_id,
            'lang': 'greek',
            'lemma': lemma,
            'translit': translit,
            'pron_kr': pron_kr,
            'strongs_def': strongs_def,
            'kjv_def': kjv_def,
            'kr_meaning': kr_meaning,
            'kr_keywords': kr_keywords
        }

    print(f"Total entries in combined dictionary: {len(combined)}")
    print(f"Total mapped Korean terms: {len(kr_to_strongs)}")

    with open(DICT_FILE, 'w', encoding='utf-8') as f:
        json.dump(combined, f, ensure_ascii=False, indent=2)

    with open(KR_MAP_FILE, 'w', encoding='utf-8') as f:
        json.dump(kr_to_strongs, f, ensure_ascii=False, indent=2)

    print("Successfully updated strongs_dictionary.json and korean_strongs_map.json!")

if __name__ == '__main__':
    build_all()
