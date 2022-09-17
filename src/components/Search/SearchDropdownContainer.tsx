import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SearchLoading } from './SearchLoading';

type Props = {
  isShowing: boolean;
  isLoading: boolean;
  children: React.ReactNode;
};

export function SearchDropdownContainer({
  isShowing,
  isLoading,
  children,
}: Props): JSX.Element {
  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          key="search-container"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute w-full bg-zinc-400/20 shadow border border-zinc-800 rounded-xl mt-2 max-h-40 overflow-y-auto"
        >
          {isLoading ? <SearchLoading isLoading={isLoading} /> : children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
