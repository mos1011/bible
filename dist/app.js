// Master 66 Books Dictionary
const BOOKS_MASTER = [
  { id: 1, name: "창세기", name_en: "Genesis", chapters: 50 },
  { id: 2, name: "출애굽기", name_en: "Exodus", chapters: 40 },
  { id: 3, name: "레위기", name_en: "Leviticus", chapters: 27 },
  { id: 4, name: "민수기", name_en: "Numbers", chapters: 36 },
  { id: 5, name: "신명기", name_en: "Deuteronomy", chapters: 34 },
  { id: 6, name: "여호수아", name_en: "Joshua", chapters: 24 },
  { id: 7, name: "사사기", name_en: "Judges", chapters: 21 },
  { id: 8, name: "룻기", name_en: "Ruth", chapters: 4 },
  { id: 9, name: "사무엘상", name_en: "1 Samuel", chapters: 31 },
  { id: 10, name: "사무엘하", name_en: "2 Samuel", chapters: 24 },
  { id: 11, name: "열왕기상", name_en: "1 Kings", chapters: 22 },
  { id: 12, name: "열왕기하", name_en: "2 Kings", chapters: 25 },
  { id: 13, name: "역대상", name_en: "1 Chronicles", chapters: 29 },
  { id: 14, name: "역대하", name_en: "2 Chronicles", chapters: 36 },
  { id: 15, name: "에스라", name_en: "Ezra", chapters: 10 },
  { id: 16, name: "느헤미야", name_en: "Nehemiah", chapters: 13 },
  { id: 17, name: "에스더", name_en: "Esther", chapters: 10 },
  { id: 18, name: "욥기", name_en: "Job", chapters: 42 },
  { id: 19, name: "시편", name_en: "Psalms", chapters: 150 },
  { id: 20, name: "잠언", name_en: "Proverbs", chapters: 31 },
  { id: 21, name: "전도서", name_en: "Ecclesiastes", chapters: 12 },
  { id: 22, name: "아가", name_en: "Song Of Solomon", chapters: 8 },
  { id: 23, name: "이사야", name_en: "Isaiah", chapters: 66 },
  { id: 24, name: "예레미야", name_en: "Jeremiah", chapters: 52 },
  { id: 25, name: "예레미야애가", name_en: "Lamentations", chapters: 5 },
  { id: 26, name: "에스겔", name_en: "Ezekiel", chapters: 48 },
  { id: 27, name: "다니엘", name_en: "Daniel", chapters: 12 },
  { id: 28, name: "호세아", name_en: "Hosea", chapters: 14 },
  { id: 29, name: "요엘", name_en: "Joel", chapters: 3 },
  { id: 30, name: "아모스", name_en: "Amos", chapters: 9 },
  { id: 31, name: "오바댜", name_en: "Obadiah", chapters: 1 },
  { id: 32, name: "요나", name_en: "Jonah", chapters: 4 },
  { id: 33, name: "미가", name_en: "Micah", chapters: 7 },
  { id: 34, name: "나훔", name_en: "Nahum", chapters: 3 },
  { id: 35, name: "하박국", name_en: "Habakkuk", chapters: 3 },
  { id: 36, name: "스바냐", name_en: "Zephaniah", chapters: 3 },
  { id: 37, name: "학개", name_en: "Haggai", chapters: 2 },
  { id: 38, name: "스가랴", name_en: "Zechariah", chapters: 14 },
  { id: 39, name: "말라기", name_en: "Malachi", chapters: 4 },
  { id: 40, name: "마태복음", name_en: "Matthew", chapters: 28 },
  { id: 41, name: "마가복음", name_en: "Mark", chapters: 16 },
  { id: 42, name: "누가복음", name_en: "Luke", chapters: 24 },
  { id: 43, name: "요한복음", name_en: "John", chapters: 21 },
  { id: 44, name: "사도행전", name_en: "Acts", chapters: 28 },
  { id: 45, name: "로마서", name_en: "Romans", chapters: 16 },
  { id: 46, name: "고린도전서", name_en: "1 Corinthians", chapters: 16 },
  { id: 47, name: "고린도후서", name_en: "2 Corinthians", chapters: 13 },
  { id: 48, name: "갈라디아서", name_en: "Galatians", chapters: 6 },
  { id: 49, name: "에베소서", name_en: "Ephesians", chapters: 6 },
  { id: 50, name: "빌립보서", name_en: "Philippians", chapters: 4 },
  { id: 51, name: "골로새서", name_en: "Colossians", chapters: 4 },
  { id: 52, name: "데살로니가전서", name_en: "1 Thessalonians", chapters: 5 },
  { id: 53, name: "데살로니가후서", name_en: "2 Thessalonians", chapters: 3 },
  { id: 54, name: "디모데전서", name_en: "1 Timothy", chapters: 6 },
  { id: 55, name: "디모데후서", name_en: "2 Timothy", chapters: 4 },
  { id: 56, name: "디도서", name_en: "Titus", chapters: 3 },
  { id: 57, name: "빌레몬서", name_en: "Philemon", chapters: 1 },
  { id: 58, name: "히브리서", name_en: "Hebrews", chapters: 13 },
  { id: 59, name: "야고보서", name_en: "James", chapters: 5 },
  { id: 60, name: "베드로전서", name_en: "1 Peter", chapters: 5 },
  { id: 61, name: "베드로후서", name_en: "2 Peter", chapters: 3 },
  { id: 62, name: "요한1서", name_en: "1 John", chapters: 5 },
  { id: 63, name: "요한2서", name_en: "2 John", chapters: 1 },
  { id: 64, name: "요한3서", name_en: "3 John", chapters: 1 },
  { id: 65, name: "유다서", name_en: "Jude", chapters: 1 },
  { id: 66, name: "요한계시록", name_en: "Revelation", chapters: 22 }
];

// App State
let currentBookId = 1;
let currentBookName = "창세기";
let currentChapter = 1;

let currentMode = "single"; // 'single' | 'dual'
let usageMode = "reading"; // 'reading' | 'worship'

let leftVersion = "data"; // KRV
let rightVersion = "data_hebrew"; // WLC / TR

let fontSizePercent = 100;
let strongsIndexData = null;
let strongsDictionaryData = null;
let koreanStrongsMapData = null;
let loadedDataCache = {};

