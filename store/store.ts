import { create } from "zustand";

export const useStoreJobDesc = create((set) => ({
  jobDescription: "",
}));

export const useStoreGptResponse = create((set) => ({
  gptSkillsExp: "",
}));
