import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Footer/>
    </>
  )
}

export default App
