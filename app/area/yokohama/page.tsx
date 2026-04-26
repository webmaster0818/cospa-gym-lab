import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { FAQSchema } from '@/components/FAQSchema'

export const metadata = {
  title: '【2026最新】横浜の安いパーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】横浜の安いパーソナルジム6選を徹底比較。入会金+総額で本当にコスパの良いジムがわかる。',
}

const gyms = [
  {
    "name": "ASPI 横浜店",
    "rating": 4.6,
    "reviewCount": 65,
    "price": "月2回 7,600円〜",
    "pricePerSession": "3,500円〜",
    "totalCost": "15,200円〜",
    "enrollmentFee": "55,000円（体験当日0円）",
    "sessionTime": "30分",
    "features": [
      "米国資格保有",
      "月額7,600円〜",
      "食事指導込",
      "横浜駅徒歩5分"
    ],
    "description": "月2回7,600円〜で食事指導込み。体験当日入会で入会金無料。",
    "access": "横浜駅 徒歩5分",
    "address": "神奈川県横浜市（横浜駅徒歩5分）"
  },
  {
    "name": "エクササイズコーチ 横浜店",
    "rating": 4.4,
    "reviewCount": 70,
    "price": "月4回 9,900円〜",
    "pricePerSession": "4,400円〜",
    "totalCost": "19,800円〜",
    "enrollmentFee": "19,800円（キャンペーン0円）",
    "sessionTime": "20分",
    "features": [
      "AI主導20分",
      "月額9,900円〜",
      "横浜駅近",
      "入会金キャンペーン"
    ],
    "description": "AI主導20分トレーニング。横浜エリア最安クラス。",
    "access": "横浜駅 徒歩3分",
    "address": "神奈川県横浜市（横浜駅徒歩3分）"
  },
  {
    "name": "ELEMENT 横浜店",
    "rating": 4.5,
    "reviewCount": 50,
    "price": "月額 39,800円〜",
    "pricePerSession": "1,527円〜",
    "totalCost": "112,600円〜",
    "enrollmentFee": "33,000円",
    "sessionTime": "30分",
    "features": [
      "通い放題",
      "30分",
      "レンタル無料",
      "横浜駅近"
    ],
    "description": "月額定額で通い放題。週3回通えば1回約1,527円の圧倒的コスパ。",
    "access": "横浜駅 徒歩5分",
    "address": "神奈川県横浜市（横浜駅徒歩5分）"
  },
  {
    "name": "Apple GYM 横浜店",
    "rating": 4.3,
    "reviewCount": 80,
    "price": "4回 9,900円〜",
    "pricePerSession": "2,475円",
    "totalCost": "53,000円〜",
    "enrollmentFee": "33,000円",
    "sessionTime": "45分",
    "features": [
      "4回9,900円",
      "海外式ボディメイク",
      "食事指導込",
      "横浜駅近"
    ],
    "description": "4回9,900円〜の業界最安値水準。食事指導込み。",
    "access": "横浜駅 徒歩5分",
    "address": "神奈川県横浜市（横浜駅徒歩5分）"
  },
  {
    "name": "BEYOND 横浜店",
    "rating": 4.7,
    "reviewCount": 140,
    "price": "10回 102,300円〜",
    "pricePerSession": "10,230円",
    "totalCost": "102,300円〜",
    "enrollmentFee": "0円",
    "sessionTime": "55分",
    "features": [
      "入会金無料",
      "大会入賞トレーナー",
      "回数券制",
      "横浜エリア"
    ],
    "description": "入会金常時無料。大会入賞トレーナーの質の高い指導。",
    "access": "横浜駅 徒歩5分",
    "address": "神奈川県横浜市（横浜駅徒歩5分）"
  },
  {
    "name": "OUTLINE 横浜店",
    "rating": 4.5,
    "reviewCount": 60,
    "price": "16回 184,800円〜",
    "pricePerSession": "11,550円",
    "totalCost": "184,800円〜",
    "enrollmentFee": "0円〜",
    "sessionTime": "75分",
    "features": [
      "女性専用",
      "入会金0円",
      "生涯アフターフォロー",
      "横浜駅近"
    ],
    "description": "女性専用。入会金0円プラン＋生涯無料アフターフォロー。",
    "access": "横浜駅 徒歩5分",
    "address": "神奈川県横浜市（横浜駅徒歩5分）"
  }
]

const faqs = [
  {
    "question": "横浜で一番安いパーソナルジムは？",
    "answer": "ASPIが月2回7,600円〜で最安。Apple GYMも4回9,900円〜。"
  },
  {
    "question": "横浜の相場は？",
    "answer": "東京より安め。2ヶ月の合計約20万円で17万以下なら安い。"
  },
  {
    "question": "通い放題のジムは？",
    "answer": "ELEMENT横浜店が月額39,800円〜で通い放題。週3回で1回約1,527円。"
  }
]

export default function YokohamaPage() {
  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs} />
      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">横浜の安いパーソナルジムおすすめ6選</h1>
          <p className="text-white/80 text-sm md:text-base">入会金+総額で比較！コスパ最強ジムがわかる【2026年4月最新】</p>
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <TableOfContents items={[{ id: 'price-comparison', label: '横浜パーソナルジム料金比較表' }, ...gyms.map((g: any, i: number) => ({ id: `gym-${i + 1}`, label: `${i + 1}. ${g.name}` })), { id: 'market', label: '横浜エリアの料金相場' }, { id: 'faq', label: 'よくある質問' }]} />
        <PriceComparisonTable gyms={gyms} areaName="横浜" />
        <div className="space-y-6 mt-8">{gyms.map((gym: any, i: number) => (<GymCard key={i} gym={gym} index={i} />))}</div>
        <section className="mt-12 bg-white border border-gray-200 rounded-xl p-6" id="market">
          <h2 className="text-xl font-bold text-site-text mb-4">横浜エリアの料金相場</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-3">横浜は東京より料金相場がやや安め。ELEMENT通い放題など横浜ならではの選択肢もあり。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">月額制の相場</div><div className="text-xl font-bold text-primary-600">7,600円〜39,800円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">短期集中の相場</div><div className="text-xl font-bold text-primary-600">10万〜20万円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">1回あたりの相場</div><div className="text-xl font-bold text-primary-600">1,527円〜11,550円</div></div>
          </div>
        </section>
        <section className="mt-8" id="faq">
          <h2 className="text-xl font-bold text-site-text mb-4">横浜のパーソナルジム よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq: any, i: number) => (<details key={i} className="bg-white border border-gray-200 rounded-xl group"><summary className="px-5 py-4 font-bold text-site-text cursor-pointer flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="text-primary-600 font-bold">Q.</span>{faq.question}</span><svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4"><p className="text-site-muted text-sm leading-relaxed pl-6">{faq.answer}</p></div></details>))}</div>
        </section>
        <RelatedAreas currentArea="yokohama" />
      </main>
      <SiteFooter />
    </>
  )
}
