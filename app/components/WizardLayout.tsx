import React from "react";

const WizardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-[calc(100dvh-(4rem+7px))] w-screen items-start justify-start overflow-x-hidden">
      <div className=" w-44 flex flex-col items-center3 justify-start h-[calc(100dvh-(4rem+7px))] px-4 py-2">
        <div className="flex flex-col items-start justify-start">
          <h1 className=" text-3xl text-stone-950 underline decoration-brandPrimary decoration-solid decoration-4">
            SkillBoost
          </h1>
          <div className="">

          </div>
        </div>
      </div>
      <div className=" flex w-[calc(100dvw-11rem)] items-start justify-center gap-4 py-20 px-10">
        <div className="flex w-3/4 flex-col gap-2 rounded-xl border border-white bg-white p-10 shadow-md">
          {children}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default WizardLayout;
