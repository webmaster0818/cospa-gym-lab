import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata = {
  title: '運営者情報',
  description: 'コスパジムラボの運営者情報・サイトの運営方針について。',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">運営者情報</h1>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-site-text mb-4">サイト概要</h2>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-100">
                <th className="py-3 pr-4 text-left text-site-muted font-medium w-32">サイト名</th>
                <td className="py-3 font-bold">コスパジムラボ</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-3 pr-4 text-left text-site-muted font-medium">URL</th>
                <td className="py-3">https://cospa-gym-lab.pages.dev</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-3 pr-4 text-left text-site-muted font-medium">運営</th>
                <td className="py-3">株式会社MediaX</td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-3 pr-4 text-left text-site-muted font-medium">所在地</th>
                <td className="py-3">東京都渋谷区東一丁目27番10号</td>
              </tr>
              <tr>
                <th className="py-3 pr-4 text-left text-site-muted font-medium">お問い合わせ</th>
                <td className="py-3">サイト内のお問い合わせフォームよりご連絡ください</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-site-text mb-4">サイトの目的</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-3">
            コスパジムラボは、「安い・コスパ重視」の視点からパーソナルジムを比較・紹介するメディアです。
          </p>
          <p className="text-site-muted text-sm leading-relaxed mb-3">
            パーソナルジムの料金体系は複雑で、入会金・セッション料金・食事指導費・オプション費など、表面的な月額だけでは本当のコストがわかりにくい構造になっています。
          </p>
          <p className="text-site-muted text-sm leading-relaxed">
            当サイトでは、すべての費用を含めた「総額」と「1回あたり単価」で比較することで、読者が本当にコスパの良いパーソナルジムを見つけられるようサポートします。
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-site-text mb-4">掲載情報について</h2>
          <ul className="space-y-2 text-sm text-site-muted">
            <li>・掲載している料金は、各ジムの公式サイトに基づいた情報です（2026年4月時点）</li>
            <li>・料金やキャンペーン内容は変更される場合があります。最新情報は各公式サイトでご確認ください</li>
            <li>・当サイトはアフィリエイトプログラムに参加しています</li>
            <li>・広告収入はサイトの運営費用に充てています</li>
            <li>・広告の有無に関わらず、客観的な情報提供を心がけています</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-site-text mb-4">編集方針</h2>
          <ul className="space-y-2 text-sm text-site-muted">
            <li>・公式サイトの情報に基づき、正確な料金情報を掲載します</li>
            <li>・入会金+セッション+食事指導の「総額」で公平に比較します</li>
            <li>・メリットだけでなくデメリット（隠れコスト等）も正直に記載します</li>
            <li>・定期的に情報を更新し、最新の料金情報を反映します</li>
          </ul>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
