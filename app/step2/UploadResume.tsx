"use client";

import React, { useState, useRef } from "react";
import { affindaClient } from "@/affinda.config";
import { useRouter } from "next/navigation";
import { DocumentError } from "@affinda/affinda";
import { Loader } from "../components/Loader";

const UploadResume = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined | DocumentError>();
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      setIsLoading(false);
      console.log(res);
      // save to local storage as resume
      localStorage.setItem("resume", JSON.stringify(res.data));
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <input
          type="file"
          className="file-input-bordered file-input-secondary file-input w-full max-w-xs "
          accept=".doc, .docx, .pdf"
          ref={fileInputRef}
          onChange={handleUpload}
        />
      </div>
    </>
  );
};

export default UploadResume;
