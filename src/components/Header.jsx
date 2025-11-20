import React from 'react'
import { LogIn } from 'lucide-react'

export default function Header({ onSignIn }) {
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 sm:px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="FoodToGo JA" className="h-8 w-8 rounded-md border border-black/10 bg-white object-cover" />
        <span className="text-lg font-extrabold tracking-tight text-white">
          <span className="text-brand-red">Food</span>
          <span className="text-white">To</span>
          <span className="text-brand-green">Go</span>
          <span className="text-white"> JA</span>
        </span>
      </div>
      <button
        onClick={onSignIn}
        className="inline-flex items-center gap-2 rounded-full bg-white/90 text-black px-4 py-2 text-sm font-semibold shadow-sm hover:bg-white transition active:scale-[0.98]"
        aria-label="Sign in"
      >
        <LogIn className="h-4 w-4" />
        Sign In
      </button>
    </header>
  )
}
