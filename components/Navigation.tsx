'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export function Navigation() {
  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const handleScroll = () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    const m = document.getElementById('mobileMenu')
    const o = document.getElementById('mobileOverlay')
    if (m && o) {
      m.classList.toggle('open')
      o.classList.toggle('open')
      document.body.style.overflow = m.classList.contains('open') ? 'hidden' : ''
    }
  }

  return (
    <>
      <nav className="navbar fixed top-0 w-full z-50 bg-transparent transition-all duration-300" id="navbar">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="bg-primary-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">C</span>
              <span className="font-display text-lg font-bold text-primary-700 group-hover:text-primary-600 transition-colors">コスパジムラボ</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/ranking/" className="text-site-muted hover:text-primary-600 text-sm font-medium transition-colors">ランキング</Link>
              <Link href="/cost/" className="text-site-muted hover:text-primary-600 text-sm font-medium transition-colors">料金比較</Link>
              <Link href="/guide/" className="text-site-muted hover:text-primary-600 text-sm font-medium transition-colors">選び方</Link>
              <Link href="/faq/" className="text-site-muted hover:text-primary-600 text-sm font-medium transition-colors">FAQ</Link>
              <Link href="/ranking/" className="cta-button bg-primary-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-primary-700 transition-all">
                無料体験を探す
              </Link>
            </div>
            <button className="md:hidden p-2" onClick={toggleMenu} aria-label="メニューを開く">
              <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="mobile-overlay fixed inset-0 bg-black/40 z-[60] opacity-0 pointer-events-none transition-opacity duration-300" id="mobileOverlay" onClick={toggleMenu}></div>
      <div className="mobile-menu fixed top-0 right-0 w-80 h-full bg-white z-[70] transform translate-x-full transition-transform duration-300" id="mobileMenu">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="font-display text-lg font-bold text-primary-700">メニュー</span>
            <button onClick={toggleMenu} aria-label="メニューを閉じる" className="p-2">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-site-text text-sm font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>トップ</Link>
            <Link href="/ranking/" className="text-site-text text-sm font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>コスパランキング</Link>
            <Link href="/cost/" className="text-site-text text-sm font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>料金徹底比較</Link>
            <Link href="/guide/" className="text-site-text text-sm font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>選び方ガイド</Link>
            <Link href="/faq/" className="text-site-text text-sm font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>FAQ</Link>
            <Link href="/about/" className="text-site-text text-sm font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>運営者情報</Link>
            <div className="mt-4">
              <Link href="/ranking/" className="block text-center cta-button bg-primary-600 text-white px-5 py-3 rounded-lg text-sm font-bold" onClick={toggleMenu}>
                無料体験を探す
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