// Korean Particle Stemmer Engine (Separating particles like 이/가/은/는/을/를/에/의/로/와/과 from nouns)
function separateKoreanParticles(word) {
  if (!word || typeof word !== 'string') return { stem: "", particle: "", original: word };

  const clean = word.replace(/[^\uAC00-\uD7A3]/g, "").trim();
  if (!clean || clean.length <= 1) {
    return { stem: clean, particle: "", original: word };
  }

  // Preserve core Bible nouns from over-stripping
  const EXCEPTION_NOUNS = new Set([
    "하나님", "여호와", "예수", "그리스도", "태초", "창조", "어두움", "광명", "궁창", "지면",
    "바다", "은혜", "평강", "생명", "구원", "회개", "소망", "기쁨", "찬송", "진리", "지혜",
    "지식", "축복", "심판", "언약", "아담", "사람", "선지자", "제사장", "사도", "제자",
    "백성", "나무", "짐승", "저녁", "아침", "이름", "능력", "무화과", "포도주", "방주",
    "화염", "성령", "천국", "십자가", "부활", "믿음", "율법", "기도", "어둠", "마음"
  ]);

  if (EXCEPTION_NOUNS.has(clean)) {
    return { stem: clean, particle: "", original: word };
  }

  // Particles ordered by length (longest match first)
  const PARTICLE_PATTERNS = [
    "에서부터", "으로부터", "이야말로",
    "에게서", "로부터", "에게는", "에게도", "에서는", "에서도", "야말로", "으로서", "로써도",
    "으로", "로서", "로써", "까지", "부터", "처럼", "같이", "마다", "밖에", "더러", "보다", "따라",
    "이나", "에도", "에는", "에만", "에서", "에게", "한테", "조차", "마저", "치고", "께서",
    "들과", "들이", "들을", "들의", "들에게", "들로", "들에서",
    "이", "가", "은", "는", "을", "를", "에", "의", "로", "와", "과", "도", "만", "나", "아", "야", "들"
  ];

  for (const particle of PARTICLE_PATTERNS) {
    if (clean.endsWith(particle) && clean.length > particle.length) {
      const stem = clean.substring(0, clean.length - particle.length);
      if (stem.length >= 1) {
        return { stem, particle, original: word };
      }
    }
  }

  return { stem: clean, particle: "", original: word };
}

// Available Translations
const VERSIONS = [
  { id: "data", name: "개역한글 (KRV)", lang: "ko" },
  { id: "data_niv", name: "영어 (NIV)", lang: "en" },
  { id: "data_hebrew", name: "히브리어 (WLC - 구약)", lang: "he" },
  { id: "data_greek", name: "헬라어 (TR - 신약)", lang: "el" },
  { id: "data_greek_sblgnt", name: "헬라어 (SBLGNT - 신약)", lang: "el" }
];

// Unicode Helper Functions
function stripNikkud(text) {
  return text ? text.replace(/[\u0591-\u05C7]/g, "") : "";
}

function stripGreekAccents(text) {
  return text ? text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
}

// Helper function to strip Hebrew prefix letters (ו, ב, ל, כ, מ, ה, ש) for root matching
function stripHebrewPrefixes(text) {
  let clean = stripNikkud(text);
  if (!clean) return "";
  if (clean.length > 3 && clean[0] === 'ו') clean = clean.substring(1);
  if (clean.length > 3 && clean[0] === 'ה') clean = clean.substring(1);
  if (clean.length > 3 && 'בלכמ'.includes(clean[0])) clean = clean.substring(1);
  if (clean.length > 3 && clean[0] === 'ה') clean = clean.substring(1);
  return clean;
}

// Helper function to strip Greek case inflections for root matching
function stripGreekInflections(text) {
  let clean = stripGreekAccents(text);
  if (!clean) return "";
  return clean.replace(/(ος|ου|ων|ας|αν|ης|ην|οι|ους|ον|εσ|α|ῳ|ῃ)$/gi, "");
}

