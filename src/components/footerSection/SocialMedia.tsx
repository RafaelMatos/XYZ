import { Linkedin, Github, Instagram, LinkIcon } from 'lucide-react'
import Link from 'next/link'

export function SocialMedia() {
  return (
    <>
      <div className="mt-5 flex gap-5">
        <Link
          href={'https://rafaelmatos.vercel.app/'}
          target="_blank"
          className="transition-all  duration-300 ease-in-out hover:scale-110 hover:text-green-700"
        >
          <LinkIcon />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/rafaelimatos/'}
          target="_blank"
          className="transition-all  duration-300 ease-in-out hover:scale-110 hover:text-green-700"
        >
          <Linkedin />
        </Link>
        <Link
          href={'https://github.com/RafaelMatos'}
          target="_blank"
          className="transition-all  duration-300 ease-in-out hover:scale-110 hover:text-green-700"
        >
          <Github />
        </Link>
        <Link
          href={'https://www.instagram.com/rafael.mts/'}
          target="_blank"
          className="transition-all  duration-300 ease-in-out hover:scale-110 hover:text-green-700"
        >
          <Instagram />
        </Link>
      </div>
      <div className="mt-2 ">
        <p className="text-sm">
          Desenvolvido com ❤ por{' '}
          <Link href={'https://rafaelmatos.vercel.app/'} target="_blank">
            Rafael Matos
          </Link>{' '}
        </p>
      </div>
    </>
  )
}
