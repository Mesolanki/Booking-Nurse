
import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import api from '../Service/Api';

const iconMap = {
    Bandage: Bandage,
    Activity: Activity,
    Stethoscope: Stethoscope,
    Pill: Pill,
    Accessibility: Accessibility,
    HeartHandshake: HeartHandshake,
    TestTube: TestTube,
    Video: Video
};

const AllServices = () => {
    const [services, setServices] = useState([]); // Initialize as empty array
    const navigate = useNavigate();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await api.get("/services");
                setServices(res.data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };
        fetchServices();
    }, []);

    return (
        <main className="page-wrapper">
            <Hero
                title="Our Services"
                currentPage="Services"
                bgImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
            />
            <div className="container">
                <section className="services-grid">
                    {services.map((service) => {
                        // 2. Dynamically pick the right icon component
                        // Assumes service.icon matches a key in iconMap (e.g. "Pill")
                        const IconComponent = iconMap[service.icon] || Activity; 

                        return (
                            <div key={service.id} className="service-card">
                                <div className="icon-holder">
                                    <div className="blob-shape"></div>
                                    <div className="icon-content">
                                        <IconComponent size={32} />
                                    </div>
                                </div>
                                
                                <h2 className="card-title">{service.title}</h2>
                                
                                <p className="card-desc">
                                    {service.description || "Providing professional care tailored to your needs."}
                                </p>
                                
                                <button 
                                    className="explore-link" 
                                  onClick={() =>
  navigate(`/nurs/${service.title.toLowerCase()}`)
}
                                >
                                    Explore More
                                  
                                </button>
                            </div>
                        );
                    })}
                </section>
            </div>
        </main>
    );
};

export default AllServices;