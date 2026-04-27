import { motion } from 'framer-motion';
import { SectionContainer } from '../common';

const SOLUTIONS = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: '모국어로 매물 탐색',
    description:
      '본국에서도 익숙한 언어로 한국의 매물을 검색하고, 상세 정보를 확인할 수 있습니다. 언어 장벽 없이 원하는 조건의 집을 찾으세요.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'AI 계약서 위험 분석',
    description:
      'AI 기술이 계약서의 위험 요소를 자동으로 분석합니다. 권리관계, 특약사항 등 놓치기 쉬운 리스크를 사전에 파악하세요.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: '유연한 계약 기간',
    description:
      '6개월부터 시작하는 단기 계약부터 장기 계약까지, 체류 목적과 기간에 맞는 유연한 계약 옵션을 제공합니다.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Solution() {
  return (
    <SectionContainer id="solution" className="bg-white">
      <div className="text-center mb-16">
        <motion.span
          className="text-sm font-semibold text-primary-main uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Solution
        </motion.span>
        <motion.h2
          className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-neutral-text tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          VDN이 해결합니다
        </motion.h2>
        <motion.p
          className="mt-4 text-neutral-muted max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          AI 기반의 똑똑한 부동산 에이전트가
          입국 전부터 안전한 주거를 찾아드립니다.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SOLUTIONS.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group p-10 rounded-[2rem] bg-neutral-bg border border-transparent hover:border-neutral-border shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-neutral-border text-primary-dark flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-main group-hover:border-primary-main transition-all">
              {item.icon}
            </div>
            <h3 className="text-lg font-heading font-bold text-neutral-text">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-neutral-muted leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
