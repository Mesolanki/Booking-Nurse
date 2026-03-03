import React, { useEffect, useState } from 'react'
import AllServices from './Pages/AllServices'
import './App.css'
import LoginScreen from './components/LoginScreen'
import Footer from './components/Footer'
import AllNurse from './Pages/AllNurse'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <LoginScreen />;
  }
  return (
    <div>
      <Navbar />
     <Routes>
        <Route path="/" element={<AllServices />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/nurs" element={<AllNurse />} />
        <Route path="/about" element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="*" element={<Error />} />
     </Routes>

     <Footer />
    </div>
  )
}

export default App

