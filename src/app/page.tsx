import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <div className="m-auto h-screen max-w-[1920px] bg-zinc-900">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </div>
  )
}
