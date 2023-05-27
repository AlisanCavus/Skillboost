import React from "react";
import Image from "next/image";
import Link from "next/link";

const WizardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-[calc(100dvh-(4rem+7px))] w-screen items-center justify-center overflow-x-hidden p-20">
      
      <div className=" flex w-2/3 items-start justify-center gap-4">
        <div className="flex justify-center align-top">
          <div className="flex flex-col items-center justify-start">
            <Image
              src="/wizard.svg"
              alt="wizard logo of linkus "
              width={263}
              height={322}
            />
            <h1 className=" text-3xl text-stone-950 underline decoration-brandPrimary decoration-solid">
              SkillBoost
            </h1>
          </div>
        </div>
        <div className="min-w-[873px] rounded-xl border border-white bg-white p-10 shadow-md flex flex-col gap-2">
          {children}
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardLayout;
