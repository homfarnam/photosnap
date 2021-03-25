import Image from "next/image"
import * as React from "react"
import useWindowSize from "../../hooks/useWindowSize"
import Button from "../Button/Button"

interface StorySlideProps {}

export const StorySlide: React.FC<StorySlideProps> = () => {
  const size: number = useWindowSize()
  return (
    <>
      <div className="w-full h-auto items-center flex">
        <div className="w-full h-full relative">
          <div className="aspect-w-4 aspect-h-3 md:aspect-w-10 md:aspect-h-6  lg:aspect-w-16 lg:aspect-h-8 xl:aspect-w-16 xl:aspect-h-5 relative">
            <Image
              src="/mountain-night.png"
              layout="fill"
              objectFit="cover"
              className="z-0"
              quality={100}
            />
            {size > 550 && (
              <div className="z-20 w-full flex flex-col justify-center items-start h-full text-white">
                <div className="w-10/12 md:w-7/12 lg:w-5/12 space-y-4 md:space-y-6 lg:space-y-10 p-5 md:p-10">
                  <p className="tracking-[2px] text-sm">LAST MONTH’S FEATURED STORY</p>
                  <h4 className="text-4xl font-black tracking-[4px]">
                    HAZY FULL MOON OF APPALACHIA
                  </h4>
                  <div className="flex space-x-3">
                    <p className="opacity-40">March 2nd 2020</p>
                    <span>by John Appleseed</span>
                  </div>
                  <p className="opacity-60">
                    The dissected plateau area, while not actually made up of geological mountains,
                    is popularly called "mountains," especially in eastern Kentucky and West
                    Virginia, and while the ridges are not high, the terrain is extremely rugged.
                  </p>
                  <Button text="read the story" arrow="white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {size < 550 && (
        <div className="w-full flex flex-col justify-center items-start h-full text-white bg-black">
          <div className="w-full flex flex-col justify-center items-start h-full space-y-5 p-5">
            <p className="tracking-[2px] text-sm">LAST MONTH’S FEATURED STORY</p>
            <h4 className="text-4xl font-black tracking-[4px]">HAZY FULL MOON OF APPALACHIA</h4>
            <div className="flex space-x-3">
              <p className="opacity-40">March 2nd 2020</p>
              <span>by John Appleseed</span>
            </div>
            <p className="opacity-60">
              The dissected plateau area, while not actually made up of geological mountains, is
              popularly called "mountains," especially in eastern Kentucky and West Virginia, and
              while the ridges are not high, the terrain is extremely rugged.
            </p>
            <Button text="read the story" arrow="white" />
          </div>
        </div>
      )}
    </>
  )
}

export default StorySlide
