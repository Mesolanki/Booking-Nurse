import React, { useEffect, useState } from 'react'
import AllServices from './Pages/AllServices'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LoginScreen from './components/LoginScreen'
import Footer from './components/Footer'
import AllNurse from './Pages/AllNurse'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import SingleNurse from "./components/SingleNurse"
import Error from './Pages/Error'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Appointment from './components/Appointment'
import HomePage from './Pages/HomePage'
import LiveNurses from './Pages/Functionality/Live Call/LiveNurses'
import LabBookingForm from './Pages/Functionality/LabBookingForm/LabBookingForm'
import EquipmentList from './Pages/Functionality/RentEquipment/EquipmentList'
import NurseRegistrationForm from './components/NurseRegistrationForm'
import Nursingsloat from './components/Nursingsloat'
import Daskbord from './Pages/Daskbord'
// import IllnessManagement from './Pages/Functionality/Illness_Management/IllnessManagement'
// import WoundCare from './Pages/Functionality/WoundCare/WoundCare'
// import PostSurgery from './Pages/Functionality/PostSurgery/PostSurgery'
// import PhysicalTherapy from './Pages/Functionality/PhysicalTherapy/PhysicalTherapy'
// import PallativeCare from './Pages/Functionality/PalliativeCare/PallativeCare'


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
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/nurs/:title" element={<AllNurse />} />
        <Route path="/about" element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/SingleNursefrom/:id" element={<SingleNurse />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Nursefrom" element={<NurseRegistrationForm/>} />
        <Route path='/services/medical-equipment-assistance' element={<EquipmentList />} />
        <Route path='/services/online-video-consultation' element={<LiveNurses />} />
        {/* <Route path='/services/chronic-illness-management' element={<IllnessManagement />} /> */}
        <Route path='/services/lab-test-assistance' element={<LabBookingForm />} />
        <Route path="/appointment/:id" element={<Appointment />} />
        <Route path="/Nursingsloat" element={<Nursingsloat/>} />
        <Route path="/Daskbord" element={<Daskbord/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