// Comprehensive Dictionary for keyword matching across Korean, Hebrew, Greek, and Strong's codes
const BIBLE_KEYWORD_MAP = [
  { kr: ["하나님", "신"], he: ["אלהים", "אל", "אלוה"], gr: ["θεος", "θεου", "θεον", "θεω"], strongs: ["H430", "H410", "G2316"] },
  { kr: ["여호와", "주", "야훼"], he: ["יהוה", "יה", "אדון", "אדני"], gr: ["κυριος", "κυριου", "κυριον"], strongs: ["H3068", "H136", "G2962"] },
  { kr: ["태초", "시작"], he: ["ראשית", "בראשית", "תחלה"], gr: ["αρχη", "αρχης", "αρχην"], strongs: ["H7225", "H8462", "G746"] },
  { kr: ["창조", "지으", "만드"], he: ["ברא", "עשה", "יצר"], gr: ["κτιζω", "ποιεω"], strongs: ["H1254", "H6213", "H3335", "G2936"] },
  { kr: ["빛", "광명"], he: ["אור", "מאור"], gr: ["φως", "φωτος"], strongs: ["H216", "H215", "G5457"] },
  { kr: ["어두움", "흑암", "어둠"], he: ["חשך", "אפלה"], gr: ["σκοτος", "σκοτια"], strongs: ["H2822", "G4655", "G4653"] },
  { kr: ["하늘", "궁창"], he: ["שמים", "רקיע"], gr: ["ουρανος", "ουρανου"], strongs: ["H8064", "H7549", "G3772"] },
  { kr: ["땅", "지면", "흙"], he: ["ארץ", "אדמה", "עפר"], gr: ["γη", "γης"], strongs: ["H776", "H127", "H6083", "G1093"] },
  { kr: ["물", "바다", "강"], he: ["מים", "ים", "נהר"], gr: ["υδωρ", "θαλασσα", "ποταμος"], strongs: ["H4325", "H3220", "H5104", "G5204", "G2281"] },
  { kr: ["말씀", "도", "명"], he: ["דבר", "אמר", "אמרה"], gr: ["λογος", "ρημα"], strongs: ["H1697", "H559", "G3056", "G4487"] },
  { kr: ["사랑", "인자", "자비"], he: ["אהבה", "אהב", "חסד", "רחמים"], gr: ["αγαπη", "αγαπαω", "ελεος"], strongs: ["H157", "H2617", "H7356", "G26", "G25", "G1656"] },
  { kr: ["믿음", "신앙"], he: ["אמונה", "אמן"], gr: ["πιστις", "πιστευω", "πιστος"], strongs: ["H530", "H539", "G4102", "G4100", "G4103"] },
  { kr: ["은혜", "은총"], he: ["חן", "חסד"], gr: ["χαρις"], strongs: ["H2580", "H2617", "G5485"] },
  { kr: ["평강", "평화", "화평"], he: ["שלום", "שלם"], gr: ["ειρηνη"], strongs: ["H7965", "G1515"] },
  { kr: ["생명", "영생", "살"], he: ["חיים", "חי", "חיה"], gr: ["ζωη", "ζιν"], strongs: ["H2416", "H2421", "G2222"] },
  { kr: ["구원", "구속"], he: ["ישועה", "ישע", "גאל"], gr: ["σωτηρια", "σωζω"], strongs: ["H3444", "H3467", "H1350", "G4991", "G4982"] },
  { kr: ["의", "의인"], he: ["צדק", "צדקה", "צדיק"], gr: ["δικαιοσυνη", "δικαιος"], strongs: ["H6664", "H6666", "H6662", "G1343", "G1342"] },
  { kr: ["영", "성령", "신", "바람"], he: ["רוח"], gr: ["πνευμα", "πνευματος"], strongs: ["H7307", "G4151"] },
  { kr: ["거룩", "성"], he: ["קדש", "קדוש"], gr: ["αγιος", "αγιωσυνη"], strongs: ["H6944", "H6918", "G40"] },
  { kr: ["죄", "허물", "악"], he: ["חטאת", "חטא", "פשע", "רע"], gr: ["αμαρτια", "πονηρος"], strongs: ["H2403", "H6588", "H7451", "G266"] },
  { kr: ["회개"], he: ["שוב", "נחם"], gr: ["μετανοια", "μετανοεω"], strongs: ["H7725", "G3341"] },
  { kr: ["소망"], he: ["תקוה", "יחל"], gr: ["ελπις"], strongs: ["H8615", "G1680"] },
  { kr: ["기쁨", "즐거움"], he: ["שמחה", "שמח"], gr: ["χαρα", "χαιρω"], strongs: ["H8057", "G5479"] },
  { kr: ["찬송", "찬양", "영광"], he: ["תהלה", "הלל", "כבוד"], gr: ["δοξα", "αινειν"], strongs: ["H8416", "H1984", "H3519", "G1391"] },
  { kr: ["진리", "참"], he: ["אמת", "אמונה"], gr: ["αληθεια", "αληθης"], strongs: ["H571", "G225"] },
  { kr: ["지혜", "명철"], he: ["חכמה", "בינה"], gr: ["σοφια"], strongs: ["H2451", "H998", "G4678"] },
  { kr: ["지식", "알"], he: ["דעת", "ידע"], gr: ["γνωσις", "γινωσκω"], strongs: ["H1847", "H3045", "G1108"] },
  { kr: ["복", "축복"], he: ["ברך", "ברכה", "אשר"], gr: ["ευλογια", "μακαριος"], strongs: ["H1288", "H1293", "H835", "G2129", "G3107"] },
  { kr: ["심판", "재판"], he: ["משפט", "שפט"], gr: ["κρισις", "κρινω"], strongs: ["H4941", "H8199", "G2920"] },
  { kr: ["언약", "약속"], he: ["ברית"], gr: ["διαθηκη", "επαγγελια"], strongs: ["H1285", "G1242", "G1860"] },
  { kr: ["예수", "예수님"], he: ["ישוע"], gr: ["ιησους", "ιησου", "ιησουν"], strongs: ["H3442", "G2424"] },
  { kr: ["그리스도", "메시아"], he: ["משיח"], gr: ["χριστος", "χριστου", "χριστον"], strongs: ["H4899", "G5547"] },
  { kr: ["아담", "사람", "인간"], he: ["אדם", "איש"], gr: ["ανθρωπος", "ανθρωπου"], strongs: ["H120", "H376", "G444"] },
  { kr: ["여자", "아내"], he: ["אשה"], gr: ["γυνη", "γυναικος"], strongs: ["H802", "G1135"] },
  { kr: ["남편", "남자"], he: ["איש", "בעל"], gr: ["ανηρ", "ανδρος"], strongs: ["H376", "H1167", "G435"] },
  { kr: ["아버지", "아비"], he: ["אב", "אבות"], gr: ["πατηρ", "πατρος"], strongs: ["H1", "G3962"] },
  { kr: ["어머니", "어미"], he: ["אם"], gr: ["μητηρ", "μητρος"], strongs: ["H517", "G3384"] },
  { kr: ["아들", "자식"], he: ["בן", "בנים"], gr: ["υιος", "υιου", "τεκνον"], strongs: ["H1121", "G5207"] },
  { kr: ["딸"], he: ["בת", "בנות"], gr: ["θυγατηρ"], strongs: ["H1323", "G2364"] },
  { kr: ["형제", "아우"], he: ["אח", "אחים"], gr: ["αδελφος"], strongs: ["H251", "G80"] },
  { kr: ["왕", "임금"], he: ["מלך", "מלכים"], gr: ["βασιλευς"], strongs: ["H4428", "G935"] },
  { kr: ["제사장"], he: ["כהן", "כהנים"], gr: ["ιερευς"], strongs: ["H3548", "G2409"] },
  { kr: ["선지자", "예언자"], he: ["נביא"], gr: ["προφητης"], strongs: ["H5030", "G4396"] },
  { kr: ["사도"], he: [], gr: ["αποστολος"], strongs: ["G652"] },
  { kr: ["제자"], he: [], gr: ["μαθητης"], strongs: ["G3101"] },
  { kr: ["종", "하인"], he: ["עבד", "עבדים"], gr: ["δουλος"], strongs: ["H5650", "G1401"] },
  { kr: ["백성", "민족"], he: ["עם", "גוי"], gr: ["λαος", "εθνος"], strongs: ["H5971", "H1471", "G2992", "G1484"] },
  { kr: ["마음", "중심"], he: ["לב", "לבב", "קרב"], gr: ["карδια", "карδιας"], strongs: ["H3820", "H3824", "G2588"] },
  { kr: ["눈", "안"], he: ["עין", "עינים"], gr: ["οφθαλμος"], strongs: ["H5869", "G3788"] },
  { kr: ["손"], he: ["יד", "ידים", "כף"], gr: ["χειρ", "χειρος"], strongs: ["H3027", "H3709", "G5495"] },
  { kr: ["몸", "육체", "살"], he: ["בשר", "גוף"], gr: ["σωμα", "σαρξ"], strongs: ["H1320", "G4983", "G4561"] },
  { kr: ["산", "언덕"], he: ["הר", "הרים"], gr: ["ορος"], strongs: ["H2022", "G3735"] },
  { kr: ["길"], he: ["דרך", "אורח"], gr: ["οδος"], strongs: ["H1870", "G3598"] },
  { kr: ["집", "성전"], he: ["בית", "היכל", "משכן"], gr: ["οικος", "ναος", "ιερον"], strongs: ["H1004", "H1964", "G3624", "G3485"] },
  { kr: ["나무", "실과", "열매"], he: ["עץ", "פרי"], gr: ["δενδρον", "καρπος"], strongs: ["H6086", "H6529", "G1265", "G2590"] },
  { kr: ["풀", "채소"], he: ["דשא", "עשב"], gr: ["χορτος"], strongs: ["H1877", "H6212", "G5528"] },
  { kr: ["짐승", "육축", "새"], he: ["בהמה", "חיה", "עוף"], gr: ["θηριον", "πετεινον"], strongs: ["H929", "H2416", "H5775", "G2342", "G4071"] },
  { kr: ["밤", "저녁"], he: ["לילה", "ערב"], gr: ["νυξ", "οψια"], strongs: ["H3915", "H6153", "G3571"] },
  { kr: ["아침", "낮"], he: ["בקר", "יומם"], gr: ["πρωι", "ημερα"], strongs: ["H1242", "G4404"] },
  { kr: ["이름"], he: ["שם", "שמות"], gr: ["ονομα"], strongs: ["H8034", "G3686"] },
  { kr: ["일", "노역", "행위"], he: ["מלאכה", "מעשה", "עבודה"], gr: ["εργον"], strongs: ["H4399", "H4639", "G2041"] },
  { kr: ["힘", "능력", "권세"], he: ["כח", "חיל", "עז"], gr: ["δυναμις", "εξουσια"], strongs: ["H3581", "H2428", "G1411", "G1849"] },
  { kr: ["나", "내"], he: ["אני", "אנכי"], gr: ["εγω", "μου"], strongs: ["H589", "H595", "G1473"] },
  { kr: ["너", "네"], he: ["אתה", "את"], gr: ["συ", "σου"], strongs: ["H859", "G4771"] },
  { kr: ["그", "그들"], he: ["הוא", "היא", "הם"], gr: ["αυτος", "αυτου"], strongs: ["H1931", "H1992", "G846"] },
  { kr: ["무화과"], he: ["תאנה"], gr: ["συκη"], strongs: ["H8384", "G4808"] },
  { kr: ["포도주", "포도나무"], he: ["יין", "גפן"], gr: ["οινος", "αμπελος"], strongs: ["H3196", "H1612", "G3631", "G288"] },
  { kr: ["방주", "배"], he: ["תבה", "אניה"], gr: ["κιβωτος", "πλοιον"], strongs: ["H8392", "H591", "G2787", "G4143"] },
  { kr: ["뱀", "간교"], he: ["נחש", "ערום"], gr: ["οφις"], strongs: ["H5175", "H6175", "G3789"] },
  { kr: ["불", "화염"], he: ["אש", "להבה"], gr: ["πυρ"], strongs: ["H784", "H3852", "G4442"] }
];

