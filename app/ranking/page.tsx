import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { GymCard } from '@/components/GymCard'
import { TableOfContents } from '@/components/TableOfContents'
import { FAQSchema } from '@/components/FAQSchema'

export const metadata = {
  title: 'コスパ最強パーソナルジムTOP10ランキング【2026年最新】',
  description: '【2026年最新】1回あたり単価・総額で比較したコスパ最強パーソナルジムランキングTOP10。入会金+セッション+食事指導の総額で本当に安いジムがわかる。',
}

const gyms = [
  {
    name: 'ASPI（アスピ）',
    rating: 4.6,
    reviewCount: 180,
    price: '月2回 7,600円〜',
    pricePerSession: '3,500円〜',
    totalCost: '15,200円〜（2ヶ月・入会金0円時）',
    enrollmentFee: '55,000円（体験当日0円）',
    sessionTime: '30分',
    features: ['米国資格保有', '月額制', '食事指導付', '30分集中'],
    description: '全トレーナーが米国の難関資格（NSCA-CPT等）を保有。30分の集中トレーニングで効率的にボディメイク。月額7,600円〜と業界最安クラスで、体験当日入会なら入会金55,000円が無料に。食事指導もプランに含まれるため、追加費用がかかりにくいのが大きな魅力。',
    access: '東京・横浜・名古屋など全国展開',
    popularPlan: { name: 'マンスリープランA（月2回）', description: '月2回×30分。食事指導込みで月額7,600円。初めてパーソナルジムに通う方に最適。', price: '月額 7,600円（税込）' },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日 9:00〜21:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ウェアレンタル'] },
  },
  {
    name: 'エクササイズコーチ',
    rating: 4.4,
    reviewCount: 320,
    price: '月4回 9,900円〜',
    pricePerSession: '4,400円〜',
    totalCost: '19,800円〜（2ヶ月・入会金0円時）',
    enrollmentFee: '19,800円（キャンペーン0円）',
    sessionTime: '20分',
    features: ['AI主導', '20分完結', '月額制', '全国80店舗'],
    description: 'アメリカ発のAIマシン主導パーソナルジム。独自のAIマシンが最適な負荷を自動調整し、たった20分で効率的なトレーニングを実現。人件費を抑えることで月4回9,900円〜という圧倒的な低価格を実現。入会金無料キャンペーンも頻繁に実施。',
    access: '全国80店舗以上',
    popularPlan: { name: 'パートナー・デイプラン（月4回）', description: 'コーチ1名に対し2名のペアトレーニング。平日日中限定で最安。', price: '月額 9,900円（税込）' },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日 10:00〜20:00', closed: '不定休', facilities: ['AIマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'ELEMENT（エレメント）',
    rating: 4.5,
    reviewCount: 150,
    price: '月額 38,280円〜',
    pricePerSession: '1,459円〜',
    totalCost: '109,560円〜（2ヶ月）',
    enrollmentFee: '33,000円',
    sessionTime: '30分',
    features: ['通い放題', '30分', 'レンタル無料', '東京中心'],
    description: '月額定額で通い放題のパーソナルジム。1回30分のマンツーマン指導が何度でも受けられ、週3回通えば1回あたり約1,459円と圧倒的なコスパ。ウェア・タオル・シューズなどレンタル品がすべて無料で手ぶらOK。',
    access: '東京を中心に展開',
    popularPlan: { name: 'フルタイム通い放題プラン', description: '全時間帯で通い放題。通えば通うほどお得に。', price: '月額 38,280円（税込）〜' },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日 10:00〜20:00', closed: '不定休', facilities: ['完全個室', 'レンタル無料', 'シャワー'] },
  },
  {
    name: 'かたぎり塾',
    rating: 4.5,
    reviewCount: 250,
    price: '月4回 33,000円〜',
    pricePerSession: '7,700円',
    totalCost: '88,000円〜（2ヶ月）',
    enrollmentFee: '22,000円',
    sessionTime: '60分',
    features: ['月額制', '期間縛りなし', '完全個室', '全国160店舗'],
    description: '「続けやすい価格」にこだわった月額制パーソナルジム。期間の縛りや解約金が一切なく、最低1ヶ月から利用可能。全国160店舗以上を展開し、完全個室でのマンツーマン指導を月4回33,000円で提供。LINE食事指導は2週間11,000円のオプション。',
    access: '全国160店舗以上',
    popularPlan: { name: '月4回プラン', description: '週1回ペースで無理なく続けられる人気プラン。完全個室60分。', price: '月額 33,000円（税込）' },
    basicInfo: { hours: '店舗により異なる', closed: '店舗により異なる', facilities: ['完全個室', 'シャワー', '更衣室'] },
  },
  {
    name: 'チキンジム',
    rating: 4.3,
    reviewCount: 280,
    price: '16回 140,200円〜',
    pricePerSession: '8,763円',
    totalCost: '175,200円〜',
    enrollmentFee: '35,000円',
    sessionTime: '60分',
    features: ['完全個室', 'プロテイン付', 'ウェアレンタル', 'LINE相談'],
    description: '完全個室のマンツーマントレーニングに加え、ウェア・シューズ・タオルのレンタル、水素水、プロテインがすべて無料。さらに期間中のLINE無制限相談も付いた充実のサービス。分割払いなら月3,000円台から始められる。',
    access: '全国展開',
    popularPlan: { name: 'ボディメイクライト（16回）', description: '2ヶ月16回の集中プログラム。レンタル・プロテイン・LINE相談すべて込み。', price: '140,200円（税込）' },
    basicInfo: { hours: '7:00〜23:00', closed: '年末年始', facilities: ['完全個室', 'シャワー', 'プロテイン', 'ウェアレンタル'] },
  },
  {
    name: 'BEYOND（ビヨンド）',
    rating: 4.7,
    reviewCount: 400,
    price: '10回 102,300円〜',
    pricePerSession: '10,230円',
    totalCost: '102,300円〜',
    enrollmentFee: '0円',
    sessionTime: '55分',
    features: ['入会金無料', '大会入賞トレーナー', '回数券制', '全国100店舗'],
    description: '入会金が常時無料で初期費用を抑えられるのが最大の魅力。トレーナー全員がボディメイクコンテスト入賞経験者という質の高さ。回数券制で自分のペースで通え、有効期限は1年間。全国100店舗以上を展開。',
    access: '全国100店舗以上',
    popularPlan: { name: 'STANDARD10（回数券10回）', description: '入会金0円+10回分の回数券。有効期限1年で自分のペースで通える。', price: '102,300円（税込）' },
    basicInfo: { hours: '10:00〜22:00', closed: '年末年始', facilities: ['完全個室', 'シャワー', 'ウェアレンタル'] },
  },
  {
    name: '24/7ワークアウト',
    rating: 4.4,
    reviewCount: 350,
    price: '8回 65,120円〜',
    pricePerSession: '8,140円',
    totalCost: '106,120円〜',
    enrollmentFee: '41,800円',
    sessionTime: '50分',
    features: ['3食食べるダイエット', '深夜24時まで', '全国展開', '全額返金保証'],
    description: '「3食食べて痩せる」独自メソッドが特徴の大手パーソナルジム。朝7時から深夜24時まで営業で忙しい人も通いやすい。全額返金保証制度があり、効果に自信あり。1回50分×8回で65,120円からスタート可能。',
    access: '全国70店舗以上',
    popularPlan: { name: '月8回プラン', description: '1回50分のマンツーマン指導。3食食べる食事メソッド付き。', price: '月額 65,120円（税込）〜' },
    basicInfo: { hours: '7:00〜24:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ウェアレンタル', 'ドリンク'] },
  },
  {
    name: 'Apple GYM',
    rating: 4.3,
    reviewCount: 200,
    price: '4回 9,900円〜',
    pricePerSession: '2,475円',
    totalCost: '53,000円〜（2ヶ月8回+入会金）',
    enrollmentFee: '33,000円',
    sessionTime: '45分',
    features: ['4回9,900円〜', '海外式ボディメイク', '食事指導付', '駅チカ'],
    description: '4回9,900円〜と業界最安値水準の料金プラン。独自の海外式ボディメイクで骨格レベルから身体にアプローチ。食事指導もプランに含まれ、追加費用なし。都内を中心に駅チカの好立地に展開。',
    access: '東京・横浜を中心に展開',
    popularPlan: { name: '4回プラン', description: '月4回×45分。海外式ボディメイク+食事指導込み。', price: '9,900円（税込）' },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'ウェアレンタル'] },
  },
  {
    name: 'OUTLINE（アウトライン）',
    rating: 4.5,
    reviewCount: 170,
    price: '16回 184,800円〜',
    pricePerSession: '11,550円',
    totalCost: '184,800円〜',
    enrollmentFee: '0円〜',
    sessionTime: '75分',
    features: ['女性専用', '入会金0円', '生涯アフターフォロー', '完全個室'],
    description: '女性専用のパーソナルジム。入会金0円プランあり、卒業後も生涯無料でアフターフォローが受けられるのが最大の特徴。女性のボディメイクを熟知した専門トレーナーが1回75分のセッションで徹底指導。',
    access: '東京・横浜・千葉・埼玉',
    popularPlan: { name: 'ダイエットコース（16回）', description: '2ヶ月16回+食事指導+生涯アフターフォロー。', price: '184,800円（税込）' },
    basicInfo: { hours: '8:00〜23:00', closed: '不定休', facilities: ['女性専用', '完全個室', 'シャワー', 'ベビーサークル'] },
  },
  {
    name: 'THE PERSONAL GYM',
    rating: 4.4,
    reviewCount: 130,
    price: '月8回 61,600円〜',
    pricePerSession: '7,700円',
    totalCost: '145,200円〜（2ヶ月）',
    enrollmentFee: '22,000円',
    sessionTime: '60分',
    features: ['医師連携', '理学療法士監修', '管理栄養士', '月額制'],
    description: '医師・理学療法士・管理栄養士と連携した科学的アプローチが特徴。月額制で期間の縛りがなく、1回60分のセッションを月8回受けられる。医療的知見に基づいた安全で効果的なトレーニングを提供。',
    access: '東京・名古屋',
    popularPlan: { name: '月8回プラン', description: '医師・理学療法士監修の科学的トレーニング。管理栄養士による食事指導付き。', price: '月額 61,600円（税込）' },
    basicInfo: { hours: '7:00〜23:00', closed: '不定休', facilities: ['完全個室', 'シャワー', 'ウェアレンタル'] },
  },
]

