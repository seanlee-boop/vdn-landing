import { motion } from 'framer-motion';
import { useScrollTo } from '../../hooks/useScrollTo';
import { Button } from '../common';

export default function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark"
    >
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-[100px]" />
        {/* 그리드 패턴 */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 배지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 bg-neutral-surface/10 border border-neutral-surface/20 text-primary-main text-sm font-bold px-5 py-2 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary-main rounded-full animate-pulse shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
            AI 기반 부동산 에이전트
          </span>
        </motion.div>

        {/* 핵심 카피 */}
        <motion.h1
          className="mt-10 text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          한국에 오기 전,{' '}
          <span className="text-primary-main">
            집을 먼저 찾으세요
          </span>
        </motion.h1>

        {/* 서브 카피 */}
        <motion.p
          className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          외국인을 위한 AI 부동산 에이전트가 입국 전부터
          <br className="hidden sm:block" />
          안전한 주거를 찾아드립니다.
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Button size="lg" onClick={() => scrollTo('waitlist')}>
            얼리액세스 신청하기
          </Button>
          <Button variant="secondary" size="lg" onClick={() => scrollTo('demo')}>
            데모 체험하기
          </Button>
        </motion.div>

        {/* 신뢰 지표 */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 text-slate-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            안전 검증 매물
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            다국어 지원
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI 기반 분석
          </div>
        </motion.div>
      </div>
    </section>
  );
}
