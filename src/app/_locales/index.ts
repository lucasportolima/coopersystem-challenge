import { en } from './en';
import { pt } from './pt';

const languages = {
  en,
  pt
};

export const locale = language => languages[language];