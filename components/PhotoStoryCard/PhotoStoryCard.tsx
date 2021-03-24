import Image from "next/image"
import Button from "../Button/Button"

interface PhotoStoryCardProps {
  image: string
  reverse: boolean
  title: string
  desc: string
  bg: string
}

const PhotoStoryCard: React.FC<PhotoStoryCardProps> = ({ image, reverse, title, desc, bg }) => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center mt-2 md:mt-0 z-0">
      {!reverse ? (
        <>
          <div
            className={`md:w-8/12 lg:w-5/12 h-full items-center flex bg-${bg} ${
              bg == "black" ? "text-white" : "text-black"
            } order-2 md:order-none`}>
            <div className="w-1/2 flex flex-col justify-start items-start mx-auto py-16 md:py-0 space-y-5">
              <h3 className="uppercase text-3xl">{title}</h3>
              <p className="opacity-60">{desc}</p>
              {bg == "white" ? (
                <Button text="GET AN INVITE" arrow="black" />
              ) : bg == "black" ? (
                <Button text="GET AN INVITE" arrow="white" />
              ) : null}
            </div>
          </div>
          <div className="w-full md:w-4/12 lg:w-7/12 h-full items-center flex order-1 md:order-none">
            <div className="w-full h-full relative">
              <div className="aspect-w-1 aspect-h-1 md:aspect-w-7 md:aspect-h-12  lg:aspect-w-15 lg:aspect-h-9 relative">
                <Image src={image} layout="fill" objectFit="cover" quality={100} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-4/12 lg:w-7/12 h-full items-center flex order-1 md:order-none">
            <div className="w-full h-full relative">
              <div className="aspect-w-1 aspect-h-1 md:aspect-w-7 md:aspect-h-12  lg:aspect-w-15 lg:aspect-h-9 relative">
                <Image src={image} layout="fill" objectFit="cover" quality={100} />
              </div>
            </div>
          </div>
          <div
            className={`md:w-8/12 lg:w-5/12 h-full items-center flex bg-${bg} ${
              bg == "black" ? "text-white" : "text-black"
            } order-2 md:order-none`}>
            <div className="w-1/2 flex flex-col justify-start items-start mx-auto py-16 md:py-0 space-y-5">
              <h3 className="uppercase text-3xl">{title}</h3>
              <p className="opacity-60">{desc}</p>
              {bg == "white" ? (
                <Button text="GET AN INVITE" arrow="black" />
              ) : bg == "black" ? (
                <Button text="GET AN INVITE" arrow="white" />
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PhotoStoryCard
