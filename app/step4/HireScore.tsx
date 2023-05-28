'use client';
import React, { useState } from "react";
import WizardHeader from "../components/WizardHeader";
import { useRouter } from "next/navigation";
import { assessScore } from "@/lib/assessScore";

const HireScore = () => {
  const router = useRouter();
  const [score, setScore] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const resume = window.localStorage.getItem("resume");
  const jobDescription = window.localStorage.getItem("jobDescription");


    const handleAssessScore = async () => {
        setLoading(true);
        setError(false);
        try {
            const score = await assessScore({
                resume: resume,
                jobDescription: jobDescription,
                setScore: setScore,
            });
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

  
  return (
    <WizardHeader
      p="Depends on the job description and your CV there is a score that you can use to assess your chances to get the job."
      h2="Always room for improvement!"
    >
      <div className="align-start flex h-full w-full justify-start">
        <button onClick={handleAssessScore}>
            Lets Analyse your application!
        </button>
      </div>
      <div className="align-center flex h-full w-full justify-between gap-4">
        {/* <button type="button" className="btn text-white">
          Next step!
        </button> */}
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
