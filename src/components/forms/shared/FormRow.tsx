import React, { PropsWithChildren } from 'react';

export const FormRow: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex w-full gap-12 justify-between">{children}</div>;
};
