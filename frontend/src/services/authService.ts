// ──────────────────────────────────────────────
// 인증 서비스 (데모 모드)
// TODO: 실제 Firebase Auth 연동 시 주석 처리된 코드를 활성화하고
//       mock import를 제거하세요.
// ──────────────────────────────────────────────

import type { User } from '../types';
import { MOCK_USER, MOCK_CREDENTIALS } from '../mocks/auth';

// ── 실제 구현 (비활성) ──
// import { apiRequest } from './api';
//
// export async function login(email: string, password: string): Promise<User> {
//   return apiRequest<User>('/auth/login', {
//     method: 'POST',
//     body: { email, password },
//   });
// }

// ── Mock 구현 (데모용) ──
export async function login(email: string, password: string): Promise<User> {
  // 네트워크 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
    return MOCK_USER;
  }

  throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
}

export async function logout(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300));
}
