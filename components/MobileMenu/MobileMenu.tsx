import Link from "next/link"
import * as React from "react"
import { Nav } from "../../styles/styled"
import Button from "../Button/Button"

interface MobileMenuProps {}

const MobileMenu: React.FC<MobileMenuProps> = () => {
  return (
    <div className="w-full h-[253px] bg-white flex flex-col justify-between py-3 absolute top-12 border-b-2">
      <div className="w-auto mt-5">
        <Nav className="flex flex-col items-center space-y-2 w-full font-bold">
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
      <div className="w-9/12 m-auto h-2">
        <hr className="border-black" />
      </div>
      <div className="w-full flex justify-center">
        <Button text="GET AN INVITE" theme="black" className="w-9/12" />
      </div>
    </div>
  )
}

export default MobileMenu
