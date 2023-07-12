import { Project } from './projectsSection/Project'
import tomatosImg from '../../public/images/tomatoes.jpg'
import landscapeImg from '../../public/images/landscape.jpg'
import flowersImg from '../../public/images/flowers.jpg'
import plantsImg from '../../public/images/plants3.jpg'

export function Projects() {
  return (
    <div
      id="projects"
      className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      <Project text="Tomatoes" url={tomatosImg.src} />
      <Project text="Landscape" url={landscapeImg.src} />
      <Project text="Flowers" url={flowersImg.src} />
      <Project text="Plants" url={plantsImg.src} />
    </div>
  )
}
