import Image from "next/image"

interface ButtonProps {
  text: string
  theme?: string
  arrow?: string
}

const Button: React.FC<ButtonProps> = ({ text, theme, arrow }) => {
  return (
    <>
      {theme == "black" ? (
        <button className="flex bg-black hover:bg-gray-400 transition-colors duration-300 delay-100 text-white items-center justify-center tracking-[2px] p-3 text-[12px] font-bold border">
          {text}
        </button>
      ) : (
        theme == "white" && (
          <button className="flex bg-white hover:bg-gray-200 transition-colors duration-300 delay-100 text-black items-center justify-center tracking-[2px] p-3 text-[12px] font-bold border">
            {text}
          </button>
        )
      )}
      {arrow == "black" ? (
        <button className="flex hover:underline text-black items-center justify-center tracking-[2px] p-3 text-[12px] font-bold">
          <span>{text}</span>
          <Image src="/arrow-black.svg" layout="fixed" width="42" height="12" />
        </button>
      ) : (
        arrow == "white" && (
          <button className="flex hover:underline text-white items-center justify-center tracking-[2px] p-3 text-[12px] font-bold">
            <span>{text}</span>
            <Image src="/arrow-white.svg" layout="fixed" width="42" height="12" />
          </button>
        )
      )}
    </>
  )
}

export default Button
