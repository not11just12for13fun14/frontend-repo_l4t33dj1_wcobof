import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ onChooseLocation }) {
  return (
    <section className="relative overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" />
      </div>

      {/* overlay gradient for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          <span className="text-white">Real</span>
          <span className="mx-2 bg-gradient-to-r from-brand-orange to-brand-yellow text-transparent bg-clip-text">Jamaican</span>
          <span className="text-white">Style</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/80 max-w-xl mx-auto">
          Fresh off the grill. Fast pickup or delivery. Order in a few taps.
        </p>
        <div className="mt-6">
          <button
            onClick={onChooseLocation}
            className="inline-flex items-center justify-center rounded-full bg-brand-red text-white px-6 py-3 text-base font-bold shadow-sm hover:bg-red-600 active:scale-[0.98] transition"
          >
            Choose Location
          </button>
        </div>
      </div>
    </section>
  )
}
