export interface SkillObject {
  [key: string]: string;
}

export interface ExperienceObject {
  [key: string]: string;
}

export interface SkillExpObject {
  gptResponse: string;
  skills: SkillObject;
  experiences: ExperienceObject;
}

export interface JsonData {
  gptResponse: string;
  jobDescription: string;
  timestamp: number;
}

export interface GptSkillsExp {
    skills: string[];
    experiences: string[];
    qualifications: string[];
}

export interface JobDescription {
  jobDescription: string;
  gptSkillsExp: GptSkillsExp;
  setJobDescription: (jobDescription: string) => void;
  setGptSkillsExp: (gptSkillsExp: GptSkillsExp) => void;
}
