import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, ChevronLeft, ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
import './LabBookingForm.css';
import api from '../../../Service/Api';

const LabBookingForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedNurse } = location.state || {};

    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Added loading state
    const [formData, setFormData] = useState({
        testType: '',
        patientName: '',
        patientAge: '',
        gender: 'Male',
        houseNo: '',
        society: '',
        area: '',
        bookingDate: '',
        timeSlot: '',
        isFasting: false
    });

    const getFormattedDate = (daysFromNow = 0) => {
        const date = new Date();
        date.setDate(date.getDate() + daysFromNow);
        return date.toISOString().split('T')[0];
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === "patientAge" && (value < 0 || value > 120)) return;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if (isSubmitting) return; // Prevent double submission

        setIsSubmitting(true);

        const bookingData = {
            id: Date.now().toString(),
            ...formData,
            technicianName: selectedNurse?.name || "Expert Technician",
            status: "Pending",
            amount: 500,
            bookedAt: new Date().toISOString()
        };

        try {
            await api.post("/lab_bookings", bookingData);
            
            setShowSuccess(true);
            setIsSubmitting(false);
        } catch (error) {
            console.error("Submission Error:", error);
            setIsSubmitting(false);
            alert("Database Error: Check if your json-server is running.");
        }
    };

    return (
        <div className="lab-form-container py-5 position-relative bg-white">

            {/* PERSISTENT SUCCESS POPUP */}
            {showSuccess && (
                <div className="custom-modal-overlay">
                    <div className="custom-modal-content animate-card shadow-lg border-0 bg-white">
                        <div className="text-center py-4">
                            <div className="success-icon-wrapper mb-4">
                                <CheckCircle2 size={45} className="text-white" />
                            </div>

                            <h3 className="fw-bold mb-2 text-twilight">Request Received!</h3>
                            <p className="text-muted mb-4 px-3">
                                Your appointment for <strong>{formData.testType}</strong> has been logged. Please proceed to finalize.
                            </p>

                            <div className="p-3 rounded-4 mb-4 border text-start" style={{ backgroundColor: 'var(--light-cyan)' }}>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="small text-muted">Service Fee:</span>
                                    <span className="fw-bold text-twilight">₹500</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="small text-muted">Patient:</span>
                                    <span className="fw-bold text-twilight" style={{ fontSize: '0.85rem' }}>{formData.patientName}</span>
                                </div>
                            </div>

                            <div className="d-grid gap-2 px-3">
                                <button
                                    type="button"
                                    className="btn py-3 rounded-pill fw-bold shadow-sm"
                                    style={{ backgroundColor: 'var(--deep-twilight)', color: 'white' }}
                                    onClick={() => navigate('/paymentpage', { state: { booking: formData } })}
                                >
                                    Proceed to Payment
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-link text-decoration-none text-muted small mt-2"
                                    onClick={() => navigate('/services')}
                                >
                                    View Other Services
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 d-flex justify-content-between align-items-center">
                        <button type="button" onClick={() => navigate(-1)} className="btn btn-light rounded-circle p-2 shadow-sm">
                            <ChevronLeft size={24} style={{ color: 'var(--deep-twilight)' }} />
                        </button>
                        <div className="text-center">
                            <h2 className="fw-bold mb-0" style={{ color: 'var(--deep-twilight)' }}>Lab Assistance</h2>
                            <p className="text-muted small">Schedule your home sample collection</p>
                        </div>
                        <div style={{ width: '40px' }}></div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <form className="bg-white" onSubmit={handleSubmit}>
                            {/* Section 1: Test & Fasting */}
                            <div className="row g-4 mb-5 align-items-end">
                                <div className="col-md-7">
                                    <label className="fw-bold small mb-2 text-twilight">Select Lab Test</label>
                                    <select className="form-select input-custom" name="testType" required value={formData.testType} onChange={handleChange}>
                                        <option value="">Choose a test...</option>
                                        <option value="Complete Blood Count (CBC)">Complete Blood Count (CBC)</option>
                                        <option value="Blood Sugar / HbA1c">Blood Sugar / HbA1c</option>
                                        <option value="Thyroid Profile">Thyroid Profile</option>
                                    </select>
                                </div>
                                <div className="col-md-5">
                                    <div className={`p-3 border rounded-4 d-flex align-items-center justify-content-between transition-all ${formData.isFasting ? 'fasting-active' : 'bg-light'}`}>
                                        <div className="d-flex align-items-center gap-3">
                                            <Info size={18} className="text-info" />
                                            <div className="d-flex flex-column">
                                                <span className="fw-bold mb-0" style={{ fontSize: '0.85rem' }}>Requires Fasting</span>
                                                <span className="text-muted" style={{ fontSize: '0.65rem' }}>8-12 hours no food</span>
                                            </div>
                                        </div>
                                        <div className="form-check form-switch m-0 ms-2">
                                            <input className="form-check-input" type="checkbox" name="isFasting" checked={formData.isFasting} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Patient Info */}
                            <div className="row g-4 mb-5">
                                <div className="col-md-12">
                                    <label className="fw-bold small mb-2 text-twilight">Full Name</label>
                                    <input type="text" className="form-control input-custom" name="patientName" placeholder="Enter patient name" required value={formData.patientName} onChange={handleChange} />
                                </div>
                                <div className="col-md-4">
                                    <label className="fw-bold small mb-2 text-twilight">Age</label>
                                    <input type="number" className="form-control input-custom" name="patientAge" placeholder="Age" required value={formData.patientAge} onChange={handleChange} />
                                </div>
                                <div className="col-md-8">
                                    <label className="fw-bold small mb-2 text-twilight">Gender</label>
                                    <div className="d-flex gap-2">
                                        {['Male', 'Female', 'Other'].map((g) => (
                                            <button
                                                key={g} 
                                                type="button" // CRITICAL: Ensures buttons don't submit the form
                                                className={`btn flex-fill py-2 rounded-3 border transition-all ${formData.gender === g ? 'shadow-sm text-white' : 'bg-light text-muted'}`}
                                                style={{ 
                                                    backgroundColor: formData.gender === g ? 'var(--deep-twilight)' : '', 
                                                    borderColor: formData.gender === g ? 'var(--deep-twilight)' : '#dee2e6' 
                                                }}
                                                onClick={() => setFormData({ ...formData, gender: g })}
                                            > {g} </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Address */}
                            <div className="mb-5">
                                <label className="fw-bold small mb-3 text-twilight d-flex align-items-center gap-2">
                                    <MapPin size={16} className="text-danger" /> Collection Address
                                </label>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control input-custom" name="houseNo" placeholder="House/Flat No." required value={formData.houseNo} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control input-custom" name="society" placeholder="Society/Building Name" required value={formData.society} onChange={handleChange} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control input-custom" name="area" placeholder="Area, City and Pincode" required value={formData.area} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Schedule */}
                            <div className="row g-4 mb-5">
                                <div className="col-md-6">
                                    <label className="fw-bold small mb-2 text-twilight">Collection Date</label>
                                    <input type="date" className="form-control input-custom" name="bookingDate" required min={getFormattedDate(0)} max={getFormattedDate(3)} value={formData.bookingDate} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label className="fw-bold small mb-2 text-twilight">Preferred Slot</label>
                                    <select className="form-select input-custom" name="timeSlot" required value={formData.timeSlot} onChange={handleChange}>
                                        <option value="">Select Time</option>
                                        <option>06:00 AM - 08:00 AM</option>
                                        <option>08:00 AM - 10:00 AM</option>
                                    </select>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting} // Disable while loading
                                className="btn w-100 py-3 rounded-4 fw-bold shadow-sm" 
                                style={{ backgroundColor: 'var(--deep-twilight)', color: 'white' }}
                            >
                                {isSubmitting ? 'Processing...' : 'Confirm Booking Request'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LabBookingForm;