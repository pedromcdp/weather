import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props): JSX.Element {
  return (
    <main className="transition-color ease-in duration-150 flex-col min-w-[350px] min-h-screen bg-white dark:bg-cyan-900">
      {children}
    </main>
  );
}
