import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { FAQSchema } from '@/components/FAQSchema'

export const metadata = {
  title: '【2026最新】新宿の安いパーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】新宿駅周辺の安いパーソナルジム6選を徹底比較。入会金+総額で本当にコスパの良いジムがわかる。',
}

const gyms = [
  {
    name: 'Apple GYM 新宿店',
    rating: 4.3, reviewCount: 110,
    price: '4回 9,900円〜', pricePerSession: '2,475円',
    totalCost: '53,000円〜（2ヶ月8回+入会金）', enrollmentFee: '33,000円', sessionTime: '45分',
    features: ['4回9,900円', '海外式ボディメイク', '食事指導込', '新宿西口徒歩30秒'],
    description: '新宿西口駅から徒歩30秒の好立地。4回9,900円〜と業界最安値水準で、海外式ボディメイクと食事指導がセット。追加費用なしで安心。',
    access: '新宿西口駅 徒歩30秒', address: '東京都新宿区（新宿西口駅徒歩30秒）',
    popularPlan: { name: '4回プラン', description: '月4回×45分。海外式ボディメイク+食事指導込み。', price: '9,900円（税込）' },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'ウェアレンタル'] },
  },
  {
    name: 'エクササイズコーチ 新宿店',
    rating: 4.4, reviewCount: 95,
    price: '月4回 9,900円〜', pricePerSession: '4,400円〜',
    totalCost: '19,800円〜（2ヶ月・入会金0円時）', enrollmentFee: '19,800円（キャンペーン0円）', sessionTime: '20分',
    features: ['AI主導20分', '月額9,900円〜', '新宿駅徒歩5分', '入会金キャンペーン'],
    description: 'AIマシンが最適負荷を自動調整。たった20分の効率トレーニングで月4回9,900円〜。入会金無料キャンペーン実施中の場合あり。',
    access: '新宿駅 徒歩5分', address: '東京都新宿区（新宿駅徒歩5分）',
    popularPlan: { name: 'パートナー・デイプラン（月4回）', description: 'AI主導20分×月4回。平日日中限定で最安。', price: '月額 9,900円（税込）' },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日 10:00〜20:00', closed: '不定休', facilities: ['AIマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'BEYOND 新宿店',
    rating: 4.7, reviewCount: 180,
    price: '10回 102,300円〜', pricePerSession: '10,230円',
    totalCost: '102,300円〜', enrollmentFee: '0円', sessionTime: '55分',
    features: ['入会金無料', '大会入賞トレーナー', '回数券制', '新宿駅徒歩5分'],
    description: '入会金が常時無料。大会入賞経験者のみのトレーナー陣で質の高い指導。回数券制で有効期限1年。2〜3ヶ月の短期間で結果を出すことにこだわり。',
    access: '新宿駅 徒歩5分', address: '東京都新宿区（新宿駅徒歩5分）',
    popularPlan: { name: 'STANDARD10（回数券10回）', description: '入会金0円+10回分。有効期限1年。', price: '102,300円（税込）' },
    basicInfo: { hours: '10:00〜22:00', closed: '年末年始', facilities: ['完全個室', 'シャワー', 'ウェアレンタル'] },
  },
  {
    name: 'かたぎり塾 新宿店',
    rating: 4.5, reviewCount: 130,
    price: '月4回 33,000円', pricePerSession: '7,700円',
    totalCost: '88,000円〜（2ヶ月）', enrollmentFee: '22,000円', sessionTime: '60分',
    features: ['月額制', '縛りなし', '完全個室', '新宿駅徒歩圏内'],
    description: '月額制で期間縛り・解約金なし。完全個室でのマンツーマン60分トレーニング。最低1ヶ月から利用可能で、続けやすい価格設定。',
    access: '新宿駅 徒歩圏内', address: '東京都新宿区（新宿駅徒歩圏内）',
    popularPlan: { name: '月4回プラン', description: '週1回ペースの完全個室マンツーマン60分。', price: '月額 33,000円（税込）' },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日 9:00〜20:00', closed: '不定休', facilities: ['完全個室', 'シャワー', '更衣室'] },
  },
  {
    name: 'OUTLINE 新宿店',
    rating: 4.5, reviewCount: 90,
    price: '16回 184,800円〜', pricePerSession: '11,550円',
    totalCost: '184,800円〜', enrollmentFee: '0円〜', sessionTime: '75分',
    features: ['女性専用', '入会金0円', '生涯アフターフォロー', '完全個室'],
    description: '女性専用パーソナルジム。入会金0円プランあり。卒業後も生涯無料でアフターフォローが受けられる。女性のボディメイクを熟知した専門トレーナーが1回75分で指導。',
    access: '新宿駅 徒歩5分', address: '東京都新宿区（新宿駅徒歩5分）',
    popularPlan: { name: 'ダイエットコース（16回）', description: '2ヶ月16回+食事指導+生涯アフターフォロー。', price: '184,800円（税込）' },
    basicInfo: { hours: '8:00〜23:00', closed: '不定休', facilities: ['女性専用', '完全個室', 'シャワー'] },
  },
  {
    name: 'チキンジム 新宿店',
    rating: 4.3, reviewCount: 140,
    price: '16回 140,200円〜', pricePerSession: '8,763円',
    totalCost: '175,200円〜', enrollmentFee: '35,000円', sessionTime: '60分',
    features: ['完全個室', 'プロテイン付', 'レンタル全無料', 'LINE相談無制限'],
    description: 'ウェア・シューズ・タオルのレンタル、水素水、プロテインがすべて無料。LINE無制限相談付きで追加費用なし。分割月3,000円台〜。',
    access: '新宿駅 徒歩圏内', address: '東京都新宿区（新宿駅徒歩圏内）',
    popularPlan: { name: 'ボディメイクライト（16回）', description: '2ヶ月16回。すべて込みの安心プラン。', price: '140,200円（税込）' },
    basicInfo: { hours: '7:00〜23:00', closed: '年末年始', facilities: ['完全個室', 'シャワー', 'プロテイン', 'ウェアレンタル'] },
  },
]

