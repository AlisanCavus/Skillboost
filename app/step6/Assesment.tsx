"use client";
import WizardHeader from "../components/WizardHeader";

const Assesment = () => {
  // get the score from the local storage
  const score = localStorage.getItem("score");
  const scoreObj = JSON.parse(score as any);

  return (
    <WizardHeader
      p="Depends on the job description and your CV there is a score that you can use to assess your chances to get the job."
      h2="Get Your Score"
    >
      <div className="align-center flex h-full w-full justify-between gap-4">
        {scoreObj && (
          <div>
            <div className="flex flex-col items-center">
              <h1 className="text-xl ">Your score</h1>
              <p className="text-md ">{scoreObj.score}</p>
            </div>
            <div>
              <h1 className="text-xl">Your score</h1>
              <p className="text-md">{scoreObj.explanation}</p>
            </div>
            <div>
              <h1 className="text-xl ">Improvements</h1>
              <div className="text-xl ">
                <ul className="flex flex-col gap-4">
                  {scoreObj.improvements.map(
                    (improvement: any, index: number) => (
                      <li className="list-disc" key={index}>{improvement}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </WizardHeader>
  );
};

export default Assesment;
