import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { FAQSchema } from '@/components/FAQSchema'

export const metadata = {
  title: '【2026最新】銀座の安いパーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】銀座の安いパーソナルジム6選を徹底比較。入会金+総額で本当にコスパの良いジムがわかる。',
}

const gyms = [
  {
    "name": "Apple GYM 銀座店",
    "rating": 4.3,
    "reviewCount": 75,
    "price": "4回 9,900円〜",
    "pricePerSession": "2,475円",
    "totalCost": "53,000円〜",
    "enrollmentFee": "33,000円",
    "sessionTime": "45分",
    "features": [
      "4回9,900円",
      "海外式ボディメイク",
      "食事指導込",
      "銀座駅徒歩3分"
    ],
    "description": "4回9,900円〜と業界最安値水準。銀座駅から徒歩3分。食事指導込み。",
    "access": "銀座駅 徒歩3分",
    "address": "東京都中央区（銀座駅徒歩3分）"
  },
  {
    "name": "エクササイズコーチ 銀座店",
    "rating": 4.4,
    "reviewCount": 65,
    "price": "月4回 9,900円〜",
    "pricePerSession": "4,400円〜",
    "totalCost": "19,800円〜",
    "enrollmentFee": "19,800円（キャンペーン0円）",
    "sessionTime": "20分",
    "features": [
      "AI主導20分",
      "月額9,900円〜",
      "銀座駅徒歩2分",
      "入会金キャンペーン"
    ],
    "description": "AI主導20分トレーニング。銀座駅徒歩2分の好立地。",
    "access": "銀座駅 徒歩2分",
    "address": "東京都中央区（銀座駅徒歩2分）"
  },
  {
    "name": "ASPI 銀座店",
    "rating": 4.6,
    "reviewCount": 60,
    "price": "月2回 7,600円〜",
    "pricePerSession": "3,500円〜",
    "totalCost": "15,200円〜",
    "enrollmentFee": "55,000円（体験当日0円）",
    "sessionTime": "30分",
    "features": [
      "米国資格保有",
      "月額7,600円〜",
      "食事指導込",
      "銀座駅徒歩5分"
    ],
    "description": "月2回7,600円〜で食事指導込み。体験当日入会で入会金無料。",
    "access": "銀座駅 徒歩5分",
    "address": "東京都中央区（銀座駅徒歩5分）"
  },
  {
    "name": "BEYOND 銀座店",
    "rating": 4.7,
    "reviewCount": 130,
    "price": "10回 102,300円〜",
    "pricePerSession": "10,230円",
    "totalCost": "102,300円〜",
    "enrollmentFee": "0円",
    "sessionTime": "55分",
    "features": [
      "入会金無料",
      "大会入賞トレーナー",
      "回数券制",
      "銀座エリア"
    ],
    "description": "入会金常時無料。大会入賞経験者のハイクオリティ指導。",
    "access": "銀座駅 徒歩5分",
    "address": "東京都中央区（銀座駅徒歩5分）"
  },
  {
    "name": "24/7ワークアウト 新橋・銀座店",
    "rating": 4.4,
    "reviewCount": 100,
    "price": "8回 65,120円〜",
    "pricePerSession": "8,140円",
    "totalCost": "106,120円〜",
    "enrollmentFee": "41,800円",
    "sessionTime": "50分",
    "features": [
      "3食食べるダイエット",
      "深夜24時まで",
      "全額返金保証",
      "新橋・銀座"
    ],
    "description": "3食食べて痩せるメソッド。深夜24時まで営業で忙しい方に。全額返金保証あり。",
    "access": "新橋駅 徒歩3分",
    "address": "東京都港区（新橋駅徒歩3分）"
  },
  {
    "name": "かたぎり塾 銀座店",
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
      "銀座エリア"
    ],
    "description": "月額制で縛りなし。完全個室60分マンツーマン指導。",
    "access": "銀座駅 徒歩圏内",
    "address": "東京都中央区（銀座駅徒歩圏内）"
  }
]

const faqs = [
  {
    "question": "銀座で一番安いパーソナルジムは？",
    "answer": "ASPIが月2回7,600円〜と最安。Apple GYMも4回9,900円〜。"
  },
  {
    "question": "銀座のパーソナルジムの相場は？",
    "answer": "1回7,000〜20,000円が一般的。高級エリアだが安価なジムも増加中。"
  },
  {
    "question": "仕事帰りに通えるジムは？",
    "answer": "24/7ワークアウトは深夜24時まで営業。チキンジムも23時まで。"
  }
]

export default function GinzaPage() {
  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs} />
      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">銀座の安いパーソナルジムおすすめ6選</h1>
          <p className="text-white/80 text-sm md:text-base">入会金+総額で比較！コスパ最強ジムがわかる【2026年4月最新】</p>
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <TableOfContents items={[{ id: 'price-comparison', label: '銀座パーソナルジム料金比較表' }, ...gyms.map((g: any, i: number) => ({ id: `gym-${i + 1}`, label: `${i + 1}. ${g.name}` })), { id: 'market', label: '銀座エリアの料金相場' }, { id: 'faq', label: 'よくある質問' }]} />
        <PriceComparisonTable gyms={gyms} areaName="銀座" />
        <div className="space-y-6 mt-8">{gyms.map((gym: any, i: number) => (<GymCard key={i} gym={gym} index={i} />))}</div>
        <section className="mt-12 bg-white border border-gray-200 rounded-xl p-6" id="market">
          <h2 className="text-xl font-bold text-site-text mb-4">銀座エリアの料金相場</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-3">銀座は高級エリアだが、Apple GYMやASPIなど手頃な価格のジムも出店。仕事帰りに通う人が多い。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">月額制の相場</div><div className="text-xl font-bold text-primary-600">7,600円〜33,000円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">短期集中の相場</div><div className="text-xl font-bold text-primary-600">10万〜25万円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">1回あたりの相場</div><div className="text-xl font-bold text-primary-600">2,475円〜10,230円</div></div>
          </div>
        </section>
        <section className="mt-8" id="faq">
          <h2 className="text-xl font-bold text-site-text mb-4">銀座のパーソナルジム よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq: any, i: number) => (<details key={i} className="bg-white border border-gray-200 rounded-xl group"><summary className="px-5 py-4 font-bold text-site-text cursor-pointer flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="text-primary-600 font-bold">Q.</span>{faq.question}</span><svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4"><p className="text-site-muted text-sm leading-relaxed pl-6">{faq.answer}</p></div></details>))}</div>
        </section>
        <RelatedAreas currentArea="ginza" />
      </main>
      <SiteFooter />
    </>
  )
}
