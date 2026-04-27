// ──────────────────────────────────────────────
// API 기본 설정
// TODO: 실제 배포 시 VITE_API_BASE_URL 환경변수를 설정하세요.
// ──────────────────────────────────────────────

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000/v1';

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
}

/**
 * API 요청 유틸리티 함수
 * 실제 백엔드 연동 시 이 함수를 통해 모든 API 호출이 이루어집니다.
 */
export async function apiRequest<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, headers = {} } = options;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.error?.message ?? `HTTP Error: ${response.status}`);
  }

  return response.json();
}
