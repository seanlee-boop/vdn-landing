// ──────────────────────────────────────────────
// Zustand Store: 인증 상태 관리
// TODO: 실제 인증 연동 시 login/logout 액션의 서비스 호출을 교체하세요.
// ──────────────────────────────────────────────

import { create } from 'zustand';
import type { User } from '../types';
import * as authService from '../services/authService';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const user = await authService.login(email, password);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : '로그인에 실패했습니다.',
        isLoading: false,
      });
    }
  },

  logout: () => {
    authService.logout();
    set({ user: null, isAuthenticated: false, error: null });
  },

  clearError: () => set({ error: null }),
}));
