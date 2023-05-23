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
  children: React.ReactNode;
  isMainPage?: boolean;
};

export type AuthLayoutProps = {
  token: string;
  children: React.ReactNode;
};

export interface Session {
  user: {
    token: string;
  };
}
