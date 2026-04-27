// ──────────────────────────────────────────────
// Custom Hook: 부드러운 섹션 스크롤
// ──────────────────────────────────────────────

import { useCallback } from 'react';

export function useScrollTo() {
  const scrollTo = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return scrollTo;
}
