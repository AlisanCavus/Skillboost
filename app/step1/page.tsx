import React from 'react'
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AuthLayout } from "@/app/components/AuthLayout";
import { redirect } from "next/navigation";
import WizardLayout from "@/app/components/WizardLayout";
import GptSkillsExpTable from './GptSkillsExpTable';

const page = async () => {
const session = await getServerSession(authOptions);
  const token = session?.user.token as string;
  const companyLogo = "/linkusLogo.svg";

  if (!session) {
    redirect("/");
  }

  return (
    <AuthLayout token={token} companyLogo={companyLogo}>
    <WizardLayout >
        <div className="flex flex-col items-center justify-center w-full h-full">
            Here is the most relevant skills and experience and the qualifications for this job description
            <GptSkillsExpTable />
          </div>
    </WizardLayout>
  </AuthLayout>
  )
}

export default page