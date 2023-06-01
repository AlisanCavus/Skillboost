import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { MainLayout } from '@/app/components/MainLayout';
import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation';
import HeroSection from './components/HeroSection';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const token = session?.user.token as string;
  if (session) {
    redirect("/step1");
  }

  return (
    <>
      <div className="relative min-h-screen max-h-max w-screen overflow-x-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover overflow-hidden blur-[10px] grayscale lg:object-fill xl:object-fill transform scale-x-105 "
        >
          <source src="/sa.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 min-h-screen max-h-max flex items-center justify-center">
          <div className="text-center">
            <MainLayout
              companyName="Linkus"
              termsLink="http://google.com"
              logoImage="/linkusLogo.svg"
              privacyLink="http://google.com"
              cookieLink="http://google.com"
              dataConsenseLink="http://google.com"
              isMainPage={true}
            >
              <HeroSection />
            </MainLayout>
          </div>
        </div>
      </div>
    </>
  );
}
