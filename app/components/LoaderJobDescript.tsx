'use client';
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import Image from "next/image";
import { ContextType } from '@/types/generalTypes';
const LoaderJobDescript: FC<PropsWithChildren<ContextType>> = ({context, status}) => {
  
  return (
    <div className="flex h-full w-full flex-col gap-10 px-4 min-h-[20rem] animate-fadeIn">
      <div className="flex h-full w-full flex-col gap-10 px-4 transition-opacity duration-500">
        <div className="flex h-full w-full justify-start items-center gap-4">
          <Image src={"./Vector.svg"} alt={"Logo of Linkus"} width={100} height={100} className=" animate-spin"/>
          <h2 className="text-xl text-slate-500">{status}</h2>
        </div>
      </div>
      <div className="h-full w-full flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-brandSecondary ">{context.title}</h2>
        <p className="text-md text-brand animate-fadeIn after:animate-fadeOut">{context.content}</p>
      </div>
      
    </div>
  );
};

export default LoaderJobDescript;
