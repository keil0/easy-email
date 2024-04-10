import { IPage } from 'easy-email-core';

export interface IEmailTemplate {
  subject: string;
  subTitle: string;
  content: IPage;
}

declare global {
  function t(key: string): string;
  function t(key: string, placeholder: React.ReactNode): JSX.Element;

  interface Window {
    // translation

    t: (key: string, placeholder?: React.ReactNode) => JSX.Element;
  }
}
