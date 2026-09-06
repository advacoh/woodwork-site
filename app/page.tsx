"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/src/components/PageTransition';

export default function HomePage() {
  const [lang, setLang] = useState('en');

  // 1. מנגנון זיכרון שפה
  useEffect(() => {
    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang && (savedLang === 'he' || savedLang === 'en')) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'he' : 'en';
    setLang(newLang);
    localStorage.setItem('userLanguage', newLang);
  };

  // 2. תרגומים
  const translations = {
    en: {
      dir: "ltr",
      nav: { home: "Home", story: "Our Story", tables: "Tables", contact: "Contact" },
      hero: { badge: "Handcrafted • Custom • Wood", title: "Handcrafted Nature." },
      teaser: {
        badge: "The Craft",
        title: "Every piece tells a story.",
        desc: "From raw timber to handcrafted tables. Preserving the natural character of every slab.",
        btn: "Explore Our Journey"
      },
      cta: {
        title: "Ready to design your unique piece?",
        btn: "View Tables"
      }
    },
    he: {
      dir: "rtl",
      nav: { home: "דף הבית", story: "הסיפור שלנו", tables: "שולחנות", contact: "צור קשר" },
      hero: { badge: "עבודת יד • עיצוב אישי • עץ", title: "Handcrafted Nature." },
      teaser: {
        badge: "המלאכה",
        title: "לכל פריט יש סיפור.",
        desc: "מעץ גולמי לשולחנות בעבודת יד. שימור האופי הטבעי של כל לוח ולוח.",
        btn: "גלו את המסע שלנו"
      },
      cta: {
        title: "מוכנים לעצב את הרהיט הבא שלכם?",
        btn: "לצפייה בשולחנות"
      }
    }
  };

  const t = lang === 'he' ? translations.he : translations.en;

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#f4f1ea] text-[#2c3424] font-serif overflow-x-hidden transition-all duration-500" dir={t.dir}>
        
        {/* לשונית שפה בצד ימין */}
        <button 
          onClick={toggleLanguage}
          className="fixed top-[70%] right-0 z-[100] transform -translate-y-1/2 bg-[#2c3424] text-white py-6 px-2 rounded-l-md shadow-2xl hover:bg-[#b59e7d] transition-all duration-300 group border-l border-white/20"
        >
          <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.3em] font-bold">
            {lang === 'en' ? 'עברית' : 'English'}
          </span>
        </button>

        {/* 1. Navigation - White on Hero */}
        <nav className="flex justify-between items-center px-8 py-6 absolute w-full top-0 z-50 bg-transparent border-b border-white/10">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/logo3.png" 
                alt="Philipp Logo" 
                width={140} 
                height={50} 
              style={{ width: 'auto', height: 'auto', mixBlendMode: 'multiply' }} 
              className="opacity-90" // אפשר להוריד את brightness-0
            />
            </Link>
          </div>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-white/90">
            <Link href="/" className="text-[#b59e7d] border-b border-white pb-1">{t.nav.home}</Link>
            <Link href="/story" className="hover:text-[#b59e7d] transition-colors">{t.nav.story}</Link>
            <Link href="/tables" className="hover:text-[#b59e7d] transition-colors">{t.nav.tables}</Link>
            <Link href="/contact" className="hover:text-[#b59e7d] transition-colors">{t.nav.contact}</Link>
          </div>
        </nav>

        {/* 2. Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center pt-20">
          <div className="absolute inset-6 overflow-hidden rounded-[30px] z-0 shadow-xl">
            <img src="/forest-hero.jpg" className="w-full h-full object-cover brightness-90" alt="" />
            <div className="absolute inset-0 bg-[#2c3424]/10"></div>
          </div>
          
          <div className="relative z-10 text-center text-white drop-shadow-lg">
            <span className="text-[9px] uppercase tracking-[0.8em] mb-6 block font-sans italic">{t.hero.badge}</span>
            <h1 className="text-[8vw] md:text-[6vw] leading-[0.9] italic font-light tracking-tighter" dir="ltr">
              Handcrafted<br/>Nature.
            </h1>
            <div className="h-px w-16 bg-white/40 mx-auto mt-8"></div>
          </div>
        </section>

        {/* 3. Teaser Section */}
        <section className="py-40 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] rounded-t-full overflow-hidden shadow-2xl">
               <img src="/nature-arch.jpg" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="space-y-8 text-start">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#b59e7d] block italic">{t.teaser.badge}</span>
              <h2 className="text-5xl italic font-light leading-tight">{t.teaser.title}</h2>
              <p className="text-xl font-light leading-relaxed opacity-80 max-w-lg">
                {t.teaser.desc}
              </p>
              <div className="pt-6">
                <Link href="/story" className="inline-block border-b border-[#2c3424] pb-2 text-xs uppercase tracking-widest font-bold hover:text-[#b59e7d] hover:border-[#b59e7d] transition-colors">
                  {t.teaser.btn}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Call to Action */}
        <section className="bg-[#2c3424] py-24 text-center text-[#fcfaf7]">
          <div className="max-w-2xl mx-auto px-6">
            <h3 className="text-3xl italic font-light mb-8">{t.cta.title}</h3>
            <Link href="/tables" className="inline-block border border-[#b59e7d] text-[#b59e7d] px-12 py-5 hover:bg-[#b59e7d] hover:text-[#2c3424] transition-all tracking-[0.4em] text-[10px] uppercase font-bold">
              {t.cta.btn}
            </Link>
          </div>
        </section>

        <footer className="py-16 text-center border-t border-[#e5e0db] bg-[#fcfaf7]">
          <p className="text-[10px] tracking-[1.2em] uppercase opacity-30 italic font-sans font-bold">Philipp • Earth • Wood • Soul</p>
        </footer>
        <div className="mt-4 flex justify-center gap-6 opacity-40 text-[9px] uppercase tracking-widest font-bold font-sans">
          <Link href="/accessibility" className="hover:text-[#b59e7d] transition-colors">Accessibility</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-[#b59e7d] transition-colors">Privacy Policy</Link>
        </div>

      </main>
    </PageTransition>
  );
}