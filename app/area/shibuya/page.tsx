import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { FAQSchema } from '@/components/FAQSchema'

export const metadata = {
  title: '【2026最新】渋谷の安いパーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】渋谷駅周辺の安いパーソナルジム6選を徹底比較。1回あたり2,475円〜の格安ジムから通い放題まで、入会金+総額で本当にコスパの良いジムがわかる。',
}

const gyms = [
  {
    name: 'エクササイズコーチ 渋谷店',
    rating: 4.4, reviewCount: 85,
    price: '月4回 9,900円〜', pricePerSession: '4,400円〜',
    totalCost: '19,800円〜（2ヶ月・入会金0円時）', enrollmentFee: '19,800円（キャンペーン0円）', sessionTime: '20分',
    features: ['AI主導20分', '月額9,900円〜', '渋谷駅徒歩3分', '入会金キャンペーン'],
    description: 'AIマシンが最適な負荷を自動調整し、20分の短時間トレーニングで効率的にボディメイク。月4回9,900円〜と渋谷エリア最安クラス。入会金無料キャンペーンも頻繁に実施。',
    access: '渋谷駅 徒歩3分', address: '東京都渋谷区（渋谷駅徒歩3分）',
    popularPlan: { name: 'パートナー・デイプラン（月4回）', description: '2人同時トレーニング×AI主導20分。平日日中限定で最安。', price: '月額 9,900円（税込）' },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日 10:00〜20:00', closed: '不定休', facilities: ['AIマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'かたぎり塾 渋谷店',
    rating: 4.5, reviewCount: 120,
    price: '月4回 33,000円', pricePerSession: '7,700円',
    totalCost: '88,000円〜（2ヶ月）', enrollmentFee: '22,000円', sessionTime: '60分',
    features: ['月額制', '縛りなし', '完全個室', '渋谷駅徒歩5分'],
    description: '月額制で期間縛り・解約金なしの安心システム。完全個室でのマンツーマン60分トレーニング。全国160店舗以上展開の信頼ある大手。渋谷駅から徒歩5分の好立地。',
    access: '渋谷駅 徒歩5分', address: '東京都渋谷区（渋谷駅徒歩5分）',
    popularPlan: { name: '月4回プラン', description: '週1回ペースの完全個室マンツーマン60分。食事指導はオプション。', price: '月額 33,000円（税込）' },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日 9:00〜20:00', closed: '不定休', facilities: ['完全個室', 'シャワー', '更衣室'] },
  },
  {
    name: 'BEYOND 渋谷店',
    rating: 4.7, reviewCount: 200,
    price: '10回 102,300円〜', pricePerSession: '10,230円',
    totalCost: '102,300円〜', enrollmentFee: '0円', sessionTime: '55分',
    features: ['入会金無料', '大会入賞トレーナー', '回数券制', '渋谷駅徒歩5分'],
    description: '入会金が常時無料。トレーナー全員がボディメイクコンテスト入賞経験者で質の高い指導が受けられる。回数券制で自分のペースで通え、有効期限は1年間。',
    access: '渋谷駅 徒歩5分', address: '東京都渋谷区（渋谷駅徒歩5分）',
    popularPlan: { name: 'STANDARD10（回数券10回）', description: '入会金0円+10回分。有効期限1年。自分のペースで通える。', price: '102,300円（税込）' },
    basicInfo: { hours: '10:00〜22:00', closed: '年末年始', facilities: ['完全個室', 'シャワー', 'ウェアレンタル'] },
  },
  {
    name: 'Apple GYM 渋谷店',
    rating: 4.3, reviewCount: 95,
    price: '4回 9,900円〜', pricePerSession: '2,475円',
    totalCost: '53,000円〜（2ヶ月8回+入会金）', enrollmentFee: '33,000円', sessionTime: '45分',
    features: ['4回9,900円', '海外式ボディメイク', '食事指導込', '渋谷駅徒歩2分'],
    description: '4回9,900円〜と業界最安値水準。独自の海外式ボディメイクで骨格レベルから身体にアプローチ。食事指導もプランに含まれ追加費用なし。渋谷駅から徒歩2分の好立地。',
    access: '渋谷駅 徒歩2分', address: '東京都渋谷区（渋谷駅徒歩2分）',
    popularPlan: { name: '4回プラン', description: '月4回×45分。海外式ボディメイク+食事指導込み。', price: '9,900円（税込）' },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'ウェアレンタル'] },
  },
  {
    name: 'ASPI 渋谷店',
    rating: 4.6, reviewCount: 78,
    price: '月2回 7,600円〜', pricePerSession: '3,500円〜',
    totalCost: '15,200円〜（2ヶ月・入会金0円時）', enrollmentFee: '55,000円（体験当日0円）', sessionTime: '30分',
    features: ['米国資格保有', '月額7,600円〜', '食事指導込', '体験当日入会金0円'],
    description: '全トレーナーが米国難関資格保有。30分集中トレーニングで月2回7,600円〜。食事指導もプラン内に含まれ、体験当日入会なら入会金55,000円が無料に。',
    access: '渋谷駅 徒歩5分', address: '東京都渋谷区（渋谷駅徒歩5分）',
    popularPlan: { name: 'マンスリープランA（月2回）', description: '月2回×30分。食事指導込み。体験当日入会で入会金0円。', price: '月額 7,600円（税込）' },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日 9:00〜21:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ウェアレンタル'] },
  },
  {
    name: 'チキンジム 渋谷店',
    rating: 4.3, reviewCount: 150,
    price: '16回 140,200円〜', pricePerSession: '8,763円',
    totalCost: '175,200円〜', enrollmentFee: '35,000円', sessionTime: '60分',
    features: ['完全個室', 'プロテイン付', 'レンタル全無料', 'LINE相談無制限'],
    description: 'ウェア・シューズ・タオルのレンタル、水素水、プロテインがすべて無料。LINE無制限相談付きで追加費用なしの安心プラン。分割払いなら月3,000円台から。',
    access: '渋谷駅 徒歩圏内', address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: 'ボディメイクライト（16回）', description: '2ヶ月16回。レンタル・プロテイン・LINE相談すべて込み。', price: '140,200円（税込）' },
    basicInfo: { hours: '7:00〜23:00', closed: '年末年始', facilities: ['完全個室', 'シャワー', 'プロテイン', 'ウェアレンタル'] },
  },
]

