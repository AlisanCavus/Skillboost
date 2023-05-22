import React from 'react'
import { PropsWithChildren, FC } from "react";
import Image from "next/image";
import { TopBar, Header } from "@/app/components";
import { AuthLayoutProps } from "@/types/generalTypes";

export const AuthLayout: FC<PropsWithChildren<AuthLayoutProps>> = ({
    token,
    children,
}) => {
    console.log(token)
  return (
    <div className="flex max-h-max min-h-screen max-w-full flex-col overflow-x-hidden justify-start gap-8 bg-brandBackground md:mt-0 md:gap-0 xl:justify-start">
        <div></div>
      <TopBar />
      <Header />
      {children}
    </div>
  );
};