// Highlight matching search query in both original & translation texts
function highlightBothTexts(krvText, origText, query, isOt) {
  if (!query) return { highlightedKorean: krvText || "", highlightedOriginal: origText || "" };

  const cleanHebrewQ = stripNikkud(query);
  const cleanHebrewQRoot = stripHebrewPrefixes(query);
  const cleanGreekQ = stripGreekAccents(query);
  const cleanGreekQRoot = stripGreekInflections(query);
  const upperQuery = query.toUpperCase();

  let krTargets = [];
  let origTargets = [];

  // 1. Exact match pass
  let mapEntry = BIBLE_KEYWORD_MAP.find(entry => {
    if (entry.kr.some(k => query.includes(k) || k.includes(query))) return true;
    if (entry.he.some(h => cleanHebrewQ && stripNikkud(h) === cleanHebrewQ)) return true;
    if (entry.gr.some(g => cleanGreekQ && stripGreekAccents(g) === cleanGreekQ)) return true;
    if (entry.strongs.some(s => s === upperQuery)) return true;
    return false;
  });

  // 2. Root match pass if exact match failed
  if (!mapEntry) {
    mapEntry = BIBLE_KEYWORD_MAP.find(entry => {
      if (cleanHebrewQ && entry.he.some(h => {
        const hClean = stripNikkud(h);
        const hRoot = stripHebrewPrefixes(h);
        return cleanHebrewQRoot === hClean || cleanHebrewQRoot === hRoot || (cleanHebrewQRoot.length >= 3 && hClean.includes(cleanHebrewQRoot));
      })) return true;

      if (cleanGreekQ && entry.gr.some(g => {
        const gClean = stripGreekAccents(g);
        const gRoot = stripGreekInflections(g);
        return cleanGreekQRoot === gRoot || (cleanGreekQRoot.length >= 3 && gClean.includes(cleanGreekQRoot));
      })) return true;

      return false;
    });
  }

  if (mapEntry) {
    krTargets = [...mapEntry.kr];
    origTargets = isOt ? [...mapEntry.he] : [...mapEntry.gr];
  } else {
    if (/[\u0590-\u05FF]/.test(query)) {
      origTargets = [cleanHebrewQ];
    } else if (/[\u0370-\u03FF\u1F00-\u1FFF]/.test(query)) {
      origTargets = [cleanGreekQ];
    } else if (!/^[HG]\d+$/i.test(query)) {
      krTargets = [query];
    }
  }

  if (!/[\u0590-\u05FF\u0370-\u03FF\u1F00-\u1FFF]/.test(query) && !/^[HG]\d+$/i.test(query)) {
    if (!krTargets.includes(query)) {
      krTargets.push(query);
    }
  }

  // Highlight Korean text
  let highlightedKorean = krvText || "";
  if (krTargets.length > 0) {
    krTargets.forEach(target => {
      if (!target) return;
      const escaped = target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, "gi");
      highlightedKorean = highlightedKorean.replace(regex, `<mark class="search-highlight">$1</mark>`);
    });
  }

  // Highlight Original Language text
  let highlightedOriginal = origText || "";
  if (origText) {
    if (isOt) {
      highlightedOriginal = origText.split(/\s+/).map(w => {
        const cleanW = stripNikkud(w);
        const cleanWRoot = stripHebrewPrefixes(w);
        const match = origTargets.some(t => {
          const tClean = stripNikkud(t);
          return cleanW === tClean || cleanWRoot === tClean || (cleanHebrewQ && cleanW.includes(cleanHebrewQ));
        });
        if (match) {
          return `<mark class="search-highlight">${w}</mark>`;
        }
        return w;
      }).join(" ");
    } else {
      highlightedOriginal = origText.split(/\s+/).map(w => {
        const cleanW = stripGreekAccents(w);
        const cleanWRoot = stripGreekInflections(w);
        const match = origTargets.some(t => {
          const tClean = stripGreekAccents(t);
          return cleanW === tClean || cleanWRoot === tClean || (cleanGreekQ && cleanW.includes(cleanGreekQ));
        });
        if (match) {
          return `<mark class="search-highlight">${w}</mark>`;
        }
        return w;
      }).join(" ");
    }
  }

  return { highlightedKorean, highlightedOriginal };
}

// PWA Deferred Install Prompt Global Variable
let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const pwaRow = document.getElementById("pwaInstallRow");
  if (pwaRow) pwaRow.style.display = "block";
});

// Initialize App
document.addEventListener("DOMContentLoaded", async () => {
  restoreLastReadPosition();
  setupUIEvents();
  setUsageMode("reading"); // Always start in Reading (통독) mode
  renderHeaderTitle();
  loadChapterContent();
  preloadStrongsIndex();

  // PWA Install Button Handler
  const pwaBtn = document.getElementById("pwaInstallBtn");
  if (pwaBtn) {
    pwaBtn.addEventListener("click", async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        if (outcome === 'accepted') {
          console.log("PWA Installed successfully");
        }
        deferredInstallPrompt = null;
        const pwaRow = document.getElementById("pwaInstallRow");
        if (pwaRow) pwaRow.style.display = "none";
      }
    });
  }

  // Initial history state for back button navigation
  history.replaceState({ bookId: currentBookId, chapter: currentChapter }, '');
});

// Browser Hardware / Popstate Back Button Support
window.addEventListener("popstate", (e) => {
  const modalOverlay = document.getElementById("modalOverlay");
  const settingsOverlay = document.getElementById("settingsModalOverlay");
  const drawerOverlay = document.getElementById("drawerOverlay");

  let handled = false;

  // 1. Close open popups/drawers first
  if (modalOverlay && modalOverlay.classList.contains("active")) {
    modalOverlay.classList.remove("active");
    handled = true;
  }
  if (settingsOverlay && settingsOverlay.classList.contains("active")) {
    settingsOverlay.classList.remove("active");
    handled = true;
  }
  if (drawerOverlay && drawerOverlay.classList.contains("open")) {
    drawerOverlay.classList.remove("open");
    handled = true;
  }

  if (handled) return;

  // 2. Navigate back to previous reading chapter if state exists
  if (e.state && e.state.bookId && e.state.chapter) {
    currentBookId = e.state.bookId;
    const bInfo = BOOKS_MASTER.find(b => b.id === currentBookId);
    if (bInfo) currentBookName = bInfo.name;
    currentChapter = e.state.chapter;
    renderHeaderTitle();
    loadChapterContent();
    saveReadingPosition();
  }
});

function restoreLastReadPosition() {
  const saved = localStorage.getItem("BIBLE_LAST_READ_POS");
  if (saved) {
    try {
      const pos = JSON.parse(saved);
      if (pos.bookId && pos.bookName && pos.chapter) {
        currentBookId = pos.bookId;
        currentBookName = pos.bookName;
        currentChapter = pos.chapter;
        console.log(`Restored position: ${currentBookName} ${currentChapter}장`);
      }
    } catch (e) {
      console.warn("Failed to restore position", e);
    }
  }
}

function saveReadingPosition() {
  if (usageMode !== "reading") return;

  const pos = {
    bookId: currentBookId,
    bookName: currentBookName,
    chapter: currentChapter,
    timestamp: new Date().toISOString()
  };

  localStorage.setItem("BIBLE_LAST_READ_POS", JSON.stringify(pos));
  updateSavedBadge();
}

