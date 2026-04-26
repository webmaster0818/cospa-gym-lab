import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { FAQSchema } from '@/components/FAQSchema'

export const metadata = {
  title: '【2026最新】札幌の安いパーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】札幌の安いパーソナルジム6選を徹底比較。入会金+総額で本当にコスパの良いジムがわかる。',
}

const gyms = [
  {
    "name": "BEYOND 札幌店",
    "rating": 4.7,
    "reviewCount": 90,
    "price": "10回 102,300円〜",
    "pricePerSession": "10,230円",
    "totalCost": "102,300円〜",
    "enrollmentFee": "0円",
    "sessionTime": "55分",
    "features": [
      "入会金無料",
      "大会入賞トレーナー",
      "回数券制",
      "札幌4店舗"
    ],
    "description": "入会金常時無料。札幌に4店舗展開で通いやすい。大会入賞トレーナーの質の高い指導。",
    "access": "札幌駅・大通エリア",
    "address": "北海道札幌市（札幌駅・大通エリア）"
  },
  {
    "name": "エクササイズコーチ 札幌店",
    "rating": 4.4,
    "reviewCount": 45,
    "price": "月4回 9,900円〜",
    "pricePerSession": "4,400円〜",
    "totalCost": "19,800円〜",
    "enrollmentFee": "19,800円（キャンペーン0円）",
    "sessionTime": "20分",
    "features": [
      "AI主導20分",
      "月額9,900円〜",
      "札幌駅近",
      "入会金キャンペーン"
    ],
    "description": "AI主導20分トレーニング。札幌エリア最安クラス。",
    "access": "札幌駅 徒歩5分",
    "address": "北海道札幌市（札幌駅徒歩5分）"
  },
  {
    "name": "24/7ワークアウト 札幌店",
    "rating": 4.4,
    "reviewCount": 70,
    "price": "8回 65,120円〜",
    "pricePerSession": "8,140円",
    "totalCost": "106,120円〜",
    "enrollmentFee": "41,800円",
    "sessionTime": "50分",
    "features": [
      "3食食べるダイエット",
      "深夜24時",
      "全額返金保証",
      "札幌駅近"
    ],
    "description": "3食食べるダイエット。深夜24時まで営業。全額返金保証。",
    "access": "札幌駅 徒歩5分",
    "address": "北海道札幌市（札幌駅徒歩5分）"
  },
  {
    "name": "eviGym 札幌店",
    "rating": 4.2,
    "reviewCount": 35,
    "price": "16回 110,000円〜",
    "pricePerSession": "6,875円",
    "totalCost": "110,000円〜",
    "enrollmentFee": "0円",
    "sessionTime": "60分",
    "features": [
      "入会金無料",
      "16回11万円",
      "札幌駅近",
      "コスパ重視"
    ],
    "description": "入会金無料で16回約11万円。札幌エリアでコスパ抜群。",
    "access": "札幌エリア",
    "address": "北海道札幌市（札幌エリア）"
  },
  {
    "name": "チキンジム 札幌店",
    "rating": 4.3,
    "reviewCount": 60,
    "price": "16回 140,200円〜",
    "pricePerSession": "8,763円",
    "totalCost": "175,200円〜",
    "enrollmentFee": "35,000円",
    "sessionTime": "60分",
    "features": [
      "完全個室",
      "プロテイン付",
      "レンタル全無料",
      "札幌駅近"
    ],
    "description": "すべて込みの安心プラン。",
    "access": "札幌駅 徒歩圏内",
    "address": "北海道札幌市（札幌駅徒歩圏内）"
  },
  {
    "name": "EXIM+ 札幌店",
    "rating": 4.1,
    "reviewCount": 30,
    "price": "月額 13,200円〜",
    "pricePerSession": "2,115円〜",
    "totalCost": "59,400円〜（2ヶ月）",
    "enrollmentFee": "33,000円",
    "sessionTime": "セミパーソナル",
    "features": [
      "月額13,200円〜",
      "セミパーソナル",
      "札幌発",
      "通いやすい"
    ],
    "description": "札幌発のセミパーソナルジム。月13,200円〜で1回あたり2,115円と格安。少人数制で指導が行き届く。",
    "access": "札幌エリア",
    "address": "北海道札幌市（札幌エリア）"
  }
]

const faqs = [
  {
    "question": "札幌で一番安いパーソナルジムは？",
    "answer": "エクササイズコーチが月4回9,900円〜で最安。EXIM+は月13,200円〜のセミパーソナル。"
  },
  {
    "question": "札幌の相場は？",
    "answer": "2ヶ月で15〜25万円。東京より安め。"
  },
  {
    "question": "BEYONDは札幌に何店舗ある？",
    "answer": "4店舗あり、通いやすい場所を選べます。入会金は常時無料。"
  }
]

export default function SapporoPage() {
  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs} />
      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">札幌の安いパーソナルジムおすすめ6選</h1>
          <p className="text-white/80 text-sm md:text-base">入会金+総額で比較！コスパ最強ジムがわかる【2026年4月最新】</p>
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <TableOfContents items={[{ id: 'price-comparison', label: '札幌パーソナルジム料金比較表' }, ...gyms.map((g: any, i: number) => ({ id: `gym-${i + 1}`, label: `${i + 1}. ${g.name}` })), { id: 'market', label: '札幌エリアの料金相場' }, { id: 'faq', label: 'よくある質問' }]} />
        <PriceComparisonTable gyms={gyms} areaName="札幌" />
        <div className="space-y-6 mt-8">{gyms.map((gym: any, i: number) => (<GymCard key={i} gym={gym} index={i} />))}</div>
        <section className="mt-12 bg-white border border-gray-200 rounded-xl p-6" id="market">
          <h2 className="text-xl font-bold text-site-text mb-4">札幌エリアの料金相場</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-3">札幌は東京より安め。BEYONDが4店舗展開、EXIM+など地元密着型ジムもありバリエーション豊富。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">月額制の相場</div><div className="text-xl font-bold text-primary-600">9,900円〜33,000円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">短期集中の相場</div><div className="text-xl font-bold text-primary-600">10万〜18万円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">1回あたりの相場</div><div className="text-xl font-bold text-primary-600">2,115円〜10,230円</div></div>
          </div>
        </section>
        <section className="mt-8" id="faq">
          <h2 className="text-xl font-bold text-site-text mb-4">札幌のパーソナルジム よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq: any, i: number) => (<details key={i} className="bg-white border border-gray-200 rounded-xl group"><summary className="px-5 py-4 font-bold text-site-text cursor-pointer flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="text-primary-600 font-bold">Q.</span>{faq.question}</span><svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4"><p className="text-site-muted text-sm leading-relaxed pl-6">{faq.answer}</p></div></details>))}</div>
        </section>
        <RelatedAreas currentArea="sapporo" />
      </main>
      <SiteFooter />
    </>
  )
}
