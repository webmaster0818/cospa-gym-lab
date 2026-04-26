'use client'

type Gym = {
  name: string
  price: string
  pricePerSession?: string
  enrollmentFee?: string
  totalCost?: string
  features: string[]
  rating?: number
  [key: string]: unknown
}

type Props = {
  gyms: Gym[]
  areaName: string
}

export function PriceComparisonTable({ gyms, areaName }: Props) {
  return (
    <section className="py-8 bg-white rounded-xl" id="price-comparison">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-site-text mb-1 text-center">
          {areaName}パーソナルジム 料金比較表
        </h2>
        <p className="text-site-muted text-xs text-center mb-4">
          {gyms.length}ジムの料金・入会金・1回あたり単価を一覧で比較
        </p>

        {/* Mobile */}
        <div className="md:hidden space-y-1.5">
          {gyms.map((gym, i) => (
            <a
              key={i}
              href={`#gym-${i + 1}`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-gray-100 hover:border-primary-300 transition bg-white"
            >
              <span className="text-primary-600 text-xs font-bold w-5 shrink-0">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-site-text text-sm truncate">{gym.name}</span>
                  {gym.rating ? (
                    <span className="text-xs text-site-muted shrink-0">
                      <span className="text-yellow-500">★</span>{gym.rating}
                    </span>
                  ) : null}
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                  <span className="text-primary-600 text-xs font-bold">{gym.price}</span>
                  {gym.pricePerSession && (
                    <>
                      <span className="text-gray-300 text-[10px]">|</span>
                      <span className="savings-badge">{gym.pricePerSession}/回</span>
                    </>
                  )}
                </div>
              </div>
              <svg className="w-4 h-4 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-sm comparison-table">
            <thead>
              <tr className="bg-primary-600 text-white">
                <th className="px-3 py-2.5 text-left font-bold whitespace-nowrap">ジム名</th>
                <th className="px-3 py-2.5 text-left font-bold whitespace-nowrap">入会金</th>
                <th className="px-3 py-2.5 text-left font-bold whitespace-nowrap">月額/コース料金</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">1回あたり</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">総額目安</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">評価</th>
              </tr>
            </thead>
            <tbody>
              {gyms.map((gym, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 py-2 font-medium text-site-text whitespace-nowrap">
                    <a href={`#gym-${i + 1}`} className="hover:text-primary-600 transition underline decoration-dotted underline-offset-2">
                      {i + 1}. {gym.name}
                    </a>
                  </td>
                  <td className="px-3 py-2 text-site-muted whitespace-nowrap">{gym.enrollmentFee || '-'}</td>
                  <td className="px-3 py-2 text-primary-600 font-bold whitespace-nowrap">{gym.price}</td>
                  <td className="px-3 py-2 text-center">
                    {gym.pricePerSession ? (
                      <span className="savings-badge">{gym.pricePerSession}</span>
                    ) : <span className="text-gray-300">-</span>}
                  </td>
                  <td className="px-3 py-2 text-center text-site-text font-medium whitespace-nowrap">{gym.totalCost || '-'}</td>
                  <td className="px-3 py-2 text-center">
                    {gym.rating ? (
                      <>
                        <span className="text-yellow-500">★</span>
                        <span className="font-medium">{gym.rating}</span>
                      </>
                    ) : <span className="text-gray-300">-</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-xs mt-2 text-right">※ 料金は税込表示。最新の料金は各ジム公式サイトでご確認ください。</p>
      </div>
    </section>
  )
}
