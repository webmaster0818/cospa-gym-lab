import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata = {
  title: 'プライバシーポリシー',
  description: 'コスパジムラボのプライバシーポリシー（個人情報保護方針）について。',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />

      <section className="pt-24 pb-8 md:pt-28 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 font-display">プライバシーポリシー</h1>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 prose prose-sm max-w-none">
          <p className="text-site-muted text-sm leading-relaxed mb-4">
            コスパジムラボ（以下「当サイト」）は、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
          </p>

          <h2 className="text-lg font-bold text-site-text mt-6 mb-3">1. 個人情報の収集</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-4">
            当サイトでは、お問い合わせの際に、お名前・メールアドレス等の個人情報をご提供いただく場合があります。
          </p>

          <h2 className="text-lg font-bold text-site-text mt-6 mb-3">2. 個人情報の利用目的</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-4">
            収集した個人情報は、以下の目的で利用いたします。
          </p>
          <ul className="list-disc pl-5 text-site-muted text-sm space-y-1 mb-4">
            <li>お問い合わせへの対応</li>
            <li>サービスの改善・向上</li>
            <li>重要なお知らせの通知</li>
          </ul>

          <h2 className="text-lg font-bold text-site-text mt-6 mb-3">3. 個人情報の第三者提供</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-4">
            当サイトは、以下の場合を除き、個人情報を第三者に提供いたしません。
          </p>
          <ul className="list-disc pl-5 text-site-muted text-sm space-y-1 mb-4">
            <li>ご本人の同意がある場合</li>
            <li>法令に基づく場合</li>
          </ul>

          <h2 className="text-lg font-bold text-site-text mt-6 mb-3">4. アクセス解析ツールについて</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-4">
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用する場合があります。
            Googleアナリティクスはデータの収集のためにCookieを使用しています。
            このデータは匿名で収集されており、個人を特定するものではありません。
          </p>

          <h2 className="text-lg font-bold text-site-text mt-6 mb-3">5. 広告について</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-4">
            当サイトは、第三者配信の広告サービスやアフィリエイトプログラムを利用しています。
            これらのサービスでは、ユーザーの興味に応じた広告を表示するためにCookieを使用する場合があります。
          </p>

          <h2 className="text-lg font-bold text-site-text mt-6 mb-3">6. 免責事項</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-4">
            当サイトに掲載する情報は、可能な限り正確な情報を掲載するよう努めておりますが、
            情報の正確性・完全性を保証するものではありません。
            当サイトの情報を利用することで生じた損害について、当サイトは一切の責任を負いません。
            各ジムの最新の料金やサービス内容は、公式サイトにてご確認ください。
          </p>

          <h2 className="text-lg font-bold text-site-text mt-6 mb-3">7. プライバシーポリシーの変更</h2>
          <p className="text-site-muted text-sm leading-relaxed mb-4">
            当サイトは、必要に応じて本ポリシーを変更することがあります。
            変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします。
          </p>

          <p className="text-site-muted text-sm mt-6">制定日：2026年4月1日</p>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
