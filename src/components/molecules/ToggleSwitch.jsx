import { useState } from "react";
import { Switch } from "@headlessui/react";
import useDarkSide from "../../utils/useDarkSide";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

export default function ToggleSwitch() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <div className="py-2 mx-4 md:mx-4">
            <button
                className={`flex items-center justify-center w-10 h-10 p-2  transition-all duration-300  rounded-full dark:bg-dark300 hover:scale-105 ${darkSide ? "dark:bg-gray-300/10" : "bg-primary100/10"}`}
                onClick={() => toggleDarkMode(!darkSide)}
            >
                {darkSide ? <MdOutlineDarkMode className="text-2xl text-gray-300" /> : <MdOutlineWbSunny className="text-2xl text-primary100" />}
            </button>
        </div>
    );
}
