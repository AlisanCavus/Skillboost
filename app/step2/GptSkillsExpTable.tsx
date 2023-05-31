"use client";
import { GptSkillsExp } from "@/types/skilExpTypes";
import { useRouter } from "next/navigation";
import WizardHeader from "../components/WizardHeader";

const GptSkillsExpTable = () => {
  const router = useRouter();
  const gptSkillsExp = window.localStorage.getItem("gptSkillsExp");
  const gptSkillsExpObj = JSON.parse(gptSkillsExp as string) as GptSkillsExp;

  return (
    <WizardHeader
      p={
        "These are the most crucial skills experiences and Competences that you must have. If you have these in your CV then you only need a good motivation letter to strengthen up your application."
      }
      h2={"See the Requirements"}
    >
      {gptSkillsExpObj && (
        <div>
          <div>
            <h1 className="font-bold">Skills</h1>
            <ul>
              {gptSkillsExpObj.skills.map((skill, index) => (
                <li className=" list-disc" key={index}>
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className=" font-bold">Experience</h1>
            <ul>
              {gptSkillsExpObj.experiences.map((exp, index) => (
                <li className=" list-disc" key={index}>
                  <p>{exp}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className=" font-bold">Qualifications</h1>
            <ul>
              {gptSkillsExpObj.qualifications.map((qual, index) => (
                <li className=" list-disc" key={index}>
                  <p>{qual}</p>
                </li>
              ))}
            </ul>
          </div>
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
        <button
          onClick={() => router.push("/step3")}
          type="button"
          className="btn bg-brandPrimary text-white"
        >
          Next Step!
        </button>
      </div>
    </WizardHeader>
  );
};

export default GptSkillsExpTable;