function updateSavedBadge() {
  const badge = document.getElementById("savedPosBadge");
  if (!badge) return;
  if (usageMode === "reading") {
    badge.innerText = `📌 통독 모드 저장 위치: ${currentBookName} ${currentChapter}장`;
    badge.style.display = "inline";
  } else {
    badge.innerText = `⛪ 예배 모드 (빠른 탐색)`;
    badge.style.display = "inline";
  }
}

async function preloadStrongsIndex() {
  try {
    const res = await fetch("strongs_index.json");
    strongsIndexData = await res.json();
  } catch (e) {
    console.warn("Strong's index preloading error", e);
  }
  preloadStrongsLexicon();
}

async function preloadStrongsLexicon() {
  try {
    const resDict = await fetch("strongs_dictionary.json");
    strongsDictionaryData = await resDict.json();
    const resMap = await fetch("korean_strongs_map.json");
    koreanStrongsMapData = await resMap.json();
    console.log("Loaded Strong's Lexicon Dictionary and Korean Mapping");
  } catch (e) {
    console.warn("Strong's Lexicon preloading error", e);
  }
}

function renderHeaderTitle() {
  const btn = document.getElementById("bookTitleBtn");
  if (btn) {
    btn.innerText = `${currentBookName} ${currentChapter}장 ▾`;
  }
  updateSavedBadge();
}

function setupUIEvents() {
  // Usage Mode Toggle (통독 vs 예배)
  document.getElementById("usageToggleBtn").addEventListener("click", toggleUsageMode);

  // View Mode Dual Toggle (대조 ON/OFF)
  document.getElementById("modeDualToggleBtn").addEventListener("click", toggleViewMode);

  // Font Size Scaling Sync & Settings Modal
  document.getElementById("fontDecreaseBtn").addEventListener("click", () => changeFontSize(-10));
  document.getElementById("fontIncreaseBtn").addEventListener("click", () => changeFontSize(10));
  document.getElementById("fontResetBtn").addEventListener("click", resetFontSize);

  document.getElementById("settingsTriggerBtn").addEventListener("click", openSettingsModal);
  document.getElementById("closeSettingsModalBtn").addEventListener("click", closeSettingsModal);
  document.getElementById("settingsModalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "settingsModalOverlay") closeSettingsModal();
  });

  // Prev / Next Chapter
  document.getElementById("prevChapBtn").addEventListener("click", () => navigateChapter(-1));
  document.getElementById("nextChapBtn").addEventListener("click", () => navigateChapter(1));

  // Book Title Modal
  document.getElementById("bookTitleBtn").addEventListener("click", openBookModal);
  document.getElementById("closeModalBtn").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeModal();
  });

  // Version Selectors
  document.getElementById("leftVersionSelect").addEventListener("change", (e) => {
    leftVersion = e.target.value;
    loadChapterContent();
  });
  document.getElementById("rightVersionSelect").addEventListener("change", (e) => {
    rightVersion = e.target.value;
    loadChapterContent();
  });

  // Search Drawer
  document.getElementById("searchTriggerBtn").addEventListener("click", toggleDrawer);
  document.getElementById("closeDrawerBtn").addEventListener("click", toggleDrawer);
  document.getElementById("searchBtn").addEventListener("click", performSearch);
  document.getElementById("searchInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
  });
}

function toggleUsageMode() {
  const newMode = usageMode === "reading" ? "worship" : "reading";
  setUsageMode(newMode);
}

function setUsageMode(mode) {
  usageMode = mode;
  const btn = document.getElementById("usageToggleBtn");
  if (btn) {
    if (mode === "reading") {
      btn.innerText = "📖 통독";
      btn.className = "toggle-mode-btn usage-toggle-btn active-reading";
      btn.title = "통독 모드 (마지막 읽은 위치 자동 저장)";
      saveReadingPosition();
    } else {
      btn.innerText = "⛪ 예배";
      btn.className = "toggle-mode-btn usage-toggle-btn active-worship";
      btn.title = "예배 모드 (빠른 구절 탐색)";
      openBookModal();
    }
  }
  updateSavedBadge();
}

function openSettingsModal() {
  document.getElementById("settingsModalOverlay").classList.add("active");
  history.pushState({ overlay: 'settings' }, '');
}

function closeSettingsModal() {
  document.getElementById("settingsModalOverlay").classList.remove("active");
}

function changeFontSize(delta) {
  fontSizePercent = Math.max(70, Math.min(180, fontSizePercent + delta));
  const label = document.getElementById("fontSizeLabel");
  if (label) label.innerText = `${fontSizePercent}%`;
  document.documentElement.style.setProperty("--verse-font-size", `calc(1.08rem * ${fontSizePercent / 100})`);
}

function resetFontSize() {
  fontSizePercent = 100;
  const label = document.getElementById("fontSizeLabel");
  if (label) label.innerText = `100%`;
  document.documentElement.style.setProperty("--verse-font-size", `calc(1.08rem * 1)`);
}

function toggleViewMode() {
  const newMode = currentMode === "single" ? "dual" : "single";
  setViewMode(newMode);
}

function setViewMode(mode) {
  currentMode = mode;
  const btn = document.getElementById("modeDualToggleBtn");
  const versesContainer = document.getElementById("versesContainer");
  const rightVersionGroup = document.getElementById("rightVersionGroup");

  if (mode === "single") {
    if (btn) {
      btn.innerText = "⇄ 대조 OFF";
      btn.className = "toggle-mode-btn dual-toggle-btn";
    }
    versesContainer.className = "verses-container single-mode";
    rightVersionGroup.style.display = "none";
  } else {
    // Smart Defaults for Dual Mode: OT -> Hebrew (WLC), NT -> Greek (SBLGNT)
    if (currentBookId <= 39) {
      rightVersion = "data_hebrew";
    } else {
      rightVersion = "data_greek_sblgnt";
    }
    const rightSelect = document.getElementById("rightVersionSelect");
    if (rightSelect) rightSelect.value = rightVersion;

    if (btn) {
      btn.innerText = "⇄ 대조 ON";
      btn.className = "toggle-mode-btn dual-toggle-btn active-dual";
    }
    versesContainer.className = "verses-container dual-mode";
    rightVersionGroup.style.display = "flex";
  }

  loadChapterContent();
}

function navigateChapter(delta) {
  const newChap = currentChapter + delta;
  const bookInfo = BOOKS_MASTER.find(b => b.id === currentBookId);
  const maxChap = bookInfo ? bookInfo.chapters : 50;

  if (newChap >= 1 && newChap <= maxChap) {
    currentChapter = newChap;
    renderHeaderTitle();
    loadChapterContent();
    saveReadingPosition();
    history.pushState({ bookId: currentBookId, chapter: currentChapter }, '');
    document.getElementById("unifiedScrollArea").scrollTop = 0;
  }
}

// Fetch version JSON
async function fetchBookJSON(versionDir, bookFile) {
  const cacheKey = `${versionDir}/${bookFile}`;
  if (loadedDataCache[cacheKey]) return loadedDataCache[cacheKey];

  try {
    const res = await fetch(`${versionDir}/${bookFile}.json`);
    if (!res.ok) return null;
    const data = await res.json();
    loadedDataCache[cacheKey] = data;
    return data;
  } catch (e) {
    return null;
  }
}

