import CustomerHeader from '@/components/layout/CustomerHeader';
import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="bg-slate-800 flex min-h-screen py-40 px-20 flex-col">
      <CustomerHeader />
      {children}
    </main>
  );
};

export default Layout;
