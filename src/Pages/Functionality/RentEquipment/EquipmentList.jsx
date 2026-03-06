import React, { useEffect, useState } from 'react';
import { ShoppingCart, CheckCircle, ShieldCheck, Truck, Clock, CreditCard, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import api from '../../../Service/Api';
import Hero from '../../../components/Hero';

const EquipmentList = () => {
    const [equipment, setEquipment] = useState([]);
    const navigate = useNavigate(); // Initialize navigate hook

    useEffect(() => {
        api.get("/equipment").then(res => setEquipment(res.data));
    }, []);

    const benefits = [
        { icon: <CreditCard />, title: "Cost Effective", desc: "Pay only for what you use." },
        { icon: <ShieldCheck />, title: "Sanitized Gear", desc: "100% clinically cleaned." },
        { icon: <Truck />, title: "Quick Setup", desc: "Free home installation." },
        { icon: <Clock />, title: "Flexible Rent", desc: "Weekly or monthly plans." }
    ];

    return (
        <div className="bg-white">
            <Hero title="Medical Equipment Assistance" currentPage="Rent-Equipment" />

            <section className="py-5 bg-white">
                <div className="container">
                    {/* Benefits Grid */}
                    <div className="row g-4 mb-5">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="col-md-3 col-sm-6">
                                <div className="d-flex align-items-center gap-3 p-4 rounded-4 border border-light shadow-sm h-100 bg-white hover-up">
                                    <div className="p-3 rounded-3 flex-shrink-0" style={{ backgroundColor: 'var(--light-cyan)', color: 'var(--bright-teal-blue)' }}>
                                        {React.cloneElement(benefit.icon, { size: 24 })}
                                    </div>
                                    <div className="overflow-hidden">
                                        <h6 className="fw-bold text-twilight mb-1 text-nowrap" style={{ fontSize: '0.9rem' }}>{benefit.title}</h6>
                                        <p className="text-muted mb-0 lh-sm" style={{ fontSize: '0.8rem' }}>{benefit.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* NEW: Back to Services Button Area */}
                    <div className="d-flex justify-content-start mb-4">
                        <button 
                            onClick={() => navigate('/services')} 
                            className="btn btn-light d-flex align-items-center gap-2 px-4 py-2 rounded-pill shadow-sm border transition-all hover-up"
                            style={{ color: 'var(--deep-twilight)', fontWeight: '600' }}
                        >
                            <ChevronLeft size={20} /> Back to Services
                        </button>
                    </div>

                    <hr className="opacity-25" />

                    {/* Equipment Grid Section */}
                    <div className="mt-5">
                        <div className="mb-5">
                            <h3 className="fw-bold text-twilight">Available for Rent</h3>
                            <p className="text-muted small">Quality assured hospital-grade equipment for home recovery.</p>
                        </div>

                        <div className="row g-4">
                            {equipment.map((item) => (
                                <div key={item.id} className="col-md-4">
                                    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white animate-card border-hover">
                                        <div className="position-relative">
                                            <img src={item.image} className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} alt={item.name} />
                                            <div className="position-absolute top-0 end-0 m-3">
                                                <span className="badge bg-white text-success shadow-sm border px-2 py-1 d-flex align-items-center gap-1">
                                                    <ShieldCheck size={12} /> Verified
                                                </span>
                                            </div>
                                        </div>

                                        <div className="card-body p-4 d-flex flex-column">
                                            <h5 className="fw-bold text-twilight mb-1">{item.name}</h5>
                                            <p className="small text-muted mb-3" style={{ fontSize: '0.85rem' }}>{item.description}</p>
                                            
                                            <div className="mb-4 flex-grow-1">
                                                {item.features.map((f, i) => (
                                                    <div key={i} className="small d-flex align-items-center gap-2 text-secondary mb-2">
                                                        <CheckCircle size={14} className="text-info flex-shrink-0" /> 
                                                        <span style={{ fontSize: '0.8rem' }}>{f}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                                                <div>
                                                    <span className="h5 fw-bold text-twilight mb-0">₹{item.price_per_month}</span>
                                                    <small className="text-muted d-block" style={{ fontSize: '0.65rem', fontWeight: '700' }}>PER MONTH</small>
                                                </div>
                                                <button className="btn btn-surf rounded-pill px-4 py-2 fw-bold shadow-sm">
                                                    Rent Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EquipmentList;