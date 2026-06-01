import Button from "../atoms/Button";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import linkNav from "../../data/linkNav.json";
import LinkScroll from "../atoms/Linkscroll";

function Footer() {
    let sosmed = [
        { name: "Instagram", icon: <BsInstagram />, url: "https://www.instagram.com/syifasukmaa" },
        { name: "GitHub", icon: <BsGithub />, url: "https://github.com/syifasukmaa" },
        { name: "LinkedIn", icon: <BsLinkedin />, url: "https://www.linkedin.com/in/syifasukma/" },
    ];
    return (
        <footer
            id="contact"
            className="w-full flex flex-col gap-5 md:flex-row  justify-between items-center lg:px-40 px-8 pb-5 py-4 font-poppins bg-ygBlue dark:bg-dark200 border-t border-t-gray-300 dark:border-t-gray-500"
        >
            <p className="text-blue dark:text-white text-sm font-jetbrains ">© 2026 Syifa Sukma Ramadhani. All rights reserved.</p>
            <div>
                <img src="/img/logosipa.png" alt="Logo Sipa" width={40} height={30} className="transition-all duration-500 hover:scale-105" />
            </div>
        </footer>
    );
}

export default Footer;
