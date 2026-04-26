import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

const topGyms = [
  { rank: 1, name: 'かたぎり塾', price: '月4回 33,000円〜', perSession: '7,700円', feature: '月額制・期間縛りなし', url: '/ranking/' },
  { rank: 2, name: 'エクササイズコーチ', price: '月4回 9,900円〜', perSession: '4,400円', feature: 'AI主導20分トレーニング', url: '/ranking/' },
  { rank: 3, name: 'ASPI（アスピ）', price: '月2回 7,600円〜', perSession: '3,500円', feature: '米国資格保有トレーナー', url: '/ranking/' },
  { rank: 4, name: 'チキンジム', price: '16回 140,200円〜', perSession: '8,763円', feature: '完全個室・プロテイン付', url: '/ranking/' },
  { rank: 5, name: 'ELEMENT', price: '月額 38,280円〜', perSession: '1,459円', feature: '通い放題30分', url: '/ranking/' },
]

const areas = [
  { slug: 'shibuya', name: '渋谷', count: 6 },
  { slug: 'shinjuku', name: '新宿', count: 6 },
  { slug: 'ikebukuro', name: '池袋', count: 6 },
  { slug: 'ginza', name: '銀座', count: 6 },
  { slug: 'roppongi', name: '六本木', count: 6 },
  { slug: 'yokohama', name: '横浜', count: 6 },
  { slug: 'osaka', name: '大阪', count: 6 },
  { slug: 'nagoya', name: '名古屋', count: 6 },
  { slug: 'fukuoka', name: '福岡', count: 6 },
  { slug: 'sapporo', name: '札幌', count: 6 },
]

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="savings-badge">2026年最新</span>
              <span className="text-sm text-white/90">総額比較で本当に安いジムがわかる</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 font-display">
              コスパ最強の<br/>パーソナルジムが<br className="md:hidden"/>見つかる
            </h1>
            <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
              入会金+セッション料金+食事指導の<strong className="text-accent-300">総額</strong>で比較。
              1回あたり単価ランキングで、本当にコスパの良いパーソナルジムが一目でわかります。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ranking/" className="cta-button bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-xl font-bold text-center transition-all">
                コスパランキングを見る
              </Link>
              <Link href="/cost/" className="bg-white/15 hover:bg-white/25 backdrop-blur text-white px-8 py-3.5 rounded-xl font-bold text-center transition-all border border-white/30">
                料金を徹底比較する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Ranking */}
      <section className="py-12 md:py-16" id="ranking">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-site-text mb-2">コスパ最強パーソナルジムTOP5</h2>
            <p className="text-site-muted text-sm">1回あたり単価で比較 ※2026年4月時点</p>
          </div>
          <div className="space-y-3">
            {topGyms.map((gym) => (
              <Link
                key={gym.rank}
                href={gym.url}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:border-primary-400 hover:shadow-md transition group"
              >
                <span className={`${gym.rank <= 3 ? (gym.rank === 1 ? 'rank-1' : gym.rank === 2 ? 'rank-2' : 'rank-3') : 'rank-default'} text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0`}>
                  {gym.rank}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-site-text group-hover:text-primary-600 transition">{gym.name}</h3>
                    <span className="bg-primary-50 text-primary-600 text-xs px-2 py-0.5 rounded-full font-medium">{gym.feature}</span>
                  </div>
                  <p className="text-site-muted text-sm mt-0.5">{gym.price}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[10px] text-site-muted">1回あたり</div>
                  <div className="text-accent-500 font-bold text-lg">{gym.perSession}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/ranking/" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-bold text-sm transition">
              全ランキングを見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Total Cost Comparison */}
      <section className="py-12 md:py-16 bg-white" id="cost">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-site-text mb-2">総額比較表</h2>
            <p className="text-site-muted text-sm">入会金+セッション+食事指導の<span className="text-accent-500 font-bold">本当の総額</span>を比較</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary-600 text-white">
                  <th className="px-3 py-3 text-left font-bold">ジム名</th>
                  <th className="px-3 py-3 text-right font-bold">入会金</th>
                  <th className="px-3 py-3 text-right font-bold">コース料金</th>
                  <th className="px-3 py-3 text-right font-bold">食事指導</th>
                  <th className="px-3 py-3 text-right font-bold bg-accent-600">総額目安</th>
                  <th className="px-3 py-3 text-right font-bold">1回単価</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-accent-50 border-b border-accent-100">
                  <td className="px-3 py-2.5 font-bold text-site-text">ASPI</td>
                  <td className="px-3 py-2.5 text-right">55,000円<br/><span className="text-[10px] text-accent-500">※体験当日0円</span></td>
                  <td className="px-3 py-2.5 text-right">7,600円/月〜</td>
                  <td className="px-3 py-2.5 text-right">プラン内</td>
                  <td className="px-3 py-2.5 text-right font-bold text-accent-600">15,200円〜<br/><span className="text-[10px]">※2ヶ月・入会金0円時</span></td>
                  <td className="px-3 py-2.5 text-right font-bold text-primary-600">3,500円〜</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-3 py-2.5 font-bold text-site-text">エクササイズコーチ</td>
                  <td className="px-3 py-2.5 text-right">19,800円<br/><span className="text-[10px] text-accent-500">※キャンペーン0円</span></td>
                  <td className="px-3 py-2.5 text-right">9,900円/月〜</td>
                  <td className="px-3 py-2.5 text-right">なし</td>
                  <td className="px-3 py-2.5 text-right font-bold">19,800円〜<br/><span className="text-[10px]">※2ヶ月・入会金0円時</span></td>
                  <td className="px-3 py-2.5 text-right font-bold text-primary-600">4,400円〜</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="px-3 py-2.5 font-bold text-site-text">かたぎり塾</td>
                  <td className="px-3 py-2.5 text-right">22,000円</td>
                  <td className="px-3 py-2.5 text-right">33,000円/月</td>
                  <td className="px-3 py-2.5 text-right">11,000円/2週間</td>
                  <td className="px-3 py-2.5 text-right font-bold">88,000円〜<br/><span className="text-[10px]">※2ヶ月</span></td>
                  <td className="px-3 py-2.5 text-right font-bold">7,700円</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-3 py-2.5 font-bold text-site-text">ELEMENT</td>
                  <td className="px-3 py-2.5 text-right">33,000円</td>
                  <td className="px-3 py-2.5 text-right">38,280円/月〜</td>
                  <td className="px-3 py-2.5 text-right">なし</td>
                  <td className="px-3 py-2.5 text-right font-bold">109,560円〜<br/><span className="text-[10px]">※2ヶ月</span></td>
                  <td className="px-3 py-2.5 text-right font-bold">1,459円〜<br/><span className="text-[10px]">※通い放題</span></td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="px-3 py-2.5 font-bold text-site-text">チキンジム</td>
                  <td className="px-3 py-2.5 text-right">35,000円</td>
                  <td className="px-3 py-2.5 text-right">140,200円/16回〜</td>
                  <td className="px-3 py-2.5 text-right">LINE相談付</td>
                  <td className="px-3 py-2.5 text-right font-bold">175,200円〜</td>
                  <td className="px-3 py-2.5 text-right font-bold">8,763円</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-3 py-2.5 font-bold text-site-text">BEYOND</td>
                  <td className="px-3 py-2.5 text-right">0円</td>
                  <td className="px-3 py-2.5 text-right">102,300円/10回〜</td>
                  <td className="px-3 py-2.5 text-right">別途</td>
                  <td className="px-3 py-2.5 text-right font-bold">102,300円〜</td>
                  <td className="px-3 py-2.5 text-right font-bold">10,230円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-2 text-right">※ 料金は税込。キャンペーン適用時の価格を含みます。</p>
          <div className="text-center mt-6">
            <Link href="/cost/" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-bold text-sm transition">
              料金比較の詳細を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Area Links */}
      <section className="py-12 md:py-16" id="area">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-site-text mb-2">エリアから探す</h2>
            <p className="text-site-muted text-sm">各エリアの安いパーソナルジムを比較</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/area/${area.slug}/`}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-primary-400 hover:shadow-md transition group"
              >
                <div className="text-2xl mb-1">📍</div>
                <h3 className="font-bold text-site-text group-hover:text-primary-600 transition">{area.name}</h3>
                <p className="text-site-muted text-xs mt-0.5">{area.count}ジム掲載</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guide CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-site-text mb-3">コスパで失敗しない選び方</h2>
          <p className="text-site-muted mb-6 max-w-lg mx-auto">
            「安いだけ」で選ぶと失敗します。入会金・セッション回数・食事指導・解約条件まで含めた
            <strong className="text-primary-600">本当のコスパ</strong>の見極め方を解説。
          </p>
          <Link href="/guide/" className="cta-button inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all">
            選び方ガイドを読む
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-12 md:py-16" id="faq">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-site-text mb-6 text-center">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: 'パーソナルジムの相場はいくら？', a: '2ヶ月16回コースで20〜35万円が相場です。ただし月額制なら月1〜3万円台、通い放題なら月3〜4万円台で通えるジムもあります。' },
              { q: '安いパーソナルジムは効果がない？', a: 'いいえ。エクササイズコーチのようにAIマシンを活用して人件費を抑えたジムや、かたぎり塾のように月額制でコストを抑えたジムなど、安くても質の高いジムは存在します。' },
              { q: '入会金無料のジムはある？', a: 'BEYONDは常時入会金無料です。また、ASPIやエクササイズコーチはキャンペーンで入会金無料になることがあります。' },
            ].map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl group">
                <summary className="px-5 py-4 font-bold text-site-text cursor-pointer flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">Q.</span>
                    {faq.q}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-site-muted text-sm leading-relaxed pl-6">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/faq/" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-bold text-sm transition">
              FAQをもっと見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
