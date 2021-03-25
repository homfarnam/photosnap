import Image from "next/image"
import * as React from "react"

interface FeaturesCardProps {
  title: string
  desc: string
  image: string
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ title, desc, image }) => {
  return (
    <div className="flex flex-col items-center justify-center w-8/12 md:w-1/3 space-y-5 flex-1 px-5">
      <Image src={image} layout="fixed" width="72" height="72" />
      <h4>{title}</h4>
      <p className="w-8/12">{desc}</p>
    </div>
  )
}

export default FeaturesCard