const faqs = [
  { question: '渋谷で一番安いパーソナルジムは？', answer: 'Apple GYMが4回9,900円〜と最安値水準。月額制ではASPIが月2回7,600円〜、エクササイズコーチが月4回9,900円〜と安価です。' },
  { question: '渋谷のパーソナルジムの相場は？', answer: '入会金を含めた2ヶ月の相場は約15万〜25万円。ただし月額制のASPI・エクササイズコーチなら2ヶ月2万円以下で始められます。' },
  { question: '入会金無料で通えるジムは？', answer: 'BEYONDは常時入会金無料。ASPIは体験当日入会で無料、エクササイズコーチはキャンペーンで無料になることがあります。' },
  { question: '渋谷駅から近いジムは？', answer: 'Apple GYM（徒歩2分）、エクササイズコーチ（徒歩3分）が最も駅チカです。' },
  { question: '女性におすすめのジムは？', answer: '渋谷エリアではOUTLINE（女性専用）が人気。入会金0円プランあり、生涯アフターフォロー付き。' },
]

export default function ShibuyaPage() {
  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs} />

      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">渋谷の安いパーソナルジムおすすめ6選</h1>
          <p className="text-white/80 text-sm md:text-base">入会金+総額で比較！コスパ最強ジムがわかる【2026年4月最新】</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <TableOfContents items={[
          { id: 'price-comparison', label: '渋谷パーソナルジム料金比較表' },
          ...gyms.map((g, i) => ({ id: `gym-${i + 1}`, label: `${i + 1}. ${g.name}` })),
          { id: 'market', label: '渋谷エリアの料金相場' },
          { id: 'faq', label: 'よくある質問' },
        ]} />

        <PriceComparisonTable gyms={gyms} areaName="渋谷" />

        <div className="space-y-6 mt-8">
          {gyms.map((gym, i) => (
            <GymCard key={i} gym={gym} index={i} />
          ))}
        </div>

        <section className="mt-12 bg-white border border-gray-200 rounded-xl p-6" id="market">
          <h2 className="text-xl font-bold text-site-text mb-4">渋谷エリアの料金相場</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-3">
            渋谷のパーソナルジムの2ヶ月16回コースの相場は約25万円。若年層の利用が多いため、他エリアと比較して安めの料金設定のジムが多い傾向があります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-xs text-site-muted mb-1">月額制の相場</div>
              <div className="text-xl font-bold text-primary-600">7,600円〜33,000円</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-xs text-site-muted mb-1">短期集中の相場</div>
              <div className="text-xl font-bold text-primary-600">14万〜25万円</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-xs text-site-muted mb-1">1回あたりの相場</div>
              <div className="text-xl font-bold text-primary-600">2,475円〜10,230円</div>
            </div>
          </div>
        </section>

        <section className="mt-8" id="faq">
          <h2 className="text-xl font-bold text-site-text mb-4">渋谷のパーソナルジム よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl group">
                <summary className="px-5 py-4 font-bold text-site-text cursor-pointer flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">Q.</span>
                    {faq.question}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-site-muted text-sm leading-relaxed pl-6">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <RelatedAreas currentArea="shibuya" />
      </main>

      <SiteFooter />
    </>
  )
}
