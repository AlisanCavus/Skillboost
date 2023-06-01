"use client";
import { loadingContext, removeEmojis, sanitizeText } from "@/helpers";
import { extractJobDesc } from "@/lib";
import { ContextContentType } from "@/types/generalTypes";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import LoaderJobDescript from "../components/LoaderJobDescript";
import WizardHeader from "../components/WizardHeader";
import { useToastStore } from "@/store/store";
import { IoMdCloseCircle } from "react-icons/io";

const TextArea = () => {
  const router = useRouter();
  const ref = useRef<HTMLTextAreaElement>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isToast, change } = useToastStore();
  const [error, setError] = useState("");

  const [context, setContext] = useState<ContextContentType>(
    loadingContext[Math.floor(Math.random() * loadingContext.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setContext(loadingContext[Math.floor(Math.random() * loadingContext.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pastedText = event.clipboardData.getData("text/plain");
    const sanitizedText = removeEmojis(pastedText);
    const superSanitizedText = sanitizeText(sanitizedText);
    setJobDescription(superSanitizedText);
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

const parseJobDesc = async () => {
  setIsLoading(true);
  const skillsExp = await extractJobDesc({
    jobDescription,
  })
  localStorage.setItem("gptSkillsExp", skillsExp);
  setIsLoading(false);
  router.push("/step2");
}


  const submitText = () => {
    if (jobDescription === "") {
      setError("Please enter a job description!");
      change(isToast);
    } else {
      parseJobDesc()
    }
  };

  if (isLoading) {
    return <LoaderJobDescript context={context} status={"Analysing the job Description..."}/>;
  }
  return (
    <>
    <WizardHeader
      p={
        "SkillBoost makes the process simple: effortlessly copy and paste job descriptions from the internet. Our advanced algorithm swiftly identifies the essential skills, experiences, and competencies, sorting them to highlight the most critical criteria. Say farewell to manual analysis and embrace a more efficient hiring process. Experience the magic of SkillBoost and supercharge your finding a job efforts today!"
      }
      h2={"Find A job Description"}
    >
      <div className=" align-start flex h-full w-full justify-start">
        <div className="form-control w-full gap-4">
          <textarea
            ref={ref}
            value={jobDescription}
            onPaste={handlePaste}
            onChange={(e) => setJobDescription(e.target.value)}
            id="jobDescription"
            rows={7}
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
          Let&apos;s Start!
        </button>
      </div>
    </WizardHeader>
    {error && isToast && (
      <div className="toast-center toast w-96">
        <div className="alert alert-warning">
          <div>
            <span>{error}</span>
          </div>
          <div className="flex-none">
            <button
              onClick={() => change(isToast)}
              className="btn-warning btn-ghost btn"
            >
              <IoMdCloseCircle className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default TextArea;
