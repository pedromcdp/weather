import { useState } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { IoIosMoon } from 'react-icons/io';

export default function ThemeSelector() {
  const [isDark, setIsDark] = useState<boolean>(localStorage.theme === 'dark');

  const toggleTheme = (): void => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      className="flex w-8 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-400/20 dark:border-cyan-800 dark:bg-slate-800/70 text-black dark:text-white transition-all ease-in duration-150"
      onClick={toggleTheme}
    >
      {isDark ? (
        <MdWbSunny className="h-5 w-5" />
      ) : (
        <IoIosMoon className="h-5 w-5" />
      )}
    </button>
  );
}
