import React from 'react';
import {
    Bandage,
    Activity,
    Stethoscope,
    Pill,
    Accessibility,
    HeartHandshake,
    TestTube,
    Video
} from 'lucide-react';
import './AllServices.css';
import Hero from '../components/Hero';

const AllServices = () => {
    const services = [
        { id: 1, title: 'Wound Care', icon: <Bandage /> },
        { id: 2, title: 'Post-surgery', icon: <Activity /> },
        { id: 3, title: 'Chronic Illness Management', icon: <Stethoscope /> },
        { id: 4, title: 'Medication Management', icon: <Pill /> },
        { id: 5, title: 'Physical Therapy Assistance', icon: <Accessibility /> },
        { id: 6, title: 'Palliative Care', icon: <HeartHandshake /> },
        { id: 7, title: 'Lab Test Assistance', icon: <TestTube /> },
        { id: 8, title: 'Telehealth Support', icon: <Video /> },
    ];

    return (
        <main className="page-wrapper">
            <Hero
                title="Our Services"
                currentPage="Services"
                bgImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
            />            <div className="container">
                <section className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="icon-holder">
                                <div className="blob-shape"></div>
                                <div className="icon-content">{service.icon}</div>
                            </div>
                            <h2 className="card-title">{service.title}</h2>
                            <p className="card-desc">
                                Providing professional care and support tailored to your specific medical needs for a faster recovery.
                            </p>
                            <button className="explore-link">Explore More</button>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default AllServices;