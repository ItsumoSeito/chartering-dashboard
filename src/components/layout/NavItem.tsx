'use client';

import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useStore } from '@/lib/store';
import { UserGroup } from '@/lib/models/UserGroup';

const NavItem: React.FC<
  PropsWithChildren & {
    path: { path: string; userGroups?: UserGroup[] };
    className?: string;
  }
> = ({ path, children, className }) => {
  const pathname = usePathname();
  const { userGroups } = useStore((state) => ({
    userGroups: state.userGroups,
  }));

  const active = (path: string) => {
    if (pathname === path) {
      return 'bg-slate-500';
    }
  };

  const disabled =
    path.userGroups &&
    !path.userGroups.some((group) => userGroups.includes(group));

  return (
    <Link
      href={disabled ? '' : path.path}
      className={cn(
        buttonVariants({ variant: 'outline' }),
        active(path.path),
        disabled ? 'cursor-not-allowed opacity-50' : undefined,
        className,
        'rounded-2xl'
      )}
    >
      {children}
    </Link>
  );
};

export default NavItem;
