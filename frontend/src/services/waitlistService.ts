// ──────────────────────────────────────────────
// 대기자 등록 서비스
// TODO: 실제 API 연동 시 주석 처리된 코드를 활성화하고
//       mock import를 제거하세요.
// ──────────────────────────────────────────────

import type { WaitlistRequest, WaitlistResponse } from '../types';
import { createMockWaitlistResponse } from '../mocks/waitlist';

// ── 실제 구현 (비활성) ──
// import { apiRequest } from './api';
//
// export async function registerWaitlist(data: WaitlistRequest): Promise<WaitlistResponse> {
//   return apiRequest<WaitlistResponse>('/waitlist', {
//     method: 'POST',
//     body: data,
//   });
// }

// ── Mock 구현 (데모용) ──
export async function registerWaitlist(data: WaitlistRequest): Promise<WaitlistResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return createMockWaitlistResponse(data.email);
}
