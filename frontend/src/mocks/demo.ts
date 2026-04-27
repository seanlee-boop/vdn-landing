// ──────────────────────────────────────────────
// Mock: 인터랙티브 데모 분석 결과 데이터
// TODO: 실제 API 연동 시 이 파일을 제거하고
//       services/demoService.ts 의 실제 구현을 활성화하세요.
// ──────────────────────────────────────────────

import type { AnalysisResult } from '../types';

/** 목적 + 지역 + 고민 조합 키 생성 */
export function getDemoKey(purpose: string, region: string, concern: string): string {
  return `${purpose}_${region}_${concern}`;
}

/** 기본 분석 결과 (매칭되는 키가 없을 때) */
const DEFAULT_RESULT: AnalysisResult = {
  recommended_area: '마포구 (신촌/홍대)',
  safety_score: 88,
  insight:
    '마포구는 외국인 친화적인 인프라가 잘 갖춰져 있으며, 대중교통 접근성이 뛰어납니다. 다양한 가격대의 매물이 있어 유연한 선택이 가능합니다.',
  mock_listings: [
    { id: 1, title: '홍대입구역 도보 5분 원룸', price: '700,000 KRW' },
    { id: 2, title: '신촌 깨끗한 투룸', price: '900,000 KRW' },
    { id: 3, title: '합정역 근처 풀옵션 스튜디오', price: '850,000 KRW' },
  ],
};

/** 데모 분석 결과 매핑 (목적_지역_고민 키 기반) */
export const DEMO_RESULTS: Record<string, AnalysisResult> = {
  'study_seoul_safety': {
    recommended_area: '관악구 (신림/서울대입구)',
    safety_score: 92,
    insight:
      '관악구는 서울대를 중심으로 학생 친화적인 환경이 조성되어 있습니다. CCTV 밀집도가 높고, 외국인 유학생 커뮤니티가 활발합니다.',
    mock_listings: [
      { id: 1, title: '서울대입구역 원룸 (풀옵션)', price: '550,000 KRW' },
      { id: 2, title: '신림동 깨끗한 고시원', price: '350,000 KRW' },
      { id: 3, title: '봉천동 신축 스튜디오', price: '650,000 KRW' },
    ],
  },
  'study_seoul_cost': {
    recommended_area: '동작구 (노량진/사당)',
    safety_score: 85,
    insight:
      '동작구는 서울 중심부 접근성이 좋으면서도 상대적으로 저렴한 매물이 많습니다. 학원가 밀집 지역으로 편의시설이 풍부합니다.',
    mock_listings: [
      { id: 1, title: '사당역 도보 7분 원룸', price: '450,000 KRW' },
      { id: 2, title: '노량진 가성비 투룸', price: '600,000 KRW' },
    ],
  },
  'work_seoul_safety': {
    recommended_area: '강남구 (역삼/선릉)',
    safety_score: 95,
    insight:
      '강남구는 한국 최대 비즈니스 허브로, 외국계 기업이 밀집해 있어 주재원 친화적입니다. 치안이 매우 우수하며 영어 소통 가능한 인프라가 풍부합니다.',
    mock_listings: [
      { id: 1, title: '역삼역 프리미엄 오피스텔', price: '1,500,000 KRW' },
      { id: 2, title: '선릉역 외국인 전용 레지던스', price: '2,000,000 KRW' },
      { id: 3, title: '강남 신축 스튜디오', price: '1,200,000 KRW' },
    ],
  },
  'work_seoul_cost': {
    recommended_area: '영등포구 (여의도/당산)',
    safety_score: 90,
    insight:
      '영등포구는 금융 중심지 여의도가 위치해 있으며, 강남 대비 합리적인 가격대를 유지합니다. 지하철 접근성이 매우 뛰어납니다.',
    mock_listings: [
      { id: 1, title: '여의도 오피스텔 (한강뷰)', price: '1,100,000 KRW' },
      { id: 2, title: '당산역 근처 투룸', price: '800,000 KRW' },
    ],
  },
  'digital_nomad_seoul_safety': {
    recommended_area: '마포구 (연남/망원)',
    safety_score: 93,
    insight:
      '마포구 연남/망원동은 카페와 코워킹 스페이스가 밀집한 디지털 노마드의 성지입니다. 외국인 커뮤니티가 활발하고 치안이 우수합니다.',
    mock_listings: [
      { id: 1, title: '연남동 감성 원룸', price: '750,000 KRW' },
      { id: 2, title: '망원역 코워킹 근처 스튜디오', price: '800,000 KRW' },
      { id: 3, title: '홍대 쉐어하우스 (개인실)', price: '500,000 KRW' },
    ],
  },
  'digital_nomad_seoul_cost': {
    recommended_area: '성동구 (성수/왕십리)',
    safety_score: 87,
    insight:
      '성동구 성수동은 빠르게 성장하는 힙한 지역으로, 카페와 스타트업 오피스가 많습니다. 마포구 대비 가격이 합리적이면서 트렌디한 환경입니다.',
    mock_listings: [
      { id: 1, title: '성수역 근처 리모델링 원룸', price: '600,000 KRW' },
      { id: 2, title: '왕십리 신축 오피스텔', price: '700,000 KRW' },
    ],
  },
};

/** 데모 분석 결과를 조회합니다 */
export function getMockAnalysisResult(
  purpose: string,
  region: string,
  concern: string,
): AnalysisResult {
  const key = getDemoKey(purpose, region, concern);
  return DEMO_RESULTS[key] ?? DEFAULT_RESULT;
}
