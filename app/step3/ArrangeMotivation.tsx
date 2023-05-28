"use client";
import React, { useState, ChangeEvent, useRef } from "react";
import WizardHeader from "../components/WizardHeader";
import { useRouter } from "next/navigation";
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import { saveAs } from 'file-saver';

const ArrangeMotivation = () => {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [motivation, setMotivation] = useState(
    localStorage.getItem("motivationLetter") || ""
  );

  const handleMotivationChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMotivation(event.target.value);
  };

  const generateDocx = async () => {
    // Get the content from the textarea
    const textareaContent = textareaRef.current?.value;

    if (textareaContent) {
      try {
        // Fetch the template file
        const response = await fetch('/letter.docx');
        const templateData = await response.arrayBuffer();

        // Load the template
        const zip = new PizZip(templateData);
        const template = new Docxtemplater().loadZip(zip);

        // Set the data to replace the placeholder in the template
        const data = {
          content: textareaContent
        };
        template.setData(data);

        // Render the document
        template.render();

        // Generate the output file
        const output = template.getZip().generate({ type: 'blob' });

        // Save the file
        saveAs(output, 'motivationLetter.docx');
      } catch (error) {
        console.error('Error loading the template:', error);
      }
    }
  };
  
  return (
    <WizardHeader
      p="Lets see what we have here. A good motivation letter for the key component of the job applications. Change the sections about company name and your name, and you are ready to go! You can download it as a docx file."
      h2="This is your motivation letter"
    >
      <div className=" align-start flex h-full w-full justify-start">
        <div className="form-control w-full gap-4">
          <textarea
            ref={textareaRef}
            className="textarea w-full"
            name="letter"
            id="letter"
            cols={70}
            rows={10}
            value={motivation}
            onChange={handleMotivationChange}
          ></textarea>
        </div>
      </div>
      <div className=" align-center flex h-full w-full justify-between gap-4">
        { motivation && ( <button
          type="button"
          onClick={generateDocx}
          className="btn text-white"
        >
          Download Your Motivation Letter!
        </button>)}
     
      <button
          type="button"
          onClick={() => router.push("/step4")}
          className="btn bg-brandPrimary text-white"
        >
          Next Step!
        </button>
      </div>
    </WizardHeader>
  );
};

export default ArrangeMotivation;
