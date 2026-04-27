// ──────────────────────────────────────────────
// VDN 전역 TypeScript 타입 정의
// 모든 인터페이스는 DB 모델 및 API 스펙과 일치합니다.
// ──────────────────────────────────────────────

/** 대기자 명단 등록 요청 */
export interface WaitlistRequest {
  email: string;
  name: string;
  nationality: string;
}

/** 대기자 명단 등록 응답 */
export interface WaitlistResponse {
  status: 'success';
  message: string;
  data: {
    id: number;
    email: string;
  };
}

/** 인터랙티브 데모 입력 */
export interface DemoInput {
  purpose: string;
  region: string;
  concern: string;
}

/** 매물 요약 정보 */
export interface ListingSummary {
  id: number;
  title: string;
  price: string;
}

/** 데모 분석 결과 */
export interface AnalysisResult {
  recommended_area: string;
  safety_score: number;
  insight: string;
  mock_listings: ListingSummary[];
}

/** 데모 분석 API 응답 */
export interface DemoAnalysisResponse {
  status: 'success';
  data: AnalysisResult;
}

/** 매물 상세 정보 */
export interface Listing {
  id: number;
  title: string;
  region: string;
  price_monthly: number;
  deposit: number;
  property_type: string;
  foreign_friendly: boolean;
  description?: string;
}

/** 매물 검색 응답 */
export interface ListingsSearchResponse {
  count: number;
  items: Listing[];
}

/** 사용자 정보 (데모용) */
export interface User {
  id: number;
  email: string;
  name: string;
  preferred_language: string;
}

/** API 에러 응답 */
export interface ApiError {
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

/** 리스크 레벨 */
export type RiskLevel = 'safe' | 'caution' | 'danger';
