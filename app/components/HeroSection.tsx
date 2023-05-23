"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="align-center flex min-h-[calc(100dvh-20rem)] w-full flex-col justify-center rounded-sm gap-10 xl:gap-2 p-2 text-stone-950 bg-blend-saturation">
      <div className="align-center flex w-full flex-col items-start gap-10 lg:ms-20 lg:w-2/3">
        <h1 className=" w-full lg:text-start text-2xl font-bold lg:w-2/3 md:text-3xl md:w-full lg:text-4xl xl:text-6xl text-center">
          Supercharge Your Freelance Career with <span className=" underline decoration-brandPrimary decoration-solid text-white lg:text-stone-950">SkillBoost.</span>
        </h1>
        <h2 className="text-xl font-semibold text-brandSecondary lg:text-3xl xl:text-4xl 2xl:text-5xl text-start mx-2 lg:mx-0">
          Discover essential skills and experiences for your next job.
        </h2>
        <p className="font-medium text-brandSecondary lg:text-xl text-md text-start lg:w-2/3 mx-2 lg:mx-0">
          Paste a job description and get tailored skill suggestions for freelancers. Analyze your CV. Our
          algorithm improves your CVs impact, highlighting key skills and
          experiences for freelancing. Craft a winning motivation letter.
          SkillBoost generates a perfect letter based on your CV and job
          description.
        </p>
        <p className="text-start">
          Login or create a free account to boost your freelance career.
        </p>
      </div>
      <div className="align-center flex w-full items-start gap-2 lg:ms-20 lg:w-2/3">
        <Link
          href="/login"
          className="flex transform justify-center rounded-lg px-2 py-1 font-bold text-brandPrimary hover:bg-brandBackground lg:px-6 lg:py-3"
          type="submit"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="flex justify-center rounded-lg bg-brandPrimary px-2 py-1 font-bold text-white lg:px-6 lg:py-3"
          type="submit"
        >
          Create your Free Account!
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
