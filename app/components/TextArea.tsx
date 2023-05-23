'use client';
import React, { useState, useRef } from "react";
import  { extractJobDesc, convertTextToObject  } from "@/lib";
import { removeEmojis } from "@/helpers";


const TextArea = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pastedText = event.clipboardData.getData("text/plain");
    const sanitizedText = removeEmojis(pastedText);
    setJobDescription(sanitizedText);
  };

  const submitText = () => {
    if (jobDescription === "") {
      alert("Please enter a job description");
    } else {
      extractJobDesc(jobDescription);
    }
  };

  return (
    <div className="align-center flex w-full justify-center">
      <div className="form-control mx-auto w-full gap-2">
        <label htmlFor="jobDescription" className="mx-auto">
          Job Description
        </label>
        <textarea
          ref={ref}
          onPaste={handlePaste}
          onChange={(e) => setJobDescription(e.target.value)}
          id="jobDescription"
          className="textarea-secondary textarea mx-auto h-96 w-1/2"
          placeholder="Copy and paste the job description that gets your attention."
        ></textarea>
        <button
          onClick={() => submitText()}
          type="button"
          className="btn mx-auto w-1/2"
        >
          Extract
        </button>
      </div>
    </div>
  );
};

export default TextArea;
