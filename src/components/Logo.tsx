import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'badge-only';
  lightText?: boolean;
}

export function Logo({ className = '', variant = 'full', lightText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Real storefront square green badge */}
      <div className="relative flex flex-col justify-between p-1.5 w-11 h-11 bg-emerald-600 rounded-lg shadow-sm text-white shrink-0 font-black tracking-tight leading-none text-center border border-emerald-500">
        <span className="text-[10px] uppercase font-extrabold tracking-wider">WATT</span>
        <div className="flex justify-center -my-0.5">
          <svg
            viewBox="0 0 24 16"
            className="w-5 h-3 text-white fill-none stroke-current stroke-2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="5" cy="11" r="4" />
            <circle cx="19" cy="11" r="4" />
            <path d="M5 11l4-5h4l3 5M9 6V3h3M13 11V7" />
          </svg>
        </div>
        <span className="text-[10px] uppercase font-extrabold tracking-wider">RAD</span>
      </div>

      {variant !== 'badge-only' && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span
              className={`text-xl font-extrabold tracking-tight ${
                lightText ? 'text-white' : 'text-slate-900'
              }`}
            >
              Watt<span className="text-emerald-600">Rad</span>
            </span>
            <span
              className={`text-xs font-semibold uppercase tracking-widest ${
                lightText ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              Emden
            </span>
          </div>
          {variant === 'full' && (
            <span
              className={`text-[11px] font-medium tracking-normal ${
                lightText ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Fahrradwerkstatt & Service • Brückstraße 65
            </span>
          )}
        </div>
      )}
    </div>
  );
}
