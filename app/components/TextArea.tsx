"use client";
import React, { useState, useRef } from "react";
import { extractJobDesc } from "@/lib";
import { removeEmojis } from "@/helpers";
import { Loader } from "./Loader";

const TextArea = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gptSkillsExp, setGptSkillsExp] = useState("");

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pastedText = event.clipboardData.getData("text/plain");
    const sanitizedText = removeEmojis(pastedText);
    setJobDescription(sanitizedText);
  };

  if (gptSkillsExp) {
    console.log(JSON.parse(gptSkillsExp));
  }

  const handleClear = () => {
    setJobDescription("");
  };

  const submitText = async () => {
    if (jobDescription === "") {
      alert("Please enter a job description");
    } else {
      setIsLoading(true); // Start loading

      try {
        await extractJobDesc({
          gptSkillsExp,
          setGptSkillsExp,
          jobDescription,
          isLoading: isLoading,
          setIsLoading: setIsLoading,
          setJobDescription: setJobDescription,
          addJobDescription: () => {},
        });
      } catch (error) {
        console.error("Error extracting job description:", error);
        // Handle error here, such as displaying a message to the user
      } finally {
        setIsLoading(false); // Stop loading
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="align-center flex w-full justify-center">
      <div className="form-control mx-auto w-full gap-2">
        <label htmlFor="jobDescription" className="mx-auto">
          Job Description
        </label>
        <textarea
          ref={ref}
          value={jobDescription}
          onPaste={handlePaste}
          onChange={(e) => setJobDescription(e.target.value)}
          id="jobDescription"
          className="textarea-secondary textarea mx-auto h-96 w-1/2"
          placeholder="Copy and paste the job description that gets your attention."
        ></textarea>
        <div className="mx-auto flex w-1/2">
          <button
            onClick={submitText}
            type="button"
            className="btn mx-auto bg-brandPrimary"
          >
            Extract
          </button>
          <button
            onClick={handleClear}
            type="button"
            className="btn mx-auto disabled:cursor-not-allowed disabled:opacity-50"
          >
            Clear
          </button>
        </div>
        {isLoading && <div className="loader">Loading...</div>}{" "}
        {/* Display loader when isLoading is true */}
      </div>
      {gptSkillsExp && <div>{gptSkillsExp}</div>}
    </div>
  );
};

export default TextArea;
