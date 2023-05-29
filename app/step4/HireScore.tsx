"use client";
import React, { useState } from "react";
import WizardHeader from "../components/WizardHeader";
import { useRouter } from "next/navigation";
import { assessScore } from "@/lib/assessScore";
import { Loader } from "../components/Loader";

const HireScore = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [resume, setResume] = useState(JSON.parse(localStorage.getItem("resume") as any) || "");
  const [jobDescription, setJobDescription] = useState(
    localStorage.getItem("jobDescription") || ""
  );

  if (loading) {
    return <Loader />;
    }

  return (
    <WizardHeader
      p="Depends on the job description and your CV there is a score that you can use to assess your chances to get the job."
      h2="Always room for improvement!"
    >
      <div className="align-start flex h-full w-full justify-start">
        <button onClick={() => assessScore({
            resume,
            jobDescription,
            error,
            loading,
            setLoading,
            setError,
            setJobDescription,
            setResume            
        })}>
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
