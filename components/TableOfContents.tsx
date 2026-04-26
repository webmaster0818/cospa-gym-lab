'use client'

type TOCItem = {
  id: string
  label: string
}

type Props = {
  items: TOCItem[]
}

export function TableOfContents({ items }: Props) {
  return (
    <nav className="bg-white border border-gray-200 rounded-xl p-5 mb-8">
      <h2 className="font-bold text-site-text text-sm mb-3 flex items-center gap-2">
        <span className="bg-primary-100 text-primary-600 w-6 h-6 rounded flex items-center justify-center text-xs">目</span>
        目次
      </h2>
      <ol className="space-y-1.5">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-center gap-2 text-sm text-site-muted hover:text-primary-600 transition py-0.5"
            >
              <span className="text-primary-400 text-xs font-bold w-5">{i + 1}.</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
