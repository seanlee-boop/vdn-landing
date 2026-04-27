import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Input } from '../components/common';
import { useAuthStore } from '../store/useAuthStore';
import { MOCK_CREDENTIALS } from '../mocks/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error, clearError } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    // 로그인 성공 시 메인 페이지로 이동
    if (useAuthStore.getState().isAuthenticated) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-dark px-4">
      <motion.div
        className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-extrabold text-neutral-text tracking-tight">
            <span className="text-primary-main">V</span>DN 로그인
          </h1>
          <p className="mt-2 text-sm text-neutral-muted">
            계정에 로그인하세요
          </p>
        </div>

        {/* 데모 안내 배너 */}
        <div className="mb-6 p-4 bg-primary-light/50 rounded-xl border border-primary-main/20">
          <p className="text-xs font-bold text-primary-main mb-1">🔑 데모 계정</p>
          <p className="text-xs text-neutral-muted">
            이메일: <code className="text-neutral-text">{MOCK_CREDENTIALS.email}</code>
          </p>
          <p className="text-xs text-neutral-muted">
            비밀번호: <code className="text-neutral-text">{MOCK_CREDENTIALS.password}</code>
          </p>
        </div>

        {/* 로그인 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="이메일"
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => { setEmail(e.target.value); clearError(); }}
            required
          />
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => { setPassword(e.target.value); clearError(); }}
            error={error ?? undefined}
            required
          />

          <Button
            type="submit"
            size="lg"
            className="w-full"
            isLoading={isLoading}
          >
            로그인
          </Button>
        </form>

        {/* 하단 링크 */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-neutral-muted hover:text-primary-main transition-colors"
          >
            ← 메인으로 돌아가기
          </a>
        </div>
      </motion.div>
    </div>
  );
}
