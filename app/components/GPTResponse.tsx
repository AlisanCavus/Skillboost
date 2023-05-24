'use client';
import React from 'react'
import { useStoreGptResponse } from '@/store/store'

const GPTResponse = () => {
    // const gptResponse = useStoreGptResponse((state: any) => state.gptResponse)
    // console.log(gptResponse)
  return (
    <div className="align-center flex flex-col w-full justify-start gap-2 mx-auto">
      <h1 className="mx-auto">GPT RESPONSE</h1>
      <div className="jutify-center align-center flex h-96 w-96 flex-col overflow-y-scroll mx-auto">
        {/* {gptResponse}  */}
      </div>
    </div>
  )
}

export default GPTResponse