import { useState } from 'react'
import Header from './components/header'
import Intro from './components/intro';
import About from './components/about';
import Projects from './components/projects';
import Tools from './components/tools';
import Footer from './components/footer';

function App() {
  const[dark, setDark] = useState('light')

  function toggleDark(){
    setDark(dark === 'dark'?'light':'dark');
    console.log(dark)
}

  return (
    <div className={dark}>
      <div className='bg-white font-nunito lg:px-48 dark:bg-gray-700 dark:text-white'>
        <Header toggleDark={toggleDark} mode={dark}/>
        <Intro/>
        <About/>
        <Projects/>
        <Tools/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
