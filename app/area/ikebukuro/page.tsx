import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { FAQSchema } from '@/components/FAQSchema'

export const metadata = {
  title: '【2026最新】池袋の安いパーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】池袋の安いパーソナルジム6選を徹底比較。入会金+総額で本当にコスパの良いジムがわかる。',
}

const gyms = [
  {
    "name": "ASPI 池袋店",
    "rating": 4.6,
    "reviewCount": 70,
    "price": "月2回 8,840円〜",
    "pricePerSession": "4,420円〜",
    "totalCost": "17,680円〜（2ヶ月・入会金0円時）",
    "enrollmentFee": "55,000円（体験当日0円）",
    "sessionTime": "30分",
    "features": [
      "米国資格保有",
      "月額8,840円〜",
      "食事指導込",
      "体験当日入会金0円"
    ],
    "description": "全トレーナーが米国難関資格保有。30分集中トレーニングで月2回8,840円〜。食事指導もプラン内に含まれ、体験当日入会なら入会金無料。",
    "access": "池袋駅 徒歩5分",
    "address": "東京都豊島区（池袋駅徒歩5分）"
  },
  {
    "name": "エクササイズコーチ 池袋店",
    "rating": 4.4,
    "reviewCount": 80,
    "price": "月4回 9,900円〜",
    "pricePerSession": "4,400円〜",
    "totalCost": "19,800円〜（2ヶ月・入会金0円時）",
    "enrollmentFee": "19,800円（キャンペーン0円）",
    "sessionTime": "20分",
    "features": [
      "AI主導20分",
      "月額9,900円〜",
      "池袋駅徒歩3分",
      "入会金キャンペーン"
    ],
    "description": "AI主導20分トレーニング。月4回9,900円〜で池袋エリア最安クラス。",
    "access": "池袋駅 徒歩3分",
    "address": "東京都豊島区（池袋駅徒歩3分）"
  },
  {
    "name": "Apple GYM 池袋店",
    "rating": 4.3,
    "reviewCount": 85,
    "price": "4回 9,900円〜",
    "pricePerSession": "2,475円",
    "totalCost": "53,000円〜（2ヶ月8回+入会金）",
    "enrollmentFee": "33,000円",
    "sessionTime": "45分",
    "features": [
      "4回9,900円",
      "海外式ボディメイク",
      "食事指導込",
      "池袋駅徒歩3分"
    ],
    "description": "4回9,900円〜と業界最安値水準。海外式ボディメイクで骨格レベルからアプローチ。食事指導込み。",
    "access": "池袋駅 徒歩3分",
    "address": "東京都豊島区（池袋駅徒歩3分）"
  },
  {
    "name": "BEYOND 池袋店",
    "rating": 4.7,
    "reviewCount": 170,
    "price": "10回 102,300円〜",
    "pricePerSession": "10,230円",
    "totalCost": "102,300円〜",
    "enrollmentFee": "0円",
    "sessionTime": "55分",
    "features": [
      "入会金無料",
      "大会入賞トレーナー",
      "回数券制",
      "池袋駅徒歩5分"
    ],
    "description": "入会金が常時無料。大会入賞経験者トレーナーの質の高い指導。回数券制で有効期限1年。",
    "access": "池袋駅 徒歩5分",
    "address": "東京都豊島区（池袋駅徒歩5分）"
  },
  {
    "name": "かたぎり塾 池袋店",
    "rating": 4.5,
    "reviewCount": 100,
    "price": "月4回 33,000円",
    "pricePerSession": "7,700円",
    "totalCost": "88,000円〜（2ヶ月）",
    "enrollmentFee": "22,000円",
    "sessionTime": "60分",
    "features": [
      "月額制",
      "縛りなし",
      "完全個室",
      "池袋駅徒歩圏内"
    ],
    "description": "月額制で期間縛り・解約金なし。完全個室60分マンツーマン。",
    "access": "池袋駅 徒歩圏内",
    "address": "東京都豊島区（池袋駅徒歩圏内）"
  },
  {
    "name": "チキンジム 池袋店",
    "rating": 4.3,
    "reviewCount": 120,
    "price": "16回 140,200円〜",
    "pricePerSession": "8,763円",
    "totalCost": "175,200円〜",
    "enrollmentFee": "35,000円",
    "sessionTime": "60分",
    "features": [
      "完全個室",
      "プロテイン付",
      "レンタル全無料",
      "LINE相談無制限"
    ],
    "description": "ウェア・プロテイン・LINE相談すべて無料。分割月3,000円台〜。",
    "access": "池袋駅 徒歩圏内",
    "address": "東京都豊島区（池袋駅徒歩圏内）"
  }
]

const faqs = [
  {
    "question": "池袋で一番安いパーソナルジムは？",
    "answer": "Apple GYMが4回9,900円〜と最安値水準。月額制ではASPIが月2回8,840円〜と安価。"
  },
  {
    "question": "池袋のパーソナルジムの相場は？",
    "answer": "2ヶ月16回で約15〜25万円が相場。月額制なら月1〜3万円台。"
  },
  {
    "question": "入会金無料のジムは？",
    "answer": "BEYONDは常時入会金無料。ASPIは体験当日入会で無料。"
  }
]

export default function IkebukuroPage() {
  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs} />
      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">池袋の安いパーソナルジムおすすめ6選</h1>
          <p className="text-white/80 text-sm md:text-base">入会金+総額で比較！コスパ最強ジムがわかる【2026年4月最新】</p>
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <TableOfContents items={[{ id: 'price-comparison', label: '池袋パーソナルジム料金比較表' }, ...gyms.map((g: any, i: number) => ({ id: `gym-${i + 1}`, label: `${i + 1}. ${g.name}` })), { id: 'market', label: '池袋エリアの料金相場' }, { id: 'faq', label: 'よくある質問' }]} />
        <PriceComparisonTable gyms={gyms} areaName="池袋" />
        <div className="space-y-6 mt-8">{gyms.map((gym: any, i: number) => (<GymCard key={i} gym={gym} index={i} />))}</div>
        <section className="mt-12 bg-white border border-gray-200 rounded-xl p-6" id="market">
          <h2 className="text-xl font-bold text-site-text mb-4">池袋エリアの料金相場</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-3">池袋はパーソナルジムが増加中。特にコスパ重視のジムが多く、競争が激しいため料金が抑えめ。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">月額制の相場</div><div className="text-xl font-bold text-primary-600">8,840円〜33,000円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">短期集中の相場</div><div className="text-xl font-bold text-primary-600">14万〜25万円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">1回あたりの相場</div><div className="text-xl font-bold text-primary-600">2,475円〜10,230円</div></div>
          </div>
        </section>
        <section className="mt-8" id="faq">
          <h2 className="text-xl font-bold text-site-text mb-4">池袋のパーソナルジム よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq: any, i: number) => (<details key={i} className="bg-white border border-gray-200 rounded-xl group"><summary className="px-5 py-4 font-bold text-site-text cursor-pointer flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="text-primary-600 font-bold">Q.</span>{faq.question}</span><svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4"><p className="text-site-muted text-sm leading-relaxed pl-6">{faq.answer}</p></div></details>))}</div>
        </section>
        <RelatedAreas currentArea="ikebukuro" />
      </main>
      <SiteFooter />
    </>
  )
}
