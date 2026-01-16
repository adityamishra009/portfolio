import React from 'react'
import Navbar from './component/navbar/Navbar'
import Home from './component/Navbar/Home/Home'
import About from './component/Navbar/Home/About/About'
import Experience from './component/Navbar/Experience/Experience'
import Projects from './component/Navbar/Projects/Projects'
import Footer from './component/Navbar/Footer.jsx/Footer'


const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar></Navbar>
      <Home/>
      <About></About>
      <Experience/>
      <Projects></Projects>
      <Footer></Footer>
      
    </div>
  )
}

export default App
