import React from 'react';
import paths from '@/lib/paths';
import AuthControls from '../AuthControls';
import NavItem from './NavItem';

const HomeHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-20 bg-slate-600 bg-opacity-95 flex justify-center items-center gap-4">
      <NavItem path={paths.customer.home}>Customers</NavItem>
      <NavItem path={paths.operations.home}>Operations</NavItem>
      <div className="absolute right-4 flex gap-4">
        <AuthControls />
      </div>
    </div>
  );
};

export default HomeHeader;
