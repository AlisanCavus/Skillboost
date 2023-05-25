import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AuthLayout } from "@/app/components/AuthLayout";
import { redirect } from "next/navigation";
import WizardLayout from "@/app/components/WizardLayout";
import UploadResume from "./UploadResume";

const page = async () => {
  const session = await getServerSession(authOptions);
  const token = session?.user.token as string;
  const companyLogo = "/linkusLogo.svg";

  if (!session) {
    redirect("/");
  }
  return (
    <AuthLayout token={token} companyLogo={companyLogo}>
      <WizardLayout>
        <div className="flex h-full w-full flex-col items-center justify-center">
          Lets upload your resume
          <UploadResume />
        </div>
      </WizardLayout>
    </AuthLayout>
  );
};

export default page;
