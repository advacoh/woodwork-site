"use client";
import { useState } from 'react';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  const toggleContrast = () => {
    document.documentElement.classList.toggle('grayscale');
  };

  const increaseFont = () => {
    setFontSize(prev => prev + 10);
    document.body.style.fontSize = `${fontSize + 10}%`;
  };

  const reset = () => {
    setFontSize(100);
    document.body.style.fontSize = '100%';
    document.documentElement.classList.remove('grayscale');
  };

  return (
    <div className="fixed bottom-24 right-6 z-[200] font-sans">
      {/* כפתור הנגישות העגול */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-[#2c3424] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#b59e7d] transition-all"
        title="Accessibility Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>
        </svg>
      </button>

      {/* התפריט שנפתח */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white border border-[#e5e0db] p-4 rounded-sm shadow-2xl w-48 space-y-3">
          <button onClick={increaseFont} className="w-full text-left text-[10px] uppercase tracking-widest font-bold py-2 border-b border-stone-100 hover:text-[#b59e7d]">
             Increase Text
          </button>
          <button onClick={toggleContrast} className="w-full text-left text-[10px] uppercase tracking-widest font-bold py-2 border-b border-stone-100 hover:text-[#b59e7d]">
             Grayscale Mode
          </button>
          <button onClick={reset} className="w-full text-left text-[10px] uppercase tracking-widest font-bold py-2 text-red-800">
             Reset
          </button>
        </div>
      )}
    </div>
  );
}