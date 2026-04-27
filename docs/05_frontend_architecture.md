# 프론트엔드 아키텍처 설계서 (Frontend Architecture)

이 문서는 VDN 랜딩 페이지 및 웹 애플리케이션의 클라이언트 측 구조, 상태 관리, 컴포넌트 설계 및 스타일링 전략을 정의합니다.

## 1. 기술 스택 (Tech Stack)
- **Framework**: **React 19**
- **Build Tool**: **Vite**
- **Language**: **TypeScript**
- **Styling**: **TailwindCSS Ver4**
- **State Management**: **Zustand** (경량 상태 관리)
- **Data Fetching**: **TanStack Query (React Query)** (서버 상태 관리)

## 2. 프로젝트 구조 (Project Structure)
도메인 중심의 구조를 지향하며, 재사용성과 확장성을 고려합니다.

```
frontend/
├── public/            # 정적 에셋 (favicon, robots.txt 등)
├── src/
│   ├── assets/        # 이미지, 폰트, 글로벌 CSS
│   ├── components/    # 재사용 가능한 UI 컴포넌트 (Atomic Design 유사)
│   │   ├── common/    # Button, Input, Modal 등
│   │   ├── layout/    # Navbar, Footer, Section 컨테이너
│   │   └── features/  # DemoWidget, WaitlistForm 등 기능 단위
│   ├── hooks/         # 커스텀 훅 (useAuth, useAnalysis 등)
│   ├── services/      # API 통신 (Axios/Fetch 인스턴스)
│   ├── store/         # Zustand 스토어
│   ├── types/         # 전역 TypeScript 인터페이스
│   ├── utils/         # 헬퍼 함수 (날짜 포맷터, 가격 변환 등)
│   ├── App.tsx        # 메인 라우터 및 글로벌 프로바이더
│   └── main.tsx       # 엔트리 포인트
├── index.html
├── tailwind.config.js # Tailwind v4 설정
└── tsconfig.json
```

## 3. 핵심 설계 원칙

### 3.1. 컴포넌트 설계 (Component Design)
- **Presentational & Container Pattern**: 비즈니스 로직과 UI 표현을 분리하여 테스트 가능성을 높임.
- **Tailwind v4 Utility-First**: 스타일을 인라인으로 정의하되, 반복되는 패턴은 `components/common`에 캡슐화.

### 3.2. 상태 관리 (State Management)
- **Server State**: `TanStack Query`를 사용하여 API 캐싱, 로딩 상태, 에러 핸들링을 효율적으로 관리.
- **Global UI State**: `Zustand`를 사용하여 다크 모드, 언어 설정, 사용자 세션 등을 가볍게 관리.

### 3.3. 라우팅 및 코드 분할 (Routing & Code Splitting)
- **React Router**: SPA 라우팅 구현.
- **Lazy Loading**: 각 섹션이나 페이지는 `React.lazy`를 사용하여 초기 번들 크기 최적화.

## 4. 스타일링 및 애니메이션 (Styling & Animation)
- **TailwindCSS v4**: 최신 기능을 사용하여 CSS-in-JS의 장점과 성능을 확보.
- **Framer Motion**: 인터랙티브 데모 섹션의 분석 애니메이션 및 요소 전환 효과에 사용.
- **Micro-interactions**: 버튼 호버, 폼 포커스 시 부드러운 전환 효과 적용.

## 5. 성능 및 SEO 최적화
- **SEO**: `react-helmet-async`를 사용하여 각 페이지별 Meta Tags 관리.
- **Asset Optimization**: 이미지 WebP 포맷 사용, SVG 스프라이트 활용.
- **Vite Build**: Tree shaking 및 Minification을 통한 번들 최적화.
