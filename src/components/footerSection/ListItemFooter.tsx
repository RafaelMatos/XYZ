import Link from 'next/link'

interface ListItemFooterProps {
  section: string
}

export function ListItemFooter({ section }: ListItemFooterProps) {
  return (
    <li className="capitalize transition-all  duration-300 ease-in-out hover:scale-110 hover:font-semibold hover:text-green-700">
      <Link href={`/#${section}`}>{section}</Link>
    </li>
  )
}
