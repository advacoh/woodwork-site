"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/src/components/PageTransition';

export default function ContactPage() {
  const [lang, setLang] = useState('en');

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

  const translations = {
    en: {
      dir: "ltr",
      nav: { home: "Home", story: "Our Story", tables: "Tables", contact: "Contact" },
      hero: { title: "Contact Us." },
      info: { 
        workshop: "Our Workshop", 
        location: "Be'er Sheva, Israel", 
        channels: "Direct Channels",
        desc: "Start a conversation with us directly to discuss your custom project or to schedule a visit to the workshop.",
        whatsapp: "Chat on WhatsApp"
      },
      form: {
        title: "Send a Message",
        fName: "First Name",
        fNamePlace: "Your name",
        lName: "Last Name",
        lNamePlace: "Family name",
        msg: "Your Message",
        msgPlace: "How can we help?",
        btn: "Send to Workshop"
      }
    },
    he: {
      dir: "rtl",
      nav: { home: "דף הבית", story: "הסיפור שלנו", tables: "שולחנות", contact: "צור קשר" },
      hero: { title: "Contact Us." }, // נשאר באנגלית לבקשתך
      info: { 
        workshop: "הסדנה שלנו", 
        location: "באר שבע, ישראל", 
        channels: "ערוצים ישירים",
        desc: "דברו איתנו ישירות כדי לתכנן את הפרויקט הבא שלכם או כדי לתאם ביקור בסדנה.",
        whatsapp: "דברו איתנו בוואטסאפ"
      },
      form: {
        title: "שלחו הודעה",
        fName: "שם פרטי",
        fNamePlace: "השם שלך",
        lName: "שם משפחה",
        lNamePlace: "שם משפחה",
        msg: "הודעה",
        msgPlace: "איך נוכל לעזור?",
        btn: "שלחו לסדנה"
      }
    }
  };

  const t = lang === 'he' ? translations.he : translations.en;
  const whatsappNumber = "972546698078"; 
  const message = encodeURIComponent(lang === 'he' ? "היי, ראיתי את האתר שלכם ואשמח לשמוע פרטים נוספים." : "Hi, I saw your website and would love to hear more.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#f4f1ea] text-[#2c3424] font-serif overflow-x-hidden transition-all duration-500" dir={t.dir}>
        
        {/* לשונית החלפת שפה */}
        <button 
          onClick={toggleLanguage}
          className="fixed top-[70%] right-0 z-[100] transform -translate-y-1/2 bg-[#2c3424] text-white py-6 px-2 rounded-l-md shadow-2xl hover:bg-[#b59e7d] transition-all duration-300 group border-l border-white/20"
        >
          <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.3em] font-bold">
            {lang === 'en' ? 'עברית' : 'English'}
          </span>
        </button>

        {/* 1. Navigation */}
        <nav className="flex justify-between items-center px-8 py-6 absolute w-full top-0 z-50 bg-transparent border-b border-white/10">
          <div className="flex items-center">
            <Link href="/">
                            <Image 
                              src="/logo3.png" 
                              alt="Philipp Logo" 
                              width={140} 
                              height={50} 
                            style={{ width: 'auto', height: 'auto', mixBlendMode: 'multiply' }} 
                            className="opacity-100" // אפשר להוריד את brightness-0
                          />
            </Link>
          </div>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-white/90">
            <Link href="/" className="hover:text-[#b59e7d] transition-colors">{t.nav.home}</Link>
            <Link href="/story" className="hover:text-[#b59e7d] transition-colors">{t.nav.story}</Link>
            <Link href="/tables" className="hover:text-[#b59e7d] transition-colors">{t.nav.tables}</Link>
            <Link href="/contact" className="text-[#b59e7d] border-b border-white pb-1">{t.nav.contact}</Link>
          </div>
        </nav>

        {/* 2. Hero Section - English Title with RTL Fix */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/contact-hero.jpg" alt="Philipp Wood Family" className="w-full h-full object-cover brightness-[0.7]" />
          </div>
          <div className="relative z-10 text-center text-white mt-32 drop-shadow-2xl">
            {/* dir="ltr" מבטיח שהנקודה תהיה בצד הנכון */}
            <h1 className="text-6xl md:text-[7vw] font-light italic tracking-tighter" dir="ltr">
              {t.hero.title}
            </h1>
          </div>
        </section>

        {/* 3. Content Grid */}
        <section className="py-24 bg-[#fcfaf7] px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            
            <div className="md:col-span-5 space-y-12 text-start pt-10">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.5em] text-[#b59e7d] block font-sans font-bold">{t.info.workshop}</span>
                <p className="text-2xl font-light">{t.info.location}</p>
              </div>
              <div className="space-y-6">
                <span className="text-[11px] uppercase tracking-[0.5em] text-[#b59e7d] block font-sans font-bold">{t.info.channels}</span>
                <p className="text-lg font-light opacity-80 leading-relaxed">{t.info.desc}</p>
                <a href={whatsappUrl} target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-5 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#128C7E] transition-all shadow-lg">{t.info.whatsapp}</a>
              </div>
            </div>

            <div className="md:col-span-7 bg-white p-10 md:p-14 shadow-2xl border border-[#e5e0db] rounded-sm transform md:-translate-y-20 z-20">
              <form className="space-y-8 text-start">
                <h3 className="text-2xl italic font-light border-b border-[#2c3424]/10 pb-6">{t.form.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 border-b border-[#2c3424]/10 pb-2 focus-within:border-[#b59e7d] transition-colors">
                    <label className="text-[9px] uppercase tracking-widest opacity-40 font-sans font-bold">{t.form.fName}</label>
                    <input type="text" className="w-full bg-transparent outline-none text-xl font-light italic py-1" placeholder={t.form.fNamePlace} />
                  </div>
                  <div className="space-y-2 border-b border-[#2c3424]/10 pb-2 focus-within:border-[#b59e7d] transition-colors">
                    <label className="text-[9px] uppercase tracking-widest opacity-40 font-sans font-bold">{t.form.lName}</label>
                    <input type="text" className="w-full bg-transparent outline-none text-xl font-light italic py-1" placeholder={t.form.lNamePlace} />
                  </div>
                </div>
                <div className="space-y-2 border-b border-[#2c3424]/10 pb-2 focus-within:border-[#b59e7d] transition-colors">
                  <label className="text-[9px] uppercase tracking-widest opacity-40 font-sans font-bold">{t.form.msg}</label>
                  <textarea rows={4} className="w-full bg-transparent outline-none text-xl font-light italic py-1 resize-none" placeholder={t.form.msgPlace} />
                </div>
                <button type="button" className="w-full border border-[#2c3424] text-[#2c3424] py-5 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#2c3424] hover:text-white transition-all">{t.form.btn}</button>
              </form>
            </div>
          </div>
        </section>

        {/* 4. Bottom Visual */}
        <section className="h-[65vh] w-full px-8 pb-32">
          <div className="h-full w-full rounded-sm overflow-hidden shadow-xl grayscale-[5%] border border-[#e5e0db]">
            <img src="/wood-texture.jpg" className="w-full h-full object-cover" alt="Solid wood texture" />
          </div>
        </section>

        <footer className="py-16 text-center border-t border-[#2c3424]/5 bg-[#fcfaf7]">
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