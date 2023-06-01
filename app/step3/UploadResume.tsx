"use client";
import { affindaClient } from "@/affinda.config";
import { loadingContext } from "@/helpers";
import { ContextContentType } from "@/types/generalTypes";
import { DocumentError } from "@affinda/affinda";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import LoaderJobDescript from "../components/LoaderJobDescript";
import WizardHeader from "../components/WizardHeader";
import { useToastStore } from "@/store/store";
import { IoMdCloseCircle } from "react-icons/io";

const UploadResume = () => {
  const router = useRouter();
  const { isToast, change } = useToastStore();
  const [error, setError] = useState<string | undefined | DocumentError>();
  const [isLoading, setIsLoading] = useState(false);
  const [isResume, setIsResume] = useState({} as any);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [context, setContext] = useState<ContextContentType>(
    loadingContext[Math.floor(Math.random() * loadingContext.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setContext(
        loadingContext[Math.floor(Math.random() * loadingContext.length)]
      );
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
      setIsResume(resume);
      if (isResume){
        router.push("/step4");
      }
    }
  };

  if (isLoading) {
    return (
      <LoaderJobDescript
        context={context}
        status={"Uploading your CV and Parsing the information."}
      />
    );
  }

  return (
    <>
    <WizardHeader
      p={
        "Now we need your CV for creating ultimate go-getter motivation letter, to harden your application to this job."
      }
      h2={"Upload your CV"}
    >
      
        <div className="form-control mx-auto p-2">
          <input
            type="file"
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
            accept=".doc, .docx, .pdf"
            ref={fileInputRef}
            onChange={handleUpload}
          />
        </div>

        <div className=" align-center flex h-full w-full justify-between gap-4">
          <button
            onClick={() => router.back()}
            type="button"
            className="btn text-white"
          >
            Previous Step
          </button>
          
        </div>
      
    </WizardHeader>
    {error && isToast && (
      <div className="toast-center toast w-96">
        <div className="alert alert-error">
          <div>
            <span>{error as string}</span>
          </div>
          <div className="flex-none">
            <button
              onClick={() => change(isToast)}
              className="btn-error btn-ghost btn"
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

export default UploadResume;

// const motivationLetter = await createMotivLetter({
//   motivLetter,
//   setMotivLetter,
//   resume,
//   isLoading,
//   setIsLoading,
//   jobDescription,
// });
// const [motivLetter, setMotivLetter] = useState("");
// const [letter, setLetter] = useState("");
// const [stateResume, setStateResume] = useState({} as any);
// const [jobDescription, setJobDescription] = useState(
//   localStorage.getItem("jobDescription") || ""
// );

// router.push("/step4");
