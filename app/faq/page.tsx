import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'
import Link from 'next/link'

export const metadata = {
  title: 'パーソナルジムのよくある質問15選【料金・コスパ・選び方】',
  description: 'パーソナルジムの料金相場、安いジムの見つけ方、入会金無料のジム、食事指導の有無など、コスパに関する疑問15問に回答。',
}

const faqs = [
  { question: 'パーソナルジムの料金相場はいくら？', answer: '2ヶ月16回コースで20〜35万円が一般的な相場です。ただし月額制なら月1万円〜3万円台、通い放題なら月3〜4万円台で通えるジムもあります。入会金は0円〜55,000円と幅があります。' },
  { question: '安いパーソナルジムは効果がない？', answer: 'いいえ、安くても効果的なジムは存在します。エクササイズコーチはAIマシンで人件費を抑え、かたぎ��塾は月額制でコストを抑えています。安さの理由が「質の低下」ではなく「効率化」によるものかを確認しましょう。' },
  { question: '入会金無料のパーソナルジムはある？', answer: 'BEYONDは常時入会金無料です。ASPIは体験当日入会で入会金55,000円が無料に。エクササイズコーチはキャンペーンで入会金19,800円が無料になることがあります。' },
  { question: '月額1万円以下で通えるジムは？', answer: 'エクササイズコーチのパートナー・デイプランは月4回9,900円〜。ASPIのマンスリープランは月2回7,600円〜。Apple GYMは4回9,900円〜で利用できます。' },
  { question: '通い放題のパーソナルジムのコスパは？', answer: 'ELEMENTは月額38,280円〜で通い放題。週3回通えば1回あたり約1,459円と最もコスパが高くなります。ただし、実際に週3回以上通える生活リズムかどうかを事前に検討しましょう。' },
  { question: '食事指導込みで安いジムは？', answer: 'ASPIは月額7,600円〜で食事指導込み。Apple GYMも食事指導込みで4回9,900円〜。チキンジムはLINE無制限相談がコース内に含まれます。かたぎり塾はLINE食事指導が2週間11,000円のオプションです。' },
  { question: '短期集中と月額制、どちらがコスパ良い？', answer: '短期間で結果を出したいなら短期集中コース、長期的に運動習慣をつけたいなら月額制がおすすめです。月額制は縛りがなく解約しやすいメリットがあります。' },
  { question: '分割払いは本当にお得？', answer: '分割払いは月々の負担を軽くできますが、手数料がかかる場合があります。チキンジムは年利0.8%と低めですが、信販会社によっては年利15%以上になることも。総支払額を必ず確認しましょう。' },
  { question: 'ジムに通う頻度はどのくらいが理想？', answer: '初心者は週1〜2回、ダイエット目的なら週2〜3回が推奨されます。通い放題プランの場合は週3回以上通えるとコスパが最大化されます。' },
  { question: '無料体験は何社くらい行くべき？', answer: '最低でも2〜3社の無料体験に参加することをおすすめします。トレーナーとの相性、施設の雰囲気、通いやすさは実際に行かないとわかりません。' },
  { question: 'セッション時間が短いジムは効果が薄い？', answer: '必ずしもそうではありません。エクササイズコーチは20分でAIが最適な負荷を設定し効率的にトレーニング。ASPIやELEMENTの30分プランも集中的な指導で効果を出しています。' },
  { question: '女性専用のコスパ良いジムは？', answer: 'OUTLINE（アウトライン）は入会金0円プランあり・生涯アフターフォロー付きで長期的なコスパが優れています。16回184,800円〜で、卒業後も無料でサポートが受けられます。' },
  { question: '途中解約はできる？違約金は？', answer: 'かたぎり��・ASPI・エクササイズコーチ・ELEMENTは期間縛りなしで解約金0円。BEYONDは回数券制で有効期限1年。短期集中コースの途中解約は条件が異なるため、契約前に必ず確認しましょう。' },
  { question: 'パーソナルジムとフィットネスジム、どちらがコスパ良い？', answer: '月額費用だけならフィットネスジム（月5,000〜10,000円）が安いですが、自己流では効果が出にくく長期化しがち。パーソナルジムは短期間で結果が出やすく、トータルの費用対効果で見るとパーソナルジムの方がコスパ良い場合も多いです。' },
  { question: 'オンラインパーソナルトレーニングは安い？', answer: 'オンラインは月額1万円〜3万円程度と対面より安い傾向があります。ただし器具の準備が必要で、フォーム修正の精度は対面に劣ります。コスト重視なら選択肢の一つですが、初心者は対面がおすすめです。' },
]

export default function FAQPage() {
  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs} />

      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">よくある質問（FAQ）</h1>
          <p className="text-white/80 text-sm md:text-base">パーソナルジムの料金・コスパに関する15の疑問に回答</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white border border-gray-200 rounded-xl group" open={i < 3}>
              <summary className="px-5 py-4 font-bold text-site-text cursor-pointer flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="text-primary-600 font-bold shrink-0">Q{i + 1}.</span>
                  {faq.question}
                </span>
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4">
                <p className="text-site-muted text-sm leading-relaxed pl-8">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/ranking/" className="cta-button inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all">
            コスパランキングTOP10を見る
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
