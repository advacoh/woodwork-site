"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TablesPage() {
  const [length, setLength] = useState(120);
  const [woodType, setWoodType] = useState("oak");
  const [hasEdge, setHasEdge] = useState(true);

  const woodPrices: Record<string, number> = { oak: 20, acacia: 30, olive: 55 };
  const edgeBonus = hasEdge ? 300 : 0;
  const totalPrice = (length * woodPrices[woodType]) + edgeBonus;

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#2c3424] font-serif overflow-x-hidden" dir="ltr">
      
      {/* 1. Navigation */}
      <nav className="flex justify-between items-center p-8 absolute w-full top-0 z-50 bg-[#fcfaf7]/80 backdrop-blur-md border-b border-[#2c3424]/5">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Philipp Logo" 
              width={129} 
              height={45} 
              style={{ width: 'auto', height: 'auto' }}
              className="brightness-0 opacity-90" 
            />
          </Link>
        </div>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-sans font-bold">
          <Link href="/" className="hover:text-[#b59e7d] transition-colors text-stone-500">Our Story</Link>
          <Link href="/tables" className="text-[#b59e7d] border-b border-[#2c3424] pb-1">Tables</Link>
          <Link href="/contact" className="hover:text-[#b59e7d] transition-colors text-stone-500">Contact</Link>
        </div>
      </nav>

      {/* 2. Hero Section - עם ריווח נוסף למעלה */}
      <section className="relative h-[75vh] flex items-center justify-center p-6 pt-32 overflow-hidden">
        <div className="absolute inset-4 overflow-hidden rounded-[30px] z-0 shadow-2xl">
          <img src="/wood-texture.jpg" className="w-full h-full object-cover brightness-[0.8] scale-105" alt="Raw Wood Texture" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#2c3424]/30 opacity-80"></div>
        </div>
        
        {/* הוספנו mt-20 כדי להוריד את הטקסט למטה וליצור "שורה ריקה" ויזואלית */}
        <div className="relative z-10 text-center text-[#fcfaf7] drop-shadow-md mt-20">
          <h1 className="text-[10vw] leading-[0.8] italic font-light tracking-tighter mix-blend-color-dodge">
            Tables.
          </h1>
          <div className="h-px w-20 bg-[#b59e7d] mx-auto mt-8 opacity-60"></div>
        </div>
      </section>

      {/* 3. The Clean Gallery - שלוש תמונות אחת ליד השנייה (Grid מאוזן) */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* תמונה 1 - מרובעת ונקייה */}
          <div className="flex flex-col space-y-4">
            <div className="aspect-square overflow-hidden rounded-sm shadow-xl group">
              <img src="/table1.jpg" alt="Table 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl italic font-light text-center border-b border-[#2c3424]/10 pb-2">Natural Oak</h3>
          </div>

          {/* תמונה 2 - מרובעת ונקייה */}
          <div className="flex flex-col space-y-4">
            <div className="aspect-square overflow-hidden rounded-sm shadow-xl group">
              <img src="/table2.jpg" alt="Table 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl italic font-light text-center border-b border-[#2c3424]/10 pb-2">Wild Acacia</h3>
          </div>

          {/* תמונה 3 - מרובעת ונקייה */}
          <div className="flex flex-col space-y-4">
            <div className="aspect-square overflow-hidden rounded-sm shadow-xl group">
              <img src="/table3.jpg" alt="Table 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-xl italic font-light text-center border-b border-[#2c3424]/10 pb-2">Ancient Olive</h3>
          </div>

        </div>
      </section>

      {/* 4. The Calculator */}
      <section className="py-24 bg-[#2c3424] text-[#fcfaf7] relative">
        <img src="/wood-rings.jpg" className="absolute -left-10 top-0 w-80 h-80 object-cover rounded-full opacity-[0.05] grayscale select-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl italic font-light mb-4">Design your piece.</h2>
            <div className="h-px w-12 bg-[#b59e7d] mx-auto opacity-50"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] opacity-40 font-sans font-bold">Select Timber</label>
                <select 
                  className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-[#b59e7d] transition-colors text-xl font-light italic text-[#fcfaf7]"
                  value={woodType}
                  onChange={(e) => setWoodType(e.target.value)}
                >
                  <option value="oak" className="text-black">European Oak</option>
                  <option value="acacia" className="text-black">Wild Acacia</option>
                  <option value="olive" className="text-black">Ancient Olive</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-4 border-y border-white/5">
                <label className="text-lg font-light italic">Keep Natural Edge?</label>
                <input 
                  type="checkbox" 
                  checked={hasEdge} 
                  onChange={(e) => setHasEdge(e.target.checked)}
                  className="w-5 h-5 accent-[#b59e7d] cursor-pointer"
                />
              </div>
            </div>

            <div className="text-center md:text-right flex flex-col justify-center items-center md:items-end">
              <span className="text-[9px] uppercase tracking-[0.4em] opacity-30 block mb-2 font-sans font-bold italic">Estimation</span>
              <div className="text-6xl font-light mb-6">₪{totalPrice.toLocaleString()}</div>
              <Link href="/contact" className="inline-block border border-[#b59e7d] text-[#b59e7d] px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#b59e7d] hover:text-[#2c3424] transition-all">
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-[#e5e0db] mt-20">
        <p className="text-[10px] tracking-[1.2em] uppercase opacity-30 italic font-sans font-bold">Philipp • Earth • Wood • Soul</p>
      </footer>

    </main>
  );
}