export const assessScore = async (allData: any) => {
  allData.setLoading(true);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt:
      `As a veteran hiring manager with extensive experience in talent spotting, your primary duty is to review job applications and scrutinize their alignment with the given job descriptions. Your critical responsibility entails making flawless selections since a single unsuitable hire could jeopardize your standing in the organization. Below is the job description and the candidate's resume that requires your expertise. Your task is to meticulously analyze the provided [candidate resume] and diligently adapt it to reflect the precise requirements, skills, and experience detailed in the [job description] below. It's crucial to remember that while you may rephrase or reorganize the resume content to best showcase the candidate's strengths, it's paramount that no professional experiences are fabricated or misrepresented. Your end objective is to produce an enhanced and structured resume that effectively spotlights the candidate's competencies for the job, thereby manifesting your expertise in resume coaching and adaptation. To evaluate the alignment between the job description and the candidate's resume, you are to score it on a scale of 1 to 5 (1 = "Unqualified", 5 = "Hire Immediately"). Upon determining the score, furnish the candidate with a detailed feedback report outlining the 'Score', an 'Explanation' for the score, and 'Areas For Improvement'. This will serve to enhance the applicant's future prospects of securing the job and validate your competency in candidate evaluation. Please return as machine readable JSON object. Please validate JSON object before sending it. You can use this as an example: { "score": 4 , "explanation":"explanation over here!", "improvements": ["improvement1", "improvement2", "imporvement3", "improvement4", ....]} \n\n
      \n\n
      job description: ${allData.jobDescription} \n\n
      resume: ${allData.resume}`.trim(),
      temperature: 0.8,
      max_tokens: 1000,
      frequency_penalty: 0.8,
    }),
  };
  

  try {
    const response = await fetch(
      "https://api.openai.com/v1/completions",
      options
    );

    if (!response.ok) {
      console.log(response);
      throw new Error("Network response was not ok");
    }

    const json = await response.json();
    const data = json.choices[0].text.trim();

    if (data) {
      console.log(data);
      localStorage.setItem("assessment", data);
      allData.setRecomendations(data);
      allData.setLoading(false);
    }
    
  } catch (error) {
    console.error("Error fetching API response:", error);
    allData.setError(error);
  }

  return null;
};
