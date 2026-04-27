// ──────────────────────────────────────────────
// 유틸리티 함수
// ──────────────────────────────────────────────

/** 숫자를 한국 원화 형식으로 변환합니다 */
export function formatKRW(amount: number): string {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    maximumFractionDigits: 0,
  }).format(amount);
}

/** 숫자를 만원 단위로 변환합니다 */
export function formatManWon(amount: number): string {
  const man = amount / 10000;
  if (man >= 1) {
    return `${man.toLocaleString('ko-KR')}만원`;
  }
  return formatKRW(amount);
}

/** 클래스명 조건부 결합 유틸리티 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
