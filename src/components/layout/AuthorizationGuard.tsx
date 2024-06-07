'use client';

import React, { PropsWithChildren } from 'react';
import { UserGroup } from '@/lib/models/UserGroup';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';

type Props = {
  allowedGroups: UserGroup[];
  redirectPath: string;
};

const AuthorizationGuard: React.FC<Props & PropsWithChildren> = ({
  children,
  allowedGroups,
  redirectPath,
}) => {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const router = useRouter();
  const { userGroups } = useStore((state) => state);

  useEffect(() => {
    const checkAuthorization = async () => {
      const isAuthorized = userGroups.some((group) =>
        allowedGroups.includes(group)
      );
      setIsAuthorized(isAuthorized);
    };

    checkAuthorization();
  }, [allowedGroups, userGroups]);

  if (isAuthorized) {
    return children;
  }
  router.replace(redirectPath);
};

export default AuthorizationGuard;
