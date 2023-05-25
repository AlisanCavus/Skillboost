import React from 'react'
import { PropsWithChildren, FC } from "react";
import { TopBar } from "@/app/components/TopBar";
import  Header  from "@/app/components/Header";
import { AuthLayoutProps } from "@/types/generalTypes";

export const AuthLayout: FC<PropsWithChildren<AuthLayoutProps>> = ({
    token,
    children,
    companyLogo,
}) => {
    
  return (
    <div className="flex max-h-max min-h-screen max-w-full flex-col overflow-x-hidden justify-start gap-8 bg-brandBackground md:mt-0 md:gap-0 xl:justify-start">
      <div>
      <TopBar />
      <Header token={token} companyLogo={companyLogo}/>
      </div>
      {children}
    </div>
  );
};
