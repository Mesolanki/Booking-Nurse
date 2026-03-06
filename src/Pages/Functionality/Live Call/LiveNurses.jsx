import React, { useEffect, useState } from 'react';
import { Video, Star, Calendar } from 'lucide-react';
import './LiveNurses.css';
import api from '../../../Service/Api';

const LiveNurses = () => {
    const [nurses, setNurses] = useState([]);

    useEffect(() => {
        fetchNurses();
    }, []);

    const fetchNurses = async () => {
        const res = await api.get("/nurses");
        // Filters for online and sorts video consultation specialists to the top
        const onlineNurses = res.data
            .filter(nurse => nurse.status.toLowerCase() === "online")
            .sort((a, b) => (a.category === "Online Video Consultation" ? -1 : 1));
        
        setNurses(onlineNurses);
    };

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5 animate-card">
                    <span className="badge rounded-pill bg-success mb-2 px-3 py-2">
                        <span className="online-pulse d-inline-block me-2">●</span> Live Consultation
                    </span>
                    <h2 className="display-5 fw-bold text-primary">Available Nurses Online</h2>
                </div>

                <div className="row g-4">
                    {nurses.map((nurse, index) => {
                        // Logic to check if they are a video specialist
                        const isVideoSpecialist = nurse.category === "Online Video Consultation";

                        return (
                            <div key={nurse.id} className={`col-md-6 col-lg-4 animate-card delay-${(index % 3) + 1}`}>
                                <div className={`card h-100 border-0 shadow-sm rounded-4 overflow-hidden ${isVideoSpecialist ? 'ring-video-specialist' : ''}`}>
                                    <div className="position-relative">
                                        <img src={nurse.image} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} alt={nurse.name} />
                                        
                                        {/* Status Badge */}
                                        <div className="position-absolute top-0 start-0 m-3">
                                            {isVideoSpecialist && (
                                                <span className="badge bg-primary shadow-sm d-flex align-items-center gap-1 mb-2">
                                                    <Video size={12} /> Video Specialist
                                                </span>
                                            )}
                                        </div>

                                        <div className="position-absolute top-0 end-0 m-3 badge bg-white text-success shadow-sm">
                                            Online Now
                                        </div>
                                    </div>

                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between small text-muted mb-2">
                                            <span className={isVideoSpecialist ? "fw-bold text-primary" : ""}>{nurse.category}</span>
                                            <div className="nurse-rating-container d-flex align-items-center gap-1">
                                                <Star size={16} fill="#FFD700" color="#FFD700" className="rating-star" />
                                                <span className="rating-score fw-bold text-dark">{nurse.rating}</span>
                                            </div>
                                        </div>

                                        <h5 className="card-title fw-bold">{nurse.name}</h5>
                                        <p className="card-text small text-secondary mb-4">{nurse.hospital}</p>
                                        
                                        {/* Dynamic Button based on Category */}
                                        <button className={`btn w-100 rounded-pill py-2 fw-bold d-flex align-items-center justify-content-center gap-2 transition-all ${isVideoSpecialist ? 'btn-primary shadow' : 'btn-outline-primary'}`}>
                                            {isVideoSpecialist ? (
                                                <><Video size={18} /> Start Video Call</>
                                            ) : (
                                                <><Calendar size={18} /> Book Home Visit</>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LiveNurses;