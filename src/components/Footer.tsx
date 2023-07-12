import { SocialMedia } from './footerSection/SocialMedia'
import { ListItemFooter } from './footerSection/ListItemFooter'

export function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center bg-green-200 px-0 py-[100px] text-gray-900"
    >
      <h4 className="mb-5 text-lg font-bold tracking-widest">Agência XYZ</h4>
      <nav className="my-12 text-center">
        <ul className="flex justify-center gap-5">
          <ListItemFooter section="about" />
          <ListItemFooter section="services" />
          <ListItemFooter section="projects" />
        </ul>
      </nav>
      <SocialMedia />
    </footer>
  )
}
