import React from 'react'
import { PropsWithChildren, FC } from "react";
import { TopBar } from "@/app/components/TopBar";
import { Header } from "@/app/components/Header";
import { AuthLayoutProps } from "@/types/generalTypes";
import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '@/lib';

export const AuthLayout: FC<PropsWithChildren<AuthLayoutProps>> = ({
    token,
    children,
}) => {
    const { data, isLoading, isError, error } = useQuery({
        enabled: !!token,
        queryKey: ["currentUser"],
        queryFn: () => {
          const data = getCurrentUser(token);
          return data;
        },
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    console.log(data);
  return (
    <div className="flex max-h-max min-h-screen max-w-full flex-col overflow-x-hidden justify-start gap-8 bg-brandBackground md:mt-0 md:gap-0 xl:justify-start">
        <div></div>
      <TopBar />
      <Header />
      {children}
    </div>
  );
};
