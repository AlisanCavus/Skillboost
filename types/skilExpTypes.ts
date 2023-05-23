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
  gptResponse: string,
  jobDescription: string,
  timestamp: number
}
