import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="bg-secondary-700 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">C</span>
              <span className="font-display text-lg font-bold text-white">コスパジムラボ</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              入会金+セッション+食事指導の総額で、本当にコスパの良いパーソナルジムがわかる比較サイト
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-200 mb-4">コンテンツ</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/ranking/" className="text-gray-400 hover:text-white transition">コスパランキング</Link></li>
              <li><Link href="/cost/" className="text-gray-400 hover:text-white transition">料金徹底比較</Link></li>
              <li><Link href="/guide/" className="text-gray-400 hover:text-white transition">選び方ガイド</Link></li>
              <li><Link href="/faq/" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-200 mb-4">エリア</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/area/shibuya/" className="text-gray-400 hover:text-white transition">渋谷</Link></li>
              <li><Link href="/area/shinjuku/" className="text-gray-400 hover:text-white transition">新宿</Link></li>
              <li><Link href="/area/ikebukuro/" className="text-gray-400 hover:text-white transition">池袋</Link></li>
              <li><Link href="/area/yokohama/" className="text-gray-400 hover:text-white transition">横浜</Link></li>
              <li><Link href="/area/osaka/" className="text-gray-400 hover:text-white transition">大阪</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-200 mb-4">インフォメーション</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about/" className="text-gray-400 hover:text-white transition">運営者情報</Link></li>
              <li><Link href="/privacy-policy/" className="text-gray-400 hover:text-white transition">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-600 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-xs">&copy; 2026 コスパジムラボ All rights reserved.</p>
          <p className="text-gray-600 text-[10px] mt-1">
            ※掲載情報は2026年4月時点のものです。最新情報は各公式サイトでご確認ください。
          </p>
        </div>
      </div>
    </footer>
  )
}
