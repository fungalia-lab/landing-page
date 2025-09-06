'use client';

import { useLanguage } from '@/lib/language-context';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as 'en' | 'pt')}
        className="bg-transparent text-white border border-muted/30 rounded px-3 py-1 text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
        aria-label="Select language"
      >
        <option value="en" className="bg-black text-white">🇺🇸 EN</option>
        <option value="pt" className="bg-black text-white">🇧🇷 PT</option>
      </select>
    </div>
  );
}