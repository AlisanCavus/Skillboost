"use client";
import { PropsWithChildren, FC } from "react";
import Image from "next/image";
import { TopBar } from "@/app/components/TopBar";
import { UnAuthLayoutProps } from "@/types/generalTypes";
import Link from "next/link";

export const MainLayout: FC<PropsWithChildren<UnAuthLayoutProps>> = ({
  children,
  logoImage,
  companyName,
  termsLink,
  privacyLink,
  cookieLink,
  dataConsenseLink,
}) => {
  return (
    <div className="flex max-h-max min-h-screen w-screen flex-col items-center justify-between gap-8 overflow-hidden md:mt-0 md:gap-0 xl:justify-between bg-gradient-to-r via-transparent from-brandBackground to-transparent bg-opacity-10">
      <div className="h-full flex flex-col justify-start items-start">
        <TopBar />
        <div className="flex min-h-[calc(100dvh-10rem)] w-screen flex-col items-center justify-start ">
          <div className=" mb-2 flex w-screen items-start justify-start " >
            <Image
              src={logoImage}
              alt="Linkus Logo"
              width="175"
              height="65"
              priority={true}
              placeholder="blur"
              blurDataURL={logoImage}
            />
          </div>
          {children}
        </div>
      </div>
      <div className={`mb-2 flex h-20 w-full flex-col-reverse items-center justify-center gap-2 lg:w-5/6 lg:flex-row xl:flex-row text-white `}>
        <div className="xl:w1/2 flex w-full items-center justify-center lg:w-1/2 lg:justify-start">
          <span className=" align-middle text-xs font-normal text-brandSecondary">
            {companyName} &copy;{new Date().getFullYear()}. All rights reserved.
          </span>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2 lg:justify-end xl:w-1/2 ">
          <ul className={`flex w-full items-center justify-around divide-x divide-white rtl:divide-x-reverse `}>
            <li className="w-full px-2 text-center align-middle text-xs font-normal ">
              <Link href={termsLink} target="_blank" rel="noreferrer">
                <span>Terms of Use</span>
              </Link>
            </li>
            <li className="w-full px-2 text-center align-middle  text-xs font-normal ">
              <Link href={privacyLink} target="_blank" rel="noreferrer">
                <span>Privacy Policy</span>
              </Link>
            </li>
            <li className=" w-full px-2 text-center align-middle text-xs font-normal  ">
              <Link href={cookieLink} target="_blank" rel="noreferrer">
                <span>Cookie Policy</span>
              </Link>
            </li>
            <li className=" w-full px-2 text-center align-middle  text-xs font-normal ">
              <Link href={dataConsenseLink} target="_blank" rel="noreferrer">
                <span>Data Consent</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
