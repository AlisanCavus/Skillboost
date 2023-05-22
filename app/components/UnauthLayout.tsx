import { PropsWithChildren, FC } from "react";
import Image from "next/image";
import { TopBar } from "@/app/components";

type Props = {
  logoImage: string;
  companyName: string;
  termsLink: string;
  privacyLink: string;
  cookieLink: string;
  dataConsenseLink: string;
};

export const UnAuthLayout: FC<PropsWithChildren<Props>> = ({
  children,
  logoImage,
  companyName,
  termsLink,
  privacyLink,
  cookieLink,
  dataConsenseLink,
}) => {
  return (
    <div className="mt-2 flex max-h-max min-h-screen w-full flex-col items-center justify-between gap-8 bg-brandBackground  md:mt-0 md:gap-0 xl:justify-between">
      <TopBar />
      <div className=" my-auto flex min-h-max w-11/12 flex-col items-center justify-center ">
        <div className=" mb-2 flex w-11/12 items-start justify-start md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
          {/* <Image src={LinkusLogo} alt="Linkus logo" /> */}
          <Image
            src={logoImage}
            alt="Linkus Logo"
            width="175"
            height="65"
            className=" -ms-3"
          />
        </div>
        {children}
      </div>
      <div className=" flex h-20 mb-2 w-full flex-col-reverse items-center justify-center gap-2 lg:w-5/6 lg:flex-row xl:flex-row ">
        <div className="xl:w1/2 flex w-full items-center justify-center lg:w-1/2 lg:justify-start">
          <span className=" align-middle  text-xs font-light text-brandSecondary ">
            {companyName} &copy;{new Date().getFullYear()}. All rights reserved.
          </span>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2 lg:justify-end xl:w-1/2 ">
          <ul className="flex w-full items-center justify-around divide-x divide-brandSecondary rtl:divide-x-reverse">
            <li className="w-full px-2 text-center align-middle  text-xs font-light text-brandSecondary">
              <a href={termsLink} target="_blank" rel="noreferrer">
                <span>Terms of Use</span>
              </a>
              {/* {termsComponent} */}
            </li>
            <li className="w-full px-2 text-center align-middle  text-xs font-light text-brandSecondary">
              <a href={privacyLink} target="_blank" rel="noreferrer">
                <span>Privacy Policy</span>
              </a>
              {/* {privacyComponent} */}
            </li>
            <li className=" w-full px-2 text-center align-middle text-xs font-light  text-brandSecondary">
              <a href={cookieLink} target="_blank" rel="noreferrer">
                <span>Cookie Policy</span>
              </a>
              {/* {cookieComponent} */}
            </li>
            <li className=" w-full px-2 text-center align-middle  text-xs font-light text-brandSecondary">
              <a href={dataConsenseLink} target="_blank" rel="noreferrer">
                <span>Data Consent</span>
              </a>
              {/* {dataConsenseComponent} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
