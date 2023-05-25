"use client";
import React, { useState, useRef } from "react";
import { extractJobDesc } from "@/lib";
import { removeEmojis } from "@/helpers";
import { Loader } from "./Loader";
import { useRouter } from "next/navigation";
import GptSkillsExpTable from "../step1/GptSkillsExpTable";
import  { GptSkillsExp } from "@/types/skilExpTypes";


const TextArea = () => {
  const router = useRouter();
  const ref = useRef<HTMLTextAreaElement>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gptSkillsExp, setGptSkillsExp] = useState({}) as any;

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pastedText = event.clipboardData.getData("text/plain");
    const sanitizedText = removeEmojis(pastedText);
    setJobDescription(sanitizedText);
  };

  console.log(jobDescription);

  if (gptSkillsExp) {
    console.log(gptSkillsExp);
  }

  const handleClear = () => {
    setJobDescription("");
  };

  const submitText = async () => {
    if (jobDescription === "") {
      alert("Please enter a job description");
    } else {
      setIsLoading(true);
      try {
        await extractJobDesc({
          gptSkillsExp,
          setGptSkillsExp,
          jobDescription,
          setJobDescription: setJobDescription,
        });
      } catch (error) {
        console.error("Error extracting job description:", error);
      } finally {
        router.push("/step1");
        setIsLoading(false);
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex w-full">
      <div className="align-center flex h-96 w-96 justify-center">
        <div className="form-control mx-auto w-96 gap-2">
          <label htmlFor="jobDescription" className="mx-auto">
            Job Description
          </label>
          <textarea
            ref={ref}
            value={jobDescription}
            onPaste={handlePaste}
            onChange={(e) => setJobDescription(e.target.value)}
            id="jobDescription"
            className="textarea-secondary textarea textarea-lg mx-auto h-96 w-full"
            placeholder="Copy and paste the job description that gets your attention."
          ></textarea>
          <div className="mx-auto flex w-full">
            <button
              onClick={handleClear}
              type="button"
              className="btn mx-auto disabled:cursor-not-allowed disabled:opacity-50"
            >
              Clear
            </button>
            <button
              onClick={submitText}
              type="button"
              className="btn mx-auto bg-brandPrimary text-white"
            >
              Lets Start!
            </button>
          </div>
          {isLoading && <div className="loader">Loading...</div>}
        </div>
      </div>
      <div className="h-96 w-96">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit saepe quaerat debitis mollitia pariatur non natus velit exercitationem corporis voluptas dolorum maxime eos dolor, sequi maiores consectetur, at, sed unde.
        </div>
      </div>
    </div>
  );
};

export default TextArea;
