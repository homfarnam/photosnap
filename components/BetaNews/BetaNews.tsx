import Image from "next/image"
import * as React from "react"
import Button from "../Button/Button"

interface BetaNewsProps {
  image: string
  title: string
}

const BetaNews: React.FC<BetaNewsProps> = ({ title, image }) => {
  return (
    <div className="w-full flex flex-col md:flex-row h-full relative text-white">
      <div className="w-full h-full items-center flex order-1 md:order-none">
        <div className="w-full h-full relative">
          <div className="aspect-w-4 aspect-h-3 md:aspect-w-12 md:aspect-h-4  lg:aspect-w-16 lg:aspect-h-3 relative">
            <Image src={image} layout="fill" objectFit="cover" className="z-0" quality={100} />
          </div>
        </div>
      </div>

      <div className="text-white w-full h-full z-30 flex flex-col md:flex-row justify-between items-center absolute py-3 px-10 space-y-1">
        <div className="md:w-1/2 w-full flex items-center justify-center h-full">
          <h4 className="text-5xl w-10/12 md:w-8/12 mx-auto  font-extrabold">{title}</h4>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Button text="get an invite" arrow="white" />
        </div>
      </div>
    </div>
  )
}

export default BetaNews
