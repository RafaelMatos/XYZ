import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'] })

export const metadata = {
  title: 'XYZ',
  description: 'Agência XYZ',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-gray-900 font-sans text-lg text-gray-100`}
      >
        <main className="grid min-h-screen ">{children}</main>
      </body>
    </html>
  )
}
