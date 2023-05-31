"use client";

import { affindaClient } from "@/affinda.config";
import { loadingContext } from "@/helpers";
import { createMotivLetter } from "@/lib/createMotivLetter";
import { ContextContentType } from "@/types/generalTypes";
import { DocumentError } from "@affinda/affinda";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import LoaderJobDescript from "../components/LoaderJobDescript";
import WizardHeader from "../components/WizardHeader";

const UploadResume = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined | DocumentError>();
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [motivLetter, setMotivLetter] = useState("");
  const [letter, setLetter] = useState("");
  const [stateResume, setStateResume] = useState({} as any);
  const [jobDescription, setJobDescription] = useState(
    localStorage.getItem("jobDescription") || ""
  );

  const [context, setContext] = useState<ContextContentType>(
    loadingContext[Math.floor(Math.random() * loadingContext.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setContext(loadingContext[Math.floor(Math.random() * loadingContext.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setError(undefined);
      setIsLoading(true);
      const res = await affindaClient.createDocument({
        file,
        workspace: "boZlKmiN",
        collection: "iojESxXj",
      });
      if (res.error) {
        setError(res.error);
      }
      const resume = res.data;
      // save to local storage as resume
      localStorage.setItem("resume", JSON.stringify(resume));
      // create motivation letter
      const motivationLetter = await createMotivLetter({
        motivLetter,
        setMotivLetter,
        resume,
        isLoading,
        setIsLoading,
        jobDescription,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
    router.push("/step4");
  };

  if (isLoading) {
    return <LoaderJobDescript context={context} status={"Uploading your CV and Parsing the information."} />;
  }

  return (
    <WizardHeader
      p={
        "Now we need your CV for creating ultimate go getter motivation letter, to harden your application to this job."
      }
      h2={"Upload your CV"}
    >
       <div>
        <input
          type="file"
          className="file-input-bordered file-input-secondary file-input w-full max-w-xs "
          accept=".doc, .docx, .pdf"
          ref={fileInputRef}
          onChange={handleUpload}
        />
      </div>
      
    </WizardHeader>
  );
};

export default UploadResume;
