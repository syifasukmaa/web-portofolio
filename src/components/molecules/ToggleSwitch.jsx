import { useState } from "react";
import useDarkSide from "../../utils/useDarkSide";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

export default function ToggleSwitch() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false,
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="flex items-center">
      <button
        aria-label="Toggle dark mode"
        className={`flex items-center justify-center w-9 h-9 p-2 transition-all duration-300 rounded-full dark:bg-dark300 hover:scale-105   ${darkSide ? "dark:bg-gray-300/10 bg-blue" : "bg-blue/20"}`}
        onClick={() => toggleDarkMode(!darkSide)}
      >
        {darkSide ? (
          <MdOutlineDarkMode className="text-2xl text-gray-300" />
        ) : (
          <MdOutlineWbSunny className="text-2xl text-blue" />
        )}
      </button>
    </div>
  );
}
