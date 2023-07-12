import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  // title: string
  text: string
  url: string
}

export function Project({ url, text }: ProjectProps) {
  return (
    <div>
      <Link href={'/'}>
        <Image
          src={url}
          className="h-full w-full transition-opacity duration-300 hover:opacity-80"
          width={700}
          height={700}
          alt={text}
        />
      </Link>
    </div>
  )
}
