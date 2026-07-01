import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Zen_Maru_Gothic } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-noto-sans-jp',
})

const zenMaru = Zen_Maru_Gothic({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-zen-maru',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2E7D32',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cospa-gym-lab.pages.dev'),
  title: {
    default: 'コスパジムラボ | 安い・コスパ最強パーソナルジム比較【2026年最新】',
    template: '%s | コスパジムラボ',
  },
  description: '【2026年最新】安い・コスパ重視のパーソナルジムを徹底比較。入会金+セッション+食事指導の総額で本当に安いジムがわかる。1回あたり単価ランキング、エリア別おすすめ、料金比較表を掲載。',
  keywords: ['パーソナルジム', '安い', 'コスパ', '比較', 'おすすめ', '料金', '2026'],
  authors: [{ name: 'コスパジムラボ編集部' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://cospa-gym-lab.pages.dev/',
    title: 'コスパジムラボ | 安い・コスパ最強パーソナルジム比較',
    description: '入会金+セッション+食事指導の総額で本当に安いパーソナルジムがわかる比較サイト。',
    siteName: 'コスパジムラボ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'コスパジムラボ | コスパ最強パーソナルジム比較',
    description: '総額で本当に安いパーソナルジムがわかる比較サイト。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'コスパジムラボ',
  url: 'https://cospa-gym-lab.pages.dev',
  description: '安い・コスパ重視のパーソナルジム比較サイト',
  publisher: {
    '@type': 'Organization',
    name: '株式会社MediaX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressLocality: '渋谷区',
      addressRegion: '東京都',
      postalCode: '150-0011',
      streetAddress: '東一丁目27番10号',
    },
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'コスパジムラボ',
  url: 'https://cospa-gym-lab.pages.dev',
  description: '安い・コスパ重視のパーソナルジム比較サイト',
  inLanguage: 'ja-JP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${zenMaru.variable}`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-site-bg font-sans text-site-text">
        {children}
      </body>
    </html>
  )
}
