"use client";
import { loadingContext } from "@/helpers";
import { assessScore } from "@/lib/assessScore";
import { ContextContentType } from "@/types/generalTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoaderJobDescript from "../components/LoaderJobDescript";
import WizardHeader from "../components/WizardHeader";

const HireScore = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const resume = JSON.parse(localStorage.getItem("resume") as any);
  const jobDescription = localStorage.getItem("jobDescription");
  const [recomendations, setRecomendations] = useState({} as any);

  const [context, setContext] = useState<ContextContentType>(
    loadingContext[Math.floor(Math.random() * loadingContext.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setContext(loadingContext[Math.floor(Math.random() * loadingContext.length)]);
    }, 5000);

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
            setRecomendations,
            router        
        })
  }
  if (loading) {
    return <LoaderJobDescript context={context} status={"Analysing your chances for this job description..."}/>;
    }

  return (
    <WizardHeader
      p="Depends on the job description and your CV there is a score that you can use to assess your chances to get the job."
      h2="Always room for improvement!"
    >
      <div className="align-center flex h-full w-full justify-between gap-4">
        <button
          type="button"
          onClick={() => submitScore()}
          className="btn bg-brandPrimary text-white"
        >
          Lets Analyse your application!
        </button>
      </div>
    </WizardHeader>
  );
};

export default HireScore;
