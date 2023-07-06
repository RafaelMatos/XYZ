import { ItemAbout } from './aboutSection/ItemAbout'

export function About() {
  return (
    <div className="m-auto max-w-[1920px] bg-white text-gray-900" id="about">
      <div className=" flex grid-flow-col grid-cols-2 flex-col md:grid md:grid-flow-row md:grid-cols-2">
        {/* Left Item */}
        <ItemAbout
          title="Title 1"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit iusto repellat tempore sunt animi omnis ad laboriosam ducimus consequatur."
          url="/"
        />
        {/* Right Image */}
        <div
          className={`h-[30rem]
          bg-[url('../../public/images/bridge.jpg')]
          bg-cover  bg-center bg-no-repeat md:h-[100%]`}
        />
      </div>
      <div className=" flex grid-flow-col grid-cols-2 flex-col-reverse md:grid md:grid-flow-row md:grid-cols-2">
        {/* Left Image */}
        <div
          className={`h-[30rem]
          bg-[url('../../public/images/sky.jpg')]
          bg-cover
          bg-center bg-no-repeat  md:h-[100%] `}
        ></div>
        {/* Right Item */}
        <ItemAbout
          title="Title 2"
          text="Lorem ipsum dolor sit amet, consectetur vero eum inventore adipisci exercitationem ab!Doloremque recusandae fugit, repellat tempore sunt animi omnis ad laboriosam ducimus consequatur."
          url="/"
        />
      </div>
    </div>
  )
}
