// src/components/LanguageSwitcher.tsx
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const { locale, locales, asPath } = useRouter();

  return (
    <div className="flex space-x-4">
      {locales?.map((lang) => (
        <button
          key={lang}
          onClick={() => window.location.replace(`/${lang}${asPath}`)}
          className={`px-4 py-2 ${locale === lang ? 'bg-blue-500' : 'bg-gray-200'}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
