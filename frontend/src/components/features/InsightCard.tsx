import { motion } from 'framer-motion';
import type { AnalysisResult, RiskLevel } from '../../types';
import { Badge } from '../common';

interface InsightCardProps {
  result: AnalysisResult;
}

function getScoreLevel(score: number): RiskLevel {
  if (score >= 85) return 'safe';
  if (score >= 60) return 'caution';
  return 'danger';
}

export default function InsightCard({ result }: InsightCardProps) {
  const level = getScoreLevel(result.safety_score);

  return (
    <motion.div
      className="bg-neutral-surface rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-0 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 헤더 */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-heading font-extrabold text-neutral-text">
            AI 분석 결과
          </h3>
          <Badge level={level} />
        </div>

        {/* 추천 지역 */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-neutral-bg border border-neutral-border flex items-center justify-center">
            <svg className="w-6 h-6 text-neutral-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-neutral-muted">추천 지역</p>
            <p className="font-semibold text-neutral-text">{result.recommended_area}</p>
          </div>
        </div>

        {/* 안전 점수 */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-1.5">
            <span className="text-neutral-muted">안전 점수</span>
            <span className="font-bold text-primary-main">{result.safety_score}/100</span>
          </div>
          <div className="w-full h-2.5 bg-neutral-bg rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-primary-main"
              initial={{ width: 0 }}
              animate={{ width: `${result.safety_score}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </div>

        {/* 인사이트 */}
        <div className="p-5 bg-neutral-bg rounded-[1.5rem] mt-2">
          <p className="text-sm font-medium text-neutral-text leading-relaxed">
            💡 {result.insight}
          </p>
        </div>
      </div>

      {/* 추천 매물 */}
      {result.mock_listings.length > 0 && (
        <div className="border-t border-neutral-border p-6 pt-4">
          <h4 className="text-sm font-semibold text-neutral-muted mb-3">추천 매물</h4>
          <div className="space-y-2">
            {result.mock_listings.map((listing) => (
              <div
                key={listing.id}
                className="flex items-center justify-between p-3 bg-neutral-bg rounded-lg hover:bg-primary-light/20 transition-colors"
              >
                <span className="text-sm font-medium text-neutral-text">
                  {listing.title}
                </span>
                <span className="text-sm font-bold text-primary-main whitespace-nowrap ml-3">
                  {listing.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
