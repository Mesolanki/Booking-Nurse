import React from "react";
import "./AllNurses.css";
import Hero from "../components/Hero";
// Assuming img1 is imported correctly from your assets
import { img1 } from "../assets/Images/image.JS";

export default function AllNurse() {
  const nurses = [
    {
      id: 1,
      name: "Dr. Aamir Collins",
      speciality: "Cardiologist",
      image: "https://img.freepik.com/free-photo/male-doctor-hospital_23-2148827774.jpg",
    },
    {
      id: 2,
      name: "Dr. Layla Anderson",
      speciality: "Obstetrician & Gynecologist",
      image: "https://img.freepik.com/free-photo/female-doctor-hospital_23-2148827786.jpg",
    },
    {
      id: 3,
      name: "Dr. Lisa Yamamoto",
      speciality: "Pediatrician",
      image: "https://img.freepik.com/free-photo/beautiful-female-doctor_23-2148827779.jpg",
    },
  ];

  return (
    <main className="nurse-page-wrapper">
      <Hero 
        title="Our Professional Medical Team"
        currentPage="Medical Team"
        bgImage={img1} 
      />

      <section className="nurse-intro-section">
        <h1 className="nurse-intro-title">Trusted Care, Genuine Compassion</h1>
        <p className="nurse-intro-text">
          Our team stands out not only for their clinical excellence but also for the warmth 
          and genuine support they provide to every patient, every day.
        </p>
      </section>

      <div className="nurse-grid">
        {nurses.map((nurse) => (
          <div key={nurse.id} className="nurse-card">
            <div className="nurse-image-container">
              <img
                src={nurse.image}
                alt={nurse.name}
                className="nurse-image"
              />
              <div className="nurse-info-overlay">
                <h3 className="nurse-name">{nurse.name}</h3>
                <p className="nurse-speciality">{nurse.speciality}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}