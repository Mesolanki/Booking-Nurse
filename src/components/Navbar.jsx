import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, Calendar, Settings, ChevronDown } from "lucide-react";

import "./Navbar.css";
import api from "../Service/Api";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    const activeEmail = sessionStorage.getItem("activeUser");
    if (activeEmail) {
      try {
        const res = await api.get("/PatientRegister");
        const userData = res.data.find(p => p.email === activeEmail);
        setProfile(userData);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    } else {
      setProfile(null);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    fetchUserProfile();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("storage", fetchUserProfile); // Listens for login/logout

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("storage", fetchUserProfile);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("activeUser");
    setProfile(null);
    navigate("/Login");
  };

  return (
    <header className={`pm-nav ${scrolled ? "pm-nav--scrolled" : ""}`}>
      <nav className="container py-3">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="pm-brand" to="/" onClick={() => setOpen(false)}>
            <div className="pm-logo" />
            <span>PORTEA</span>
          </Link>

          <div className="d-none d-lg-flex pm-links align-items-center">
            <Link to="/" className="pm-link">Home</Link>
            <Link className="pm-link" to="/services">All Services</Link>
            <Link className="pm-link" to="/about">About Us</Link>
            <Link className="pm-link" to="/contact">Contact</Link>

            {!profile ? (
              <Link className="pm-link pm-cta" to="/Login">Login</Link>
            ) : (
              <div className="dropdown ms-3">
                <button
                  className="btn d-flex align-items-center gap-2 border-0 bg-light rounded-pill px-2 py-1 text-twilight fw-bold dropdown-toggle shadow-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  {profile.photo ? (
                    <img
                      src={profile.photo}
                      alt="Profile"
                      className="rounded-circle"
                      style={{ width: '35px', height: '35px', objectFit: 'cover', border: '2px solid var(--bright-teal-blue)' }}
                    />
                  ) : (
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}>
                      <User size={18} />
                    </div>
                  )}
                  <span className="small pe-2">{profile.firstname}</span>
                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-4 p-2 mt-2">
                  <li className="px-3 py-2 border-bottom mb-2">
                    <p className="mb-0 small fw-bold text-twilight">{profile.firstname} {profile.lastname}</p>
                    <p className="mb-0 text-muted" style={{ fontSize: '11px' }}>{profile.email}</p>
                  </li>
                  <li><Link className="dropdown-item rounded-3 py-2 d-flex align-items-center gap-2" to="/update-profile"><Settings size={16} /> Update Profile</Link></li>
                  <li><Link className="dropdown-item rounded-3 py-2 d-flex align-items-center gap-2" to="/schedule"><Calendar size={16} /> Upcoming Schedule</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item rounded-3 py-2 text-danger d-flex align-items-center gap-2" onClick={handleLogout}><LogOut size={16} /> Logout</button></li>
                </ul>
              </div>
            )}
          </div>

          <div className={`pm-collapse d-lg-none ${open ? "open" : ""}`}>
            <div className="pm-mobile-card mt-3">
              <div className="d-grid gap-1">
                {/* Standard Links */}
                <Link className="pm-link" to="/" onClick={close}>Home</Link>
                <Link className="pm-link" to="/services" onClick={close}>All Services</Link>
                <Link className="pm-link" to="/about" onClick={close}>About Us</Link>
                <Link className="pm-link" to="/contact" onClick={close}>Contact</Link>

                <hr className="my-2 opacity-25" />

                {/* Conditional Auth Section for Mobile */}
                {!profile ? (
                  <Link className="pm-link pm-cta text-center" to="/Login" onClick={close}>
                    Login to Account
                  </Link>
                ) : (
                  <div className="p-2">
                    {/* User Info Header in Mobile */}
                    <div className="d-flex align-items-center gap-3 mb-3 p-2 bg-light rounded-3">
                      <img
                        src={profile.photo || "https://via.placeholder.com/40"}
                        alt="Profile"
                        className="rounded-circle"
                        style={{ width: '45px', height: '45px', objectFit: 'cover' }}
                      />
                      <div>
                        <p className="mb-0 fw-bold text-twilight" style={{ fontSize: '14px' }}>
                          {profile.firstname} {profile.lastname}
                        </p>
                        <p className="mb-0 text-muted" style={{ fontSize: '11px' }}>{profile.email}</p>
                      </div>
                    </div>

                    {/* Profile Actions */}
                    <Link className="pm-link w-100 d-flex align-items-center gap-2" to="/update-profile" onClick={close}>
                      <Settings size={18} /> Update Profile
                    </Link>
                    <Link className="pm-link w-100 d-flex align-items-center gap-2" to="/schedule" onClick={close}>
                      <Calendar size={18} /> Upcoming Schedule
                    </Link>

                    <button
                      className="btn btn-link pm-link w-100 d-flex align-items-center gap-2 text-danger border-0 mt-2"
                      onClick={() => { handleLogout(); close(); }}
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>        </div>
      </nav>
    </header>
  );
}