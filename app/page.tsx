"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function NatureEditorialHome() {
  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#2c3424] font-serif overflow-x-hidden" dir="ltr">
      
      {/* 1. Navigation - מיושר וכולל את Our Story */}
      <nav className="flex justify-between items-center p-8 fixed w-full top-0 z-50 bg-[#fcfaf7]/60 backdrop-blur-md border-b border-[#2c3424]/5">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Philipp Logo" 
              width={130} 
              height={45} 
              style={{ width: 'auto', height: 'auto' }}
              className="brightness-0 opacity-90" 
            />
          </Link>
        </div>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-sans font-bold">
          <Link href="/" className="hover:text-[#b59e7d] transition-colors border-b border-[#2c3424] pb-1">Our Story</Link>
          <Link href="/tables" className="hover:text-[#b59e7d] transition-colors text-stone-500">Tables</Link>
          <Link href="/contact" className="hover:text-[#b59e7d] transition-colors text-stone-500">Contact</Link>
        </div>
      </nav>

      {/* 2. Hero Section - כותרת קטנה ואלגנטית יותר */}
      <section className="relative h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-6 overflow-hidden rounded-[30px] z-0 shadow-xl">
          <img src="/forest-hero.jpg" className="w-full h-full object-cover brightness-95" alt="Natural scenery" />
          <div className="absolute inset-0 bg-[#2c3424]/5"></div>
        </div>
        
        <div className="relative z-10 text-center text-white drop-shadow-lg">
          <span className="text-[9px] uppercase tracking-[0.8em] mb-6 block font-sans">Handcrafted • Custom • Wood</span>
          <h1 className="text-[8vw] md:text-[6vw] leading-[0.9] italic font-light tracking-tighter">
            Handcrafted<br/>Nature.
          </h1>
          <div className="h-px w-16 bg-white/40 mx-auto mt-8"></div>
        </div>
      </section>

      {/* 3. Our Story Section - עם הקשת האמיצה */}
      <section id="story" className="py-40 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          <div className="col-span-12 md:col-span-6 relative h-[750px] rounded-t-full overflow-hidden shadow-2xl border border-[#e5e0db]">
            <img src="/wood-rings.jpg" className="w-full h-full object-cover" alt="Wood Detail" />
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#b59e7d] block mb-6">Established in the Golan</span>
            <h2 className="text-6xl italic font-light mb-10 leading-tight text-[#2c3424]">
              Born from the<br/>raw landscape.
            </h2>
            <div className="space-y-6 text-xl font-light text-[#5a524a] leading-relaxed">
              <p>
                Our journey began between open horizons and ancient oak trees. 
                We learned that building with wood is a conversation—not a command.
              </p>
              <p className="italic text-[#2c3424]/80">
                "Every table we create carries the silence and the strength of the forest."
              </p>
              <div className="pt-10">
                <Link href="/tables" className="inline-block border border-[#2c3424] px-10 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-[#2c3424] hover:text-white transition-all">
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sustainable Block */}
      <section className="bg-[#2c3424] py-32 px-10 relative overflow-hidden text-[#fcfaf7]">
        <div className="absolute top-0 left-0 text-[25vw] text-white/5 font-bold -translate-y-1/2 select-none pointer-events-none">
          TIMBER
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <h3 className="text-4xl italic font-light leading-tight">
              Honest materials.<br/>Timeless design.
            </h3>
            <p className="opacity-70 text-lg font-light leading-relaxed max-w-md">
              We focus on the organic integrity of the wood. No mass production—just 
              one-of-a-kind pieces built to last generations.
            </p>
            <Link href="/contact" className="inline-block border border-[#b59e7d] text-[#b59e7d] px-12 py-5 hover:bg-[#b59e7d] hover:text-[#2c3424] transition-all tracking-[0.3em] text-xs uppercase font-bold">
              Inquire Now
            </Link>
          </div>
          
          <div className="relative group z-10">
            <img src="/logs-pile.jpg" className="rounded-sm shadow-2xl grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000" alt="Timber collection" />
            {/* אלמנט עיצובי - קובייה צפה */}
            <div className="absolute -top-10 -right-10 w-40 h-40 overflow-hidden rounded-full shadow-inner opacity-40">
                <img src="/wood-texture.jpg" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-[#e5e0db] bg-[#fcfaf7]">
        <p className="text-[10px] tracking-[1.2em] uppercase opacity-40 italic">Philipp • Earth • Wood • Soul</p>
      </footer>

    </main>
  );
}