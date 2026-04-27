import { motion } from 'framer-motion';
import { SectionContainer } from '../common';

const PAIN_POINTS = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '어디서 시작해야 할지 모른다',
    subtitle: '정보의 부재',
    description:
      '전세? 월세? 보증금? 한국의 부동산 시스템은 외국인에게 낯설고 복잡합니다. 신뢰할 수 있는 정보를 찾기가 어렵습니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: '소통이 불가능하다',
    subtitle: '언어 장벽',
    description:
      '한국어로만 된 부동산 플랫폼, 중개인과의 소통 불가. 계약서 내용조차 이해할 수 없는 상황에 놓이게 됩니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    title: '보지 못한 집을 계약해야 한다',
    subtitle: '신뢰 문제',
    description:
      '직접 방문하지 못한 매물에 큰 금액을 지불해야 하는 불안감. 사기 피해에 대한 우려가 계약을 망설이게 합니다.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PainPoints() {
  return (
    <SectionContainer id="pain-points" className="bg-white">
      <div className="text-center mb-16">
        <motion.span
          className="text-sm font-semibold text-primary-main uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Problem
        </motion.span>
        <motion.h2
          className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-neutral-text tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          한국에서 집 찾기, 이렇게 어렵습니다
        </motion.h2>
        <motion.p
          className="mt-4 text-neutral-muted max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          한국행을 결정한 순간부터 시작되는 주거 문제.
          외국인이라면 누구나 겪는 어려움입니다.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {PAIN_POINTS.map((point, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group p-10 rounded-[2rem] bg-neutral-surface border border-neutral-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-neutral-bg border border-neutral-border text-neutral-text flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-main group-hover:border-primary-main transition-all">
              {point.icon}
            </div>
            <span className="text-xs font-bold text-neutral-muted uppercase tracking-wider">
              {point.subtitle}
            </span>
            <h3 className="mt-2 text-lg font-heading font-bold text-neutral-text">
              {point.title}
            </h3>
            <p className="mt-3 text-sm text-neutral-muted leading-relaxed">
              {point.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
