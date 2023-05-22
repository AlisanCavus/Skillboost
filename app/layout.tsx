import "./globals.css";
import { Roboto } from "next/font/google";
import { Provider } from "@/app/components/Provider";
import ReactQueryWrapper from "./ReactQueryWrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "CV Polisher",
  description: "Linkus CV Polisher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="acid"
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
