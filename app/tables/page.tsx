"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/src/components/PageTransition';

export default function TablesPage() {
  const [lang, setLang] = useState('en');
  const [length, setLength] = useState(120);
  const [woodType, setWoodType] = useState("oak");
  const [hasEdge, setHasEdge] = useState(true);

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

  // 2. תרגומים (הכותרת ב-Hero נשארה Tables. בקוד למטה)
  const translations = {
    en: {
      dir: "ltr",
      nav: { home: "Home", story: "Our Story", tables: "Tables", contact: "Contact" },
      gallery: {
        table1: "Natural Oak",
        table2: "Wild Acacia",
        table3: "Ancient Olive",
        table4: "Golan Ash"
      },
      calc: {
        title: "Design your piece.",
        timber: "Select Timber",
        oak: "European Oak",
        acacia: "Wild Acacia",
        olive: "Ancient Olive",
        edge: "Keep Natural Edge?",
        estimate: "Estimation",
        btn: "Inquire Now"
      }
    },
    he: {
      dir: "rtl",
      nav: { home: "דף הבית", story: "הסיפור שלנו", tables: "שולחנות", contact: "צור קשר" },
      gallery: {
        table1: "אלון טבעי",
        table2: "שיטה פראית",
        table3: "זית עתיק",
        table4: "מילה (Ash) גולן"
      },
      calc: {
        title: "עצבו את השולחן שלכם.",
        timber: "בחירת עץ",
        oak: "אלון אירופאי",
        acacia: "שיטה פראית",
        olive: "זית עתיק",
        edge: "לשמור על קצה טבעי?",
        estimate: "הערכת מחיר",
        btn: "לפרטים והזמנה"
      }
    }
  };

  const t = lang === 'he' ? translations.he : translations.en;

  const woodPrices: Record<string, number> = { oak: 20, acacia: 30, olive: 55 };
  const edgeBonus = hasEdge ? 300 : 0;
  const totalPrice = (length * woodPrices[woodType]) + edgeBonus;

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#f4f1ea] text-[#2c3424] font-serif overflow-x-hidden transition-all duration-500" dir={t.dir}>
        
        {/* לשונית שפה בצד ימין - מיקום נמוך יותר */}
        <button 
          onClick={toggleLanguage}
          className="fixed top-[70%] right-0 z-[100] transform -translate-y-1/2 bg-[#2c3424] text-white py-6 px-2 rounded-l-md shadow-2xl hover:bg-[#b59e7d] transition-all duration-300 group border-l border-white/20"
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
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-[#2c3424]">
            <Link href="/" className="hover:text-[#b59e7d] transition-colors">{t.nav.home}</Link>
            <Link href="/story" className="hover:text-[#b59e7d] transition-colors">{t.nav.story}</Link>
            <Link href="/tables" className="text-[#b59e7d] border-b border-[#2c3424] pb-1">{t.nav.tables}</Link>
            <Link href="/contact" className="hover:text-[#b59e7d] transition-colors">{t.nav.contact}</Link>
          </div>
        </nav>

        {/* 2. Hero Section - English Title with RTL Fix */}
        <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-4 overflow-hidden rounded-[30px] z-0 shadow-2xl">
            <img src="/wood-texture.jpg" className="w-full h-full object-cover brightness-[0.8] scale-105" alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#2c3424]/30 opacity-80"></div>
          </div>
          <div className="relative z-10 text-center text-[#fcfaf7] drop-shadow-md mt-32">
            {/* dir="ltr" שומר על הנקודה במקום הנכון גם כשהאתר בעברית */}
            <h1 className="text-[10vw] leading-[0.8] italic font-light tracking-tighter mix-blend-color-dodge" dir="ltr">
              Tables.
            </h1>
            <div className="h-px w-20 bg-[#b59e7d] mx-auto mt-8 opacity-60"></div>
          </div>
        </section>

        {/* 3. Gallery Grid */}
        <section className="max-w-7xl mx-auto px-8 py-32 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col space-y-4">
              <div className="aspect-square overflow-hidden rounded-sm shadow-xl group">
                <img src="/table5.jpg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl italic font-light border-b border-[#2c3424]/10 pb-2">{t.gallery.table1}</h3>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="aspect-square overflow-hidden rounded-sm shadow-xl group">
                <img src="/table6.jpg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl italic font-light border-b border-[#2c3424]/10 pb-2">{t.gallery.table2}</h3>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="aspect-square overflow-hidden rounded-sm shadow-xl group">
                <img src="/table3.jpg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl italic font-light border-b border-[#2c3424]/10 pb-2">{t.gallery.table3}</h3>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="aspect-square overflow-hidden rounded-sm shadow-xl group">
                <img src="/table7.jpg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl italic font-light border-b border-[#2c3424]/10 pb-2">{t.gallery.table4}</h3>
            </div>
          </div>
        </section>

        {/* 4. Calculator Section */}
        <section className="py-24 bg-[#2c3424] text-[#fcfaf7] relative">
          <img src="/wood-rings.jpg" className="absolute -left-10 top-0 w-80 h-80 object-cover rounded-full opacity-[0.05] grayscale select-none" alt="" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-start">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl italic font-light mb-4">{t.calc.title}</h2>
              <div className="h-px w-12 bg-[#b59e7d] mx-auto opacity-50"></div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.4em] opacity-40 font-sans font-bold">{t.calc.timber}</label>
                  <select 
                    className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-[#b59e7d] transition-colors text-xl font-light italic text-[#fcfaf7]"
                    value={woodType}
                    onChange={(e) => setWoodType(e.target.value)}
                  >
                    <option value="oak" className="text-black">{t.calc.oak}</option>
                    <option value="acacia" className="text-black">{t.calc.acacia}</option>
                    <option value="olive" className="text-black">{t.calc.olive}</option>
                  </select>
                </div>
                <div className="flex items-center justify-between py-4 border-y border-white/5">
                  <label className="text-lg font-light italic">{t.calc.edge}</label>
                  <input type="checkbox" checked={hasEdge} onChange={(e) => setHasEdge(e.target.checked)} className="w-5 h-5 accent-[#b59e7d] cursor-pointer" />
                </div>
              </div>
              {/* יישור מחיר לפי שפה (במחשב נצמד לסוף) */}
              <div className="text-center md:text-end flex flex-col justify-center items-center md:items-end">
                <span className="text-[9px] uppercase tracking-[0.4em] opacity-30 block mb-2 font-sans font-bold italic">{t.calc.estimate}</span>
                <div className="text-6xl font-light mb-6">₪{totalPrice.toLocaleString()}</div>
                <Link href="/contact" className="inline-block border border-[#b59e7d] text-[#b59e7d] px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#b59e7d] hover:text-[#2c3424] transition-all">
                  {t.calc.btn}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-16 text-center border-t border-[#e5e0db] mt-20 bg-[#fcfaf7]">
          <p className="text-[10px] tracking-[1.2em] uppercase opacity-30 italic font-sans font-bold">Philipp • Handcrafted Nature</p>
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