"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import classNames from "classnames";

const SideBar = () => {
  const pathname = usePathname();
  console.log(pathname);

  // Define the steps and their corresponding URLs
  const stepUrlMapping = {
    "/step1": "Copy a Job Description",
    "/step2": "Check Requirements",
    "/step3": "Upload Your CV",
    "/step4": "Create Motivation Letter",
    "/step5": "Assess your Application",
  };

  // Get the title of the current step based on the pathname
  const currentStepTitle = Object.entries(stepUrlMapping).find(
    ([url, title]) => url.toLowerCase() === pathname.toLowerCase()
  )?.[1];

  return (
    <div className="h-full w-full min-h-min">
      <ul className="steps steps-vertical h-[70dvh]">
        {Object.entries(stepUrlMapping).map(([url, title], index) => (
          <li
            className={classNames("step", {
              "step-primary text-brandPrimary": title === currentStepTitle,
            })}
            key={index}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
