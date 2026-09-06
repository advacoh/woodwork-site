"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/src/components/PageTransition';

export default function AccessibilityPage() {
  const [lang, setLang] = useState('he');

  useEffect(() => {
    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang) setLang(savedLang);
  }, []);

  const t = lang === 'he' ? {
    dir: "rtl",
    title: "הצהרת נגישות",
    back: "חזרה לדף הבית",
    intro: "אנו ב-Philipp Wood רואים חשיבות עליונה בהנגשת האתר לכלל האוכלוסייה, כולל אנשים עם מוגבלויות, מתוך אמונה כי לכל אדם מגיעה הזכות לחיות בכבוד, בשוויון ובנוחות.",
    status: "סטטוס נגישות:",
    statusDesc: "אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג 2013, ומותאם לתקן הישראלי (ת״י 5568) ברמת הנגשה AA.",
    adjustments: "התאמות שבוצעו:",
    list: [
      "ניווט מלא באמצעות המקלדת.",
      "תמיכה בתוכנות קורא מסך (Screen Readers).",
      "ניגודיות צבעים עומדת בתקן.",
      "תגיות Alt לכל התמונות המשמעותיות.",
      "מבנה היררכי ברור של כותרות.",
      "התאמה מלאה לצפייה בדפדפנים מודרניים ובמכשירים ניידים."
    ],
    contact: "נתקלתם בבעיה?",
    contactDesc: "אם מצאתם תקלה או שיש לכם הצעה לשיפור הנגישות, נשמח לשמוע מכם:",
    responsible: "רכזת נגישות: אדוה",
    email: "Email: hello@philippwood.com",
    update: "עדכון אחרון: אפריל 2026"
  } : {
    dir: "ltr",
    title: "Accessibility Statement",
    back: "Back to Home",
    intro: "At Philipp Wood, we believe that the internet should be available and accessible to anyone, regardless of circumstance and ability.",
    status: "Accessibility Status:",
    statusDesc: "This website aims to comply with the Israeli Standard (TI 5568) at level AA, which corresponds with the WCAG 2.1 guidelines.",
    adjustments: "Adjustments Made:",
    list: [
      "Full keyboard navigation support.",
      "Screen reader compatibility.",
      "Standard color contrast ratios.",
      "Alt tags for meaningful images.",
      "Clear heading hierarchy.",
      "Responsive design for mobile and modern browsers."
    ],
    contact: "Found a problem?",
    contactDesc: "If you encounter an accessibility bug or have suggestions for improvement, please contact us:",
    responsible: "Accessibility Coordinator: Adva",
    email: "Email: hello@philippwood.com",
    update: "Last updated: April 2026"
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#f4f1ea] text-[#2c3424] font-serif transition-all duration-500 pb-20" dir={t.dir}>
        
        {/* Simple Nav */}
        <nav className="p-8 border-b border-[#2c3424]/10 flex justify-between items-center">
          <Link href="/">
             <Image src="/logo.png" alt="Logo" width={100} height={35} className="brightness-0 opacity-80" />
          </Link>
          <Link href="/" className="text-[10px] uppercase tracking-widest font-bold border-b border-[#2c3424] pb-1">
            {t.back}
          </Link>
        </nav>

        <section className="max-w-3xl mx-auto pt-24 px-8 text-start">
          <h1 className="text-5xl italic font-light mb-12">{t.title}</h1>
          
          <div className="space-y-10 opacity-90 leading-relaxed text-lg">
            <p>{t.intro}</p>
            
            <div className="space-y-4">
              <h2 className="font-bold uppercase tracking-wider text-sm text-[#b59e7d]">{t.status}</h2>
              <p>{t.statusDesc}</p>
            </div>

            <div className="space-y-4">
              <h2 className="font-bold uppercase tracking-wider text-sm text-[#b59e7d]">{t.adjustments}</h2>
              <ul className="list-disc ps-5 space-y-2">
                {t.list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="bg-white/40 p-8 rounded-sm border border-[#2c3424]/5">
              <h2 className="font-bold mb-4">{t.contact}</h2>
              <p className="mb-4">{t.contactDesc}</p>
              <p className="font-bold">{t.responsible}</p>
              <p>{t.email}</p>
            </div>

            <p className="text-[10px] opacity-40 italic pt-10">{t.update}</p>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}