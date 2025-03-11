'use client'; 
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations(); 

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    router.push(`/${newLocale}`); 
  };

  return (
    <select onChange={changeLanguage} value={locale} className="p-2 border rounded">
      <option value="en">{t('language.english')}</option>
      <option value="ar">{t('language.arabic')}</option>
    </select>
  );
}
