import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer, Button, LoadingSpinner } from '../common';
import InsightCard from './InsightCard';
import { analyzeDemoInput } from '../../services/demoService';
import type { DemoInput, AnalysisResult } from '../../types';

const PURPOSES = [
  { value: 'study', label: '유학', emoji: '🎓' },
  { value: 'work', label: '취업/주재', emoji: '💼' },
  { value: 'digital_nomad', label: '디지털 노마드', emoji: '💻' },
];

const REGIONS = [
  { value: 'seoul', label: '서울', emoji: '🏙️' },
];

const CONCERNS = [
  { value: 'safety', label: '안전/치안', emoji: '🛡️' },
  { value: 'cost', label: '가성비', emoji: '💰' },
];

type DemoStep = 'input' | 'analyzing' | 'result';

export default function DemoSection() {
  const [step, setStep] = useState<DemoStep>('input');
  const [input, setInput] = useState<DemoInput>({
    purpose: '',
    region: '',
    concern: '',
  });
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const isInputComplete = input.purpose && input.region && input.concern;

  const handleAnalyze = async () => {
    if (!isInputComplete) return;

    setStep('analyzing');
    try {
      const analysisResult = await analyzeDemoInput(input);
      setResult(analysisResult);
      setStep('result');
    } catch {
      setStep('input');
    }
  };

  const handleReset = () => {
    setStep('input');
    setInput({ purpose: '', region: '', concern: '' });
    setResult(null);
  };

  const renderOptionButton = (
    options: { value: string; label: string; emoji: string }[],
    field: keyof DemoInput,
  ) => (
    <div className="flex flex-wrap justify-center gap-3">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setInput((prev) => ({ ...prev, [field]: opt.value }))}
          className={`flex items-center gap-2 px-6 py-4 rounded-full border-2 text-sm font-bold transition-all cursor-pointer ${
            input[field] === opt.value
              ? 'border-primary-main bg-primary-main text-neutral-text shadow-sm'
              : 'border-neutral-border bg-white text-neutral-text hover:border-neutral-muted'
          }`}
        >
          <span className="text-lg">{opt.emoji}</span>
          {opt.label}
        </button>
      ))}
    </div>
  );

  return (
    <SectionContainer id="demo" dark>
      <div className="text-center mb-12">
        <motion.span
          className="text-sm font-semibold text-primary-main uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Interactive Demo
        </motion.span>
        <motion.h2
          className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          VDN을 미리 체험해보세요
        </motion.h2>
        <motion.p
          className="mt-4 text-slate-400 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          간단한 정보를 입력하면 AI가 맞춤 분석 결과를 보여드립니다.
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-neutral-text/20 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {/* 입력 단계 */}
            {step === 'input' && (
              <motion.div
                key="input"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* 목적 선택 */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3 text-center">
                    한국 방문 목적은 무엇인가요?
                  </label>
                  {renderOptionButton(PURPOSES, 'purpose')}
                </div>

                {/* 지역 선택 */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3 text-center">
                    희망 지역을 선택하세요
                  </label>
                  {renderOptionButton(REGIONS, 'region')}
                </div>

                {/* 고민 선택 */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3 text-center">
                    가장 큰 고민은?
                  </label>
                  {renderOptionButton(CONCERNS, 'concern')}
                </div>

                {/* 분석 시작 버튼 */}
                <Button
                  size="lg"
                  className="w-full"
                  disabled={!isInputComplete}
                  onClick={handleAnalyze}
                >
                  🔍 AI 분석 시작
                </Button>
              </motion.div>
            )}

            {/* 분석 중 */}
            {step === 'analyzing' && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <LoadingSpinner text="AI가 최적의 지역을 분석 중입니다..." />
              </motion.div>
            )}

            {/* 결과 */}
            {step === 'result' && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <InsightCard result={result} />

                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    className="flex-1"
                    onClick={handleReset}
                  >
                    다시 해보기
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={() => {
                      const el = document.getElementById('waitlist');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    얼리액세스 신청
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
