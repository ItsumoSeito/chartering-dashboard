import React from 'react';
import paths from '@/lib/paths';
import AuthControls from '../AuthControls';
import NavItem from './NavItem';
import { Avatar, AvatarImage } from '../ui/avatar';
import Link from 'next/link';

const CustomerHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-20 bg-slate-600 bg-opacity-95 flex justify-center items-center gap-4">
      <div className="absolute left-4 flex">
        <Link href={paths.home}>
          <Avatar>
            <AvatarImage src={'/images/logo.webp'} />
          </Avatar>
        </Link>
      </div>
      <NavItem path={paths.customer.home}>Dashboard</NavItem>
      <NavItem path={paths.customer.newRequest}>New Request</NavItem>
      <NavItem path={paths.customer.requestsList}>Requests</NavItem>
      <NavItem path={paths.customer.bookings}>Bookings</NavItem>
      <div className="absolute right-4 flex gap-4">
        <AuthControls />
      </div>
    </div>
  );
};

export default CustomerHeader;
