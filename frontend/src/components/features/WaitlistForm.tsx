import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionContainer, Button, Input } from '../common';
import { registerWaitlist } from '../../services/waitlistService';
import type { WaitlistRequest } from '../../types';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function WaitlistForm() {
  const [form, setForm] = useState<WaitlistRequest>({
    email: '',
    name: '',
    nationality: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field: keyof WaitlistRequest, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await registerWaitlist(form);
      setStatus('success');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : '등록에 실패했습니다. 다시 시도해주세요.');
      setStatus('error');
    }
  };

  return (
    <SectionContainer id="waitlist">
      <div className="max-w-lg mx-auto text-center">
        <motion.span
          className="text-sm font-semibold text-primary-main uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Early Access
        </motion.span>
        <motion.h2
          className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-neutral-text tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          한국 입국 전에
          <br />먼저 연락드릴게요
        </motion.h2>
        <motion.p
          className="mt-4 text-neutral-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          얼리액세스에 등록하시면 서비스 오픈 시 가장 먼저 안내해드립니다.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {status === 'success' ? (
            <motion.div
              className="p-8 bg-primary-light/50 rounded-2xl border border-primary-main/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="w-16 h-16 mx-auto bg-primary-main/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-text">
                등록이 완료되었습니다!
              </h3>
              <p className="mt-2 text-neutral-muted text-sm">
                서비스 오픈 시 {form.email}로 안내드리겠습니다.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="이름"
                placeholder="홍길동"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="text-center"
                labelClassName="text-center w-full block"
                required
              />
              <Input
                label="이메일"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="text-center"
                labelClassName="text-center w-full block"
                required
              />
              <Input
                label="국적"
                placeholder="대한민국"
                value={form.nationality}
                onChange={(e) => handleChange('nationality', e.target.value)}
                className="text-center"
                labelClassName="text-center w-full block"
                required
              />

              {status === 'error' && (
                <p className="text-sm text-status-danger">{errorMessage}</p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                isLoading={status === 'loading'}
              >
                얼리액세스 신청하기
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
