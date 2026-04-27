// ──────────────────────────────────────────────
// Mock: 매물 목록 데이터
// TODO: 실제 API 연동 시 이 파일을 제거하고
//       services/listingService.ts 의 실제 구현을 활성화하세요.
// ──────────────────────────────────────────────

import type { Listing } from '../types';

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 1,
    title: '홍대입구역 도보 5분 풀옵션 원룸',
    region: '마포구',
    price_monthly: 700000,
    deposit: 5000000,
    property_type: 'Studio',
    foreign_friendly: true,
    description: '2024년 리모델링, 풀옵션, 외국인 계약 가능',
  },
  {
    id: 2,
    title: '강남역 프리미엄 오피스텔',
    region: '강남구',
    price_monthly: 1500000,
    deposit: 10000000,
    property_type: 'Apartment',
    foreign_friendly: true,
    description: '피트니스센터, 컨시어지 서비스, 영어 대응 가능',
  },
  {
    id: 3,
    title: '서울대입구 학생 전용 원룸',
    region: '관악구',
    price_monthly: 450000,
    deposit: 3000000,
    property_type: 'Studio',
    foreign_friendly: true,
    description: '서울대 정문 도보 10분, 조용한 주거환경',
  },
  {
    id: 4,
    title: '이태원 외국인 전용 쉐어하우스',
    region: '용산구',
    price_monthly: 600000,
    deposit: 1000000,
    property_type: 'Villa',
    foreign_friendly: true,
    description: '다국적 커뮤니티, 공용 라운지, 유틸리티 포함',
  },
  {
    id: 5,
    title: '여의도 한강뷰 오피스텔',
    region: '영등포구',
    price_monthly: 1100000,
    deposit: 8000000,
    property_type: 'Apartment',
    foreign_friendly: true,
    description: '한강 조망, 여의도역 도보 5분, 비즈니스 최적',
  },
];
