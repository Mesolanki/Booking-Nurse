import React, { useEffect, useState } from 'react';
import './Appointment.css';
import { Upload, FileText } from 'lucide-react';

const Appointment = () => {
    const [bookingType, setBookingType] = useState('hourly');
    const [dateLimits, setDateLimits] = useState({ min: "", max: "" });
    const [fileName, setFileName] = useState("No file chosen");

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };
    useEffect(() => {
        const today = new Date();
        const minDate = today.toISOString().split('T')[0];
        const max = new Date();
        max.setDate(today.getDate() + 30);
        const maxDate = max.toISOString().split('T')[0];
        setDateLimits({ min: minDate, max: maxDate });
    }, []);
    return (
        <div className="appointment-card">
            <h2 className="form-title">Book Your Care</h2>
            <form action="">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" placeholder="Enter Patient Name" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="number" className="form-control" placeholder="Contact Number" required />
                    </div>
                </div>

                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter Email" />
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Address" required />
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Select Date</label>
                        <input
                            type="date"
                            className="form-control"
                            min={dateLimits.min}
                            max={dateLimits.max}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Booking Type</label>
                        <select
                            className="form-control"
                            value={bookingType}
                            onChange={(e) => setBookingType(e.target.value)}
                        >
                            <option value="hourly">Hourly (Specific Time)</option>
                            <option value="full-day">Full Day (24 Hours Care)</option>
                        </select>
                    </div>
                </div>

                {/* Show Timing only if Booking Type is Hourly */}
                {bookingType === 'hourly' && (
                    <div className="mb-3 animate-fade-in">
                        <label className="form-label">Select Time Slot</label>
                        <select name="time" id="time" className="form-control">
                            <option value="">Choose Time</option>
                            <option value="09:00">09:00 AM - 10:00 AM</option>
                            <option value="10:00">10:00 AM - 11:00 AM</option>
                            <option value="11:00">11:00 AM - 12:00 PM</option>
                            <option value="14:00">02:00 PM - 03:00 PM</option>
                            <option value="15:00">03:00 PM - 04:00 PM</option>
                            <option value="16:00">04:00 PM - 05:00 PM</option>
                        </select>
                    </div>
                )}


                <div className="mb-3">
                    <label className="form-label">Upload Doctor's Receipt / Prescription</label>
                    <div className="file-upload-wrapper">
                        <label htmlFor="receipt-upload" className="file-upload-label">
                            <Upload size={18} />
                            <span>{fileName}</span>
                        </label>
                        <input
                            id="receipt-upload"
                            type="file"
                            className="file-input-hidden"
                            accept="image/*,.pdf"
                            onChange={handleFileChange}
                        />
                    </div>
                    <small className="text-muted">Max file size: 5MB (JPG, PNG, PDF)</small>
                </div>
                <div className='mb-3'>
                    <textarea className="form-control" rows="3" placeholder="Symptoms or Additional Notes"></textarea>
                </div>


                <button type="submit" className="pm-btn-primary w-100 mt-2">
                    Confirm Appointment
                </button>
            </form>
        </div>
    );
}

export default Appointment;