import Image from "next/image"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="pt-20 pb-12 bg-black">
            <div className="w-[80%] mx-auto grid items-start grid-cols-1 
                       md:grid-cols-2 lg:grid-cols-4 gap-12
                       pb-8 border-b-[1.5px] border-white border-opacity-20">
                <div>
                    <Image
                        src='/images/logo.png'
                        alt="logo"
                        height={100}
                        width={100}
                    />
   
                    <div className="flex items-center space-x-4 mt-6">
                        <FaFacebookF className="h-6 w-6 text-blue-600" />
                        <FaTwitter className="h-6 w-6  text-sky-500" />
                        <FaYoutube className="h-6 w-6  text-red-700" />
                        <FaInstagram className="h-6 w-6  text-pink-600" />
                    </div>
                </div>
                <div>
                    <h1 className="footer__heading">Popular</h1>
                    <p className="footer__link">Web development</p>
                    <p className="footer__link">Hacking</p>
                    <p className="footer__link">UI/UX Design</p>
                    <p className="footer__link">App Development</p>
                    <p className="footer__link">Desktop Development</p>
                    <p className="footer__link">Digital Marketing</p>
                </div>
                <div>
                    <h1 className="footer__heading">Quick Link</h1>
                    <p className="footer__link">Home</p>
                    <p className="footer__link">About</p>
                    <p className="footer__link">Courses</p>
                    <p className="footer__link">Instructor</p>
                    <p className="footer__link"> Profile</p>
                    <p className="footer__link">Privacy Police</p>
                </div>
                <div>
                    <h1 className="footer__heading">Subscribe our Newsletter</h1>
                    <input type="text" placeholder="enter your email"
                        className="px-6 py-2 rounded-xl outline-none bg-gray-700 w-full text-white"
                    />
                    <button className="px-6 py-2 rounded-xl outline-none
                                     bg-rose-700 mt-4 w-full text-white"
                    >
                        Subscribe
                    </button>

                </div>
            </div>
            <p className="text-center mt-4 text-base text-white opacity-70">
                © Copyright 2024 by 
                 <a
                    href="https://www.linkedin.com/in/abdali-houmaidi-72b123293/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline ms-1"
                >
                    Abdali Houmaidi
                </a>
            </p>

        </footer>
    )
}

export default Footer
