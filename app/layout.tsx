import './globals.css';
import { Roboto } from 'next/font/google';
import { Provider } from '@/app/components';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: 'CV Polisher',
  description: 'Linkus CV Polisher',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      data-theme='acid'
      className={`${roboto.className} antialiased scroll-smooth`}>
      <body>
        <Provider>
          <main className=''>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
