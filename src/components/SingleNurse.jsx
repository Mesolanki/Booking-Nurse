import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { img4 } from "../assets/Images/image";
import { useNavigate, useParams } from "react-router-dom";
import api from "../Service/Api";

export default function SingleNurse() {
  const navigation = useNavigate()
  const { id } = useParams()
  const [nursdata, setnursdata] = useState()
  useEffect(() => {
    displynurse()
  }, [])
  const displynurse = (async () => {
    const res = api.get("/nurses")
    const idfilter = (await res).data.find((p) => p.id === id)
    setnursdata(idfilter)
    console.log(nursdata.experience_years)
  })
  const handleappointement=(async(id)=>{
    const res=await api.get("PatientLogin")

    if( res.data.length > 0){
      navigation(`/appointment/${nursdata?.id}`)
      
    }else{
      navigation(`/Login`)
    }
  })
  return (
    <div className=" container ">
      <Hero
        title="Nurse Profile"
        currentPage="Nurse Profile"
        bgImage={img4}
      />
      {/* Doctor Profile Section */}
      <div className="row justify-content-center align-items-center bg-white rounded-3  p-4 mb-5">

        {/* Left: Image */}
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <img
            src={nursdata?.image}
            alt="Doctor"
            className="img-fluid rounded"
            style={{ height: "480px", objectFit: "cover", width: "100%" }}
          />
        </div>

        {/* Right: Text info */}
        <div className="col-12 col-md-6 text-primary">
          {/* Top label */}
          <span className="badge bg-primary mb-3">
            {nursdata?.category}
          </span>

          {/* Name */}
          <h1 className="h3 text-primary fw-bold mb-4">
            {nursdata?.name}
          </h1>

          {/* Info list */}
          <ul className="list-unstyled text-dark mb-4">
            <li><strong>education:</strong> {nursdata?.education}</li>
            <li><strong>Experience:</strong> {nursdata?.experience_years}</li>
            <li><strong>Languages:</strong> English – Arabic – Basic Japanese</li>
            <li><strong>Hospital:</strong> {nursdata?.hospital}</li>
            <li><strong>availability:</strong> {nursdata?.availability}</li>
          </ul>

          {/* Professional Summary */}
          <div>
            <h5 className="fw-semibold mb-2">Professional Summary</h5>
            <p className="text-secondary">
              {nursdata?.description}
            </p>
          </div>

          <button className="btn btn-primary mt-3" onClick={() => handleappointement(nursdata?.id)}>Book Appointment</button>
        </div>
      </div>
    </div>
  );
}
// navigation(`/appointment/${nursdata?.id}`)