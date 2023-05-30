export interface Token {
  token: string;
}

export interface ToastTypes {
  type: string;
  message: string;
}

export type WizardHeaderProps = {
  p: string;
  h2: string;
  span?: string;
  context?: ContextContentType;
  children?: React.ReactNode;
};

export interface ContextContentType {
  id: number;
  img: string;
  title: string;
  content: string;
  source?: string | undefined;
  children?: React.ReactNode;
}
export type ContextType = {
  context: ContextContentType;
  children?: React.ReactNode;
  status: string;
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
  companyLogo: string;
};

export type HeaderProps = {
  token: string;
  companyLogo: string;
}

export interface Session {
  user: {
    token: string;
  };
}

export interface CurrentUser {
  '@context': string
  '@id': string
  '@type': string
  id: string
  actonomyId: null | string
  activeCampaignId: null | null
  email: string
  firstName: string | null
  lastName: string | null
  language: CurrentUserLanguage
  tags: string[]
  isCandidate: boolean
  street: string | null
  number: string | null
  postOfficeBox: null | string
  zip: string | null
  city: string | null
  country: string | null
  mobile: string | null
  phone: string | null
  birthDate: null | string
  referredBy: ReferredBy | null
  referralCampaign: null | string
  referralProcessed: boolean
  comments: null | string
  dateAvailable: null | string
  smsOptIn: boolean
  smsOptInProof: null | string
  gdprAgreed: boolean
  gdprAgreedProof: null | string
  termsAndConditionsAgreed: boolean
  termsAndConditionsAgreedAt: null | string
  description: null | string
  descriptionRecruiter: null | string
  fieldOfStudy: null | string
  provinceLiving: null | string
  resumeLink: null | string
  isLookingForJob: boolean
  profileCompletion: number
  isProfile80Percent: boolean
  when80Percent: null | string
  whenRegistered: null | string
  profilePicture: null | string
  facebookId: null | string
  googleId: null | string
  linkedinId: null | string
  nationality: null
  resume: null | Icon
  lastAction: string | null
  files: any[]
  emailConfirmed: boolean
  client: null //ENTITY CLIENT?
  lastLogin: string
  sex: null | string
  jobTitle: string | null
  yearsOfExperience: number | null
  hoursAvailable: number | null
  summary: string | null
  employmentHistories: string[]
  educationHistories: string[]
  resumeLanguages: any[]
  competencies: Competency[]
  availabilityStart: string | null
  availabilityEnd: null | string
  fee: null | number
  hourlyFee: null | number
  workFromHome: null | boolean
  workOnLocation: null | boolean
  workHybrid: null | boolean
  distance: null | number
  daysAvailable: null | number
  importNr: null | number
  performedFirstSearch: null | boolean
  firstSearchProcessed: null | boolean
  companyRequestSubmitted: boolean
  companyRequestSubmittedProcessed: boolean
  companyRequestApproved: boolean
  companyRequestApprovedProcessed: boolean
  registered: boolean
  registrationProcessed: boolean
  updatedShortlist: boolean
  shortlistEventProcessed: boolean
  scheduledInterview: boolean
  interviewEventProcessed: boolean
  companyName: string | null
  companyContactPerson: null | string
  companyStreet: string | null
  companyNumber: string | null
  companyCountry: CompanyCountry | null
  companyCity: CompanyCity | null
  companyVAT: string | null
  companyType: null | string
  notificationPreferences: NotificationPreferences
  accountNumber: null | string
  fullName: string | null
}

export interface CompanyCity {
  '@id': string
  '@type': string
  id: string
  name: string
  zip: string
  translation: boolean
}

export interface CompanyCountry {
  '@id': string
  '@type': string
  id: string
  name: CompanyCountryName
  countryCode: string
}

export interface CompanyCountryName {
  en: string
  nl: string
}

export interface CurrentUserLanguage {
  id: number
  name: LanguagesNames
  languageCode: string
  languageCodeActonomy: string
  icon: Icon | null
  frontendVisible: boolean
}

export interface Icon {
  '@context': string
  '@id': string
  '@type': string
  id: string
  name: string
  fileName: string
  resizedPath: string
  path: string
}

export interface LanguagesNames {
  nl: string
  en: string
  fr?: string
}

export interface NotificationPreferences {
  notifications: boolean
  tips: boolean
  statistics: boolean
  partners: boolean
  newsletters: boolean
  events: boolean
}

export interface ReferredBy {
  '@id': string
  '@type': string
  id: string
  actonomyId: null
  activeCampaignId: string
  email: string
  firstName: string
  lastName: string
  language: ReferredByLanguage
  tags: any[]
  isCandidate: boolean
  street: null
  number: null
  postOfficeBox: null
  zip: null
  city: null
  country: null
  mobile: string
  phone: null
  birthDate: null
  referredBy: null
  referralCampaign: null
  referralProcessed: boolean
  comments: null
  dateAvailable: null
  smsOptIn: boolean
  smsOptInProof: null
  gdprAgreed: boolean
  gdprAgreedProof: null
  termsAndConditionsAgreed: boolean
  termsAndConditionsAgreedAt: Date
  description: null
  descriptionRecruiter: null
  fieldOfStudy: null
  provinceLiving: null
  resumeLink: null
  isLookingForJob: boolean
  profileCompletion: number
  isProfile80Percent: boolean
  when80Percent: Date
  whenRegistered: null
  profilePicture: null
  facebookId: null
  googleId: null
  linkedinId: null
  nationality: null
  resume: Icon
  lastAction: Date
  files: any[]
  emailConfirmed: boolean
  client: null
  lastLogin: Date
  sex: null
  summary: string
  employmentHistories: string[]
  educationHistories: string[]
  resumeLanguages: ResumeLanguage[]
  competencies: Competency[]
  availabilityStart: Date
  availabilityEnd: Date
  fee: number
  workFromHome: boolean
  workOnLocation: boolean
  workHybrid: null
  distance: null
  daysAvailable: number
  importNr: null
  performedFirstSearch: null
  firstSearchProcessed: null
  companyRequestSubmitted: null
  companyRequestSubmittedProcessed: null
  companyRequestApproved: null
  companyRequestApprovedProcessed: null
  registered: boolean
  registrationProcessed: boolean
  updatedShortlist: boolean
  shortlistEventProcessed: boolean
  scheduledInterview: boolean
  interviewEventProcessed: boolean
  companyName: string
  companyContactPerson: string
  companyStreet: string
  companyNumber: string
  companyCountry: CompanyCountry
  companyCity: CompanyCity
  companyVAT: string
  companyType: null
  notificationPreferences: NotificationPreferences
  accountNumber: string
  fullName: string
}

export interface Competency {
  '@id': string
  '@type': Type
  id: string
  name: string
  level: string
  category: null | string
  proficiency: null
  experience: null
  experienceType: null
}

export enum Type {
  Competency = 'Competency',
}

export interface ReferredByLanguage {
  '@id': string
  '@type': string
  id: number
  name: PurpleName
  languageCode: string
  languageCodeActonomy: string
  icon: null
  frontendVisible: boolean
}

export interface PurpleName {
  nl: string
  fr: string
  en: string
}

export interface ResumeLanguage {
  '@id': string
  '@type': string
  id: string
  languageCode: string
  readsLanguage: boolean
  writesLanguage: boolean
  speaksLanguage: boolean
  comments: string
  user: string
}

export interface SkillProps {
  skill: string
  termCategory: null
  level: '1' | '2' | '3'
}