async function loadChapterContent() {
  const container = document.getElementById("versesContainer");
  container.innerHTML = `<div style="padding: 2rem; color: var(--text-muted);">로딩 중...</div>`;

  const bookInfo = BOOKS_MASTER.find(b => b.id === currentBookId || b.name === currentBookName);
  const nameKo = bookInfo ? bookInfo.name : currentBookName;
  const nameEn = bookInfo ? bookInfo.name_en : "Genesis";

  const leftFile = leftVersion === "data_niv" ? nameEn : nameKo;
  const rightFile = rightVersion === "data_niv" ? nameEn : nameKo;

  const leftData = await fetchBookJSON(leftVersion, leftFile);
  const rightData = currentMode === "dual" ? await fetchBookJSON(rightVersion, rightFile) : null;

  if (currentMode === "single") {
    renderSingleModeVerses(container, leftData, currentChapter, leftVersion);
  } else {
    renderDualModeVerses(container, leftData, rightData, currentChapter, leftVersion, rightVersion);
  }
}

// Single Mode Rendering
function renderSingleModeVerses(container, data, chapterNum, versionId) {
  container.innerHTML = "";
  const chap = data?.chapters?.find(c => strEq(c.chapter, chapterNum));
  if (!chap || !chap.verses || chap.verses.length === 0) {
    container.innerHTML = `<div style="padding: 2rem; color: var(--text-muted);">${chapterNum}장에 본문 데이터가 없습니다.</div>`;
    return;
  }

  const isHebrew = versionId === "data_hebrew";
  const isGreek = versionId.includes("greek");

  chap.verses.forEach(v => {
    const row = document.createElement("div");
    row.className = "verse-row";
    row.id = `v-${v.verse}`;

    const numSpan = document.createElement("span");
    numSpan.className = "verse-num";
    numSpan.innerText = v.verse;

    const textSpan = document.createElement("span");
    textSpan.className = `verse-text ${isHebrew ? 'hebrew' : isGreek ? 'greek' : ''}`;

    const words = v.text.split(" ");
    words.forEach(w => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "word-span";
      wordSpan.innerText = w + " ";
      
      wordSpan.onmouseenter = (e) => showWordTooltip(e, w, isHebrew, isGreek);
      wordSpan.onmouseleave = () => hideWordTooltip();
      wordSpan.onclick = () => onWordClick(w, isHebrew, isGreek);
      
      textSpan.appendChild(wordSpan);
    });

    row.appendChild(numSpan);
    row.appendChild(textSpan);
    container.appendChild(row);
  });
}

// 2-Column Dual Mode Side-by-Side Verse Rendering
function renderDualModeVerses(container, leftData, rightData, chapterNum, lVerId, rVerId) {
  container.innerHTML = "";

  const lChap = leftData?.chapters?.find(c => strEq(c.chapter, chapterNum));
  const rChap = rightData?.chapters?.find(c => strEq(c.chapter, chapterNum));

  if (!lChap || !lChap.verses) {
    container.innerHTML = `<div style="padding: 2rem; color: var(--text-muted);">본문 데이터를 불러올 수 없습니다.</div>`;
    return;
  }

  const isLHebrew = lVerId === "data_hebrew";
  const isLGreek = lVerId.includes("greek");
  const isRHebrew = rVerId === "data_hebrew";
  const isRGreek = rVerId.includes("greek");

  lChap.verses.forEach(lv => {
    const row = document.createElement("div");
    row.className = "dual-verse-row";
    row.id = `v-${lv.verse}`;

    // Left Cell
    const leftCell = document.createElement("div");
    leftCell.className = "dual-cell left-cell";

    const lNum = document.createElement("span");
    lNum.className = "verse-num";
    lNum.innerText = lv.verse;

    const lTxt = document.createElement("span");
    lTxt.className = `verse-text ${isLHebrew ? 'hebrew' : isLGreek ? 'greek' : ''}`;
    
    lv.text.split(" ").forEach(w => {
      const wSpan = document.createElement("span");
      wSpan.className = "word-span";
      wSpan.innerText = w + " ";
      wSpan.onmouseenter = (e) => showWordTooltip(e, w, isLHebrew, isLGreek);
      wSpan.onmouseleave = () => hideWordTooltip();
      wSpan.onclick = () => onWordClick(w, isLHebrew, isLGreek);
      lTxt.appendChild(wSpan);
    });

    leftCell.appendChild(lNum);
    leftCell.appendChild(lTxt);
    row.appendChild(leftCell);

    // Right Cell
    const rightCell = document.createElement("div");
    rightCell.className = "dual-cell right-cell";

    const rv = rChap?.verses?.find(v => strEq(v.verse, lv.verse));
    if (rv) {
      const rNum = document.createElement("span");
      rNum.className = "verse-num";
      rNum.innerText = rv.verse;

      const rTxt = document.createElement("span");
      rTxt.className = `verse-text ${isRHebrew ? 'hebrew' : isRGreek ? 'greek' : ''}`;

      rv.text.split(" ").forEach(w => {
        const wSpan = document.createElement("span");
        wSpan.className = "word-span";
        wSpan.innerText = w + " ";
        wSpan.onmouseenter = (e) => showWordTooltip(e, w, isRHebrew, isRGreek);
        wSpan.onmouseleave = () => hideWordTooltip();
        wSpan.onclick = () => onWordClick(w, isRHebrew, isRGreek);
        rTxt.appendChild(wSpan);
      });

      rightCell.appendChild(rNum);
      rightCell.appendChild(rTxt);
    } else {
      rightCell.innerHTML = `<span class="verse-num">${lv.verse}</span><span class="verse-text" style="color: var(--text-muted);">-</span>`;
    }

    row.appendChild(rightCell);
    container.appendChild(row);
  });
}

function strEq(a, b) {
  return String(a) === String(b);
}

// Word Hover Tooltip Card for Korean, Hebrew, and Greek
function showWordTooltip(e, word, isHebrew, isGreek) {
  const cleanWord = word.replace(/[^\uAC00-\uD7A3\u3131-\u318E\u0590-\u05FF\u0370-\u03FF\u1F00-\u1FFF\w]/g, "").trim();
  if (!cleanWord) return;

  const tooltip = document.getElementById("wordHoverTooltip");
  const langLabel = isHebrew ? "히브리어 원어" : isGreek ? "헬라어 원어" : "개역한글 (KRV)";

  let displayWord = cleanWord;
  let meaningText = `클릭 시 성경 전체에서 '${cleanWord}' (원어 및 대조본) 용례 실시간 탐색`;

  if (!isHebrew && !isGreek && /[\uAC00-\uD7A3]/.test(cleanWord)) {
    const { stem, particle } = separateKoreanParticles(cleanWord);
    if (particle) {
      displayWord = `${stem} [조사 '${particle}']`;
      meaningText = `클릭 시 조사를 분리하고 체언/명사어근 '${stem}'(원어 사전 연동) 기준으로 전체 성경 탐색`;
    } else {
      meaningText = `클릭 시 명사 '${stem}'(원어 사전 연동) 기준으로 전체 성경 탐색`;
    }
  }

  document.getElementById("tooltipWord").innerText = displayWord;
  document.getElementById("tooltipTranslit").innerText = langLabel;
  document.getElementById("tooltipStrongs").innerText = isHebrew ? "OT Hebrew" : isGreek ? "NT Greek" : "KR Translation";
  document.getElementById("tooltipMeaning").innerText = meaningText;

  tooltip.style.display = "block";
  tooltip.style.left = `${e.clientX + 12}px`;
  tooltip.style.top = `${e.clientY + 12}px`;
}

