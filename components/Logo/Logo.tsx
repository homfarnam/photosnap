import Image from "next/image"
import * as React from "react"

interface LogoProps {
  theme?: string
}

const Logo: React.FC<LogoProps> = ({ theme = "black" }) => {
  return (
    <>
      <div className="relative z-20 w-[142px]">
        {theme == "black" ? (
          <Image src="/full-logo.svg" layout="responsive" width="142" height="16" />
        ) : (
          theme == "white" && (
            <Image src="/full-white-logo.svg" layout="responsive" width="142" height="16" />
          )
        )}
      </div>
    </>
  )
}

export default Logo
