import React from 'react'
import Hero from './component/hero'
import About from './component/about'
import Navbar from './component/Navbar'
import Features from './component/Features'
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden
    bg-gray-100">
      <Navbar/>
      <Hero />
      <About/>
      <Features/>
    </main>
  )
}

export default App