function hideWordTooltip() {
  document.getElementById("wordHoverTooltip").style.display = "none";
}

function onWordClick(word, isHebrew, isGreek) {
  const cleanWord = word.replace(/[^\uAC00-\uD7A3\u3131-\u318E\u0590-\u05FF\u0370-\u03FF\u1F00-\u1FFF\w]/g, "").trim();
  if (!cleanWord) return;

  let targetSearchQuery = cleanWord;
  if (!isHebrew && !isGreek && /[\uAC00-\uD7A3]/.test(cleanWord)) {
    const { stem } = separateKoreanParticles(cleanWord);
    if (stem) {
      targetSearchQuery = stem;
    }
  }

  const drawer = document.getElementById("drawerOverlay");
  if (!drawer.classList.contains("open")) {
    drawer.classList.add("open");
  }

  document.getElementById("searchInput").value = targetSearchQuery;
  performSearch();
}

// Modal Book Selector
function openBookModal() {
  const overlay = document.getElementById("modalOverlay");
  const bookGrid = document.getElementById("modalBookGrid");

  bookGrid.innerHTML = "";

  BOOKS_MASTER.forEach(b => {
    const bBtn = document.createElement("button");
    bBtn.className = `book-btn ${b.name === currentBookName ? 'selected' : ''}`;
    bBtn.innerText = b.name;
    bBtn.onclick = (e) => selectBookInModal(b, e);
    bookGrid.appendChild(bBtn);
  });

  renderChapterGridInModal(currentBookId);
  overlay.classList.add("active");
  history.pushState({ overlay: 'book' }, '');
}

function selectBookInModal(bookInfo, e) {
  currentBookId = bookInfo.id;
  currentBookName = bookInfo.name;

  document.querySelectorAll(".book-btn").forEach(b => b.classList.remove("selected"));
  if (e && e.target) {
    e.target.classList.add("selected");
  }

  renderChapterGridInModal(bookInfo.id);
}

