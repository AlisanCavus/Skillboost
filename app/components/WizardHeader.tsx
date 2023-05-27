import React, {PropsWithChildren, FC, Children} from 'react'

type WizardHeaderProps ={
    p: string
    h2: string
    children: React.ReactNode
}

const WizardHeader: FC<PropsWithChildren<WizardHeaderProps>> = ({children, h2, p}) => {
  return (
    <div className="flex h-full w-full flex-col gap-10 px-4">
        <div className="h-full w-full flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-brandSecondary">
          {h2}
        </h2>
        <p className="text-md text-brand ">
            {p}
        </p>
        </div>
        {children}
    </div>
  )
}

export default WizardHeader