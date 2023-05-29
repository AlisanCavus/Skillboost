
'use client';
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import WizardHeader from "./WizardHeader";
import { loadingContext } from "@/helpers";
import Image from "next/image";
import { createClient, PhotosWithTotalResults, ErrorResponse } from "pexels";

const LoaderJobDescript = () => {
  const [context, setContext] = useState(
    loadingContext[Math.floor(Math.random() * loadingContext.length)]
  );

  const [animateFadeIn, setAnimateFadeIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setContext(loadingContext[Math.floor(Math.random() * loadingContext.length)]);
      setAnimateFadeIn(true);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateFadeIn(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [context]);

  return (
    <WizardHeader p={context.content} h2={context.title}>
      <div className="flex h-full w-full flex-col gap-10 px-4 transition-opacity duration-500">
        <div className="flex h-full w-full flex-col gap-4">
        </div>
      </div>
    </WizardHeader>
  );
};

export default LoaderJobDescript;
