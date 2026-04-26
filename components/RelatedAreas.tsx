import Link from 'next/link'

const areas = [
  { slug: 'shibuya', name: '渋谷' },
  { slug: 'shinjuku', name: '新宿' },
  { slug: 'ikebukuro', name: '池袋' },
  { slug: 'ginza', name: '銀座' },
  { slug: 'roppongi', name: '六本木' },
  { slug: 'yokohama', name: '横浜' },
  { slug: 'osaka', name: '大阪' },
  { slug: 'nagoya', name: '名古屋' },
  { slug: 'fukuoka', name: '福岡' },
  { slug: 'sapporo', name: '札幌' },
]

type Props = {
  currentArea?: string
}

export function RelatedAreas({ currentArea }: Props) {
  const filtered = areas.filter(a => a.slug !== currentArea)

  return (
    <section className="py-8">
      <h2 className="text-lg font-bold text-site-text mb-4 text-center">他のエリアから探す</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {filtered.map(area => (
          <Link
            key={area.slug}
            href={`/area/${area.slug}/`}
            className="bg-white border border-gray-200 hover:border-primary-400 text-site-text hover:text-primary-600 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            {area.name}
          </Link>
        ))}
      </div>
    </section>
  )
}
