import { Service } from './servicesSection/service'
import bolinha1 from './../../public/images/bolinha1.png'
import bolinha2 from './../../public/images/bolinha2.png'

export function Services() {
  return (
    <div
      id="services"
      className="m-auto grid   grid-cols-1 items-center justify-center md:grid-cols-2"
    >
      <Service
        name="SEO"
        url={bolinha1.src}
        text="Dicta consectetur excepturi numquam quibusdam officiis veniam,
         quidem omnis dolore, sed, dolorum perferendis itaque?"
      />
      <Service
        name="Landing Pages"
        url={bolinha2.src}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Debitis voluptas earum, aliquam animi assumenda et nisi."
      />
    </div>
  )
}
