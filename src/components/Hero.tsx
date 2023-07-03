import lemonImg from '../../public/images/lemons.jpg'

export function Hero() {
  console.log(lemonImg)
  console.log(lemonImg.src)
  return (
    <section
      id="hero"
      className={`relative flex
        h-[60vh] items-center
        justify-center bg-blue-300 bg-[url('../../public/images/lemons.jpg')]
        bg-cover bg-center bg-no-repeat 
        after:absolute
        after:bottom-10
        after:h-9  after:animate-bounce-opacited
        after:content-[url('../../public/images/seta_preta.png')]
        md:h-[89vh]
        `}
    >
      <h2 className=" text-2xl font-medium uppercase text-gray-900 md:text-4xl ">
        We make{' '}
        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-lime-300">
          <span className="relative text-white">cool</span>
        </span>{' '}
        thins
      </h2>
    </section>
  )
}
