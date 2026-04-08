"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#2c3424] font-serif overflow-x-hidden" dir="ltr">
      
      {/* 1. Navigation - Absolute (נעלם בגלילה) */}
      <nav className="flex justify-between items-center px-8 py-6 absolute w-full top-0 z-50 bg-transparent border-b border-[#2c3424]/10">
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
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-[#2c3424]">
          <Link href="/" className="hover:text-[#b59e7d] transition-colors">Our Story</Link>
          <Link href="/tables" className="hover:text-[#b59e7d] transition-colors">Tables</Link>
          <Link href="/contact" className="text-[#b59e7d] border-b border-[#2c3424] pb-1">Contact</Link>
        </div>
      </nav>

      <section className="pt-48 pb-20 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
          
          {/* 2. Left Side: Visual & Info */}
          <div className="col-span-12 md:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-[9px] uppercase tracking-[0.8em] text-[#b59e7d] block italic">Get in touch</span>
              <h1 className="text-6xl md:text-7xl font-light italic tracking-tighter">Let's build together.</h1>
            </div>

            {/* תמונה אמיצה - קשת של טבע */}
            <div className="aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl border border-[#e5e0db]">
               <img src="/nature-arch.jpg" alt="Nature Inspiration" className="w-full h-full object-cover brightness-90" />
            </div>

            <div className="space-y-6 font-sans text-[11px] uppercase tracking-[0.3em] opacity-70">
              <div>
                <p className="text-[#b59e7d] mb-1">Location</p>
                <p>Golan Heights, Israel</p>
              </div>
              <div>
                <p className="text-[#b59e7d] mb-1">Email</p>
                <p>studio@philipp-wood.com</p>
              </div>
            </div>
          </div>

          {/* 3. Right Side: The Form */}
          <div className="col-span-12 md:col-span-6 md:col-start-8 bg-white p-10 md:p-16 shadow-xl border border-[#e5e0db] rounded-sm mt-12 md:mt-32">
            <form className="space-y-10">
              <div className="space-y-2 border-b border-[#2c3424]/10 pb-2 focus-within:border-[#b59e7d] transition-colors">
                <label className="text-[9px] uppercase tracking-widest opacity-40 font-sans font-bold">Your Name</label>
                <input type="text" className="w-full bg-transparent outline-none text-xl font-light italic py-1" placeholder="Philipp Wood" />
              </div>

              <div className="space-y-2 border-b border-[#2c3424]/10 pb-2 focus-within:border-[#b59e7d] transition-colors">
                <label className="text-[9px] uppercase tracking-widest opacity-40 font-sans font-bold">Email Address</label>
                <input type="email" className="w-full bg-transparent outline-none text-xl font-light italic py-1" placeholder="hello@nature.com" />
              </div>

              <div className="space-y-2 border-b border-[#2c3424]/10 pb-2 focus-within:border-[#b59e7d] transition-colors">
                <label className="text-[9px] uppercase tracking-widest opacity-40 font-sans font-bold">Tell us about your project</label>
                <textarea rows={4} className="w-full bg-transparent outline-none text-xl font-light italic py-1 resize-none" placeholder="Dimensions, wood type, or a dream..." />
              </div>

              <button className="w-full bg-[#2c3424] text-[#fcfaf7] py-6 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#b59e7d] transition-all duration-500 shadow-lg">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 4. Secondary Image - טקסטורת עץ רחבה למטה */}
      <section className="h-[40vh] w-full px-8 pb-20">
        <div className="h-full w-full rounded-sm overflow-hidden shadow-inner grayscale-[20%] opacity-80">
          <img src="/wood-texture.jpg" className="w-full h-full object-cover" alt="Wood texture footer" />
        </div>
      </section>

      <footer className="py-16 text-center border-t border-[#e5e0db]">
        <p className="text-[9px] tracking-[1em] uppercase opacity-30 italic font-sans font-bold">Philipp • Handcrafted Nature</p>
      </footer>

    </main>
  );
}