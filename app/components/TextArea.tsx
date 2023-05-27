"use client";
import React, { useState, useRef, useEffect } from "react";
import { extractJobDesc } from "@/lib";
import { removeEmojis } from "@/helpers";
import { Loader } from "./Loader";
import { useRouter } from "next/navigation";
import GptSkillsExpTable from "../step1/GptSkillsExpTable";
import { GptSkillsExp } from "@/types/skilExpTypes";

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
    localStorage.removeItem('jobDescription')
  };
 
  useEffect(() => {
    const savedJobDescription = localStorage.getItem("jobDescription");
    if (savedJobDescription) {
      setJobDescription(savedJobDescription);
    }
  }, []);

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
    <div className="flex h-full w-full flex-col gap-10 px-4">
      <div className="h-full w-full flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-brandSecondary">
        Welcome to <strong className="underline decoration decoration-brandPrimary">SkillBoost</strong> , the ultimate Job Description Wizard!
        </h2>
        <p className="text-md text-brand ">
           SkillBoost makes the process simple: effortlessly copy and paste job descriptions from the internet. Our advanced algorithm swiftly identifies the essential skills, experiences, and competencies, sorting them to highlight the most critical criteria. Say farewell to manual analysis and embrace a more efficient hiring process. Experience the magic of SkillBoost and supercharge your finding a job efforts today!
        </p>
      </div>
      <div className=" flex w-full h-full justify-start align-start">
        <div className="form-control w-full gap-4">
          <textarea
            ref={ref}
            value={jobDescription}
            onPaste={handlePaste}
            onChange={(e) => setJobDescription(e.target.value)}
            id="jobDescription"
            rows={5}
            cols={10000}
            className="textarea-secondary textarea w-full"
            placeholder="Copy and paste the job description that gets your attention."
          ></textarea>
          
          
        </div>
      </div>
      <div className=" flex w-full h-full gap-4 align-center justify-end">
            <button
              onClick={handleClear}
              type="button"
              className={`btn text-white ${jobDescription ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-auto'} transition-all duration-500 ease-in-out`}
            >
              Clear
            </button>
            <button
              onClick={submitText}
              type="button"
              className="btn bg-brandPrimary text-white"
            >
              Lets Start!
            </button>
      </div>
    </div>
  );
};

export default TextArea;
