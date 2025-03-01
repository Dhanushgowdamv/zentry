import React from 'react'
import Hero from './component/hero'
import About from './component/about'
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About/>
    </main>
  )
}

export default App