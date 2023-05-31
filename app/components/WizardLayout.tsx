import SideBar from "@/app/components/SideBar";
import React from "react";

const WizardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-[calc(100dvh-(4rem+7px))] w-screen flex-col items-start justify-start overflow-x-hidden md:flex-row">
      <div className="hidden max-h-[calc(100dvh-(4rem+7px))] min-h-min w-72 flex-col items-center justify-start px-4 md:py-10 md:flex">
        <div className="flex min-h-min flex-col items-start justify-start overflow-auto">
          <h1 className=" text-3xl text-stone-950 underline decoration-brandPrimary decoration-solid decoration-4">
            SkillBoost
          </h1>
          <SideBar />
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row justify-center gap-4 md:w-[calc(100dvw-18rem)] md:p-10 md:px-auto">
        <div className="md:px-auto flex w-full flex-col justify-center gap-2 rounded-xl border border-white bg-white shadow-md md:w-3/4 md:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WizardLayout;
