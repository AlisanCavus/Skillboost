export interface Token {
  token: string;
}

export type UnAuthLayoutProps = {
  logoImage: string;
  companyName: string;
  termsLink: string;
  privacyLink: string;
  cookieLink: string;
  dataConsenseLink: string;
};

export type AuthLayoutProps = {
  token: string;
  children: React.ReactNode;
};
