

import React, { useState, useEffect } from 'react';
import api from '../Service/Api';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, ShieldCheck, Key } from 'lucide-react';
import './Auth.css';

export default function Login() {
  const [view, setView] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "", otp: "",type:"" });
  const [patients, setPatients] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await api.get("/PatientRegister");
        setPatients(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPatients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  console.log(patients)
  const handleLogin = async (e) => {
  e.preventDefault();

  const user = patients.find(
    p => p.email === loginData.email && p.password === loginData.password
  );


  if (!user) {
    setMessage("Invalid email or password");
    return;
  }

  if (user.type !== loginData.type) {
    setMessage("Invalid Radio type");
    return;
  }

  await api.post("PatientLogin", user);
  
if (loginData.type === "Nurse") {
    navigate("/Nursefrom")
    return;
  }
  
    navigate("/");

    
  
};
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
        <div className="auth-glass-card w-100 shadow-lg border-0 overflow-hidden" style={{ maxWidth: '450px' }}>
          <div style={{ background: 'linear-gradient(135deg, #03045e, #0077b6)' }} className="p-5 text-center text-white">
            <div className="d-inline-flex p-3 mb-3 bg-white bg-opacity-10 rounded-3">
              {view === "login" && <Lock size={28} />}
              {view === "otp" && <ShieldCheck size={28} />}
              {view === "forgot" && <Key size={28} />}
            </div>
            <h2 className="h3 fw-bold m-0">
              {view === "login" && "Welcome Back"}
              {view === "otp" && "Verify Identity"}
              {view === "forgot" && "Reset Password"}
            </h2>
          </div>

          <div className="p-4 p-md-5">
            {view === "login" && (
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="small fw-bold text-uppercase tracking-wider text-muted mb-2 d-block">Email Address</label>
                  <div className="position-relative">
                    <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"><Mail size={18} /></span>
                    <input type="email" name="email" className="form-control py-3 ps-5 rounded-4 border-light bg-light" placeholder="name@example.com" onChange={handleChange} required />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <label className="small fw-bold text-uppercase tracking-wider text-muted">Password</label>
                    <button type="button" onClick={() => setView("forgot")} className="btn btn-link p-0 text-decoration-none small fw-bold text-primary">Forgot?</button>
                  </div>
                  <div className="position-relative">
                    <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"><Lock size={18} /></span>
                    <input type="password" name="password" className="form-control py-3 ps-5 rounded-4 border-light bg-light" placeholder="••••••••" onChange={handleChange} required />
                  </div>
                </div>
          
                 <div className='mb-5'>
                <input type="radio" name='type' value="paisent" checked={loginData.type==="paisent"} onChange={handleChange} />paisent
                <input type="radio" name='type' value="Nurse" checked={loginData.type==="Nurse"}  onChange={handleChange} />Nurse
              </div>

                <button type="submit" style={{ backgroundColor: '#0077b6' }} className="btn btn-primary w-100 py-3 rounded-4 fw-bold shadow-sm border-0 d-flex align-items-center justify-content-center gap-2">
                  Sign In <ArrowRight size={18} />
                </button>
              </form>
            )}

            {view === "otp" && (
              <form onSubmit={(e) => { e.preventDefault(); setMessage("Login successful!"); }} className="text-center">
                <p className="small text-muted mb-4">Verification code sent to <b>{loginData.email}</b></p>
                <input type="text" maxLength="4" className="form-control text-center display-6 fw-bold py-3 mb-4 rounded-4 tracking-widest bg-light" placeholder="0000" required />
                <button type="submit" style={{ backgroundColor: '#0077b6' }} className="btn btn-primary w-100 py-3 rounded-4 fw-bold border-0 mb-3">Verify & Login</button>
                <button type="button" onClick={() => setView("login")} className="btn btn-link text-muted text-decoration-none small">Back to Login</button>
              </form>
            )}

            {view === "forgot" && (
              <form onSubmit={(e) => { e.preventDefault(); setMessage("Reset link sent."); }}>
                <p className="small text-center text-muted mb-4">Enter your email to receive a password reset link.</p>
                <input type="email" className="form-control py-3 rounded-4 bg-light border-light mb-4" placeholder="Registered Email" required />
                <button type="submit" style={{ backgroundColor: '#0077b6' }} className="btn btn-primary w-100 py-3 rounded-4 fw-bold border-0 mb-3">Send Reset Link</button>
                <button type="button" onClick={() => setView("login")} className="btn btn-link w-100 text-muted text-decoration-none small">Cancel</button>
              </form>
            )}

            {message && (
              <div className={`mt-4 p-3 rounded-4 text-center small fw-bold ${message.includes("Success") || message.includes("successful") ? "bg-success bg-opacity-10 text-success" : "bg-danger bg-opacity-10 text-danger"}`}>
                {message}
              </div>
            )}

            <div className="mt-4 text-center">
              <p className="small text-muted m-0">
                Don't have an account? <a href="/Register" className="text-primary fw-bold text-decoration-none ms-1">Create Account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
