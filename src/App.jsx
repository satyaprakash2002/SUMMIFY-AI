import React from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <div className="">
        <main>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app">
            <Hero />
            <Demo />
          </div>
        </main>
        <div className="bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App