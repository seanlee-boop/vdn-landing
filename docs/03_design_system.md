# 디자인 시스템 가이드 (Design System)

이 문서는 VDN의 시각적 일관성과 사용자 경험을 보장하기 위한 디자인 원칙, 컬러 팔레트, 타이포그래피, 그리고 재사용 가능한 컴포넌트 명세를 정의합니다.

## 1. 디자인 원칙 (Design Principles)
- **모던 & 미니멀 (Modern & Minimal)**: Black & White 고대비 테마에 강렬한 포인트 컬러(Yellow/Gold)를 사용하여 하이엔드 테크 서비스의 느낌을 줍니다.
- **가독성 (Legibility)**: 큰 곡률, 두꺼운 헤딩 폰트, 그리고 넉넉한 여백을 사용하여 콘텐츠의 주목도를 극대화합니다.
- **반응성 (Responsive)**: 모바일 사용자가 주를 이루는 환경을 위해 큼직한 버튼(Pill 스타일)과 넉넉한 터치 영역을 제공합니다.

## 2. 디자인 토큰 (Design Tokens)

### 2.1. 컬러 팔레트 (TailwindCSS v4 Config 기반)
```css
@theme {
  /* Primary Colors - Modern Black & Yellow/Gold Accent */
  --color-primary-dark: #000000;   /* Black */
  --color-primary-main: #EAB308;   /* Yellow 500 */
  --color-primary-light: #FEF9C3;  /* Yellow 100 */

  /* Neutral Colors */
  --color-neutral-bg: #F8F8F8; /* Light Grey */
  --color-neutral-surface: #FFFFFF;
  --color-neutral-text: #171717;  /* Neutral 900 */
  --color-neutral-muted: #737373; /* Neutral 500 */

  /* Semantic Colors */
  --color-status-safe: #22C55E;    /* Green 500 */
  --color-status-caution: #F59E0B; /* Amber 500 */
  --color-status-danger: #EF4444;  /* Red 500 */
}
```

### 2.2. 타이포그래피
- **Primary Font**: `Outfit` (Heading 및 핵심 강조용)
- **Secondary Font**: `Inter` (본문 및 상세 정보용)
- **Scale**:
  - `Display`: 48px / Bold
  - `Heading 1`: 32px / Bold
  - `Heading 2`: 24px / SemiBold
  - `Body Main`: 16px / Regular
  - `Body Small`: 14px / Medium

## 3. 핵심 컴포넌트 명세

### 3.1. 버튼 (Button)
- **형태**: 모서리가 완전히 둥근 알약(Pill) 형태 (`rounded-full`)
- **Primary**: `bg-primary-main text-black hover:bg-yellow-400 active:bg-yellow-600 transition-all rounded-full py-4 px-8 font-bold`
- **Secondary**: `border-2 border-neutral-text text-neutral-text hover:bg-neutral-bg transition-all rounded-full py-4 px-8 font-bold`

### 3.2. 입력 필드 (Input)
- `border border-neutral-border focus:ring-2 focus:ring-primary-main focus:border-transparent rounded-2xl p-4 w-full`

### 3.3. AI 인사이트 카드 (AI Insight Card)
- 데모 섹션의 결과를 보여주는 핵심 컴포넌트입니다.
- **Style**: `bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 border-t-0`
- **Elements**: 
  - 리스크 레벨 표시기 (뱃지 타입)
  - 지역 추천 텍스트
  - 애니메이션 아이콘 (Pulse 효과)

### 3.4. AI 프로세싱 인디케이터 (AI Processing Indicator)
- 분석 중임을 나타내는 로딩 바 또는 스캐닝 라인 효과.
- **Effect**: `animate-pulse` 또는 `linear-gradient` 스캔 애니메이션.

## 4. TailwindCSS v4 설정 가이드
- React 19와 Vite 환경에서 `@tailwind base; @tailwind components; @tailwind utilities;`를 임포트하고 신규 `@theme` 블록을 활용하여 토큰을 관리합니다.
- 복잡한 유틸리티 조합은 `@apply` 대신 별도의 UI 컴포넌트로 추상화하여 유지보수성을 높입니다.
