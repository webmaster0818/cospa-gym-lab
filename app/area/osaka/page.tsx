import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { FAQSchema } from '@/components/FAQSchema'

export const metadata = {
  title: '【2026最新】大阪の安いパーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】大阪の安いパーソナルジム6選を徹底比較。入会金+総額で本当にコスパの良いジムがわかる。',
}

const gyms = [
  {
    "name": "エクササイズコーチ 梅田店",
    "rating": 4.4,
    "reviewCount": 75,
    "price": "月4回 9,900円〜",
    "pricePerSession": "4,400円〜",
    "totalCost": "19,800円〜",
    "enrollmentFee": "19,800円（キャンペーン0円）",
    "sessionTime": "20分",
    "features": [
      "AI主導20分",
      "月額9,900円〜",
      "梅田駅近",
      "入会金キャンペーン"
    ],
    "description": "AI主導20分の効率トレーニング。大阪最安クラス。",
    "access": "梅田駅 徒歩5分",
    "address": "大阪府大阪市北区（梅田駅徒歩5分）"
  },
  {
    "name": "かたぎり塾 心斎橋店",
    "rating": 4.5,
    "reviewCount": 80,
    "price": "月4回 33,000円",
    "pricePerSession": "7,700円",
    "totalCost": "88,000円〜",
    "enrollmentFee": "22,000円",
    "sessionTime": "60分",
    "features": [
      "月額制",
      "縛りなし",
      "完全個室",
      "心斎橋駅近"
    ],
    "description": "月額制で縛りなし。完全個室60分。大阪でも店舗展開中。",
    "access": "心斎橋駅 徒歩5分",
    "address": "大阪府大阪市中央区（心斎橋駅徒歩5分）"
  },
  {
    "name": "BEYOND 大阪店",
    "rating": 4.7,
    "reviewCount": 150,
    "price": "10回 102,300円〜",
    "pricePerSession": "10,230円",
    "totalCost": "102,300円〜",
    "enrollmentFee": "0円",
    "sessionTime": "55分",
    "features": [
      "入会金無料",
      "大会入賞トレーナー",
      "回数券制",
      "梅田・難波"
    ],
    "description": "入会金常時無料。大阪にも複数店舗展開。",
    "access": "梅田エリア",
    "address": "大阪府大阪市北区（梅田エリア）"
  },
  {
    "name": "24/7ワークアウト 梅田店",
    "rating": 4.4,
    "reviewCount": 110,
    "price": "8回 65,120円〜",
    "pricePerSession": "8,140円",
    "totalCost": "106,120円〜",
    "enrollmentFee": "41,800円",
    "sessionTime": "50分",
    "features": [
      "3食食べるダイエット",
      "深夜24時",
      "全額返金保証",
      "梅田駅近"
    ],
    "description": "3食食べるダイエットメソッド。深夜24時まで営業。全額返金保証。",
    "access": "梅田駅 徒歩5分",
    "address": "大阪府大阪市北区（梅田駅徒歩5分）"
  },
  {
    "name": "チキンジム 心斎橋店",
    "rating": 4.3,
    "reviewCount": 90,
    "price": "16回 140,200円〜",
    "pricePerSession": "8,763円",
    "totalCost": "175,200円〜",
    "enrollmentFee": "35,000円",
    "sessionTime": "60分",
    "features": [
      "完全個室",
      "プロテイン付",
      "レンタル全無料",
      "心斎橋駅近"
    ],
    "description": "すべて込みの安心プラン。分割月3,000円台〜。",
    "access": "心斎橋駅 徒歩圏内",
    "address": "大阪府大阪市中央区（心斎橋駅徒歩圏内）"
  },
  {
    "name": "ASPI 大阪店",
    "rating": 4.6,
    "reviewCount": 55,
    "price": "月2回 7,600円〜",
    "pricePerSession": "3,500円〜",
    "totalCost": "15,200円〜",
    "enrollmentFee": "55,000円（体験当日0円）",
    "sessionTime": "30分",
    "features": [
      "米国資格保有",
      "月額7,600円〜",
      "食事指導込",
      "大阪エリア"
    ],
    "description": "月2回7,600円〜で食事指導込み。体験当日入会で入会金無料。",
    "access": "大阪エリア",
    "address": "大阪府大阪市（大阪エリア）"
  }
]

const faqs = [
  {
    "question": "大阪で一番安いパーソナルジムは？",
    "answer": "ASPIが月2回7,600円〜。エクササイズコーチも月4回9,900円〜。"
  },
  {
    "question": "大阪の相場は？",
    "answer": "東京より安め。平均合計約17万円。梅田・天満に低価格ジムが集中。"
  },
  {
    "question": "梅田と難波どちらが安い？",
    "answer": "梅田エリアに低価格ジムが多い傾向。難波・心斎橋は女性専門ジムが多い。"
  }
]

export default function OsakaPage() {
  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs} />
      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">大阪の安いパーソナルジムおすすめ6選</h1>
          <p className="text-white/80 text-sm md:text-base">入会金+総額で比較！コスパ最強ジムがわかる【2026年4月最新】</p>
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <TableOfContents items={[{ id: 'price-comparison', label: '大阪パーソナルジム料金比較表' }, ...gyms.map((g: any, i: number) => ({ id: `gym-${i + 1}`, label: `${i + 1}. ${g.name}` })), { id: 'market', label: '大阪エリアの料金相場' }, { id: 'faq', label: 'よくある質問' }]} />
        <PriceComparisonTable gyms={gyms} areaName="大阪" />
        <div className="space-y-6 mt-8">{gyms.map((gym: any, i: number) => (<GymCard key={i} gym={gym} index={i} />))}</div>
        <section className="mt-12 bg-white border border-gray-200 rounded-xl p-6" id="market">
          <h2 className="text-xl font-bold text-site-text mb-4">大阪エリアの料金相場</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-3">大阪のパーソナルジム相場は東京より約3万円安い傾向。梅田・天満エリアに安いジムが集中。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">月額制の相場</div><div className="text-xl font-bold text-primary-600">7,600円〜33,000円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">短期集中の相場</div><div className="text-xl font-bold text-primary-600">10万〜20万円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">1回あたりの相場</div><div className="text-xl font-bold text-primary-600">3,500円〜10,230円</div></div>
          </div>
        </section>
        <section className="mt-8" id="faq">
          <h2 className="text-xl font-bold text-site-text mb-4">大阪のパーソナルジム よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq: any, i: number) => (<details key={i} className="bg-white border border-gray-200 rounded-xl group"><summary className="px-5 py-4 font-bold text-site-text cursor-pointer flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="text-primary-600 font-bold">Q.</span>{faq.question}</span><svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4"><p className="text-site-muted text-sm leading-relaxed pl-6">{faq.answer}</p></div></details>))}</div>
        </section>
        <RelatedAreas currentArea="osaka" />
      </main>
      <SiteFooter />
    </>
  )
}
