import React, { useState } from 'react';
import api from '../Service/Api';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Mail, Lock, MapPin, Camera, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false); // Success popup state
  const [data, setdata] = useState({
    firstname: "", lastname: "", contect: "", age: "",
    address: "", email: "", password: "", photo: ""
  });

  const handleinput = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({ ...prev, [name]: value }));
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Strict 500KB limit to prevent json-server 500 errors
    if (file.size > 500 * 1024) {
      alert("For local testing, the photo must be smaller than 500KB. Please choose a smaller image.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setdata((prev) => ({ ...prev, photo: reader.result }));
    };
    reader.readAsDataURL(file);
  };
  const handleclick = async (e) => {
    e.preventDefault();

    const finalPayload = {
      id: Date.now().toString(),
      ...data
    };

    console.log("Attempting to save:", finalPayload);

    try {
      const response = await api.post("/PatientRegister", finalPayload);

      if (response.status === 201 || response.status === 200) {
        setShowSuccess(true);
      }
    } catch (error) {
      console.error("Server Error Details:", error.response || error);

      if (error.response && error.response.status === 500) {
        alert("Internal Server Error (500): The data is too large for json-server. Try registering WITHOUT a photo.");
      } else {
        alert("Registration failed. Please check the console.");
      }
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light px-3 py-5">

      {showSuccess && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-content animate-card shadow-lg border-0 bg-white">
            <div className="text-center py-4 px-3">
              <div className="success-icon-wrapper mb-4 bg-success">
                <CheckCircle2 size={40} className="text-white" />
              </div>

              <h3 className="fw-bold mb-2 text-twilight">Registration Complete!</h3>
              <p className="text-muted mb-4 small px-2">
                Welcome to Portea, <b>{data.firstname}</b>. Your medical profile has been successfully created.
              </p>

              <div className="d-grid gap-2 mt-4">
                <button
                  className="btn py-3 rounded-pill fw-bold text-white shadow-sm"
                  style={{ backgroundColor: 'var(--bright-teal-blue)' }}
                  onClick={() => navigate('/Login')}
                >
                  Go to Login Screen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="auth-glass-card w-100 shadow-lg border-0 overflow-hidden mt-5" style={{ maxWidth: '700px' }}>
        <div style={{ background: 'linear-gradient(135deg, #03045e, #0077b6)' }} className="p-5 text-center text-white">
          <div className="d-inline-flex p-3 mb-3 bg-white bg-opacity-10 rounded-3">
            <User size={28} />
          </div>
          <h2 className="h3 fw-bold m-0">Create Account</h2>
          <p className="small text-blue-100 mt-2 opacity-75">Join Portea's Trusted Medical Network</p>
        </div>

        <div className="p-4 p-md-5">
          <form onSubmit={handleclick}>
            {/* ... keep your existing form fields here ... */}

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="small fw-bold text-uppercase tracking-wider text-muted mb-2 d-block">First Name</label>
                <div className="position-relative">
                  <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"><User size={18} /></span>
                  <input type="text" name="firstname" className="form-control py-3 ps-5 rounded-4 border-light bg-light" placeholder="John" onChange={handleinput} required />
                </div>
              </div>
              <div className="col-md-6">
                <label className="small fw-bold text-uppercase tracking-wider text-muted mb-2 d-block">Last Name</label>
                <input type="text" name="lastname" className="form-control py-3 px-4 rounded-4 border-light bg-light" placeholder="Doe" onChange={handleinput} required />
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="small fw-bold text-uppercase tracking-wider text-muted mb-2 d-block">Contact Number</label>
                <div className="position-relative">
                  <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"><Phone size={18} /></span>
                  <input type="number" name="contect" className="form-control py-3 ps-5 rounded-4 border-light bg-light" placeholder="1234567890" onChange={handleinput} required />
                </div>
              </div>
              <div className="col-md-6">
                <label className="small fw-bold text-uppercase tracking-wider text-muted mb-2 d-block">Age</label>
                <div className="position-relative">
                  <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"><Calendar size={18} /></span>
                  <input type="text" name="age" className="form-control py-3 ps-5 rounded-4 border-light bg-light" placeholder="Years" onChange={handleinput} required />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="small fw-bold text-uppercase tracking-wider text-muted mb-2 d-block">Email Address</label>
              <div className="position-relative">
                <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"><Mail size={18} /></span>
                <input type="email" name="email" className="form-control py-3 ps-5 rounded-4 border-light bg-light" placeholder="john.doe@example.com" onChange={handleinput} required />
              </div>
            </div>

            <div className="mb-4">
              <label className="small fw-bold text-uppercase tracking-wider text-muted mb-2 d-block">Password</label>
              <div className="position-relative">
                <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"><Lock size={18} /></span>
                <input type="password" name="password" className="form-control py-3 ps-5 rounded-4 border-light bg-light" placeholder="••••••••" onChange={handleinput} required />
              </div>
            </div>

            <div className="mb-4">
              <label className="small fw-bold text-uppercase tracking-wider text-muted mb-2 d-block">Full Address</label>
              <div className="position-relative">
                <span className="position-absolute top-0 start-0 mt-3 ms-3 text-secondary"><MapPin size={18} /></span>
                <textarea name="address" className="form-control py-3 ps-5 rounded-4 border-light bg-light" rows="2" placeholder="Street, City, Zip" onChange={handleinput} required></textarea>
              </div>
            </div>

            <div className="mb-5">
              <label className="small fw-bold text-uppercase tracking-wider text-muted mb-2 d-block">Profile Photo</label>
              <div className="position-relative">
                <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"><Camera size={18} /></span>
                <input type="file" className="form-control py-2 ps-5 rounded-4 border-light bg-light" accept="image/*" onChange={handleImage} />
              </div>
            </div>

            <button type="submit" style={{ backgroundColor: '#0077b6' }} className="btn btn-primary w-100 py-3 rounded-4 fw-bold shadow-sm border-0 d-flex align-items-center justify-content-center gap-2">
              Complete Registration <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}