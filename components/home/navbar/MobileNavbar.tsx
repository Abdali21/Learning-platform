import { navLinks } from "@/constant/constant"
import Link from "next/link"
import { CgClose } from "react-icons/cg"

type Props = {
  showNav:boolean;
  closeNav:()=>void;
}

const MobileNavbar = ({showNav, closeNav}:Props) => {
  const navOpen = showNav ? "translate-x-0" :"translate-x-[-100%]";
  return (
    <div className={`fixed ${navOpen} top-0 transform transition-all duration-500 h-[100vh]
                   z-[10000] left-0 bottom bg-black opacity-70 w-full`}>
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300
                      w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006]`}>
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">{link.label}</p>
          </Link>
        ))}
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white" />
      </div>
    </div>
  )
}

export default MobileNavbar
