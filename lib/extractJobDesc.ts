import { JobDescription } from "@/types/skilExpTypes";

export const extractJobDesc = async (jobDescription: JobDescription) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt:
        `As a seasoned HR executive and career coach with over 20 years of experience in analyzing candidate profiles and selecting the optimal fit for specific job descriptions, your expertise is now called upon to dissect the following job description. Your primary task is to discern and highlight the most pertinent qualifications, skills, and experiences that potential candidates must possess for this job. Your goal is to identify and rank the top 5 qualifications, top 5 skills and top 5 experiences that a candidate should embody, with the end objective of effectively evaluating if an individuals resume aligns well with the role requirements. Please make them machine-readable a valid JSON object. Please validate JSON object before sending it. I only need qualifications, skills and experiences and please make them brief as possible. Only provide a RFC8259 compliant JSON response  following this format without deviation.: \n\n 
        {"qualifications:["qualification1", "qualification2", "qualification3", "qualification4", "qualification5",],""skills":["skill1","skill2", "skill3", "skill4", "skill5"], "experiences":["experience1", "experience2", "experience3", "experience4", "experience5"]}  ​​ \n\n 
        job description: ${jobDescription.jobDescription} `.trim(),
      temperature: 0.8,
      max_tokens: 500,
      frequency_penalty: 0.8,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/completions",
      options
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const json = await response.json();
    const data = json.choices[0].text.trim();
    if (data) {
      // save to local storage
      return data;
    }
    
  } catch (error) {
    console.error("Error fetching API response:", error);
    alert("The connection to the server was lost. Please refresh the page and try again.")
  }
};
