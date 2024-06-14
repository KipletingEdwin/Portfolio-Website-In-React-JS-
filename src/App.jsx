import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}
