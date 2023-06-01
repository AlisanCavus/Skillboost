"use client";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import { useRouter } from "next/navigation";
import PizZip from "pizzip";
import { ChangeEvent, useRef, useState, useEffect } from "react";
import WizardHeader from "../components/WizardHeader";
import { createMotivLetter } from "@/lib/createMotivLetter";
import LoaderJobDescript from "../components/LoaderJobDescript";
import { loadingContext } from "@/helpers";
import { ContextContentType } from "@/types/generalTypes";

const ArrangeMotivation = () => {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [motivation, setMotivation] = useState(
    localStorage.getItem("motivationLetter") || ""
  );
  const [localMotivation, setLocalMotivation] = useState(
    localStorage.getItem("motivationLetter") || ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [jobDescription, setJobDescription] = useState(
    localStorage.getItem("jobDescription") || ""
  );
  const [resumeCv, setResumeCv] = useState(JSON.parse(localStorage.getItem("resume") as string));
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
  
  const createMotivationLetter = async () => {
    setIsLoading(true);
  
    const motivationLetters = await createMotivLetter({
      resumeCv,
      jobDescription,
    });
    
    if (motivationLetters) {
      setMotivation(motivationLetters);
      localStorage.setItem("motivationLetter", motivationLetters);
      setIsLoading(false);
    }
  };

  const handleMotivationChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMotivation(event.target.value);
  };

  const checkMotivation = () => {
    if (!motivation || !localMotivation) {
      return "Are you ready to generate a motivation rock solid motivation letter? Please click on the button below to generate your motivation letter.";
    } else {
      return "This is your motivation letter depending on your CV and tailored for the Job Description that you selected. Please feel free to read and fill the necessary parts. After that, You can download your motivation letter as a docx file.";
    }
  };

  const generateDocx = async () => {
    const textareaContent = textareaRef.current?.value;
    if (textareaContent) {
      try {
        const response = await fetch("/letter.docx");
        const templateData = await response.arrayBuffer();
        const zip = new PizZip(templateData);
        const template = new Docxtemplater().loadZip(zip);
        const data = {
          content: textareaContent,
        };
        template.setData(data);
        template.render();
        const output = template.getZip().generate({ type: "blob" });
        saveAs(output, "motivationLetter.docx");
      } catch (error) {
        console.error("Error loading the template:", error);
      }
    }
  };

  if (isLoading) {
    return (
      <LoaderJobDescript
        status="Generating a Motivation Letter"
        context={context}
      />
    );
  }

  return (
    <WizardHeader
      p={checkMotivation()}
      h2="Your Motivation Letter"
    >
      { (motivation || localMotivation) && (
        <div className=" align-start flex flex-col gap-4 h-full w-full justify-start">
          <div className="form-control w-full gap-4">
            <textarea
              ref={textareaRef}
              className="textarea w-full"
              name="letter"
              id="letter"
              cols={70}
              rows={10}
              value={motivation || localMotivation}
              onChange={handleMotivationChange}
            ></textarea>
          </div>
          <button
            type="button"
            onClick={generateDocx}
            className="btn btn-info text-white"
          >
            Download Your Motivation Letter!
          </button>
        </div>
      )}

      <div className=" align-center flex h-full w-full justify-between gap-4">
        <button
          onClick={() => router.back()}
          type="button"
          className="btn text-white"
        >
          Previous Step
        </button>
        <div className=" align-start flex h-full w-full justify-center">
         
        </div>
        {(motivation || localMotivation) ? (
          <button
            type="button"
            onClick={() => router.push("/step5")}
            className="btn bg-brandPrimary text-white"
          >
            Next Step!
          </button>
        ) : (
           <button
            type="button"
            onClick={createMotivationLetter}
            className="btn bg-brandPrimary text-white"
          >
            Generate your Motivation Letter!
          </button>
        )}
      </div>
    </WizardHeader>
  );
};

export default ArrangeMotivation;
