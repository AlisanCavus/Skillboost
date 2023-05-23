import React from 'react'
const WizardLayout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className='min-h-[calc(100dvh-(4rem+7px))] max-h-max w-screen overflow-x-hidden grid place-items-center'>
        {children}
    </div>
  )
}

export default WizardLayout