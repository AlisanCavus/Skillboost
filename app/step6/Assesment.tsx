'use client';
import { useRouter } from "next/navigation";
import WizardHeader from "../components/WizardHeader";

const Assesment = () => {
  const router = useRouter();
  const score = localStorage.getItem("score");
  const scoreObj = JSON.parse(score as any);

  const clear = () => {
    localStorage.clear();
    router.push("/step1");
  }


  return (
    <WizardHeader
      p="While the generated Score is created by an AI and could potentially be relevant to your situation, it is important to approach it with caution and recognize that its accuracy may vary. It is not an absolute law of nature, but rather a tool that can provide insights and suggestions."
      h2="Get Your Score"
    >
      <div className="align-center flex h-full w-full justify-between gap-4">
        {scoreObj && (
          <div className="align-start flex flex-col justify-start gap-4">
            <div className="flex flex-col items-center my-5">
              <h1 className="text-lg font-medium ">
                Your chance to secure this job:
              </h1>
              
              <p className="text-md ">{scoreObj.score} out of 5</p>
            </div>

            <div className="flex flex-col justify-start gap-2">
              <h1 className="text-lg font-medium">
                Improvements for Securing the Job:
              </h1>
              <div className="text-md ">
                <ul className="flex flex-col gap-4">
                  {scoreObj.improvements.map((improvement: any, index: number) => (
                    <li className="list-disc" key={index}>
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-2">
              <h1 className="text-lg font-medium">
                Explanation about your Assesment:
              </h1>
              <p className="text-md">{scoreObj.explanation}</p>
            </div>
          </div>
        )}
      </div>
      <div className="align-center flex h-full w-full justify-between gap-4">
        <button
          onClick={() => router.back()}
          type="button"
          className="btn text-white"
        >
          Previous Step
        </button>
        <button
          type="button"
          onClick={clear}
          className="btn bg-brandPrimary text-white"
        >
          Start from beginning
        </button>
      </div>
    </WizardHeader>
  );
};

export default Assesment
