import Image from "next/image"
import * as React from "react"
import styled from "styled-components"

interface LogoProps {
  theme?: string
}

const TriangleLogo = styled.div`
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #aaa;
`

const Logo: React.FC<LogoProps> = ({ theme = "black" }) => {
  return (
    <>
      <TriangleLogo className="mr-1" />
      <div className="relative z-20 w-[142px]">
        {theme == "black" ? (
          <Image src="/PHOTOSNAP.svg" layout="responsive" width="142" height="16" />
        ) : (
          theme == "white" && (
            <Image src="/PHOTOSNAP-white.svg" layout="responsive" width="142" height="16" />
          )
        )}
      </div>
    </>
  )
}

export default Logo
