import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Fungalia Lab</h1>
        <p className="text-white">Welcome to Fungalia Lab - Mushroom Science for Sustainability</p>
        <p className="text-green-400 mt-4">Current locale: {t('hero.title')}</p>
      </div>
    </div>
  );
}