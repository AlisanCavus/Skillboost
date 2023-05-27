
export const createMotivLetter = async (resume: any) => {
  const jobDescription = window.localStorage.getItem("jobDescription");
  if (!jobDescription) {
    return "No job description found";
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt:
        `As a seasoned copywriter and career coach with a proven track record in producing persuasive professional documents, your expertise is required in crafting an outstanding motivational letter. The letter needs to align closely with the provided job description, accentuating the candidate's most fitting skills and experience gleaned from their resume. The end goal is to create a compelling, authentic, and detailed letter that effectively presents the candidate as the perfect fit for the role.​ Remember that the truthfulness of the content is paramount, while it should also be engaging, original, and convincing. Your task is to help the candidate narrate their professional journey, highlight their value proposition, and underscore how their unique capabilities and experiences make them the ideal candidate for the role.​ Consider the job description and the candidate's resume carefully, and then use your writing prowess to paint a vivid picture of the candidate's suitability, skillset, and passion for the role. Your objective is to persuade the hiring manager that the candidate's addition to their team would be a game-changing move for their organization.​  Please write the motivation letter as machine-readable format. Please replace the name section of the candidate with "[Your Name]". Please replace the company name section with "[Company Name]".  ​​ \n\n 
        job description: ${jobDescription} \n\n
        resume: ${resume.resume} `.trim(),
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
      console.log(data);
      localStorage.setItem("motivationLetter", data);
      resume.setIsLoading(false);
    }
    
    
  } catch (error) {
    console.error("Error fetching API response:", error);
  }
  return null;
};
