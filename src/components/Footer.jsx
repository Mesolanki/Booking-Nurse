import React from "react";
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const aboutLinks = [
    "Our Team", "Doctor Speak", "Press & Media", "Careers", "Partner With Us", "FAQs",
  ];

  const serviceLinks = [
    "Physiotherapy", "Nursing Care", "Medical Equipment", "Lab Tests", "Counselling",
  ];

  return (
    <footer className="pm-footer">
      <div className="container">
        <div className="row g-5">
          {/* Quick Links Group */}
          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-6">
                <h4 className="f-title">Company</h4>
                <ul className="f-list">
                  {aboutLinks.map((link, i) => (
                    <li key={i}><a className="f-link" href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div className="col-6">
                <h4 className="f-title">Services</h4>
                <ul className="f-list">
                  {serviceLinks.map((link, i) => (
                    <li key={i}><a className="f-link" href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Programs Section */}
          <div className="col-12 col-md-3">
            <h4 className="f-title">Specialized Care</h4>
            <ul className="f-list">
              <li><a className="f-link" href="#">Eldercare for Parents</a></li>
              <li><a className="f-link" href="#">Post-Surgery Recovery</a></li>
              <li><a className="f-link" href="#">Chronic Management</a></li>
              <li><a className="f-link" href="#">Home Physiotherapy</a></li>
            </ul>
          </div>

          {/* Contact Support Section */}
          <div className="col-12 col-md-5">
            <h4 className="f-title">Support Center</h4>
            <div className="contact-block">
              <div className="contact-head">Emergency & Bookings</div>
              <p className="contact-line"><b>Phone:</b> 1800 121 2323</p>
              <p className="contact-line"><b>Email:</b> support@medicalcare.com</p>
              
              <div className="social-row">
                <a className="social" href="#"><Facebook /></a>
                <a className="social" href="#"><Twitter /></a>
                <a className="social" href="#"><Instagram /></a>
                <a className="social" href="#"><Linkedin /></a>
                <a className="social" href="#"><Youtube /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />
        <p className="copyright">
          &copy; 2026 MedicalCare Services. Providing quality healthcare at home.
        </p>
      </div>
    </footer>
  );
}