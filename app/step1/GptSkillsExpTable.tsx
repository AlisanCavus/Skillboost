"use client";
import { GptSkillsExp } from "@/types/skilExpTypes";
import { useRouter } from "next/navigation";
import React from "react";

const GptSkillsExpTable = () => {
  const router = useRouter();
  const gptSkillsExp = localStorage.getItem("gptSkillsExp");
  const gptSkillsExpObj = JSON.parse(gptSkillsExp as string) as GptSkillsExp;
  console.log(gptSkillsExpObj);
  const nextPage = () => {
    router.push("/step2");
  };
  return (
    <div>
      {gptSkillsExpObj && (
        <div>
          <div>
            <h1 className=" font-bold">Skills</h1>
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
          <div>
          <button
              onClick={() => {nextPage()}}
              type="button"
              className="btn mx-auto bg-brandPrimary text-white"
            >
              Next Step!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GptSkillsExpTable;
