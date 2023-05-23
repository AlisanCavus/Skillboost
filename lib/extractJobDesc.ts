import { ExperienceObject, JsonData, SkillObject , SkillExpObject } from "@/types/skilExpTypes";

export const extractJobDesc = async (jobDescription:string) => {
    const localStorageKey = 'GPT_SKILLS_EXP_JOB_DESC';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'As a seasoned HR executive and career coach with over 20 years of experience in analyzing candidate profiles and selecting the optimal fit for specific job descriptions, your expertise is now called upon to dissect the following job description. Your primary task is to discern and highlight the most pertinent qualifications, skills, and experiences that potential candidates must possess for this job. Your goal is to identify and rank the top 5 skills and top 5 experiences that a candidate should embody, with the end objective of effectively evaluating if an individuals resume aligns well with the role requirements. Please create them machine-readable and separate them with commas to make it easy to convert to a JSON object with JavaScript. Please separate the top 5 skills section and top 5 experiences section with a € sign that has two empty spaces before and after it, so the machine can separate them. ​​ \n\n' + jobDescription + '',
        temperature: 0.5,
        max_tokens: 150,
        frequency_penalty: 0.8,
      }),
    };
  
    try {
      const response = await fetch('https://api.openai.com/v1/completions', options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const json = await response.json();
      const data = json.choices[0].text.trim();
      // console.log(data);
  
      const gptReturn = {
        gptResponse: data,
        jobDescription: jobDescription,
      };
  
      localStorage.setItem(localStorageKey, JSON.stringify(gptReturn));
      const cachedData = localStorage.getItem(localStorageKey);
      if (cachedData) {
        const parsedData: JsonData = JSON.parse(cachedData);
        const obj = convertTextToObject(parsedData.gptResponse);
        console.log(obj);
      }
    } catch (error) {
      console.error('Error fetching API response:', error);
      // Handle error here, such as displaying a message to the user
    }
    // Add a default return value if there is an error or no cached data
    return null;
  };
  
  export function convertTextToObject(text: string) {
    const obj: { skills: string[]; experiences: string[] } = {
      skills: [],
      experiences: []
    };
  
    if (!text) {
      return obj; // Return the empty object if text is undefined or empty
    }
  
    const sections = text.split('€');
  
    if (sections.length < 2) {
      return obj; // Return the empty object if the expected sections are missing
    }
  
    const skillsSection = sections[0];
    const experiencesSection = sections[1];
  
    const skillsList = skillsSection.split(':')[1].trim();
    const experiencesList = experiencesSection.split(':')[1].trim();
  
    obj.skills = skillsList.split(', ');
    obj.experiences = experiencesList.split(', ');
  
    console.log(obj);
  }
  

  