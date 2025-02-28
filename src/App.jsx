import React from 'react'
import Hero from './component/hero'
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className='z-0 min-h-screen'/>
    </main>
  )
}

export default App