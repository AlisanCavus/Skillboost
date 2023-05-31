import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UnAuthLayout } from "@/app/components/UnauthLayout";
import FormLogin from "@/app/login/FormLogin";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const token = session?.user.token as string;

  if (session) {
    redirect("/welcome");
  }

  return (
    <UnAuthLayout
      companyName="Linkus"
      termsLink="http://google.com"
      logoImage="/linkusLogo.svg"
      privacyLink="http://google.com"
      cookieLink="http://google.com"
      dataConsenseLink="http://google.com"
    >
      <FormLogin token={token} />
    </UnAuthLayout>
  );
};

export default Page;
