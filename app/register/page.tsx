import { UnAuthLayout } from "@/app/components/UnauthLayout";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FormRegister from "@/app/register/FormRegister";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const token = session?.user.token as string;

  return (
    <UnAuthLayout
      companyName="Linkus"
      termsLink="http://google.com"
      logoImage="/linkusLogo.svg"
      privacyLink="http://google.com"
      cookieLink="http://google.com"
      dataConsenseLink="http://google.com"
    >
      <FormRegister token={token} />
    </UnAuthLayout>
  );
};

export default Page;
