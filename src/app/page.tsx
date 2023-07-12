import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <div className="max-w-[1920px m-auto h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </div>
  )
}
