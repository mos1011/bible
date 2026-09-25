# 📖 성경 (Bible)

`d:\AI_porjects\bible` 프로젝트 디렉터리입니다.

---

## 📌 개요
- **목적**: 성경(개역한글 KRV, 영어 NIV 등) 데이터 관리, 검색, 대조 뷰어 기능 제공
- **연동 계획**: 찬송가(`hymn`) 및 구속사(`redemption`) 프로젝트와 연동하여 통합 뷰어, 성경 구절 매핑 및 대조 기능 제공

---

## 📂 데이터셋 정보

### 1. 🇰🇷 개역한글 (KRV)
- **출처**: [https://github.com/yuhwan/Bible-krv](https://github.com/yuhwan/Bible-krv)
- **저장 위치**: [`d:\AI_porjects\bible\data\`](file:///d:/AI_porjects/bible/data/)
- **구성**: `books.json` (66권 목록) 및 권별 JSON 파일 (`창세기.json`, `마태복음.json` 등 66개)

### 2. 🇺🇸 영어 (NIV - New International Version)
- **출처**: [https://github.com/aruljohn/Bible-niv](https://github.com/aruljohn/Bible-niv)
- **저장 위치**: [`d:\AI_porjects\bible\data_niv\`](file:///d:/AI_porjects/bible/data_niv/)
- **구성**: `Books.json` (66권 영어 목록) 및 권별 JSON 파일 (`Genesis.json`, `Matthew.json` 등 66개)

### 3. 📜 원어 (히브리어 WLC / 헬라어 TR, SBLGNT) [구축 완료]
- **구약 히브리어 (WLC)**: Westminster Leningrad Codex ([`d:\AI_porjects\bible\data_hebrew\`](file:///d:/AI_porjects/bible/data_hebrew/)) - 39권 완료
- **신약 헬라어 (TR)**: Textus Receptus ([`d:\AI_porjects\bible\data_greek\`](file:///d:/AI_porjects/bible/data_greek/)) - 27권 완료
- **신약 헬라어 (SBLGNT)**: SBL Greek New Testament ([`d:\AI_porjects\bible\data_greek_sblgnt\`](file:///d:/AI_porjects/bible/data_greek_sblgnt/)) - 27권 완료
- **구성**: 권별 JSON 파일 (`창세기.json`, `마태복음.json` 등) 및 `books.json` 목록. 개역한글(`data/`) 및 NIV(`data_niv/`) 데이터 규격과 동일한 구조(`book`, `chapters`, `verses`)로 정규화됨.

---

## 📄 데이터 규격 비교

| 구분 | 개역한글 (KRV) | 영어 (NIV) | 히브리어 (WLC) | 헬라어 (TR / SBLGNT) |
| --- | --- | --- | --- | --- |
| **권 목록 파일** | [`books.json`](file:///d:/AI_porjects/bible/data/books.json) | [`Books.json`](file:///d:/AI_porjects/bible/data_niv/Books.json) | [`books.json`](file:///d:/AI_porjects/bible/data_hebrew/books.json) | [`books.json`](file:///d:/AI_porjects/bible/data_greek/books.json) |
| **저장 디렉터리** | [`data/`](file:///d:/AI_porjects/bible/data/) | [`data_niv/`](file:///d:/AI_porjects/bible/data_niv/) | [`data_hebrew/`](file:///d:/AI_porjects/bible/data_hebrew/) | [`data_greek/`](file:///d:/AI_porjects/bible/data_greek/) |
| **파일명 규칙** | 한글명 (예: `창세기.json`) | 영문명 (예: `Genesis.json`) | 한글명 (예: `창세기.json`) | 한글명 (예: `마태복음.json`) |
| **`chapter` / `verse` 타입** | 숫자 (`1`) | 문자열 (`"1"`) | 숫자 (`1`) | 숫자 (`1`) |
| **특이사항** | 표준 KJV/KRV 장절 체계 | 표준 KJV/KRV 장절 체계 | KJV 정규화 (모음 모아쓰기 Nikkud 포함) | KJV 정규화 (TR / SBLGNT) |

---

## ⚙️ 원어-번역본 장절 불일치(Versification Discrepancy) 대응 전략

원어(히브리어 MT, 헬라어 TR/LXX)와 번역본(개역한글, NIV)은 전통적 분할 방식의 차이로 인해 일부 장절 번호가 일치하지 않는 현상이 발생합니다.

### 1. 주요 불일치 원인
1. **시편 표제어(Title)**: 히브리어 성경(MT)은 시편 표제어를 `1절`로 카운트하지만, 개역한글/NIV는 절 번호 없이 본문 제목으로 처리하여 **본문 절 번호가 1~2절 시프트**됨 (예: 시편 3편, 51편 등).
2. **장 경계 차이**: 번역본 분할 차이로 일부 장절이 다름 (예: 창 31:55 ↔ 창 32:1, 출애굽기 8장, 민수기 12/16장, 말라기 3/4장).
3. **신약 사본 차이**: TR/NA 계열과 번역본 간 `[없음]` 절 처리 방식 차이 (예: 마 17:21 등).

### 2. 표준 해결 방식 (적용 전략)
- **전략 1 (기본)**: **KJV/개역한글 장절에 맞게 재정렬(Normalized)된 오픈소스 원어 데이터셋** 사용 (OpenBible / ScrollMapper WLC & TR JSON 등).
- **전략 2 (대조 뷰어 매핑 테이블)**: 원어 고유 장절(MT/TR) 유지 시 예외 매핑 구조(`versification_map.json`)를 거쳐 뷰어에서 1:1 대조 표시.
  - *매핑 레퍼런스*: STEP Bible (Tyndale House) open data / SWORD Project `v11n` 매핑 데이터 참조.

---

## 🔍 스트롱코드(Strong's Number) 기반 원어 어근 역색인(Inverted Index) 검색

원어 어근(Lemma)별로 해당 단어가 사용된 구약/신약 전체 성경 구절을 즉시 검색할 수 있는 **스트롱코드 색인(Inverted Index) 엔진**이 구축되었습니다.

> [!NOTE]
> **UI 표기 방침**: 본문 독서 화면에서는 가독성을 위해 스트롱코드(예: `H1254`)가 **시각적으로 노출되지 않고**, 단어 클릭 시의 내부 백그라운드 어근 매핑 및 검색 시에만 사용됩니다.

### 1. 색인 데이터 (`strongs_index.json`)
- **총 인덱싱된 스트롱코드 수**: 14,193개 (구약 히브리어 `H1`~`H8674`, 신약 헬라어 `G1`~`G5624`)
- **구조**: 스트롱코드 Key에 대해 성경 66권 전체에서 사용된 `[권, 장, 절]` 좌표 배열 보관

### 2. 검색 모듈 및 사용법 (`search_strongs.py`)
CLI 및 파이썬 모듈 형태로 호출 가능하며, 검색 요청 시 **개역한글(KRV) 및 원문(히브리어/헬라어) 구절을 1초 미만(평균 10~500ms)으로 실시간 병렬 탐색**합니다.

```bash
# 사용예 1: 히브리어 H1254 (בָּרָא - 창조하다) 어근 검색
python search_strongs.py H1254 5

# 사용예 2: 헬라어 G746 (ἀρχή - 태초/시작) 어근 검색
python search_strongs.py G746 5
```

---

## 🎨 웹 대조 뷰어 UI/UX 규격 및 실행 방법

### 1. 주요 화면 구성 및 신규 추가 기능
* **히브리어 & 헬라어 원어 전문(Full-Text) 검색 엔진 구축**:
  * **히브리어 검색**: 모음 기호(Nikkud) 자동 정규화 처리 지원 (`בָּרָא` 및 `ברא` 모두 검색 가능하며 구약 전체 히브리어 구절 실시간 탐색).
  * **헬라어 검색**: 악센트(Diacritics) 자동 정규화 처리 지원 (`ἀρχή` 및 `αρχη` 모두 검색 가능하며 신약 전체 헬라어 구절 실시간 탐색).
  * 검색 결과 카드 클릭 시 해당 성경 장/절로 스무스 이동 및 개역한글 대조 구절 동시 표기.
* **읽기 모드 vs 예배 모드 & 읽던 위치 자동 저장**:
  * **📖 읽기 모드**: 성경을 읽을 때마다 마지막으로 읽은 위치(`권`과 `장`, 예: "창세기 12장")가 브라우저(`localStorage`)에 장 단위로 자동 저장되며, 앱 재접속 시 **마지막 읽은 위치로 자동 복원**됩니다.
  * **⛪ 예배 모드**: 예배 시 빠른 구절 찾기를 위해 권/장 선택 모달이 즉시 열리는 모드입니다.
* **가독성 최적화 서체 적용 (고운바탕 / Noto Serif KR)**: 성경 본문 읽기에 최적화된 **'고운바탕(Gowun Batang)'** 및 **'Noto Serif KR'** 서체를 적용하여 눈의 피로를 최소화하고 정갈한 가독성을 제공합니다.
* **버튼 텍스트 직관화**: 버튼명을 기존 "(1개번역본)", "2열"을 떼어내고 **`기본 모드`**, **`대조 모드`**로 깔끔하게 정리했습니다.
* **NIV 및 권/장 이동 모달 버그 완벽 수정**: NIV 영문 파일명 매핑 오류 및 66권 장수 데이터 사전(`BOOKS_MASTER`) 구축을 통해 NIV 본문 100% 정상 표시 및 66권 장 선택 모달 정상 구동.
* **단일 통합 스크롤바 (Single Unified Scrollbar)**: 2열 대조 모드에서 좌/우 패널이 개별 스크롤바를 갖는 대신 **우측 단 하나의 마스터 스크롤바**로 뷰포트 전체를 동시 제어합니다. 절 단위로 좌/우 본문이 물리적으로 동일 행(Row)으로 묶여 100% 비틀림이나 어긋남 없는 완벽한 동기화를 제공합니다.
* **글자 크기 동기화 조정 (`A-` / `A+`)**: 상단 헤더의 글자 크기 조절 버튼으로 **좌/우 2개 대조 역본의 글자 크기가 100% 동일하게 동기화되어 동시 확대/축소**됩니다.
* **원어 호버 카드 (Word Hover Tooltip)**: 히브리어/헬라어 원어 단어에 마우스를 올리면 **[단어 + 원형 발음 + 어근 분석 툴팁 팝업]**이 즉시 노출됩니다.

## 뒤로가기 버튼 동작




### 2. 웹 앱 실행 및 GitHub Pages 배포 방법

#### 🚀 로컬 실행
```bash
# 로컬 개발 서버 실행
python server.py
# 브라우저 접속: http://localhost:8080
```

#### 🌐 GitHub 및 GitHub Pages 배포
```bash
# 1. 변경된 파일 스테이징 및 커밋
git add .
git commit -m "Update Bible Search Engine & Lexicon Dictionary Features"

# 2. GitHub 원격 저장소 푸시 (Push 시 GitHub Pages 자동 업데이트)
git push origin main
```

---

## 🔗 저장소 및 배포 정보 (Repository & Live Site)

* **📂 GitHub Repository**: [https://github.com/mos1011/bible](https://github.com/mos1011/bible)
* **🌐 GitHub Pages 라이브 웹 앱**: [https://mos1011.github.io/bible/](https://mos1011.github.io/bible/)






