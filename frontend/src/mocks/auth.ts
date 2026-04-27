// ──────────────────────────────────────────────
// Mock: 데모 인증용 사용자 데이터
// TODO: 실제 Firebase Auth 연동 시 이 파일을 제거하고
//       services/authService.ts 의 실제 구현을 활성화하세요.
// ──────────────────────────────────────────────

import type { User } from '../types';

export const MOCK_USER: User = {
  id: 1,
  email: 'demo@vdn-korea.com',
  name: '데모 사용자',
  preferred_language: 'ko',
};

export const MOCK_CREDENTIALS = {
  email: 'demo@vdn-korea.com',
  password: 'demo1234',
};
