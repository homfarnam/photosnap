import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

interface HamburgerProps {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}

const Hamburger: React.FC<HamburgerProps> = ({ setOpen, open }) => {
  return (
    <div>
      {!open ? (
        <Image
          src="/hamburger.svg"
          layout="fixed"
          width="15"
          height="15"
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        <Image
          src="/close.svg"
          layout="fixed"
          width="15"
          height="15"
          onClick={() => setOpen((prev) => !prev)}
        />
      )}
    </div>
  )
}

export default Hamburger