const faqs = [
  { question: '1回あたり単価が安いジムはどこ？', answer: '通い放題のELEMENTは週3回通えば1回約1,459円と最安。回数制ではApple GYMが1回2,475円〜、ASPIが1回3,500円〜と安価です。' },
  { question: '入会金無料のジムはある？', answer: 'BEYONDは常時入会金無料。ASPIは体験当日入会で無料、エクササイズコーチはキャンペーンで無料になることがあります。' },
  { question: '食事指導込みで安いジムは？', answer: 'ASPIは月額7,600円〜で食事指導込み。Apple GYMも食事指導込みで4回9,900円〜。かたぎり塾はLINE食事指導が2週間11,000円のオプションです。' },
]

export default function RankingPage() {
  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs} />

      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">コスパ最強パーソナルジムTOP10</h1>
          <p className="text-white/80 text-sm md:text-base">1回あたり単価・総額で本当に安いパーソナルジムを徹底比較【2026年4月最新】</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <TableOfContents items={gyms.map((g, i) => ({ id: `gym-${i + 1}`, label: `${i + 1}位 ${g.name}（1回${g.pricePerSession}）` }))} />

        <div className="space-y-6">
          {gyms.map((gym, i) => (
            <GymCard key={i} gym={gym} index={i} />
          ))}
        </div>

        {/* FAQ */}
        <section className="mt-12" id="faq">
          <h2 className="text-xl font-bold text-site-text mb-4">よくある質問</h2>
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
      </main>

      <SiteFooter />
    </>
  )
}
