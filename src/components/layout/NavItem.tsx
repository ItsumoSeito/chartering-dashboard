'use client';

import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const NavItem: React.FC<
  PropsWithChildren & { path: string; className?: string }
> = ({ path, children, className }) => {
  const pathname = usePathname();

  const active = (path: string) => {
    if (pathname === path) {
      return 'bg-slate-500';
    }
  };

  return (
    <Link
      href={path}
      className={cn(
        buttonVariants({ variant: 'outline' }),
        active(path),
        className,
        'rounded-2xl'
      )}
    >
      {children}
    </Link>
  );
};

export default NavItem;
