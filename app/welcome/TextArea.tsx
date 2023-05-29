"use client";
import React, { useState, useRef, useEffect } from "react";
import { extractJobDesc } from "@/lib";
import { removeEmojis } from "@/helpers";
import LoaderJobDescript from "../components/LoaderJobDescript";
import { useRouter } from "next/navigation";
import WizardHeader from "../components/WizardHeader";

const TextArea = () => {
  const router = useRouter();
  const ref = useRef<HTMLTextAreaElement>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [everythingOK, setEverythingOK] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [gptSkillsExp, setGptSkillsExp] = useState({}) as any;

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pastedText = event.clipboardData.getData("text/plain");
    const sanitizedText = removeEmojis(pastedText);
    setJobDescription(sanitizedText);
  };

  const handleClear = () => {
    setJobDescription("");
    localStorage.removeItem("jobDescription");
  };

  useEffect(() => {
    const savedJobDescription = localStorage.getItem("jobDescription");
    if (savedJobDescription) {
      setJobDescription(savedJobDescription);
    }
  }, []);

  const submitText = () => {
    if (jobDescription === "") {
      alert("Please enter a job description");
    } else {
      extractJobDesc({
        gptSkillsExp,
        setGptSkillsExp,
        jobDescription,
        everythingOK,
        setEverythingOK,
        setIsLoading,
        isLoading,
        setJobDescription,
        router,
      });
    }
  };

  if (isLoading) {
    return <LoaderJobDescript />;
  }
  return (
    <WizardHeader
      p={
        "SkillBoost makes the process simple: effortlessly copy and paste job descriptions from the internet. Our advanced algorithm swiftly identifies the essential skills, experiences, and competencies, sorting them to highlight the most critical criteria. Say farewell to manual analysis and embrace a more efficient hiring process. Experience the magic of SkillBoost and supercharge your finding a job efforts today!"
      }
      h2={"The Ultimate Job Application Wizard!"}
    >
      <div className=" align-start flex h-full w-full justify-start">
        <div className="form-control w-full gap-4">
          <textarea
            ref={ref}
            value={jobDescription}
            onPaste={handlePaste}
            onChange={(e) => setJobDescription(e.target.value)}
            id="jobDescription"
            rows={5}
            cols={10000}
            className=" textarea w-full"
            placeholder="Copy and paste the job description that gets your attention."
          ></textarea>
        </div>
      </div>
      <div className=" align-center flex h-full w-full justify-end gap-4">
        <button
          onClick={handleClear}
          type="button"
          className={`btn text-white ${
            jobDescription
              ? "cursor-pointer opacity-100"
              : "cursor-auto opacity-0"
          } transition-all duration-500 ease-in-out`}
        >
          Clear
        </button>
        <button
          onClick={submitText}
          type="button"
          className="btn bg-brandPrimary text-white"
        >
          Next Step!
        </button>
      </div>
    </WizardHeader>
  );
};

export default TextArea;
