import Link from "next/link"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import useWindowSize from "../../hooks/useWindowSize"
import { Nav } from "../../styles/styled"
import Button from "../Button/Button"
import Hamburger from "../Hamburger/Hamburger"
import Logo from "../Logo/Logo"
import MobileMenu from "../MobileMenu/MobileMenu"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [cookies, setCookie] = useCookies(["theme"])
  const [open, setOpen] = useState<boolean>(false)

  const size: number = useWindowSize()

  useEffect(() => {
    const checkbox: any = document.querySelector("#toggle")
    const html = document.querySelector("html")
    const toggleDarkMode = function () {
      if (checkbox?.checked) {
        html?.classList.add("dark")
        localStorage.setItem("theme", "dark")
        setCookie("theme", "dark", { path: "/" })
      } else {
        html?.classList.remove("dark")
        localStorage.setItem("theme", "light")
        setCookie("theme", "light", { path: "/" })
      }
    }

    toggleDarkMode()
    if (checkbox) {
      checkbox.addEventListener("click", toggleDarkMode)
    }
  })
  return (
    <>
      <header className="md:w-full w-11/12 mx-auto flex dark:bg-black  text-black dark:text-white items-center justify-between md:mx-auto md:justify-around h-[72px]">
        <div className="flex w-[200px]">
          <Logo />
        </div>
        {size < 604 && <Hamburger open={open} setOpen={setOpen} />}

        {size > 604 ? (
          <>
            <div className="w-auto">
              <Nav className="flex justify-around w-full font-bold">
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
            <div className="flex items-center">
              {cookies.theme == "dark" ? (
                <Button text="GET AN INVITE" theme="white" />
              ) : (
                <Button text="GET AN INVITE" theme="black" />
              )}

              <div className="lg:flex justify-end items-center space-x-2 mx-3 hidden ">
                <span className="text-sm text-gray-800 dark:text-gray-500">Light</span>
                <div>
                  <input type="checkbox" name="" id="toggle" className="hidden" />
                  <label htmlFor="toggle">
                    <div className="w-9 h-5 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1">
                      <div className="toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out"></div>
                    </div>
                  </label>
                </div>
                <span className="text-sm text-gray-800 dark:text-gray-100">Dark</span>
              </div>
            </div>
          </>
        ) : null}
      </header>
      {open && (
        <div className="transition-opacity duration-300 delay-100 ease-in-out z-20">
          <MobileMenu />
        </div>
      )}
    </>
  )
}

export default Header
