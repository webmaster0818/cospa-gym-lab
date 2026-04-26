import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata = {
  title: 'コスパで失敗しないパーソナルジムの選び方ガイド【2026年版】',
  description: '安いだけで選ぶと失敗する？入会金・セッション回数・食事指導・解約条件まで含めた本当のコスパの見極め方を徹底解説。',
}

export default function GuidePage() {
  return (
    <>
      <Navigation />

      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">コスパで失敗しない選び方</h1>
          <p className="text-white/80 text-sm md:text-base">「安い」だけで選ぶと失敗する理由と、本当のコスパの見極め方</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
        <article className="space-y-8">
          {/* Point 1 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6" id="point1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold">1</span>
              <h2 className="text-xl font-bold text-site-text">「月額」だけで比較しない</h2>
            </div>
            <p className="text-site-muted text-sm leading-relaxed mb-4">
              パーソナルジムの広告では「月額9,900円〜」のように安い数字が目立ちますが、実際には以下の費用が別途かかることがあります。
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-red-700 text-sm mb-2">見落としがちな隠れコスト</h3>
              <ul className="space-y-1.5 text-sm text-red-600">
                <li>・入会金（0円〜55,000円と幅が広い）</li>
                <li>・食事指導費（月額5,000円〜30,000円のオプション）</li>
                <li>・コース料金の分割手数料（年利0.8%〜15%）</li>
                <li>・プロテイン・サプリメント費</li>
                <li>・ウェア・タオルレンタル費</li>
                <li>・解約違約金（途中解約で数万円かかるケースも）</li>
              </ul>
            </div>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
              <h3 className="font-bold text-primary-700 text-sm mb-2">正しい比較方法</h3>
              <p className="text-primary-700 text-sm">
                <strong>入会金 + セッション料金 + 食事指導費 + その他オプション = 「総額」</strong>で比較しましょう。
                当サイトの<Link href="/cost/" className="underline font-bold">料金徹底比較ページ</Link>では、すべての費用を含めた総額で比較しています。
              </p>
            </div>
          </section>

          {/* Point 2 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6" id="point2">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold">2</span>
              <h2 className="text-xl font-bold text-site-text">「1回あたり単価」で比較する</h2>
            </div>
            <p className="text-site-muted text-sm leading-relaxed mb-4">
              月額制・回数券制・通い放題など、料金体系はジムによって異なります。公平に比較するには「1回あたり単価」が最も有効です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-3 py-2 text-left font-bold">タイプ</th>
                    <th className="px-3 py-2 text-left font-bold">特徴</th>
                    <th className="px-3 py-2 text-right font-bold">1回単価の目安</th>
                    <th className="px-3 py-2 text-left font-bold">おすすめの人</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 font-bold">月額制</td>
                    <td className="px-3 py-2 text-site-muted">毎月定額・縛りなし</td>
                    <td className="px-3 py-2 text-right font-bold text-primary-600">3,500円〜8,000円</td>
                    <td className="px-3 py-2 text-site-muted text-xs">長期的に通いたい人</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 font-bold">回数券制</td>
                    <td className="px-3 py-2 text-site-muted">まとめ買いで割安</td>
                    <td className="px-3 py-2 text-right font-bold text-primary-600">8,000円〜12,000円</td>
                    <td className="px-3 py-2 text-site-muted text-xs">自分のペースで通いたい人</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 font-bold">通い放題</td>
                    <td className="px-3 py-2 text-site-muted">定額で無制限</td>
                    <td className="px-3 py-2 text-right font-bold text-primary-600">1,459円〜3,000円</td>
                    <td className="px-3 py-2 text-site-muted text-xs">頻繁に通える人</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">短期集中</td>
                    <td className="px-3 py-2 text-site-muted">2〜3ヶ月のコース</td>
                    <td className="px-3 py-2 text-right font-bold text-primary-600">8,000円〜15,000円</td>
                    <td className="px-3 py-2 text-site-muted text-xs">期限を決めて結果を出したい人</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Point 3 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6" id="point3">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold">3</span>
              <h2 className="text-xl font-bold text-site-text">「セッション時間」を確認する</h2>
            </div>
            <p className="text-site-muted text-sm leading-relaxed mb-4">
              1回あたりの料金が安くても、セッション時間が短ければ実質コスパが異なります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">20分</div>
                <div className="text-xs text-site-muted">エクササイズコーチ等</div>
                <div className="text-xs text-site-muted mt-1">AI主導で効率特化</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">30分</div>
                <div className="text-xs text-site-muted">ASPI・ELEMENT等</div>
                <div className="text-xs text-site-muted mt-1">集中型・通いやすい</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">50〜75分</div>
                <div className="text-xs text-site-muted">BEYOND・OUTLINE等</div>
                <div className="text-xs text-site-muted mt-1">じっくり指導</div>
              </div>
            </div>
          </section>

          {/* Point 4 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6" id="point4">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold">4</span>
              <h2 className="text-xl font-bold text-site-text">「解約条件」を事前に確認</h2>
            </div>
            <p className="text-site-muted text-sm leading-relaxed mb-4">
              コスパを考える上で「やめたいときにやめられるか」は非常に重要。月額制で縛りなしのジムを選ぶと安心です。
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-green-50 rounded-lg p-3">
                <span className="text-green-600 font-bold text-lg">○</span>
                <span className="text-sm text-green-700"><strong>縛りなし：</strong>かたぎり塾、ASPI、エクササイズコーチ、ELEMENT（いつでも解約可能）</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-50 rounded-lg p-3">
                <span className="text-yellow-600 font-bold text-lg">△</span>
                <span className="text-sm text-yellow-700"><strong>回数券制：</strong>BEYOND（有効期限1年・回数消化制）</span>
              </div>
              <div className="flex items-center gap-2 bg-red-50 rounded-lg p-3">
                <span className="text-red-600 font-bold text-lg">!</span>
                <span className="text-sm text-red-700"><strong>要確認：</strong>短期集中コースは途中解約の条件を必ず確認</span>
              </div>
            </div>
          </section>

          {/* Point 5 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6" id="point5">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold">5</span>
              <h2 className="text-xl font-bold text-site-text">必ず「無料体験」に行く</h2>
            </div>
            <p className="text-site-muted text-sm leading-relaxed mb-4">
              料金だけでは判断できない「トレーナーとの相性」「施設の雰囲気」「通いやすさ」は、実際に体験しないとわかりません。
              <strong className="text-primary-600">最低でも2〜3社の無料体験に参加</strong>してから決めることをおすすめします。
            </p>
            <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
              <h3 className="font-bold text-accent-700 text-sm mb-2">無料体験・カウンセリングがあるジム</h3>
              <ul className="space-y-1 text-sm text-accent-700">
                <li>・BEYOND：無料体験トレーニング</li>
                <li>・ASPI：無料体験（75〜90分）</li>
                <li>・エクササイズコーチ：無料体験</li>
                <li>・かたぎり塾：無料カウンセリング</li>
                <li>・チキンジム：無料カウンセリング</li>
                <li>・ELEMENT：無料体験</li>
              </ul>
            </div>
          </section>

          <div className="text-center pt-4">
            <Link href="/ranking/" className="cta-button inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all">
              コスパランキングTOP10を見る
            </Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  )
}
