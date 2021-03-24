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
    <footer className="md:h-[250px] h-auto py-5 text-white bg-black flex flex-col md:flex-row items-center md:items-stretch md:justify-between w-full">
      <div className="flex flex-col w-full md:w-auto lg:flex-row justify-center">
        <div className="flex flex-col h-full w-full md:w-1/2 md:ml-52 justify-between space-y-10 md:space-y-0">
          <div className="flex md:w-auto w-full justify-center h-[16px] mt-5 z-30 order-1">
            <Logo theme="white" />
          </div>
          {size < 1024 && (
            <div className="h-full md:mx-10 md:w-auto w-full justify-center flex order-3 md:order-2">
              <Nav className="flex flex-col md:flex-row lg:flex-col font-bold justify-around items-center h-full">
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
          )}
          <div className="flex md:w-auto w-7/12 mx-auto justify-center md:justify-start md:w-[180px] order-2 md:order-3">
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
        {size > 1024 && (
          <div className="h-full mx-10 order-2">
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
        )}
      </div>
      <div className="md:w-1/2 w-full flex md:flex-row flex-col items-center md:items-stretch">
        <div className="flex flex-col justify-center md:justify-between items-center md:items-end w-9/12 md:space-y-0 space-y-5 md:space-y-0 mt-10 md:mt-0 h-full">
          <Button text="GET AN INVITE" arrow="white" />

          <p className="text-white opacity-30">Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