function renderChapterGridInModal(bookId) {
  const chapGrid = document.getElementById("modalChapterGrid");
  chapGrid.innerHTML = "";

  const bookInfo = BOOKS_MASTER.find(b => b.id === bookId);
  const count = bookInfo ? bookInfo.chapters : 50;

  for (let c = 1; c <= count; c++) {
    const cBtn = document.createElement("button");
    cBtn.className = "chap-num-btn";
    cBtn.innerText = c;
    cBtn.onclick = () => {
      currentChapter = c;
      renderHeaderTitle();
      loadChapterContent();
      saveReadingPosition();
      closeModal();
      history.pushState({ bookId: currentBookId, chapter: currentChapter }, '');
      document.getElementById("unifiedScrollArea").scrollTop = 0;
    };
    chapGrid.appendChild(cBtn);
  }
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

// Search Drawer
function toggleDrawer() {
  const drawer = document.getElementById("drawerOverlay");
  drawer.classList.toggle("open");
  if (drawer.classList.contains("open")) {
    history.pushState({ overlay: 'drawer' }, '');
  }
}

// Multi-Language & Strong's Concordance Lexicon Search Engine
async function performSearch() {
  const rawInput = document.getElementById("searchInput").value.trim();
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = `<div style="color: var(--text-muted);">원어 사전 및 성경 역색인 탐색 중...</div>`;

  if (!rawInput) {
    resultsContainer.innerHTML = `<div style="color: var(--text-muted);">검색어를 입력하세요.</div>`;
    return;
  }

  const isStrongsCode = /^[HG]\d+$/i.test(rawInput);
  const isHebrewQuery = /[\u0590-\u05FF]/.test(rawInput);
  const isGreekQuery = /[\u0370-\u03FF\u1F00-\u1FFF]/.test(rawInput);

  let stem = rawInput;
  let particle = "";
  let targetStrongsIds = [];

  // 1. Korean Particle Separation & Original Language Mapping
  if (!isStrongsCode && !isHebrewQuery && !isGreekQuery) {
    const particleRes = separateKoreanParticles(rawInput);
    stem = particleRes.stem;
    particle = particleRes.particle;

    if (koreanStrongsMapData && koreanStrongsMapData[stem]) {
      targetStrongsIds = koreanStrongsMapData[stem];
    } else {
      // Fuzzy matching fallback from BIBLE_KEYWORD_MAP
      for (const entry of BIBLE_KEYWORD_MAP) {
        if (entry.kr.some(k => k === stem || stem.includes(k) || k.includes(stem))) {
          targetStrongsIds = [...entry.strongs];
          break;
        }
      }
    }
  } else if (isStrongsCode) {
    targetStrongsIds = [rawInput.toUpperCase()];
  }

  let lexiconHTML = "";

  // 2. Build Lexicon Information Card (Original Word, Korean Pronunciation, Meaning, Strong's Code)
  if (targetStrongsIds.length > 0 && strongsDictionaryData) {
    let itemsHTML = "";
    targetStrongsIds.forEach(sId => {
      const item = strongsDictionaryData[sId];
      if (!item) return;
      const isOt = sId.startsWith('H');
      const langClass = isOt ? 'ot' : 'nt';
      const langName = isOt ? '구약 히브리어' : '신약 헬라어';
      const origClass = isOt ? 'lexicon-hebrew' : 'lexicon-greek';
      const pronStr = item.pron_kr ? `[발음: ${item.pron_kr}]` : (item.translit ? `[음사: ${item.translit}]` : '');

      itemsHTML += `
        <div class="lexicon-item ${langClass}">
          <div class="lexicon-lang-tag">${langName} (${item.strongs_id})</div>
          <div class="lexicon-original-row">
            <span class="${origClass}">${item.lemma}</span>
            <span class="lexicon-pron">${pronStr}</span>
          </div>
          <div class="lexicon-meaning"> 뜻: ${item.kr_meaning || item.strongs_def || item.kjv_def || '원어 사전'}</div>
        </div>
      `;
    });

    if (itemsHTML) {
      const particleNotice = particle ? `<span class="particle-badge">조사 '${particle}' 분리됨 → 명사: <strong>${stem}</strong></span>` : '';
      lexiconHTML = `
        <div class="lexicon-card">
          <div class="lexicon-card-header">
            <div class="lexicon-title-group">
              <span class="lexicon-badge">📖 원어 사전 정보</span>
              <span style="font-size: 0.85rem; color: var(--text-main); font-weight: 600;">'${stem}' 원어 분석</span>
            </div>
            ${particleNotice}
          </div>
          <div class="lexicon-card-body">
            ${itemsHTML}
          </div>
        </div>
      `;
    }
  } else if (particle) {
    lexiconHTML = `
      <div style="margin-bottom: 0.8rem;">
        <span class="particle-badge">조사 '${particle}' 분리됨 → 키워드: <strong>${stem}</strong></span>
      </div>
    `;
  }

  let hits = [];

  // 3. Search Bible Verses by Original Language (Strong's Concordance)
  if (targetStrongsIds.length > 0 && strongsIndexData) {
    const verseMap = new Map();
    for (const sId of targetStrongsIds) {
      const rawHits = strongsIndexData[sId] || [];
      for (const hit of rawHits.slice(0, 50)) {
        const key = `${hit.book}_${hit.chapter}_${hit.verse}`;
        if (!verseMap.has(key)) {
          verseMap.set(key, hit);
        }
      }
    }

    const rawHitsList = Array.from(verseMap.values());

    for (const hit of rawHitsList.slice(0, 50)) {
      const bInfo = BOOKS_MASTER.find(b => b.id === hit.book || b.name === hit.book_ko);
      if (!bInfo) continue;
      const krvData = await fetchBookJSON("data", bInfo.name);
      const krvV = krvData?.chapters?.find(ch => strEq(ch.chapter, hit.chapter))?.verses?.find(ve => strEq(ve.verse, hit.verse));
      const origDir = bInfo.id <= 39 ? "data_hebrew" : "data_greek";
      const origData = await fetchBookJSON(origDir, bInfo.name);
      const origV = origData?.chapters?.find(ch => strEq(ch.chapter, hit.chapter))?.verses?.find(ve => strEq(ve.verse, hit.verse));

      hits.push({
        book_ko: bInfo.name,
        chapter: hit.chapter,
        verse: hit.verse,
        text: krvV ? krvV.text : "",
        subText: origV ? origV.text : "",
        isOt: bInfo.id <= 39
      });
    }

    renderSearchResults(resultsContainer, hits, `'${stem}' 원어 어근 기준 성경 검색 결과`, stem, lexiconHTML);
    return;
  }

  // Fallback 1: Direct Hebrew Search across OT
  if (isHebrewQuery) {
    const cleanQ = stripNikkud(rawInput);
    const otBooks = BOOKS_MASTER.filter(b => b.id <= 39);

    for (const b of otBooks) {
      const data = await fetchBookJSON("data_hebrew", b.name);
      if (!data || !data.chapters) continue;

      for (const c of data.chapters) {
        for (const v of c.verses) {
          if (stripNikkud(v.text).includes(cleanQ)) {
            const krvData = await fetchBookJSON("data", b.name);
            const krvV = krvData?.chapters?.find(ch => strEq(ch.chapter, c.chapter))?.verses?.find(ve => strEq(ve.verse, v.verse));
            hits.push({
              book_ko: b.name,
              chapter: c.chapter,
              verse: v.verse,
              text: krvV ? krvV.text : "",
              subText: v.text,
              isOt: true
            });
          }
        }
      }
      if (hits.length >= 50) break;
    }
    renderSearchResults(resultsContainer, hits, `히브리어 '${rawInput}' 원문 검색 결과`, rawInput, lexiconHTML);
    return;
  }

  // Fallback 2: Direct Greek Search across NT
  if (isGreekQuery) {
    const cleanQ = stripGreekAccents(rawInput);
    const ntBooks = BOOKS_MASTER.filter(b => b.id >= 40);

    for (const b of ntBooks) {
      const data = await fetchBookJSON("data_greek", b.name);
      if (!data || !data.chapters) continue;

      for (const c of data.chapters) {
        for (const v of c.verses) {
          if (stripGreekAccents(v.text).includes(cleanQ)) {
            const krvData = await fetchBookJSON("data", b.name);
            const krvV = krvData?.chapters?.find(ch => strEq(ch.chapter, c.chapter))?.verses?.find(ve => strEq(ve.verse, v.verse));
            hits.push({
              book_ko: b.name,
              chapter: c.chapter,
              verse: v.verse,
              text: krvV ? krvV.text : "",
              subText: v.text,
              isOt: false
            });
          }
        }
      }
      if (hits.length >= 50) break;
    }
    renderSearchResults(resultsContainer, hits, `헬라어 '${rawInput}' 원문 검색 결과`, rawInput, lexiconHTML);
    return;
  }

  // Fallback 3: Text Search using stem
  const searchQuery = stem || rawInput;
  for (const b of BOOKS_MASTER) {
    const data = await fetchBookJSON("data", b.name);
    if (!data || !data.chapters) continue;

    for (const c of data.chapters) {
      for (const v of c.verses) {
        if (v.text.includes(searchQuery)) {
          const origDir = b.id <= 39 ? "data_hebrew" : "data_greek";
          const origData = await fetchBookJSON(origDir, b.name);
          const origV = origData?.chapters?.find(ch => strEq(ch.chapter, c.chapter))?.verses?.find(ve => strEq(ve.verse, v.verse));

          hits.push({
            book_ko: b.name,
            chapter: c.chapter,
            verse: v.verse,
            text: v.text,
            subText: origV ? origV.text : "",
            isOt: b.id <= 39
          });
        }
      }
    }
    if (hits.length >= 50) break;
  }

  renderSearchResults(resultsContainer, hits, `'${searchQuery}' 한국어 키워드 검색 결과`, searchQuery, lexiconHTML);
}

function renderSearchResults(container, list, title, searchQuery, lexiconHTML = "") {
  container.innerHTML = (lexiconHTML || "") + `<div style="font-size: 0.9rem; color: var(--accent-gold); margin-bottom: 0.8rem; font-weight: bold;">${title} (${list.length}건)</div>`;

  if (list.length === 0) {
    container.innerHTML += `<div style="color: var(--text-muted);">검색 결과가 없습니다.</div>`;
    return;
  }

  list.slice(0, 50).forEach(item => {
    const card = document.createElement("div");
    card.className = "result-card";

    const ref = document.createElement("div");
    ref.className = "result-ref";
    ref.innerText = `${item.book_ko || '성경'} ${item.chapter}:${item.verse}`;

    // Highlight both Korean (대조본) and Original (원어)
    const { highlightedKorean, highlightedOriginal } = highlightBothTexts(
      item.text,
      item.subText,
      searchQuery,
      item.isOt
    );

    const txt = document.createElement("div");
    txt.className = "result-text";
    txt.innerHTML = highlightedKorean || "구절 보기 클릭";

    card.appendChild(ref);
    card.appendChild(txt);

    if (item.subText) {
      const sub = document.createElement("div");
      sub.className = "result-subtext";
      sub.style.fontSize = item.isOt ? "0.95rem" : "0.88rem";
      sub.style.color = "var(--accent-teal)";
      sub.style.marginTop = "0.35rem";
      sub.style.lineHeight = "1.5";
      sub.style.direction = item.isOt ? "rtl" : "ltr";
      sub.innerHTML = highlightedOriginal;
      card.appendChild(sub);
    }

    card.onclick = () => {
      const bInfo = BOOKS_MASTER.find(b => b.name === item.book_ko);
      if (bInfo) {
        currentBookId = bInfo.id;
        currentBookName = bInfo.name;
        currentChapter = Number(item.chapter);
        renderHeaderTitle();
        loadChapterContent();
        saveReadingPosition();
        toggleDrawer();
        document.getElementById("unifiedScrollArea").scrollTop = 0;
      }
    };

    container.appendChild(card);
  });
}

// Service Worker Auto-Update Registration for Mobile Chrome & PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js?v=1.0.1').then((reg) => {
      console.log('[SW] Service Worker registered successfully (v1.0.1)');
      
      // Auto-check updates on load / focus
      reg.onupdatefound = () => {
        const installingWorker = reg.installing;
        if (installingWorker) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('[SW] New version detected, reloading page for update...');
              window.location.reload();
            }
          };
        }
      };
    }).catch((err) => {
      console.warn('[SW] Service Worker registration failed:', err);
    });
  });

  // Reload page when new Service Worker takes control
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
}
