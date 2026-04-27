export default function LoadingSpinner({ text = 'AI가 분석 중입니다...' }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      {/* 스캐닝 애니메이션 컨테이너 */}
      <div className="relative w-20 h-20">
        {/* 외부 링 */}
        <div className="absolute inset-0 rounded-full border-4 border-primary-light" />
        {/* 회전 링 */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-main animate-spin" />
        {/* 중앙 아이콘 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-8 h-8 text-primary-main animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {/* 프로세싱 텍스트 */}
      <div className="text-center">
        <p className="text-sm font-medium text-primary-main">{text}</p>
        <div className="mt-2 flex gap-1 justify-center">
          <span className="w-1.5 h-1.5 bg-primary-main rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-1.5 h-1.5 bg-primary-main rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-1.5 h-1.5 bg-primary-main rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
