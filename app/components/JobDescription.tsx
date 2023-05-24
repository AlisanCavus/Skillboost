"use client";
import React from "react";
import { useStoreJobDesc, useStoreGptResponse } from "@/store/store";
const JobDescription = () => {
  const jobDescription = useStoreJobDesc((state: any) => state.jobDescription);
  const gptResponse = useStoreGptResponse((state: any) => state.gptResponse);
  return (
    <div className="align-center mx-auto flex w-full flex-col justify-start gap-2">
      <h1 className="mx-auto">hello job description</h1>
      <div className="jutify-center align-center mx-auto flex h-96 w-96 flex-col overflow-y-scroll">
        {jobDescription}
        { gptResponse && (<div>{gptResponse}</div>)}
      </div>
    </div>
  );
};

export default JobDescription;
