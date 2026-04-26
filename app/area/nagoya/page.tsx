import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { FAQSchema } from '@/components/FAQSchema'

export const metadata = {
  title: '【2026最新】名古屋の安いパーソナルジムおすすめ6選！料金比較',
  description: '【2026年4月最新】名古屋の安いパーソナルジム6選を徹底比較。入会金+総額で本当にコスパの良いジムがわかる。',
}

const gyms = [
  {
    "name": "エクササイズコーチ 名古屋栄店",
    "rating": 4.4,
    "reviewCount": 60,
    "price": "月4回 9,900円〜",
    "pricePerSession": "4,400円〜",
    "totalCost": "19,800円〜",
    "enrollmentFee": "19,800円（キャンペーン0円）",
    "sessionTime": "20分",
    "features": [
      "AI主導20分",
      "月額9,900円〜",
      "栄駅近",
      "入会金キャンペーン"
    ],
    "description": "AI主導20分トレーニング。名古屋エリア最安クラス。",
    "access": "栄駅 徒歩3分",
    "address": "愛知県名古屋市中区（栄駅徒歩3分）"
  },
  {
    "name": "かたぎり塾 名古屋店",
    "rating": 4.5,
    "reviewCount": 70,
    "price": "月4回 33,000円",
    "pricePerSession": "7,700円",
    "totalCost": "88,000円〜",
    "enrollmentFee": "22,000円",
    "sessionTime": "60分",
    "features": [
      "月額制",
      "縛りなし",
      "完全個室",
      "名古屋駅近"
    ],
    "description": "月額制・縛りなし。1回60分8回で59,400円のプランも。",
    "access": "名古屋駅 徒歩圏内",
    "address": "愛知県名古屋市（名古屋駅徒歩圏内）"
  },
  {
    "name": "BEYOND 名古屋店",
    "rating": 4.7,
    "reviewCount": 120,
    "price": "10回 102,300円〜",
    "pricePerSession": "10,230円",
    "totalCost": "102,300円〜",
    "enrollmentFee": "0円",
    "sessionTime": "55分",
    "features": [
      "入会金無料",
      "大会入賞トレーナー",
      "回数券制",
      "名古屋エリア"
    ],
    "description": "入会金常時無料。名古屋にも複数店舗展開。",
    "access": "名古屋駅 徒歩5分",
    "address": "愛知県名古屋市（名古屋駅徒歩5分）"
  },
  {
    "name": "24/7ワークアウト 名古屋店",
    "rating": 4.4,
    "reviewCount": 90,
    "price": "8回 65,120円〜",
    "pricePerSession": "8,140円",
    "totalCost": "106,120円〜",
    "enrollmentFee": "41,800円",
    "sessionTime": "50分",
    "features": [
      "3食食べるダイエット",
      "深夜24時",
      "全額返金保証",
      "名古屋駅近"
    ],
    "description": "3食食べるダイエット。深夜24時まで営業。",
    "access": "名古屋駅 徒歩5分",
    "address": "愛知県名古屋市（名古屋駅徒歩5分）"
  },
  {
    "name": "THE PERSONAL GYM 名古屋店",
    "rating": 4.4,
    "reviewCount": 50,
    "price": "月8回 61,600円〜",
    "pricePerSession": "7,700円",
    "totalCost": "145,200円〜",
    "enrollmentFee": "22,000円",
    "sessionTime": "60分",
    "features": [
      "医師連携",
      "理学療法士監修",
      "管理栄養士",
      "月額制"
    ],
    "description": "医師・理学療法士・管理栄養士の科学的アプローチ。",
    "access": "名古屋エリア",
    "address": "愛知県名古屋市（名古屋エリア）"
  },
  {
    "name": "チキンジム 名古屋栄店",
    "rating": 4.3,
    "reviewCount": 80,
    "price": "16回 140,200円〜",
    "pricePerSession": "8,763円",
    "totalCost": "175,200円〜",
    "enrollmentFee": "35,000円",
    "sessionTime": "60分",
    "features": [
      "完全個室",
      "プロテイン付",
      "レンタル全無料",
      "栄駅近"
    ],
    "description": "すべて込みの安心プラン。",
    "access": "栄駅 徒歩圏内",
    "address": "愛知県名古屋市中区（栄駅徒歩圏内）"
  }
]

const faqs = [
  {
    "question": "名古屋で一番安いパーソナルジムは？",
    "answer": "エクササイズコーチが月4回9,900円〜で最安クラス。"
  },
  {
    "question": "名古屋の相場は？",
    "answer": "2ヶ月で15〜25万円。17万以下なら安い。"
  },
  {
    "question": "名古屋駅と栄駅どちらが安い？",
    "answer": "どちらにもコスパ重視ジムがあり差はない。栄駅にはエクササイズコーチ・チキンジムあり。"
  }
]

export default function NagoyaPage() {
  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs} />
      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">名古屋の安いパーソナルジムおすすめ6選</h1>
          <p className="text-white/80 text-sm md:text-base">入会金+総額で比較！コスパ最強ジムがわかる【2026年4月最新】</p>
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <TableOfContents items={[{ id: 'price-comparison', label: '名古屋パーソナルジム料金比較表' }, ...gyms.map((g: any, i: number) => ({ id: `gym-${i + 1}`, label: `${i + 1}. ${g.name}` })), { id: 'market', label: '名古屋エリアの料金相場' }, { id: 'faq', label: 'よくある質問' }]} />
        <PriceComparisonTable gyms={gyms} areaName="名古屋" />
        <div className="space-y-6 mt-8">{gyms.map((gym: any, i: number) => (<GymCard key={i} gym={gym} index={i} />))}</div>
        <section className="mt-12 bg-white border border-gray-200 rounded-xl p-6" id="market">
          <h2 className="text-xl font-bold text-site-text mb-4">名古屋エリアの料金相場</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-3">名古屋の相場は2ヶ月15〜25万円。17万円以下なら安い部類。全国チェーンの進出で選択肢が増加。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">月額制の相場</div><div className="text-xl font-bold text-primary-600">9,900円〜33,000円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">短期集中の相場</div><div className="text-xl font-bold text-primary-600">10万〜20万円</div></div>
            <div className="bg-gray-50 rounded-lg p-4 text-center"><div className="text-xs text-site-muted mb-1">1回あたりの相場</div><div className="text-xl font-bold text-primary-600">4,400円〜10,230円</div></div>
          </div>
        </section>
        <section className="mt-8" id="faq">
          <h2 className="text-xl font-bold text-site-text mb-4">名古屋のパーソナルジム よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq: any, i: number) => (<details key={i} className="bg-white border border-gray-200 rounded-xl group"><summary className="px-5 py-4 font-bold text-site-text cursor-pointer flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="text-primary-600 font-bold">Q.</span>{faq.question}</span><svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4"><p className="text-site-muted text-sm leading-relaxed pl-6">{faq.answer}</p></div></details>))}</div>
        </section>
        <RelatedAreas currentArea="nagoya" />
      </main>
      <SiteFooter />
    </>
  )
}
