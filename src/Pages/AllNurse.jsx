import React, { useEffect, useState } from "react";
import "./AllNurses.css";
import Hero from "../components/Hero";
// Assuming img1 is imported correctly from your assets
import { img1 } from "../assets/Images/image.JS";
import { useNavigate, useParams } from "react-router-dom";
import api from "../Service/Api";

export default function AllNurse() {
  const [nurses, setNurses] = useState([]);
  const {title}=useParams()
  const navigasion = useNavigate()
  useEffect(() => {
    nursesDaat();
  }, [])
 const nursesDaat = async () => {
  try {
    const res = await api.get("/nurses");

    const filternurse = res.data.filter(
      (t) =>
        t.category.toLowerCase() === title
    );
    
    setNurses(filternurse);
  } catch (error) {
    console.error("Error fetching nurses:", error);
  }
};
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
          <div key={nurse.id} className="nurse-card" onClick={() => navigasion(`/SingleNursefrom/${nurse.id}`)}>
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