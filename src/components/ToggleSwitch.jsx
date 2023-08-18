import { useState } from 'react';
import { Switch } from '@headlessui/react';
import useDarkSide from '../utils/useDarkSide';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';

export default function ToggleSwitch() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="py-2 mx-8 md:mx-4">
      <Switch
        checked={darkSide}
        onChange={toggleDarkMode}
        className={
          'relative inline-flex h-[27px] w-[48px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  dark:border-dark600 focus-visible:ring-white focus-visible:ring-opacity-75 border-2 border-greys'
        }
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            darkSide
              ? 'translate-x-5 bg-dark700'
              : 'translate-x-0.5 bg-slate-600'
          }
          pointer-events-none inline-block h-[20px] w-[20px] mt-[1px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
        {darkSide ? (
          <MdOutlineWbSunny className="-translate-x-5 mt-[4px] ml-[3px] text-white dark:text-dark700 text-sm" />
        ) : (
          <MdOutlineDarkMode className=" mt-[2px] ml-[3px] text-lg" />
        )}
      </Switch>
    </div>
  );
}
