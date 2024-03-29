import { Provider } from "@/app/components/Provider";
import { Roboto } from "next/font/google";
import ReactQueryWrapper from "./ReactQueryWrapper";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Linkus SkillBoost",
  description: "Depending on the job description and your CV there is a score that you can use to assess your chances to get the job.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="mytheme"
      className={`${roboto.className} scroll-smooth antialiased`}
    >
      <Provider>
        <body className="bg-brandBackground">
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </body>
      </Provider>
    </html>
  );
}
