"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/src/components/PageTransition';

export default function OurStoryPage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'he' : 'en';
    setLang(newLang);
    localStorage.setItem('userLanguage', newLang);
  };

  const content = {
    en: {
      dir: "ltr",
      nav: { home: "Home", story: "Our Story", tables: "Tables", contact: "Contact" },
      badge: "Behind the grain",
      p1: "It didn’t start with a business plan. It started with a quiet obsession with the way a raw slab of oak feels under the hand, and the realization that the most beautiful things in the world aren’t made—they are preserved.",
      p2: "We began in the Golan Heights, originally building only for ourselves. We wanted pieces that felt like the landscape outside our window—raw, sturdy, and honest. Soon, friends and family started asking for their own, and what began as a personal project slowly grew into a dedicated workshop.",
      p3: "Our process is intentionally slow. We don’t aim for 'factory-perfect' finishes or mass-produced symmetry. To us, a knot in the wood or a weathered edge isn't a flaw to be sanded away; it’s simply how the tree grew.",
      p4: "Whether it’s European Oak, Wild Acacia, or Ancient Olive, we focus on stable construction and a finish that respects the natural texture of the material. No shortcuts, just the truth of the wood."
    },
    he: {
      dir: "rtl",
      nav: { home: "דף הבית", story: "הסיפור שלנו", tables: "שולחנות", contact: "צור קשר" },
      badge: "מאחורי הטקסטורה",
      p1: "זה לא התחיל עם תוכנית עסקית. זה התחיל עם תשוקה שקטה למגע של לוח אלון גולמי מתחת ליד, וההבנה שהדברים היפים ביותר בעולם אינם נוצרים – הם נשמרים.",
      p2: "התחלנו ברמת הגולן, במקור בנינו רק עבור עצמנו. רצינו רהיטים שירגישו כמו הנוף מחוץ לחלון שלנו – גולמיים, חזקים וכנים. מהר מאוד חברים ומשפחה התחילו לבקש פריטים משלהם, ומה שהתחיל כפרויקט אישי הפך לאט לאט לסדנה ייעודית.",
      p3: "התהליך שלנו הוא איטי במכוון. אנחנו לא שואפים לגימורי 'מפעל מושלמים' או לסימטריה בייצור המוני. עבורנו, עין בעץ או קצה בלוי אינם פגם שיש לשייף; זו פשוט הדרך שבה העץ גדל.",
      p4: "בין אם מדובר באלון אירופאי, שיטה פראית או זית עתיק, אנו מתמקדים בבנייה יציבה ובגימור המכבד את המרקם הטבעי של החומר. ללא קיצורי דרך, רק האמת של העץ."
    }
  };

  const t = lang === 'he' ? content.he : content.en;

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#f4f1ea] text-[#2c3424] font-serif transition-all duration-500" dir={t.dir}>
        
        {/* לשונית שפה בצד */}
        <button 
          onClick={toggleLanguage}
          className="fixed top-[70%] right-0 z-[100] transform -translate-y-1/2 bg-[#2c3424] text-white py-6 px-2 rounded-l-md shadow-2xl hover:bg-[#b59e7d] transition-all duration-300"
        >
          <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.3em] font-bold">
            {lang === 'en' ? 'עברית' : 'English'}
          </span>
        </button>

        {/* 1. Navigation */}
        <nav className="flex justify-between items-center px-8 py-6 absolute w-full top-0 z-50 bg-transparent border-b border-[#2c3424]/10">
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
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-sans font-bold">
            <Link href="/" className="hover:text-[#b59e7d] transition-colors">{t.nav.home}</Link>
            <Link href="/story" className="text-[#b59e7d] border-b border-[#2c3424] pb-1">{t.nav.story}</Link>
            <Link href="/tables" className="hover:text-[#b59e7d] transition-colors">{t.nav.tables}</Link>
            <Link href="/contact" className="hover:text-[#b59e7d] transition-colors">{t.nav.contact}</Link>
          </div>
        </nav>

        {/* 2. Hero Section */}
        <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/story-hero.jpg" className="w-full h-full object-cover brightness-[0.7]" alt="" />
            <div className="absolute inset-0 bg-black/15"></div>
          </div>

          <div className="relative z-10 text-center px-16 py-12 border-2 border-white/40 backdrop-blur-sm bg-black/5 rounded-sm shadow-inner overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.1] grayscale mix-blend-overlay pointer-events-none">
              <img src="/rusty-texture.jpg" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[1em] text-white/80 mb-4 block font-sans italic">{t.badge}</span>
              <h1 className="text-6xl md:text-8xl font-light italic tracking-tighter text-white" dir="ltr">
                Our Story.
                </h1>
            </div>
          </div>
        </section>

        {/* 3. Narrative Section - FIXED GRID FOR HEBREW */}
        <section className="py-32 bg-[#f4f1ea] px-8">
          <div className="max-w-5xl mx-auto">
            {/* בטלפון עמודה אחת, במחשב שתיים. תמיד מיושר לפי השפה */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-start leading-relaxed">
              <div className="space-y-8 text-lg font-normal">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
              </div>
              <div className="space-y-8 text-lg font-normal border-t md:border-t-0 md:border-s border-[#2c3424]/10 pt-12 md:pt-0 md:ps-16">
                <p>{t.p3}</p>
                <p>{t.p4}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Portfolio Grid */}
        <section className="max-w-7xl mx-auto px-8 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 h-[600px] overflow-hidden rounded-sm shadow-xl">
              <img src="/logs-pile.jpg" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="col-span-12 md:col-span-4 h-[600px] overflow-hidden rounded-sm shadow-lg">
              <img src="/golan.jpg" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="col-span-12 md:col-span-4 aspect-square overflow-hidden rounded-sm shadow-md border border-[#2c3424]/5">
               <img src="/canada.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="" />
            </div>
            <div className="col-span-12 md:col-span-4 aspect-square overflow-hidden rounded-sm shadow-md border border-[#2c3424]/5">
               <img src="/adva_work.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="" />
            </div>
            <div className="col-span-12 md:col-span-4 aspect-square overflow-hidden rounded-sm shadow-md border border-[#2c3424]/5">
               <img src="/tani_work.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="" />
            </div>
          </div>
        </section>

        <footer className="py-16 text-center border-t border-[#2c3424]/5 bg-[#f4f1ea]">
          <p className="text-[9px] tracking-[1em] uppercase opacity-30 italic font-sans font-bold text-center">Philipp • Earth • Wood • Soul</p>
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