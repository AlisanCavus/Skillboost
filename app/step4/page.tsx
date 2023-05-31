import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AuthLayout } from "@/app/components/AuthLayout";
import WizardLayout from "@/app/components/WizardLayout";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import ArrangeMotivation from "./ArrangeMotivation";

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
          <ArrangeMotivation />
      </WizardLayout>
    </AuthLayout>
  )
}

export default page