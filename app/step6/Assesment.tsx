'use client';
import React from 'react'
import WizardHeader from "../components/WizardHeader";

const Assesment = () => {
    // get the score from the local storage
    const score = localStorage.getItem("score");
    const scoreObj = JSON.parse(score as any);
    console.log(scoreObj);



    
    
  return (
    <WizardHeader
      p="Depends on the job description and your CV there is a score that you can use to assess your chances to get the job."
      h2="This is your score!"
    >
        <div className="align-center flex h-full w-full justify-between gap-4">
            {scoreObj && (
                <div>

                <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold text-brandPrimary">Your score</p>
                    <h2 className="text-5xl font-bold text-brandPrimary">{scoreObj.Score}%</h2>
                </div>
                <div>
                    <p className="text-2xl font-bold text-brandPrimary">Your score</p>
                    <h2 className="text-5xl font-bold text-brandPrimary">{scoreObj.Explanation}%</h2>
                </div>
                <div>
                    <p className="text-2xl font-bold text-brandPrimary">Your score</p>
                    <h2 className="text-5xl font-bold text-brandPrimary">{scoreObj.Explanation}%</h2>
                </div>
                </div>
            )}
        </div>
        </WizardHeader>
  )
}

export default Assesment