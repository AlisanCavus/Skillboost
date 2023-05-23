"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { HeaderProps } from "@/types/generalTypes";
import { getUserInfo } from "@/lib";
import { Loader } from "./Loader";
import Image from "next/image";
import { TbLogout } from "react-icons/tb";

const Header: React.FC<HeaderProps> = ({ token, companyLogo }) => {
  const userInfo = useQuery(["userData"], () => getUserInfo(token));
  const { data, isLoading, isError, error } = userInfo;
  if (isLoading) return <Loader />;
  if (isError) return <span>Error: {error as any}</span>;
  return (
    <div className="flex h-16 w-full items-center justify-start shadow-linkusShadow md:justify-between">
      <div className="flex w-1/3 md:w-1/2">
        <Image
          src={companyLogo}
          alt="Linkus Logo"
          width="175"
          height="65"
          priority={true}
          placeholder="blur"
          blurDataURL={companyLogo}
        />
        <div className="hidden w-4/5 items-center justify-center md:flex">
          <div className=" mt-1.5 hidden w-full items-center justify-start md:flex ">
            <div className="flex h-px41 items-center justify-center gap-2 px-4">
              <div className=" my-auto h-1/2 w-px bg-brandSecondary bg-opacity-50"></div>
            </div>
            <div className="flex h-px41 items-center justify-center gap-2 px-4">
              <span className="align-middle font-roboto text-lg font-light tracking-widest text-brandSecondary ">
                SKILLBOOST
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-2/3 items-center justify-start md:w-1/2">
        <div className="flex w-1/5 items-center justify-center"></div>
        <div className="mt-1.5 me-2 w-11/12 flex items-center justify-end gap-4">
          <button
            className="flex justify-center rounded-lg bg-brandPrimary px-2 py-1 gap-2 font-bold text-white lg:px-6 lg:py-3"
            onClick={() => signOut()}
          >
            <TbLogout className="my-auto"/>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
