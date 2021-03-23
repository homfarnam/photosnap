import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import styled from "styled-components"
import useWindowSize from "../../hooks/useWindowSize"
import Button from "../Button/Button"
import Logo from "../Logo/Logo"

interface FooterProps {}

const Nav = styled.nav`
  a {
    margin-left: 10px;
    margin-right: 10px;
  }
`

const Footer: React.FC<FooterProps> = () => {
  const size: number = useWindowSize()
  return (
    <footer className="h-[250px] py-5 text-white bg-black flex flex-row justify-between w-full">
      <div className="flex lg:flex-row justify-center">
        <div className="flex flex-col h-auto w-1/2 ml-52 justify-between">
          <div className="flex h-[16px] mt-5 z-30">
            <Logo theme="white" />
          </div>
          <div className="flex justify-start w-[180px]">
            <div className="flex justify-around w-full">
              <div className="w-[20px] h-[20px]">
                <Image src="/facebook.svg" layout="responsive" width="20" height="20" />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src="/youtube.svg" layout="responsive" width="20" height="20" />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src="/twitter.svg" layout="responsive" width="20" height="20" />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src="/pinterest.svg" layout="responsive" width="20" height="20" />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src="/instagram.svg" layout="responsive" width="20" height="20" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full mx-10">
          <Nav className="flex flex-row lg:flex-col font-bold justify-around items-center h-full">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/">
              <a>STORIES</a>
            </Link>

            <Link href="/about">
              <a>FEATURES</a>
            </Link>

            <Link href="/users">
              <a>PRICING</a>
            </Link>
          </Nav>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex flex-col justify-between items-end w-9/12 h-full">
          <Button text="GET AN INVITE" arrow="white" />

          <p className="text-white opacity-30">Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
