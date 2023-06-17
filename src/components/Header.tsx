'use client'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [navBar, setNavBar] = useState(false)
  return (
    <header className="min-h-[75] bg-white p-5 text-gray-950  shadow md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <Link href={'/'}>
          <h1 className="text-2xl font-bold transition-colors hover:text-orange-300">
            Agência XYZ
          </h1>
        </Link>
        {/* Hamburguer Menu */}
        <span
          className="tra mx-2 cursor-pointer text-3xl 
        text-gray-950 duration-500 ease-in-out hover:scale-110 hover:text-orange-700 md:hidden"
          onClick={() => setNavBar(!navBar)}
        >
          {navBar ? <X /> : <Menu />}
        </span>
      </div>

      <ul
        className={`absolute right-0 z-[0] mr-4 w-32
          rounded-b-lg bg-white px-4 pb-4 pt-4 md:static
        md:z-auto md:mr-0 md:flex md:w-auto md:translate-y-1
        md:items-center  md:bg-white md:py-0 md:pl-0 md:opacity-100
         ${navBar ? 'top-16 opacity-100' : ' -top-[1000px] opacity-0'}
        transition-all duration-500 ease-in-out`}
      >
        <li className=" items-center justify-center rounded-full px-3 py-1 transition hover:bg-orange-300 hover:font-semibold hover:text-gray-50  md:my-0">
          <Link href={'/'}>About</Link>
        </li>
        <li className="items-center justify-center rounded-full px-3 py-1  transition hover:bg-orange-300 hover:font-semibold  hover:text-gray-50">
          <Link href={'/'}>Services</Link>
        </li>
        <li className="items-center justify-center rounded-full px-3 py-1  transition hover:bg-orange-300  hover:font-semibold hover:text-gray-50">
          <Link href={'/'}>Projects</Link>
        </li>
        <li className="items-center justify-center rounded-full px-3 py-1 transition  hover:bg-orange-300 hover:font-semibold hover:text-gray-50">
          <Link href={'/'}>Contact</Link>
        </li>
      </ul>
    </header>
  )
}
