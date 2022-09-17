import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BiSearch } from 'react-icons/bi';
import { SearchDropdownContainer, SearchItemCell } from '../Search';
import { useGetSearch } from '../../hooks/useQuery';
import { useDebounce } from '../../hooks/useDebounce';
import type { Feature } from '../../utils/types/MapBoxResponse';

export default function SearchBox(): JSX.Element {
  const { t } = useTranslation();
  const [isShowing, setIsShowing] = useState(false);
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce(query, 500);
  const { data, isLoading } = useGetSearch(debouncedQuery);

  useEffect(() => {
    if (query.length > 0) {
      setIsShowing(true);
    } else {
      setIsShowing(false);
    }
  }, [query]);

  return (
    <form className="relative">
      <div className="group flex h-full items-center justify-between rounded-2xl border border-zinc-800 dark:border-cyan-800 bg-zinc-400/20 dark:bg-slate-800/70 group-focus-within:ring-1 group-focus-within:ring-blue-200 transition-all duration-150 ease-in-out">
        <input
          className="hidden sm:inline-block ml-2 bg-transparent text-black dark:text-white outline-none dark:placeholder:text-gray-300 placeholder:text-gray-700 transition-all duration-150 ease-in-out"
          placeholder={t('search_placeholder')}
          type="text"
          onFocus={() => query.length > 0 && setIsShowing(true)}
          onBlur={() => setIsShowing(false)}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="flex w-8 sm:w-auto items-center justify-center sm:p-0.5 sm:mr-0.5 rounded-2xl sm:dark:bg-cyan-900 sm:bg-zinc-800 shadow transition-all duration-150 ease-in-out">
          <BiSearch className="h-5 w-5 sm:text-white dark:text-white" />
        </button>
      </div>
      <SearchDropdownContainer isShowing={isShowing} isLoading={isLoading}>
        {data?.features.map((feature: Feature) => (
          <SearchItemCell
            key={feature.id}
            place_text={feature.text}
            place_name={feature.place_name}
          />
        ))}
      </SearchDropdownContainer>
    </form>
  );
}
