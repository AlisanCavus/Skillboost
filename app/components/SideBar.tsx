"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  const pathname = usePathname();

  // Define the steps and their corresponding URLs
  const stepUrlMapping = {
    "/step1": "Find a Job Description",
    "/step2": "See the Requirements",
    "/step3": "Upload Your CV",
    "/step4": "Create Motivation Letter",
    "/step5": "Assess your Application",
    "/step6": "Get your Score",
  };

  // Get the title of the current step based on the pathname
  const currentStepTitle = Object.entries(stepUrlMapping).find(
    ([url, title]) => url.toLowerCase() === pathname.toLowerCase()
  )?.[1];

  return (
    <div className="h-full min-h-min w-full">
      <ul className="steps steps-vertical h-[70dvh]">
        {Object.entries(stepUrlMapping).map(([url, title], index) => (
          <li
            className={classNames("step", {
              "step-primary text-brandPrimary": title === currentStepTitle,
            })}
            key={index}
          >
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
