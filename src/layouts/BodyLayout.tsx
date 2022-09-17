import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function BodyLayout({ children }: Props): JSX.Element {
  return (
    <main className="mx-auto mt-5 max-w-screen-md px-4 lg:px-0">
      {children}
    </main>
  );
}
