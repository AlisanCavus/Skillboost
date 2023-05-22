import { UnAuthLayout } from '@/app/components/UnauthLayout';

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover overflow-hidden3 blur-[10px] grayscale lg:object-fill transform scale-110"
        >
          <source src="/sa.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <UnAuthLayout
              companyName="Linkus"
              termsLink="http://google.com"
              logoImage="/linkusLogo.svg"
              privacyLink="http://google.com"
              cookieLink="http://google.com"
              dataConsenseLink="http://google.com"
            >
            
            </UnAuthLayout>
          </div>
        </div>
      </div>
    </>
  );
}