const faqs = [
  { question: '新宿で一番安いパーソナルジムは？', answer: 'Apple GYMが4回9,900円〜と最安値水準。新宿西口駅徒歩30秒とアクセスも抜群です。' },
  { question: '新宿のパーソナルジムの相場は？', answer: '2ヶ月16回コースで約20〜25万円が相場。月額制なら月1〜3万円台で通えます。' },
  { question: '入会金無料で通えるジムは？', answer: 'BEYONDは常時入会金無料。OUTLINEは入会金0円プランあり。' },
  { question: '駅から近いジムは？', answer: 'Apple GYM（新宿西口徒歩30秒）が最も近い。エクササイズコーチ・BEYOND（徒歩5分）も好立地。' },
  { question: '女性専用のジムは？', answer: 'OUTLINE新宿店が女性専用。入会金0円プランあり、生涯アフターフォロー付き。' },
]

export default function ShinjukuPage() {
  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs} />
      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">新宿の安いパーソナルジムおすすめ6選</h1>
          <p className="text-white/80 text-sm md:text-base">入会金+総額で比較！コスパ最強ジムがわかる【2026年4月最新】</p>
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <TableOfContents items={[{ id: 'price-comparison', label: '新宿パーソナルジム料金比較表' }, ...gyms.map((g, i) => ({ id: `gym-${i + 1}`, label: `${i + 1}. ${g.name}` })), { id: 'market', label: '新宿エリアの料金相場' }, { id: 'faq', label: 'よくある質問' }]} />
        <PriceComparisonTable gyms={gyms} areaName="新宿" />
        <div className="space-y-6 mt-8">{gyms.map((gym, i) => (<GymCard key={i} gym={gym} index={i} />))}</div>
        <section className="mt-12 bg-white border border-gray-200 rounded-xl p-6" id="market">
          <h2 className="text-xl font-bold text-site-text mb-4">新宿エリアの料金相場</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-3">新宿はパーソナルジム激戦区。4回プランで約4〜5万円、16回で約14〜20万円ほどが相場です。競争が激しいため比較的安価なジムも多い。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">月額制の相場</div><div className="text-xl font-bold text-primary-600">7,600円〜33,000円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">短期集中の相場</div><div className="text-xl font-bold text-primary-600">14万〜25万円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">1回あたりの相場</div><div className="text-xl font-bold text-primary-600">2,475円〜11,550円</div></div>
          </div>
        </section>
        <section className="mt-8" id="faq">
          <h2 className="text-xl font-bold text-site-text mb-4">新宿のパーソナルジム よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="bg-white border border-gray-200 rounded-xl group"><summary className="px-5 py-4 font-bold text-site-text cursor-pointer flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="text-primary-600 font-bold">Q.</span>{faq.question}</span><svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4"><p className="text-site-muted text-sm leading-relaxed pl-6">{faq.answer}</p></div></details>))}</div>
        </section>
        <RelatedAreas currentArea="shinjuku" />
      </main>
      <SiteFooter />
    </>
  )
}
