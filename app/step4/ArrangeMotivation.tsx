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
      p="Lets see what we have here. A good motivation letter for the key component of the job applications. Change the sections about company name and your name, and you are ready to go! You can download it as a docx file."
      h2="Your Motivation Letter"
    >
      {motivation || localMotivation ? (
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
            className="btn text-white"
          >
            Download Your Motivation Letter!
          </button>
        </div>
      ) : (
        <div className=" align-start flex h-full w-full justify-center">
          <button
            type="button"
            onClick={createMotivationLetter}
            className="btn bg-brandPrimary text-white"
          >
            Generate your Motivation Letter!
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
        {(motivation || localMotivation) && (
          <button
            type="button"
            onClick={() => router.push("/step5")}
            className="btn bg-brandPrimary text-white"
          >
            Next Step!
          </button>
        )}
      </div>
    </WizardHeader>
  );
};

export default ArrangeMotivation;
