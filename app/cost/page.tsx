import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'パーソナルジム料金徹底比較【入会金+セッション+食事指導の総額】',
  description: '【2026年最新】パーソナルジム6社の料金を入会金・セッション料金・食事指導費の総額で徹底比較。隠れコストなしの本当の料金がわかる。',
}

const gyms = [
  {
    name: 'ASPI（アスピ）',
    enrollment: '55,000円',
    enrollmentNote: '体験当日入会で0円',
    session: '月2回 7,600円〜',
    meal: 'プラン内（追加費用なし）',
    total2m: '15,200円〜',
    totalNote: '入会金0円適用時',
    perSession: '3,500円〜',
    cancellation: '期間縛りなし',
    hidden: '特になし',
    recommended: '月額制で始めたい初心者',
  },
  {
    name: 'エクササイズコーチ',
    enrollment: '19,800円',
    enrollmentNote: 'キャンペーンで0円の場合あり',
    session: '月4回 9,900円〜',
    meal: 'なし',
    total2m: '19,800円〜',
    totalNote: '入会金0円適用時',
    perSession: '4,400円���',
    cancellation: '期間縛りなし',
    hidden: '食事指導は別途',
    recommended: '短時間で効率的にトレーニングしたい人',
  },
  {
    name: 'かたぎり塾',
    enrollment: '22,000円',
    enrollmentNote: '',
    session: '月4回 33,000円',
    meal: 'LINE食事指導 11,000円/2週間（オプション）',
    total2m: '88,000円〜',
    totalNote: '食事指導なし',
    perSession: '7,700円',
    cancellation: '期間縛りなし・解約金0円',
    hidden: '食事指導はオプシ��ン',
    recommended: '月額制で柔軟に通��たい人',
  },
  {
    name: 'ELEMENT',
    enrollment: '33,000円',
    enrollmentNote: '',
    session: '月額 38,280円〜（通い放題）',
    meal: 'なし',
    total2m: '109,560円〜',
    totalNote: '',
    perSession: '1,459円〜（週3回時）',
    cancellation: '期間縛りなし',
    hidden: '食事指導は別途',
    recommended: '頻繁に通って1回あたりを安くしたい人',
  },
  {
    name: 'チキンジム',
    enrollment: '35,000円',
    enrollmentNote: '',
    session: '16回 140,200円〜',
    meal: 'LINE無制限相談（コース内）',
    total2m: '175,200円〜',
    totalNote: '',
    perSession: '8,763円',
    cancellation: 'コース消化制',
    hidden: 'プロテイン・レンタル全て込み',
    recommended: '手ぶらで全て込みがいい人',
  },
  {
    name: 'BEYOND',
    enrollment: '0円',
    enrollmentNote: '常時無料',
    session: '10回 102,300円〜',
    meal: '別途コースあり',
    total2m: '102,300円〜',
    totalNote: '食事指導なし',
    perSession: '10,230円',
    cancellation: '���数券制（有効期限1年）',
    hidden: '食事指導付きコースは別料金',
    recommended: 'トレーナーの質を重視する人',
  },
]

export default function CostPage() {
  return (
    <>
      <Navigation />

      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-secondary-600 to-primary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">パーソナルジ��料金徹底比較</h1>
          <p className="text-white/80 text-sm md:text-base">入会金+セ��ション+食事指導の総額で比較【2026年4月最新】</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-site-text mb-3">なぜ「総額」で比較すべきなのか？</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-3">
            パーソナルジムの料金比較で最も重要なのは、<strong className="text-accent-500">月額やコース料金だけでなく、入会金・食事指導費・オプション費を含めた「本当の総額」</strong>で比較することです。
          </p>
          <p className="text-site-muted text-sm leading-relaxed">
            例えば「月額9,900円」と書かれていても、入会金が別途数万円かかるケースや、食事指導が有料オプションのケースがあります。
            当サイトでは、すべての費用を含めた総額と1回あたり単価で比較しています。
          </p>
        </div>

        {/* Main Comparison Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <h2 className="text-lg font-bold text-site-text p-5 border-b border-gray-200">6社 総額比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-3 py-3 text-left font-bold whitespace-nowrap">ジム名</th>
                  <th className="px-3 py-3 text-right font-bold whitespace-nowrap">入���金</th>
                  <th className="px-3 py-3 text-right font-bold whitespace-nowrap">セッション</th>
                  <th className="px-3 py-3 text-right font-bold whitespace-nowrap">食事指導</th>
                  <th className="px-3 py-3 text-right font-bold whitespace-nowrap bg-accent-600">2ヶ月総額</th>
                  <th className="px-3 py-3 text-right font-bold whitespace-nowrap">1回単価</th>
                </tr>
              </thead>
              <tbody>
                {gyms.map((gym, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="px-3 py-3 font-bold text-site-text whitespace-nowrap">{gym.name}</td>
                    <td className="px-3 py-3 text-right text-site-muted whitespace-nowrap">
                      {gym.enrollment}
                      {gym.enrollmentNote && <br/>}
                      {gym.enrollmentNote && <span className="text-[10px] text-accent-500">{gym.enrollmentNote}</span>}
                    </td>
                    <td className="px-3 py-3 text-right whitespace-nowrap">{gym.session}</td>
                    <td className="px-3 py-3 text-right text-site-muted text-xs whitespace-nowrap">{gym.meal}</td>
                    <td className="px-3 py-3 text-right font-bold text-accent-600 whitespace-nowrap">
                      {gym.total2m}
                      {gym.totalNote && <br/>}
                      {gym.totalNote && <span className="text-[10px] text-gray-400">{gym.totalNote}</span>}
                    </td>
                    <td className="px-3 py-3 text-right font-bold text-primary-600 whitespace-nowrap">{gym.perSession}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs p-3 text-right">※ 料金は税込。キャンペーン適用時の価格を含みます。</p>
        </div>

        {/* Detail Cards */}
        <h2 className="text-xl font-bold text-site-text mb-4">各ジムの料金詳細</h2>
        <div className="space-y-4 mb-8">
          {gyms.map((gym, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-site-text mb-3">{gym.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-site-muted">入会金</span>
                    <span className="font-bold">{gym.enrollment} {gym.enrollmentNote && <span className="text-accent-500 text-xs">({gym.enrollmentNote})</span>}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-site-muted">セッション料金</span>
                    <span className="font-bold">{gym.session}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-site-muted">食事指導</span>
                    <span className="font-medium text-xs">{gym.meal}</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-site-muted">2ヶ月総額目安</span>
                    <span className="font-bold text-accent-500">{gym.total2m}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-site-muted">1回あた��単価</span>
                    <span className="font-bold text-primary-600">{gym.perSession}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-site-muted">解約条件</span>
                    <span className="font-medium text-xs">{gym.cancellation}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-site-muted">注意点</span>
                    <span className="font-medium text-xs text-red-500">{gym.hidden}</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 bg-primary-50 rounded-lg p-3">
                <span className="text-primary-700 text-xs font-bold">おすすめの人：</span>
                <span className="text-primary-700 text-xs">{gym.recommended}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/ranking/" className="cta-button inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all">
            コスパランキングTOP10を見��
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
