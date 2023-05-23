import { MainLayout } from '@/app/components/MainLayout';
import HeroSection from './components/HeroSection';

export default function Home() {

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover overflow-hidden blur-[10px] grayscale lg:object-fill transform scale-110"
        >
          <source src="/sa.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
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
