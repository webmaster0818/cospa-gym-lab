import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex items-center justify-center">
        <div>
          <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
          <p className="text-site-muted text-lg mb-8">ページが見つかりませんでした</p>
          <Link href="/" className="cta-button inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold transition-all">
            トップページに戻る
          </Link>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
