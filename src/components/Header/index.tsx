import { Link } from 'react-router-dom';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import SearchBox from './SearchBox';
import ThemeSelector from './ThemeSelector';

export function Header(): JSX.Element {
  return (
    <header className="py-5 px-4 shadow-md dark:shadow-xl lg:px-0">
      <nav className="mx-auto flex max-w-screen-md justify-between">
        <Link
          to="/"
          className="inline-flex select-none items-end gap-1.5 text-xl text-dark dark:text-white"
          reloadDocument
        >
          <TiWeatherPartlySunny className="h-8 w-8" />
          <span>
            Weather<span className="font-bold">Man</span>
          </span>
        </Link>
        <div className="flex gap-0.5">
          <SearchBox />
          <ThemeSelector />
        </div>
      </nav>
    </header>
  );
}
