import React, { useState } from 'react'
import Nurseprofile from '../components/Nurseprofile'
import Schedule_Nurse from '../components/Schedule_Nurse'

export default function Daskbord() {
   const [activeSection, setActiveSection] = useState("profile")
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-4'>
               <div className="sidebar text-white p-3">
      <h3 className="mb-4">Nurse</h3>

      <ul className="nav flex-column">
        <li className="nav-item" onClick={()=>setActiveSection("profile")}>profile</li>
        <li className="nav-item" onClick={()=>setActiveSection("Patient")}>Patient </li>
        <li className="nav-item " onClick={()=>setActiveSection("schedule")}>schedule</li>
        <li className="nav-item">history</li>
        
        <li className="nav-item">Settings</li>
      </ul>
    </div>
            </div>
            {
              activeSection ==="profile" &&
            <div className='col-8'>
                <Nurseprofile/>
            </div>
            }
            {
              activeSection ==="schedule" &&
            <div className='col-8'>
                <Schedule_Nurse/>
            </div>
            }
        </div>
        <style>
        {
          `
          body{
background:#f5f7fb;
}

.sidebar{
width:240px;
min-height:100vh;
background:linear-gradient(180deg,#5f7cff,#7f9cff);
}

.sidebar .nav-item{
padding:10px 0;
cursor:pointer;
}

.sidebar .nav-item:hover{
opacity:0.8;
}

.main-content{
flex:1;
}

.profile-img{
width:90px;
height:90px;
border-radius:50%;
object-fit:cover;
}

.card{
border:none;
border-radius:12px;
box-shadow:0 2px 10px rgba(0,0,0,0.05);
}
          `
        }
      </style>
    </div>
  )
}
