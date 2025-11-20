import React from 'react'
import { Smartphone, Monitor } from 'lucide-react'

export default function ViewToggle({ mode, onToggle }) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="inline-flex items-center gap-1 rounded-full bg-black/70 backdrop-blur px-2 py-1 border border-white/10 shadow-sm">
        <button
          onClick={() => onToggle('mobile')}
          aria-label="Mobile preview"
          className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-semibold transition active:scale-[0.98] ${mode==='mobile' ? 'bg-brand-red text-white' : 'text-white/80 hover:text-white'}`}
        >
          <Smartphone className="h-4 w-4" />
          <span className="hidden sm:inline">Mobile</span>
        </button>
        <button
          onClick={() => onToggle('desktop')}
          aria-label="Desktop preview"
          className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-semibold transition active:scale-[0.98] ${mode==='desktop' ? 'bg-brand-green text-black' : 'text-white/80 hover:text-white'}`}
        >
          <Monitor className="h-4 w-4" />
          <span className="hidden sm:inline">Desktop</span>
        </button>
      </div>
    </div>
  )
}
