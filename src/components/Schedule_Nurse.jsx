import React, { useEffect, useState } from 'react'
import api from '../Service/Api'

export default function Schedule_Nurse() {

const [result,setResult]=useState([])

useEffect(()=>{
 fetchData()
},[])

const fetchData=async()=>{

 const nurseData= await api.get("/nurses")
 const appointmentData= await api.get("/appointmentdata")

 const matched = appointmentData.data.map((app)=>{

  const nurse = nurseData.data.find(
    (n)=> n.id === app.nurseid
  )

  return{
    ...app,
    nurseDetails:nurse
  }

})

 setResult(matched)
}

return (
<div>

{result.map((item)=>(
<div key={item.id}>

<h3>Patient : {item.patientName}</h3>

<p>Nurse : {item.nurseDetails?.name}</p>

<p>Mobile : {item.nurseDetails?.mobile}</p>

<p>Email : {item.nurseDetails?.email}</p>

<hr/>

</div>
))}

</div>
)
}