import Image from 'next/image'

interface ServiceProps {
  name: string
  text: string
  url: string
}

export function Service({ name, text, url }: ServiceProps) {
  return (
    <div
      className="items-center justify-center px-[20px] py-[70px] odd:text-pink-500
     even:bg-blue-300 even:text-blue-900"
    >
      <Image
        src={url}
        alt="bolinha colorida"
        className="mx-auto mb-7 animate-spin-slow self-start"
        width={200}
        height={200}
      />
      <div className="items-center text-center">
        <h3 className="mx-auto text-[1.8rem] font-bold">{name}</h3>
        <p className="m-[20px] mx-auto max-w-[400px] self-start  text-[2rem] font-normal leading-[35px]">
          {text}
        </p>
      </div>
    </div>
  )
}
