import { motion } from 'framer-motion';
import { SectionContainer } from '../common';

const STEPS = [
  {
    step: '01',
    title: '조건 입력',
    description: '입국일, 선호 지역, 체류 기간, 예산 등 원하는 조건을 입력합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'AI 분석',
    description: 'AI가 매물을 분석하고, 권리관계 및 위험도를 자동으로 검토합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: '안전 매물 추천',
    description: '검증된 안전 매물과 상세 계약 가이드를 받아보세요.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <SectionContainer id="how-it-works" className="bg-neutral-bg">
      <div className="text-center mb-20">
        <motion.span
          className="text-sm font-semibold text-primary-main uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.span>
        <motion.h2
          className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-neutral-text tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          3단계로 간편하게
        </motion.h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* 연결 라인 (데스크탑) */}
        <div className="hidden md:block absolute top-[3.5rem] left-[10%] right-[10%] h-0.5 bg-neutral-border" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* 스텝 원형 */}
              <div className="relative z-10 w-28 h-28 rounded-full bg-neutral-surface border border-neutral-border flex items-center justify-center shadow-sm mb-8 group-hover:border-primary-main group-hover:shadow-lg transition-all">
                <div className="text-neutral-text group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                {/* 배지 */}
                <div className="absolute -bottom-3 bg-neutral-text text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  STEP {step.step}
                </div>
              </div>

              <h3 className="text-2xl font-heading font-bold text-neutral-text mt-4">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-muted leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
