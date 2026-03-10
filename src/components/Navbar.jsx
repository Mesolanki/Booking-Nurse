import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, Calendar, Settings } from "lucide-react";
import "./Navbar.css";
import api from "../Service/Api";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profile, setProfile] = useState(null);

  const navigate = useNavigate();

  const close = () => setOpen(false);
  
 useEffect(() => {
   fetchUserProfile();
  });

  const fetchUserProfile = async () => {
      const res = await api.get("/PatientLogin");
      if (res.data.length > 0) {
        setProfile(res.data[0]);
      } else {
        setProfile(null);
      }
  };


 

  const handleLogout = async () => {
      if (profile?.id) {
        await api.delete(`/PatientLogin/${profile.id}`);
      }
      setProfile(null);
      navigate("/Login");
  };

  return (

    <header className={`pm-nav ${scrolled ? "pm-nav--scrolled" : ""}`}>
      <nav className="container py-3">

        <div className="d-flex align-items-center justify-content-between">


          <Link className="pm-brand" to="/" onClick={close}>
            <div className="pm-logo" />
            <span>PORTEA</span>
          </Link>


          <div className="d-none d-lg-flex pm-links align-items-center">

            <Link to="/" className="pm-link">Home</Link>
            
            {(!profile || profile?.type === "paisent") && (
              <Link to="/services" className="pm-link">
                All Services
              </Link>
            )}
            <Link to="/about" className="pm-link">About Us</Link>
            <Link to="/contact" className="pm-link">Contact</Link>

            {!profile ? (

              <Link className="pm-link pm-cta" to="/Login">Login</Link>

            ) : (

              <div className="dropdown ms-3">

                <button
                  className="btn d-flex align-items-center gap-2 border-0 bg-light rounded-pill px-2 py-1 fw-bold dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >

                  {profile.photo ? (
                    <img
                      src={profile.photo}
                      alt="Profile"
                      className="rounded-circle"
                      style={{ width: 35, height: 35, objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: 35, height: 35 }}
                    >
                      <User size={18} />
                    </div>
                  )}

                  <span className="small pe-2">{profile.firstname}</span>

                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-3">

                  <li className="px-3 py-2 border-bottom">
                    <p className="mb-0 fw-bold">
                      {profile.firstname} {profile.lastname}
                    </p>
                    <small className="text-muted">{profile.email}</small>
                    <small className="text-muted">{profile.type}</small>
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex gap-2" to="/update-profile">
                      <Settings size={16} /> Update Profile
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex gap-2" to="/schedule">
                      <Calendar size={16} /> Upcoming Schedule
                    </Link>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li>
                    <button
                      className="dropdown-item text-danger d-flex gap-2"
                      onClick={handleLogout}
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </li>

                </ul>

              </div>

            )}

          </div>

          <button
            className={`d-lg-none pm-toggler ${open ? "pm-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            type="button"
          >

            <div className="pm-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

          </button>

        </div>


        <div className={`pm-collapse d-lg-none ${open ? "open" : ""}`}>

          <div className="pm-mobile-card mt-3">

            <div className="d-grid gap-2">

              <Link className="pm-link" to="/" onClick={close}>Home</Link>
               {(!profile || profile?.type === "paisent") && (
               <Link className="pm-link" to="/services" onClick={close}>All Services</Link>
            )}
              <Link className="pm-link" to="/about" onClick={close}>About Us</Link>
              <Link className="pm-link" to="/contact" onClick={close}>Contact</Link>
              <hr />

              {!profile ? (

                <Link
                  className="pm-link pm-cta text-center"
                  to="/Login"
                  onClick={close}
                >
                  Login
                </Link>

              ) : (

                <div>

                  <div className="d-flex align-items-center gap-3 p-2 bg-light rounded mb-2">

                    <img
                      src={profile.photo}
                      alt="profile"
                      className="rounded-circle"
                      style={{ width: 40, height: 40 }}
                    />

                    <div>
                      <p className="mb-0 fw-bold">
                        {profile.firstname} {profile.lastname}
                      </p>
                      <small className="text-muted">{profile.email}</small>
                    </div>

                  </div>

                  <Link
                    className="pm-link d-flex gap-2"
                    to="/update-profile"
                    onClick={close}
                  >
                    <Settings size={18} /> Update Profile
                  </Link>

                  <Link
                    className="pm-link d-flex gap-2"
                    to="/schedule"
                    onClick={close}
                  >
                    <Calendar size={18} /> Upcoming Schedule
                  </Link>

                  <button
                    className="pm-link text-danger border-0 bg-transparent d-flex gap-2"
                    onClick={() => {
                      handleLogout();
                      close();
                    }}
                  >
                    <LogOut size={18} /> Logout
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </nav>
    </header>

  );
}