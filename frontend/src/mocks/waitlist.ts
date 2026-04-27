// ──────────────────────────────────────────────
// Mock: 대기자 등록 응답 데이터
// TODO: 실제 API 연동 시 이 파일을 제거하고
//       services/waitlistService.ts 의 실제 구현을 활성화하세요.
// ──────────────────────────────────────────────

import type { WaitlistResponse } from '../types';

let mockIdCounter = 100;

export function createMockWaitlistResponse(email: string): WaitlistResponse {
  return {
    status: 'success',
    message: '얼리액세스 등록이 완료되었습니다.',
    data: {
      id: ++mockIdCounter,
      email,
    },
  };
}
