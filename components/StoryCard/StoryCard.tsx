import Image from "next/image"
import Button from "../Button/Button"

interface StoryCardProps {
  title: string
  author: string
  image: string
}

const StoryCard: React.FC<StoryCardProps> = ({ title, author, image }) => {
  return (
    <div className="w-full h-auto relative hover:mb-10 transition-all duration-200">
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt="Mountains"
        quality={100}
        className="z-0"
      />
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.27%, rgba(0, 0, 0, 0.661222) 100%)"
        }}
        className="z-20 w-full h-full absolute"
      />
      <div className="text-white w-full h-full z-30 flex flex-col justify-end items-baseline absolute py-3 px-10 space-y-1">
        <h4 className=" text-xl font-extrabold">{title}</h4>
        <p>{author}</p>
        <div className="w-10/12">
          <hr />
        </div>
        <Button text="read story" arrow="white" />
      </div>
    </div>
  )
}

export default StoryCard
