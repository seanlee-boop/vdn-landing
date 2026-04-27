// ──────────────────────────────────────────────
// 데모 분석 서비스
// TODO: 실제 API 연동 시 주석 처리된 코드를 활성화하고
//       mock import를 제거하세요.
// ──────────────────────────────────────────────

import type { DemoInput, AnalysisResult } from '../types';
import { getMockAnalysisResult } from '../mocks/demo';

// ── 실제 구현 (비활성) ──
// import { apiRequest } from './api';
// import type { DemoAnalysisResponse } from '../types';
//
// export async function analyzeDemoInput(input: DemoInput): Promise<AnalysisResult> {
//   const response = await apiRequest<DemoAnalysisResponse>('/demo/analyze', {
//     method: 'POST',
//     body: input,
//   });
//   return response.data;
// }

// ── Mock 구현 (데모용) ──
export async function analyzeDemoInput(input: DemoInput): Promise<AnalysisResult> {
  // AI 분석 시뮬레이션 딜레이 (2초)
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return getMockAnalysisResult(input.purpose, input.region, input.concern);
}
