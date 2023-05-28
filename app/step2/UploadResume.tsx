"use client";

import React, { useState, useRef } from "react";
import { affindaClient } from "@/affinda.config";
import { useRouter } from "next/navigation";
import { DocumentError } from "@affinda/affinda";
import { Loader } from "../components/Loader";
import WizardHeader from "../components/WizardHeader";
import { createMotivLetter } from "@/lib/createMotivLetter";

const UploadResume = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined | DocumentError>();
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [motivLetter, setMotivLetter] = useState();
  const [letter, setLetter] = useState("");

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
      });
      
      // // save to local storage as motivation letter
      // localStorage.setItem("motivationLetter", JSON.stringify(motivationLetter));
      // // redirect to next page
      // router.push("/step3");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
    router.push("/step3");
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <WizardHeader
      p={
        "Now we need your CV for creating ultimate go getter motivation letter, to harden your application to this job."
      }
      h2={"A Rock Solid Motivation Letter"}
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
