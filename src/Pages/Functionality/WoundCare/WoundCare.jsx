import React, { useEffect, useState } from 'react';
import { Video, Star, Calendar, ShieldCheck, ChevronLeft } from 'lucide-react';
import api from '../../../Service/Api';
import { useNavigate } from 'react-router-dom';
import Hero from '../../../components/Hero';

const WoundCare = () => {
    const [nurses, setNurses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchNurses();
    }, []);

    const fetchNurses = async () => {
        try {
            const res = await api.get("/nurses");
            // Filter to only show nurses in the "Wound Care" category
            const woundCareNurses = res.data.filter(nurse =>
                nurse.category === "Wound Care"
            );

            setNurses(woundCareNurses);
        } catch (error) {
            console.error("Error fetching nurses:", error);
        }
    };

    return (
        <section className="py-5 bg-white">
            <Hero title="Wound Care" currentPage="Wound Care" />

            <div className="container">
                {/* --- BACK BUTTON ADDED HERE --- */}
                <div className="d-flex justify-content-start mb-4">
                    <button
                        onClick={() => navigate('/services')}
                        className="btn btn-light d-flex align-items-center gap-2 px-4 py-2 rounded-pill shadow-sm border transition-all hover-up"
                        style={{ color: 'var(--deep-twilight)', fontWeight: '600' }}
                    >
                        <ChevronLeft size={20} /> Back to Services
                    </button>
                </div>

                <div className="row g-4">
                    {nurses.length > 0 ? (
                        nurses.map((nurse) => (
                            <div key={nurse.id} className="col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden animate-card">
                                    <div className="position-relative">
                                        <img src={nurse.image} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} alt={nurse.name} />
                                        <div className="position-absolute top-0 end-0 m-3 badge bg-white text-success shadow-sm">
                                            {nurse.status}
                                        </div>
                                    </div>

                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between small text-muted mb-2">
                                            <span className="fw-bold text-info">{nurse.category}</span>
                                            <div className="d-flex align-items-center gap-1">
                                                <Star size={16} fill="#FFD700" color="#FFD700" />
                                                <span className="fw-bold text-dark">{nurse.rating}</span>
                                            </div>
                                        </div>

                                        <h5 className="card-title fw-bold text-twilight">{nurse.name}</h5>
                                        <p className="card-text small text-secondary mb-1">{nurse.hospital}</p>
                                        <p className="small text-muted mb-4">{nurse.speciality}</p>

                                        <button className="btn btn-outline-primary w-100 rounded-pill py-2 fw-bold d-flex align-items-center justify-content-center gap-2" onClick={() => navigate(`/SingleNursefrom/${nurse.id}`)} >
                                            <Calendar size={18} /> Book Home Visit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-5">
                            <p className="text-muted">No specialists currently available in this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>

    );
};

export default WoundCare;