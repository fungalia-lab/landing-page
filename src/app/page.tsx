'use client';

import { useLanguage } from '@/lib/language-context';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white mushroom-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-accent">Fungalia</span>
              <span className="text-mushroom-cream">Lab</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#philosophy" className="hover:text-accent transition-colors">{t.navigation.philosophy}</a>
              <a href="#research" className="hover:text-accent transition-colors">{t.navigation.research}</a>
              <a href="#about" className="hover:text-accent transition-colors">{t.navigation.about}</a>
              <a href="#contact" className="hover:text-accent transition-colors">{t.navigation.contact}</a>
              <LanguageSwitcher />
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <LanguageSwitcher />
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white">{t.hero.title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-mushroom-cream underline underline-offset-4 decoration-accent">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="philosophy" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-mushroom-cream">{t.mission.title}</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  {t.mission.description1}
                </p>
                <p>
                  {t.mission.description2}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-mushroom-brown to-mushroom-cream rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold">{t.mission.excellence}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="research" className="py-20 px-6 bg-gradient-to-r from-black to-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              {t.innovation.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7H3v2h16V4zm0 4H3v2h16V8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-accent">{t.innovation.innovate.title}</h3>
              <p className="text-lg leading-relaxed">
                {t.innovation.innovate.description}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-mushroom-brown/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-mushroom-brown" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mushroom-brown">{t.innovation.integrate.title}</h3>
              <p className="text-lg leading-relaxed">
                {t.innovation.integrate.description}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-mushroom-cream/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-mushroom-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mushroom-cream">{t.innovation.improve.title}</h3>
              <p className="text-lg leading-relaxed">
                {t.innovation.improve.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-mushroom-cream">{t.research.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted/10 rounded-xl p-8 border border-muted/20 hover:border-accent/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-accent">{t.research.materials.title}</h3>
              <p className="text-mushroom-cream mb-6">
                {t.research.materials.description}
              </p>
              <a href="#" className="inline-flex items-center text-accent hover:text-white transition-colors">
                {t.research.readMore}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
            
            <div className="bg-muted/10 rounded-xl p-8 border border-muted/20 hover:border-accent/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-accent">{t.research.cultivation.title}</h3>
              <p className="text-mushroom-cream mb-6">
                {t.research.cultivation.description}
              </p>
              <a href="#" className="inline-flex items-center text-accent hover:text-white transition-colors">
                {t.research.readMore}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
            
            <div className="bg-muted/10 rounded-xl p-8 border border-muted/20 hover:border-accent/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-accent">{t.research.biotechnology.title}</h3>
              <p className="text-mushroom-cream mb-6">
                {t.research.biotechnology.description}
              </p>
              <a href="#" className="inline-flex items-center text-accent hover:text-white transition-colors">
                {t.research.readMore}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-muted/10 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-mushroom-cream">{t.contact.title}</h2>
          <p className="text-xl mb-12 text-mushroom-cream">
            {t.contact.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://www.instagram.com/fungalia.lab/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent text-black px-8 py-4 rounded-full font-semibold hover:bg-accent/80 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              {t.contact.instagram}
            </a>
            
            <a 
              href="mailto:contact@fungalia.lab" 
              className="border border-accent text-accent px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-black transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {t.contact.email}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-accent">Fungalia</span>
            <span className="text-mushroom-cream">Lab</span>
          </div>
          <p className="text-muted mb-6">
            {t.footer.tagline}
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted hover:text-accent transition-colors">{t.footer.privacy}</a>
            <a href="#" className="text-muted hover:text-accent transition-colors">{t.footer.terms}</a>
            <a href="#" className="text-muted hover:text-accent transition-colors">{t.footer.research}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
