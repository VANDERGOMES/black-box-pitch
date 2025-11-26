"use client";

import React, { useState } from 'react';
import { Play, Ticket, Utensils, Smartphone, ChevronDown, Calendar, Lock } from 'lucide-react';

export default function PitchDeck() {
  const [financialMode, setFinancialMode] = useState<'unit' | 'festival'>('festival');

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-amber-500 selection:text-black">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black border border-amber-400 flex items-center justify-center">
              <div className="w-4 h-4 bg-amber-400/20"></div>
            </div>
            <span className="font-bold tracking-widest text-sm text-neutral-200">BLACK BOX CINEMA</span>
          </div>
          <button className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors">
            Invest Now
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black opacity-50"></div>
        {/* Abstract Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="inline-block border border-amber-500/50 text-amber-400 px-4 py-1 text-xs uppercase tracking-[0.3em] mb-6">
            Pre-Seed Opportunity
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
            OPEN THE <span className="text-amber-500">BOX</span>.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            The Future of Film Distribution is Physical. <br/>
            We don't buy ads. We sell food. We acquire audiences at a <span className="text-green-400 font-bold">Profit</span>.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 font-bold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors">
              <Play className="w-4 h-4 fill-black" /> WATCH SIZZLE REEL
            </button>
            <button className="border border-neutral-700 hover:border-amber-400 text-neutral-300 hover:text-amber-400 px-8 py-4 font-bold transition-all">
              VIEW THE DECK
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-neutral-600" />
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* THE TRAP */}
          <div className="opacity-50 hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-red-500 font-bold tracking-widest mb-4">THE TRAP (BROKEN MODEL)</h3>
            <h2 className="text-4xl font-bold mb-6">Streaming is a Money Pit.</h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Studios spend $10 to acquire a user worth $8. The algorithm buries 99% of films. Independent horror has no home.
            </p>
            <div className="p-6 border border-red-900/30 bg-red-900/10 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-400">Avg CAC (Cost Per User)</span>
                <span className="text-red-500 font-bold">$50.00+</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full w-[80%]"></div>
              </div>
            </div>
          </div>

          {/* THE SOLUTION */}
          <div>
            <h3 className="text-green-400 font-bold tracking-widest mb-4">THE BLACK BOX SOLUTION</h3>
            <h2 className="text-4xl font-bold mb-6 text-white">The "Trojan Horse" Strategy.</h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              We leverage high-margin street food to fund distribution. We acquire our audience profitably in the physical world, then monetize them digitally.
            </p>
            <div className="p-6 border border-green-900/30 bg-green-900/10 rounded-lg shadow-[0_0_30px_rgba(74,222,128,0.1)]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-400">Black Box CAC</span>
                <span className="text-green-400 font-bold">+$12.65 (PROFIT)</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[100%]"></div>
              </div>
              <p className="text-xs text-green-600/70 mt-2 uppercase tracking-wide">We get paid to acquire users</p>
            </div>
          </div>

        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">THE ECOSYSTEM</h2>
          <p className="text-neutral-400">A vertically integrated machine.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-neutral-900 border border-neutral-800 p-8 hover:border-amber-500/50 transition-all duration-300">
            <Ticket className="w-12 h-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">1. The Festival</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              "7 Nights of Horror" Traveling Tour. Zero-cost venue strategy subsidized by our "Night Market" vendor fees.
            </p>
          </div>
           {/* Card 2 */}
           <div className="group bg-neutral-900 border border-neutral-800 p-8 hover:border-amber-500/50 transition-all duration-300">
            <Utensils className="w-12 h-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">2. The Food</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              High-margin "Bunny Chow" served in the signature Black Box. The packaging features a Gold Foil QR Code that unlocks the film.
            </p>
          </div>
           {/* Card 3 */}
           <div className="group bg-neutral-900 border border-neutral-800 p-8 hover:border-amber-500/50 transition-all duration-300">
            <Smartphone className="w-12 h-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">3. The Tech</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Proprietary PWA (No App Store Tax). Geo-fenced dynamic pricing ($17.99 Global vs. $5.00 Local).
            </p>
          </div>
        </div>
      </section>

      {/* THE ASSET */}
      <section className="py-24 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/3">
             <div className="aspect-video bg-black border border-neutral-700 flex items-center justify-center relative group cursor-pointer">
                {/* Placeholder for Video Embed */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop')] bg-cover opacity-40"></div>
                <Play className="w-20 h-20 text-white fill-white opacity-80 group-hover:scale-110 transition-transform z-10" />
                <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase">Restricted Trailer</div>
             </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="inline-block bg-green-900/20 text-green-400 border border-green-900 px-3 py-1 text-xs font-bold uppercase mb-4">
              Asset Completed
            </div>
            <h2 className="text-4xl font-bold mb-2 italic">THE BREED</h2>
            <p className="text-neutral-400 mb-6">
              Survival Horror / Creature Feature. Shot on Arri Alexa. Theatrical Sound Mix.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-500">Global Price</span>
                <span className="font-bold">$17.99</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-500">Truck Price</span>
                <span className="font-bold text-amber-500">$5.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIALS */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-6">UNIT ECONOMICS</h2>
          
          {/* TOGGLE */}
          <div className="bg-neutral-900 p-1 rounded-lg flex border border-neutral-800">
            <button 
              onClick={() => setFinancialMode('festival')}
              className={`px-6 py-2 text-sm font-bold rounded-md transition-all ${financialMode === 'festival' ? 'bg-amber-500 text-black' : 'text-neutral-400 hover:text-white'}`}
            >
              Per Festival Week
            </button>
            <button 
              onClick={() => setFinancialMode('unit')}
              className={`px-6 py-2 text-sm font-bold rounded-md transition-all ${financialMode === 'unit' ? 'bg-amber-500 text-black' : 'text-neutral-400 hover:text-white'}`}
            >
              Per Food Unit
            </button>
          </div>
        </div>

        {/* FINANCIAL TABLE */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
          {financialMode === 'festival' ? (
            // FESTIVAL VIEW
            <div className="p-8">
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-neutral-800 opacity-50 text-sm uppercase tracking-widest">
                <div>Revenue Source</div>
                <div className="text-right">Amount</div>
              </div>
              <Row label="Ticket Sales (2,000 tix)" value="$40,000" />
              <Row label="Food Sales (Truck)" value="$15,000" />
              <Row label="Vendor Booth Fees" value="$8,000" />
              <Row label="Digital Rentals" value="$10,000" />
              <div className="border-t border-neutral-700 my-4"></div>
              <Row label="Venue Cost (Subsidized)" value="($0)" color="text-green-400" />
              <Row label="Operational Costs" value="($19,500)" color="text-red-400" />
              <div className="mt-6 pt-6 border-t border-amber-500/30 flex justify-between items-end">
                <span className="text-xl font-bold text-white">NET PROFIT (1 WEEK)</span>
                <span className="text-4xl font-black text-amber-500">$53,500</span>
              </div>
            </div>
          ) : (
            // UNIT VIEW
            <div className="p-8">
               <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-neutral-800 opacity-50 text-sm uppercase tracking-widest">
                <div>Item</div>
                <div className="text-right">Value</div>
              </div>
              <Row label="Retail Price (Bunny Chow)" value="$16.00" />
              <Row label="Food Cost" value="($2.50)" color="text-red-400" />
              <Row label="Packaging (Black Box)" value="($0.85)" color="text-red-400" />
              <div className="mt-6 pt-6 border-t border-amber-500/30 flex justify-between items-end">
                <span className="text-xl font-bold text-white">GROSS PROFIT</span>
                <span className="text-4xl font-black text-amber-500">$12.65</span>
              </div>
              <div className="mt-2 text-right text-xs text-neutral-500 uppercase tracking-widest">79% Margin</div>
            </div>
          )}
        </div>
        <p className="text-center text-neutral-500 mt-6 text-sm">
          *Projections based on conservative 300 attendee daily average.
        </p>
      </section>

      {/* THE ASK */}
      <footer className="py-24 bg-gradient-to-t from-black to-neutral-900 border-t border-neutral-800 text-center">
        <h2 className="text-5xl font-black text-white mb-4">JOIN THE REVOLUTION</h2>
        <p className="text-neutral-400 mb-8 text-lg">Raising Pre-Seed Capital to launch the October Tour.</p>
        
        <div className="max-w-md mx-auto bg-neutral-950 border border-neutral-800 p-8 rounded-xl text-left mb-12">
          <h3 className="text-amber-500 font-bold uppercase text-xs tracking-widest mb-4">Use of Funds</h3>
          <FundRow label="Tour Operations (Launch)" percent="50%" />
          <FundRow label="Tech Stack Finalization" percent="30%" />
          <FundRow label="Legal & Ops" percent="20%" />
        </div>

        <button className="bg-amber-500 hover:bg-amber-400 text-black px-10 py-5 font-bold text-lg rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(245,158,11,0.3)]">
          BOOK BRIEFING
        </button>
        <div className="mt-8 flex justify-center gap-6 text-neutral-500 text-sm">
          <span className="flex items-center gap-2 hover:text-white cursor-pointer"><Calendar className="w-4 h-4"/> Schedule Call</span>
          <span className="flex items-center gap-2 hover:text-white cursor-pointer"><Lock className="w-4 h-4"/> Data Room Access</span>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function Row({ label, value, color = 'text-white' }: { label: string, value: string, color?: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-neutral-800/50 last:border-0">
      <span className="text-neutral-300 font-medium">{label}</span>
      <span className={`font-mono font-bold ${color}`}>{value}</span>
    </div>
  );
}

function FundRow({ label, percent }: { label: string, percent: string }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-white">{label}</span>
        <span className="text-amber-500">{percent}</span>
      </div>
      <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
        <div className="bg-amber-500 h-full" style={{ width: percent }}></div>
      </div>
    </div>
  );
}