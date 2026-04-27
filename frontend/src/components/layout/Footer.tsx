export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 로고 & 설명 */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl font-bold">
              <span className="text-primary-main">V</span>DN
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              외국인을 위한 AI 부동산 에이전트
            </p>
          </div>

          {/* 링크 */}
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-primary-main transition-colors">
              이용약관
            </a>
            <a href="#" className="hover:text-primary-main transition-colors">
              개인정보처리방침
            </a>
            <a href="mailto:contact@vdn-korea.com" className="hover:text-primary-main transition-colors">
              문의하기
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} VDN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
