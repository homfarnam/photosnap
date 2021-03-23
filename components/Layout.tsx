import React, { ReactNode, useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import Link from "next/link"
import Head from "next/head"
import styled from "styled-components"
import Button from "./Button/Button"
import Logo from "./Logo/Logo"
import Footer from "./Footer/Footer"
import useWindowSize from "../hooks/useWindowSize"
import { useTheme } from "next-themes"

type Props = {
  children?: ReactNode
  title?: string
}

const Nav = styled.nav`
  a {
    margin-left: 10px;
    margin-right: 10px;

    :hover {
      opacity: 0.3;
    }
  }
`

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [cookies, setCookie] = useCookies(["theme"])
  const [mainTheme, setMainTheme] = useState<any>(null)

  useEffect(() => {
    const checkbox: any = document.querySelector("#toggle")
    const html = document.querySelector("html")
    const toggleDarkMode = function () {
      if (checkbox.checked) {
        html?.classList.add("dark")
        localStorage.setItem("theme", "dark")
        setCookie("theme", "dark", { path: "/" })
        setMainTheme(localStorage.getItem("theme"))
      } else {
        html?.classList.remove("dark")
        localStorage.setItem("theme", "light")
        setCookie("theme", "light", { path: "/" })
        setMainTheme(localStorage.getItem("theme"))
      }
    }

    toggleDarkMode()
    checkbox.addEventListener("click", toggleDarkMode)
  })

  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="w-full flex dark:bg-black  text-black dark:text-white items-center justify-around h-[72px]">
        <div className="flex w-[200px]">
          <Logo />
        </div>

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
      </header>
      {children}

      <Footer />
    </div>
  )
}

export default Layout
