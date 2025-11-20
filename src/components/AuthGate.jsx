import React, { useEffect } from 'react'
import { X, UserPlus, LogIn, User } from 'lucide-react'

export default function AuthGate({ open, onClose, onContinueGuest, onGoogle, onSignUp }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full sm:w-[420px] rounded-t-3xl sm:rounded-3xl bg-white p-6 sm:p-7 shadow-2xl animate-slide-up">
        <button className="absolute right-3 top-3 p-2 rounded-full hover:bg-black/5" onClick={onClose} aria-label="Close">
          <X className="h-5 w-5" />
        </button>
        <h3 className="text-xl font-extrabold text-black">Sign in to continue</h3>
        <p className="text-sm text-black/70 mt-1">Choose how you want to continue</p>

        <div className="mt-5 space-y-3">
          <button onClick={onContinueGuest} className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold hover:bg-black/5 active:scale-[0.99] transition">
            <User className="h-4 w-4" />
            Continue as Guest
          </button>
          <button onClick={onSignUp} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-3 text-sm font-semibold hover:bg-black/90 active:scale-[0.99] transition">
            <UserPlus className="h-4 w-4" />
            Create Account / Sign Up
          </button>
          <button onClick={onGoogle} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] text-white px-4 py-3 text-sm font-semibold hover:brightness-95 active:scale-[0.99] transition">
            <LogIn className="h-4 w-4" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  )
}
