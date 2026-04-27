import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollTo } from '../../hooks/useScrollTo';
import { useUIStore } from '../../store/useUIStore';
import { useAuthStore } from '../../store/useAuthStore';
import { cn } from '../../utils/format';

const NAV_LINKS = [
  { label: '문제', sectionId: 'pain-points' },
  { label: '솔루션', sectionId: 'solution' },
  { label: '작동방식', sectionId: 'how-it-works' },
  { label: '데모', sectionId: 'demo' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const { isAuthenticated, logout } = useAuthStore();
  const scrollTo = useScrollTo();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    closeMobileMenu();
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      scrollTo(sectionId);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-neutral-border'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link
            to="/"
            className="font-heading text-xl font-bold text-primary-dark"
            onClick={closeMobileMenu}
          >
            <span className="text-primary-main">V</span>DN
          </Link>

          {/* 데스크탑 네비게이션 */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => handleNavClick(link.sectionId)}
                className="text-sm font-medium text-neutral-muted hover:text-primary-main transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            {isAuthenticated ? (
              <button
                onClick={logout}
                className="text-sm font-medium text-neutral-muted hover:text-status-danger transition-colors cursor-pointer"
              >
                로그아웃
              </button>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-neutral-muted hover:text-primary-main transition-colors"
              >
                로그인
              </Link>
            )}

            <button
              onClick={() => handleNavClick('waitlist')}
              className="bg-primary-main text-neutral-text text-sm font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-all cursor-pointer"
            >
              얼리액세스
            </button>
          </div>

          {/* 모바일 햄버거 */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-neutral-text cursor-pointer"
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-neutral-border">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => handleNavClick(link.sectionId)}
                className="block w-full text-left text-sm font-medium text-neutral-text hover:text-primary-main transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            {isAuthenticated ? (
              <button
                onClick={() => { logout(); closeMobileMenu(); }}
                className="block w-full text-left text-sm font-medium text-status-danger py-2 cursor-pointer"
              >
                로그아웃
              </button>
            ) : (
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="block text-sm font-medium text-neutral-text hover:text-primary-main py-2"
              >
                로그인
              </Link>
            )}
            <button
              onClick={() => handleNavClick('waitlist')}
              className="block w-full bg-primary-main text-neutral-text text-sm font-bold py-4 rounded-full text-center hover:bg-yellow-400 transition-all cursor-pointer mt-4"
            >
              얼리액세스 신청하기
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
