// src/utils/i18n.ts
import { useRouter } from 'next/router';

export const changeLanguage = (lang: string) => {
  const router = useRouter();
  router.push(router.asPath, undefined, { locale: lang });
};

// A function to initialize i18n configuration (Next.js i18n config can also be placed in next.config.js)
export const initializeI18n = () => {
  const { locale, locales, defaultLocale } = useRouter();

  if (!locales.includes(locale)) {
    console.warn(`The locale ${locale} is not available. Falling back to default: ${defaultLocale}`);
    return defaultLocale;
  }
  
  return locale;
};
