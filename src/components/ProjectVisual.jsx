import React from 'react';
import { ShoppingBag, Sprout, Calendar, Sparkles, Activity, Layers } from 'lucide-react';

export const ProjectVisual = ({ theme, title }) => {
  if (theme === 'ecommerce') {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-amber-950/40 via-dark-900 to-orange-950/30 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-800">
        {/* Background ambient lighting */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600/10 blur-3xl rounded-full pointer-events-none"></div>

        {/* Top Header Mockup */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-950/80 border border-amber-500/30 backdrop-blur-md">
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-semibold text-amber-300">Bazar Byte Store</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
            E-Commerce UI
          </span>
        </div>

        {/* Center Mockup Cards */}
        <div className="my-auto py-4 grid grid-cols-3 gap-2.5 z-10">
          <div className="p-3 rounded-xl bg-dark-950/90 border border-amber-500/20 text-center shadow-lg">
            <div className="text-xl mb-1">🌰</div>
            <div className="text-xs font-bold text-slate-200">Almonds</div>
            <div className="text-[10px] text-amber-400 font-mono mt-0.5">Premium Raw</div>
          </div>
          <div className="p-3 rounded-xl bg-dark-950/90 border border-amber-500/40 text-center shadow-lg scale-105 ring-1 ring-amber-400/20">
            <div className="text-xl mb-1">🥜</div>
            <div className="text-xs font-bold text-amber-300">Cashews</div>
            <div className="text-[10px] text-amber-400 font-mono mt-0.5">Whole Grade</div>
          </div>
          <div className="p-3 rounded-xl bg-dark-950/90 border border-amber-500/20 text-center shadow-lg">
            <div className="text-xl mb-1">🌴</div>
            <div className="text-xs font-bold text-slate-200">Dates</div>
            <div className="text-[10px] text-amber-400 font-mono mt-0.5">Organic Medjool</div>
          </div>
        </div>

        {/* Bottom Mockup Status */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-amber-500/10 z-10">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Cart & Checkout Flow
          </span>
          <span className="text-amber-400/80">Dry Fruits Catalog</span>
        </div>
      </div>
    );
  }

  if (theme === 'agritech') {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-emerald-950/40 via-dark-900 to-teal-950/30 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-800">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-600/10 blur-3xl rounded-full pointer-events-none"></div>

        {/* Top Header Mockup */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-950/80 border border-emerald-500/30 backdrop-blur-md">
            <Sprout className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-semibold text-emerald-300">Green Pulse Telemetry</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            AgriTech / ML
          </span>
        </div>

        {/* Center Mockup Metrics */}
        <div className="my-auto py-4 grid grid-cols-3 gap-2.5 z-10">
          <div className="p-3 rounded-xl bg-dark-950/90 border border-emerald-500/20 text-center shadow-lg">
            <div className="text-[10px] text-slate-400 font-mono">Soil Moisture</div>
            <div className="text-sm font-bold text-emerald-300 mt-1">Optimal</div>
            <div className="text-[9px] text-emerald-400 font-mono mt-0.5">Sensor Active</div>
          </div>
          <div className="p-3 rounded-xl bg-dark-950/90 border border-emerald-500/40 text-center shadow-lg scale-105 ring-1 ring-emerald-400/20">
            <div className="text-[10px] text-slate-400 font-mono">Crop Health</div>
            <div className="text-sm font-bold text-teal-300 mt-1">Monitored</div>
            <div className="text-[9px] text-emerald-400 font-mono mt-0.5">Data Pipeline</div>
          </div>
          <div className="p-3 rounded-xl bg-dark-950/90 border border-emerald-500/20 text-center shadow-lg">
            <div className="text-[10px] text-slate-400 font-mono">Irrigation</div>
            <div className="text-sm font-bold text-emerald-300 mt-1">Automated</div>
            <div className="text-[9px] text-emerald-400 font-mono mt-0.5">Rule-Based</div>
          </div>
        </div>

        {/* Bottom Mockup Status */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-emerald-500/10 z-10">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            Telemetry Dashboard
          </span>
          <span className="text-emerald-400/80">Smart Farming</span>
        </div>
      </div>
    );
  }

  // Event Hub Theme
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-violet-950/40 via-dark-900 to-indigo-950/30 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-800">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Top Header Mockup */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-950/80 border border-violet-500/30 backdrop-blur-md">
          <Calendar className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-mono font-semibold text-violet-300">Event Hub Platform</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">
          Full-Stack App
        </span>
      </div>

      {/* Center Mockup Schedule */}
      <div className="my-auto py-4 space-y-2 z-10">
        <div className="p-2.5 rounded-xl bg-dark-950/90 border border-violet-500/20 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-violet-400"></div>
            <span className="font-semibold text-slate-200">Tech Summit 2026</span>
          </div>
          <span className="text-[10px] font-mono text-violet-300 px-1.5 py-0.5 rounded bg-violet-950">Active Reg</span>
        </div>
        <div className="p-2.5 rounded-xl bg-dark-950/90 border border-violet-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
            <span className="font-semibold text-slate-200">AI Workshop & Keynote</span>
          </div>
          <span className="text-[10px] font-mono text-indigo-300 px-1.5 py-0.5 rounded bg-indigo-950">Schedule</span>
        </div>
      </div>

      {/* Bottom Mockup Status */}
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-violet-500/10 z-10">
        <span className="flex items-center gap-1.5 text-slate-300">
          <Layers className="w-3.5 h-3.5 text-violet-400" />
          Event Coordination Engine
        </span>
        <span className="text-violet-400/80">Management UI</span>
      </div>
    </div>
  );
};

