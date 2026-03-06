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
import IllnessManagement from './Pages/Functionality/Illness_Management/IllnessManagement'
import WoundCare from './Pages/Functionality/WoundCare/WoundCare'
import PostSurgery from './Pages/Functionality/PostSurgery/PostSurgery'
import PhysicalTherapy from './Pages/Functionality/PhysicalTherapy/PhysicalTherapy'
import PallativeCare from './Pages/Functionality/PalliativeCare/PallativeCare'


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
        {/* <Route path="/Nursefrom" element={<NurseRegistrationForm/>} /> */}
        <Route path='/services/medical-equipment-assistance' element={<EquipmentList />} />
        <Route path='/services/online-video-consultation' element={<LiveNurses />} />
        <Route path='/services/chronic-illness-management' element={<IllnessManagement />} />
        <Route path='/services/lab-test-assistance' element={<LabBookingForm />} />
        <Route path="/book-nurse/appointment" element={<Appointment />} />
        <Route path='/services/post-surgery' element={<PostSurgery />} />
        <Route path='/services/wound-care' element={<WoundCare />} />
        <Route path='/services/palliative-care' element={<PallativeCare />} />
        <Route path='/services/physical-therapy-assistance' element={<PhysicalTherapy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

