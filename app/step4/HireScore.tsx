"use client";
import React, { useState, useEffect } from "react";
import WizardHeader from "../components/WizardHeader";
import { useRouter } from "next/navigation";
import { assessScore } from "@/lib/assessScore";
import LoaderJobDescript from "../components/LoaderJobDescript";
import { loadingContext } from "@/helpers";
import { ContextContentType } from "@/types/generalTypes";

const HireScore = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const resume = JSON.parse(localStorage.getItem("resume") as any);
  console.log(resume);
  const jobDescription = localStorage.getItem("jobDescription");
  const [recomendations, setRecomendations] = useState({} as any);

  const [context, setContext] = useState<ContextContentType>(
    loadingContext[Math.floor(Math.random() * loadingContext.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setContext(loadingContext[Math.floor(Math.random() * loadingContext.length)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const submitScore = () => {
    assessScore({
            resume,
            jobDescription,
            error,
            loading,
            setLoading,
            setError,
            recomendations,
            setRecomendations           
        })
  }
  if (loading) {
    return <LoaderJobDescript context={context}/>;
    }

  return (
    <WizardHeader
      p="Depends on the job description and your CV there is a score that you can use to assess your chances to get the job."
      h2="Always room for improvement!"
    >
      <div className="align-start flex h-full w-full justify-start">
        <button onClick={() => submitScore()}>
          Lets Analyse your application!
        </button>
      </div>
      <div className="align-center flex h-full w-full justify-between gap-4">
        <button
          type="button"
          onClick={() => router.push("/step4")}
          className="btn bg-brandPrimary text-white"
        >
          Next Step!
        </button>
      </div>
    </WizardHeader>
  );
};

export default HireScore;
