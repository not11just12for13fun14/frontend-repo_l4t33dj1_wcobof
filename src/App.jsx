import React, { useState, useMemo } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Locations from './components/Locations'
import ViewToggle from './components/ViewToggle'
import AuthGate from './components/AuthGate'

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem('view-mode') || 'mobile')
  const [authOpen, setAuthOpen] = useState(false)

  const onToggle = (m) => {
    setMode(m)
    localStorage.setItem('view-mode', m)
  }

  const containerClass = useMemo(() => (
    mode === 'mobile'
      ? 'max-w-[430px] mx-auto'
      : 'max-w-7xl mx-auto'
  ), [mode])

  return (
    <div className="min-h-screen bg-[linear-gradient(120deg,#0a0a0a,40%,#111111)] text-white">
      {/* subtle warmth background dots */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,106,0,0.07),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,178,0,0.06),transparent_45%)]" />

      <div className={`${containerClass} px-0 sm:px-0`}>
        <Header onSignIn={() => setAuthOpen(true)} />
        <Hero onChooseLocation={() => {
          const el = document.getElementById('locations')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }} />
        <div id="locations">
          <Locations />
        </div>
      </div>

      <ViewToggle mode={mode} onToggle={onToggle} />

      <AuthGate
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onContinueGuest={() => {
          localStorage.setItem('guest', 'true')
          setAuthOpen(false)
        }}
        onGoogle={() => {
          alert('Google Sign-In will be wired with Firebase in the next step.')
        }}
        onSignUp={() => {
          alert('Sign Up flow will be wired with Firebase in the next step.')
        }}
      />
    </div>
  )
}

export default App
