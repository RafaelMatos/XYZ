import Link from 'next/link'

interface ItemAboutProps {
  title: string
  text: string
  url: string
}

export function ItemAbout({ title, text, url }: ItemAboutProps) {
  return (
    <div className=" flex flex-col content-center justify-center p-[20%]">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="my-7 text-xl font-normal">{text}</p>
      <Link
        className="self-start text-sm font-light transition-all duration-200 ease-in-out hover:font-normal"
        href={url}
      >
        Saiba mais
      </Link>
    </div>
  )
}
