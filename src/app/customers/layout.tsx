import AuthorizationGuard from '@/components/layout/AuthorizationGuard';
import CustomerHeader from '@/components/layout/CustomerHeader';
import paths from '@/lib/paths';
import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthorizationGuard
      allowedGroups={paths.customer.home.userGroups}
      redirectPath={paths.home.path}
    >
      <main className="bg-slate-800 flex min-h-screen py-40 px-20 flex-col">
        <CustomerHeader />
        {children}
      </main>
    </AuthorizationGuard>
  );
};

export default Layout;
