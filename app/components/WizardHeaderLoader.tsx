import React, { PropsWithChildren, FC } from 'react';
import { WizardHeaderProps } from '@/types/generalTypes';


const WizardHeader: FC<PropsWithChildren<WizardHeaderProps>> = ({ children, h2, p}) => {
  return (
    <div className="flex h-full w-full flex-col gap-10 px-4 min-h-[20rem] animate-fadeIn">
      <div className="h-full w-full flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-brandSecondary ">{h2}</h2>
        <p className="text-md text-brand animate-fadeIn">{p}</p>
      </div>
      {children}
    </div>
  );
};

export default WizardHeader;
