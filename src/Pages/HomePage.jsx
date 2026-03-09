import React from "react";
import {
  FaUserNurse,
  FaHandsHelping,
  FaAmbulance,
  FaHeartbeat,
  FaStethoscope,
  FaHospitalUser,
  FaBaby,
  FaPhoneAlt,
  FaLeaf,
  FaAppleAlt,
  FaBuilding,
  FaStar,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const heroStats = [
  {
    title: "5 Star Clients Rating",
    desc: "Caring home care with trusted support.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&q=80",
  },
];

const careServices = [
  { title: "Nursing\nCare", icon: FaUserNurse },
  { title: "Care\nTaker", icon: FaHandsHelping },
  { title: "Elder\nCare", icon: FaHospitalUser },
  { title: "Ambulance", icon: FaAmbulance },
  { title: "Medical\nEquipment", icon: FaHeartbeat },
  { title: "Doctor\nAt\nHome", icon: FaStethoscope },
  { title: "ICU\nSetup\nAt\nHome", icon: FaHospitalUser },
];

const medicalServices = [
  { title: "Physiotherapist\nAt Home", icon: FaHandsHelping },
  { title: "Maternity\nCare", icon: FaBaby },
  { title: "Medical\nTest At\nHome", icon: FaStethoscope },
  { title: "Call Us", icon: FaPhoneAlt, active: true },
  { title: "Holistic\nCare", icon: FaLeaf },
  { title: "Nutrition\nConsultation", icon: FaAppleAlt },
  { title: "Corporate\nWellness", icon: FaBuilding },
];

const trustPoints = [
  {
    icon: FaCheckCircle,
    title: "Goal Oriented Solution",
    desc: "Tailored support that fits every patient need with reliable home care outcomes.",
  },
  {
    icon: FaStar,
    title: "Experienced Staff Team",
    desc: "Our professional caregivers and medical experts deliver dependable service.",
  },
];

const whyChoose = [
  {
    icon: FaHandsHelping,
    title: "Compassionate Approach",
    desc: "We create personalized care plans with warmth, comfort and attention to detail.",
  },
  {
    icon: FaClock,
    title: "24/7 Availability",
    desc: "Round-the-clock care coordination and fast response whenever support is needed.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Initial Consultation",
    desc: "Discuss patient needs, lifestyle and goals with our care experts.",
  },
  {
    no: "02",
    title: "Personalized Care Plan",
    desc: "A structured and flexible care plan is prepared for the patient.",
  },
  {
    no: "03",
    title: "Caregiver Matching",
    desc: "We assign a suitable caregiver or nurse based on the exact requirement.",
  },
  {
    no: "04",
    title: "Start Of Services",
    desc: "Care begins smoothly with regular follow-up, support and monitoring.",
  },
];

const testimonials = [
  {
    name: "Riya Shah",
    role: "Family Member",
    text: "The nursing support was very caring and professional. Everything felt safe and organized.",
  },
  {
    name: "Amit Patel",
    role: "Client",
    text: "Quick coordination, trained staff and a very smooth home care experience for my parents.",
  },
  {
    name: "Karan Mehta",
    role: "Client",
    text: "Great response time and helpful team. Their medical care services are truly dependable.",
  },
];

const ServiceTile = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className={`service-tile ${item.active ? "service-tile-active" : ""}`}>
      <div className="tile-icon-wrap">
        <Icon className="tile-icon" />
      </div>
      <div className="tile-text">
        {item.title.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </div>
    </div>
  );
};

const SectionLabel = ({ text, center = true }) => (
  <div className={`section-label ${center ? "text-center" : ""}`}>{text}</div>
);

const PrimaryButton = ({ children, className = "" }) => (
  <Button className={`primary-btn border-0 rounded-pill ${className}`}>
    {children}
  </Button>
);

export default function HomePage() {
  return (
    <>
      <style>{`
        :root {
          --deep-twilight: #03045e;
          --bright-teal-blue: #0077b6;
          --turquoise-surf: #00b4d8;
          --frosted-blue: #90e0ef;
          --light-cyan: #caf0f8;
          --page-bg: #f5f5f2;
          --card-white: #ffffff;
          --muted-text: #6d7b8b;
          --heading: #183c67;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          overflow-x: hidden;
        }

        body {
          margin: 0;
          background: var(--page-bg);
        }

        img {
          max-width: 100%;
          display: block;
        }

        .home-page {
          min-height: 100vh;
          padding-top: 110px;
          background:
            radial-gradient(circle at 10% 10%, rgba(0, 180, 216, 0.12), transparent 25%),
            radial-gradient(circle at 90% 20%, rgba(144, 224, 239, 0.18), transparent 25%),
            radial-gradient(circle at 50% 90%, rgba(0, 119, 182, 0.08), transparent 30%),
            linear-gradient(180deg, #f8f8f4 0%, #f1f1ed 40%, #f7f7f3 100%);
          overflow-x: hidden;
          position: relative;
        }

        .home-page::before,
        .home-page::after {
          content: "";
          position: fixed;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          filter: blur(70px);
          z-index: 0;
          pointer-events: none;
          animation: floatBlob 10s ease-in-out infinite;
        }

        .home-page::before {
          top: 80px;
          left: -90px;
          background: rgba(0, 180, 216, 0.12);
        }

        .home-page::after {
          bottom: 120px;
          right: -80px;
          background: rgba(3, 4, 94, 0.12);
          animation-delay: 2s;
        }

        .site-section {
          position: relative;
          z-index: 1;
        }

        .hero-section {
          padding: 0;
        }

        .hero-box {
          position: relative;
          overflow: hidden;
          border-radius: 0 0 28px 28px;
          background:
            linear-gradient(90deg, rgba(3, 4, 94, 0.82) 0%, rgba(0, 119, 182, 0.5) 48%, rgba(3, 4, 94, 0.3) 100%),
            url("https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1600&q=80")
            center center / cover no-repeat;
        }

        .hero-box::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(3, 4, 94, 0.55) 0%,
            rgba(3, 4, 94, 0.18) 55%,
            rgba(3, 4, 94, 0.08) 100%
          );
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          min-height: 620px;
          display: flex;
          align-items: center;
          padding: 64px 0;
        }

        .mini-kicker {
          color: var(--turquoise-surf);
          font-size: 10px;
          letter-spacing: 2.6px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .hero-title {
          color: #fff;
          font-size: clamp(38px, 5vw, 78px);
          line-height: 1.02;
          font-weight: 800;
          margin-bottom: 16px;
          max-width: 540px;
        }

        .hero-title .accent {
          color: var(--turquoise-surf);
        }

        .hero-desc {
          color: rgba(255, 255, 255, 0.84);
          font-size: 15px;
          line-height: 1.75;
          max-width: 500px;
          margin-bottom: 22px;
        }

        .hero-rating {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 6px 12px 6px 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          max-width: 100%;
        }

        .hero-rating-users {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .hero-rating-users img {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.85);
          margin-left: -10px;
        }

        .hero-rating-users img:first-child {
          margin-left: 0;
        }

        .hero-rating-content h6 {
          margin: 0;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
        }

        .hero-rating-content p {
          margin: 2px 0 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 11px;
          line-height: 1.35;
        }

        .consult-card {
          background: rgba(8, 34, 63, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border-radius: 26px;
          padding: 24px;
          width: 100%;
          max-width: 390px;
          margin-left: auto;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.16);
        }

        .consult-title {
          color: #fff;
          font-size: 25px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .consult-desc {
          color: rgba(255, 255, 255, 0.75);
          font-size: 13px;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .consult-card .form-control,
        .consult-card .form-select {
          border-radius: 15px;
          min-height: 48px;
          border: none;
          box-shadow: none;
          background: rgba(255, 255, 255, 0.97);
          font-size: 14px;
          padding: 12px 14px;
          margin-bottom: 12px;
        }

        .consult-card textarea.form-control {
          min-height: 94px;
          resize: none;
        }

        .primary-btn {
          background: linear-gradient(90deg, var(--bright-teal-blue), var(--turquoise-surf));
          color: #ffffff;
          font-weight: 800;
          padding: 11px 28px;
          min-height: 46px;
          box-shadow: 0 12px 25px rgba(0, 180, 216, 0.25);
          transition: 0.35s ease;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          background: linear-gradient(90deg, var(--turquoise-surf), var(--bright-teal-blue));
          color: #ffffff;
        }

        .about-section {
          padding: 78px 0 70px;
          background: #f6f5f3;
        }

        .section-label {
          color: var(--bright-teal-blue);
          font-size: 10px;
          letter-spacing: 3px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .about-image-wrap {
          position: relative;
          min-height: 430px;
          max-width: 430px;
          margin-inline: auto;
        }

        .about-main-image {
          width: 100%;
          height: 390px;
          object-fit: cover;
          border-radius: 24px;
        }

        .about-small-image {
          position: absolute;
          left: -6px;
          bottom: 18px;
          width: 165px;
          height: 170px;
          object-fit: cover;
          border-radius: 18px;
          border: 6px solid #f6f5f3;
          box-shadow: 0 12px 30px rgba(3, 4, 94, 0.12);
        }

        .about-heading {
          color: #183c67;
          font-size: clamp(30px, 4vw, 56px);
          line-height: 1.12;
          font-weight: 800;
          max-width: 620px;
          margin-bottom: 18px;
        }

        .about-text {
          color: #6d7b8b;
          font-size: 15px;
          line-height: 1.8;
          max-width: 560px;
          margin-bottom: 28px;
        }

        .about-points {
          display: grid;
          gap: 24px;
        }

        .about-point {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .about-point-icon {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #214c6f;
          font-size: 18px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .about-point h6 {
          color: #214c6f;
          font-size: 18px;
          font-weight: 800;
          margin: 0 0 6px;
        }

        .about-point p {
          color: #6d7b8b;
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
          max-width: 530px;
        }

        .features-section {
          padding: 70px 0;
        }

        .feature-main-heading {
          color: #183c67;
          font-size: clamp(28px, 4vw, 58px);
          line-height: 1.16;
          font-weight: 800;
          max-width: 760px;
          margin: 0 auto 28px;
        }

        .features-shell {
          background: #efefec;
          border-radius: 28px;
          padding: 16px;
        }

        .feature-row-box + .feature-row-box {
          margin-top: 18px;
        }

        .feature-card {
          background: #003b59;
          border-radius: 24px;
          min-height: 100%;
          border: none;
          overflow: hidden;
        }

        .feature-content-card,
        .feature-content-card-right {
          padding: 34px 30px 28px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .feature-grid-card {
          padding: 26px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-number {
          color: #ffffff;
          font-size: 50px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 14px;
        }

        .feature-title {
          font-size: 26px;
          line-height: 1.05;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .feature-title .green {
          color: var(--turquoise-surf);
        }

        .feature-title .white {
          color: #ffffff;
        }

        .feature-text {
          color: rgba(255, 255, 255, 0.86);
          font-size: 13px;
          line-height: 1.62;
          max-width: 320px;
          margin-bottom: 22px;
        }

        .feature-image {
          width: 150px;
          height: 110px;
          object-fit: cover;
          border-radius: 14px;
          margin-top: auto;
        }

        .tile-grid-wrap {
          width: 100%;
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(3, minmax(90px, 1fr));
        }

        .service-tile {
          width: 100%;
          min-height: 116px;
          background: #f8f7f4;
          border-radius: 16px;
          padding: 11px 8px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          transition: transform 0.25s ease;
        }

        .service-tile:hover {
          transform: translateY(-3px);
        }

        .service-tile-active {
          background: var(--turquoise-surf);
        }

        .tile-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 180, 216, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          flex-shrink: 0;
        }

        .service-tile-active .tile-icon-wrap {
          background: #ffffff;
        }

        .tile-icon {
          font-size: 15px;
          color: #214b70;
        }

        .tile-text {
          color: #214b70;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 700;
          word-break: break-word;
        }

        .why-section {
          padding: 25px 0 70px;
        }

        .why-grid {
          align-items: center;
        }

        .why-photo,
        .why-center-photo {
          width: 100%;
          object-fit: cover;
          border-radius: 20px;
        }

        .why-photo {
          height: 250px;
        }

        .why-center-photo {
          height: 210px;
        }

        .why-feature-card {
          background: linear-gradient(180deg, #04395a 0%, #083b5c 100%);
          color: #fff;
          border-radius: 26px;
          padding: 26px;
          box-shadow: 0 18px 45px rgba(3, 4, 94, 0.12);
          transition: 0.35s ease;
        }

        .why-feature-card h5 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .why-feature-card p,
        .why-feature-card li {
          color: rgba(255,255,255,.82);
          line-height: 1.75;
          font-size: 14px;
        }

        .section-heading {
          color: var(--heading);
          font-size: clamp(28px, 4vw, 48px);
          line-height: 1.15;
          font-weight: 800;
        }

        .why-mini h6 {
          color: var(--heading);
          font-weight: 800;
          margin-bottom: 6px;
        }

        .why-mini p {
          color: var(--muted-text);
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
        }

        .why-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(0, 180, 216, 0.15);
          color: var(--bright-teal-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .check-list {
          list-style: none;
          padding: 0;
          margin: 14px 0 0;
        }

        .check-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .review-section {
          padding: 70px 0;
          background:
            radial-gradient(circle at top left, rgba(144,224,239,0.18), transparent 30%),
            radial-gradient(circle at bottom right, rgba(0,180,216,0.10), transparent 30%),
            #f7f7f4;
        }

        .review-heading {
          color: var(--heading);
          font-size: clamp(28px, 4vw, 60px);
          line-height: 1.15;
          font-weight: 800;
          max-width: 900px;
          margin: 0 auto 34px;
          text-align: center;
        }

        .review-slider-wrap {
          position: relative;
        }

        .review-nav {
          position: absolute;
          top: 92px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: none;
          background: #fff;
          color: var(--heading);
          box-shadow: 0 10px 24px rgba(3, 4, 94, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          font-size: 26px;
        }

        .review-nav.prev {
          left: -18px;
        }

        .review-nav.next {
          right: -18px;
        }

        .review-card {
          background: #f3f1ef;
          border-radius: 18px;
          padding: 18px 18px 16px;
          height: 100%;
          border: 1px solid rgba(3, 4, 94, 0.04);
          box-shadow: 0 8px 20px rgba(3, 4, 94, 0.05);
        }

        .review-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .review-stars {
          display: flex;
          align-items: center;
          gap: 2px;
          color: #f4b400;
          font-size: 15px;
          flex-wrap: wrap;
        }

        .verified-badge {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #4285f4;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          margin-left: 6px;
        }

        .google-badge {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: conic-gradient(
            #4285f4 0 25%,
            #34a853 25% 50%,
            #fbbc05 50% 75%,
            #ea4335 75% 100%
          );
          position: relative;
          flex-shrink: 0;
        }

        .google-badge::after {
          content: "G";
          position: absolute;
          inset: 2px;
          border-radius: 50%;
          background: #fff;
          color: #4285f4;
          font-size: 13px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .review-text {
          color: #1f1f1f;
          font-size: 14px;
          line-height: 1.5;
          min-height: 96px;
          margin-bottom: 10px;
        }

        .read-more-text {
          color: #8c8c8c;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .review-footer {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bright-teal-blue);
          color: #fff;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }

        .avatar-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .review-meta h6 {
          color: #171717;
          font-weight: 700;
          margin: 0;
          font-size: 15px;
        }

        .review-meta span {
          color: #7b7b7b;
          font-size: 13px;
        }

        .process-section {
          padding: 0 0 70px;
        }

        .process-banner {
          background:
            linear-gradient(90deg, rgba(3, 4, 94, .86), rgba(0, 119, 182, .68)),
            url("https://images.unsplash.com/photo-1584516150909-c43483ee7935?auto=format&fit=crop&w=1400&q=80") center/cover;
          border-radius: 28px;
          padding: 42px 30px 28px;
          overflow: hidden;
          box-shadow: 0 22px 48px rgba(3,4,94,.18);
        }

        .process-title {
          color: #fff;
          font-size: clamp(28px, 3vw, 54px);
          font-weight: 800;
          line-height: 1.05;
          max-width: 470px;
        }

        .process-desc {
          color: rgba(255,255,255,.82);
          max-width: 530px;
          font-size: 14px;
          line-height: 1.75;
          margin-top: 14px;
          margin-bottom: 30px;
        }

        .process-card {
          background: rgba(255,255,255,.98);
          border-radius: 22px;
          padding: 24px 18px;
          min-height: 100%;
          box-shadow: 0 14px 30px rgba(0,0,0,.1);
        }

        .process-no {
          color: var(--turquoise-surf);
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .process-card h6 {
          color: var(--heading);
          font-size: 17px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .process-card p {
          color: var(--muted-text);
          font-size: 13px;
          line-height: 1.75;
          margin: 0;
        }

        .cta-section {
          background: #f5f7f9;
          padding: 80px 0 0;
        }

        .cta-box {
          max-width: 900px;
          margin: auto;
        }

        .cta-label {
          color: var(--bright-teal-blue);
          font-size: 14px;
          letter-spacing: 4px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .cta-heading {
          color: #214c6f;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.2;
        }

        .cta-btn {
          background: var(--bright-teal-blue);
          border: none;
          padding: 14px 32px;
          border-radius: 40px;
          font-weight: 600;
          color: white;
          font-size: 16px;
        }

        .cta-btn:hover {
          background: var(--turquoise-surf);
          color: white;
        }

        .cta-doctors {
          margin-top: 40px;
        }

        .cta-doctors img {
          width: 100%;
          max-width: 900px;
          height: auto;
          margin: 0 auto;
        }

        @keyframes floatBlob {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-24px) scale(1.06); }
        }

        @media (max-width: 991.98px) {
          .home-page {
            padding-top: 85px;
          }

          .hero-inner {
            min-height: auto;
            padding: 55px 0 45px;
          }

          .hero-title {
            max-width: 100%;
            font-size: 42px;
          }

          .hero-desc {
            max-width: 100%;
          }

          .consult-card {
            display: none !important;
          }

          .about-section,
          .features-section,
          .review-section,
          .why-section {
            padding: 55px 0;
          }

          .process-section {
            padding: 0 0 55px;
          }

          .about-image-wrap {
            max-width: 100%;
            min-height: 360px;
          }

          .about-main-image {
            height: 340px;
          }

          .about-small-image {
            width: 145px;
            height: 145px;
            left: 10px;
            bottom: -5px;
          }

          .features-shell {
            padding: 14px;
          }

          .feature-content-card,
          .feature-content-card-right,
          .feature-grid-card {
            padding: 24px 20px;
          }

          .feature-image {
            width: 170px;
            height: 120px;
          }

          .tile-grid-wrap {
            grid-template-columns: repeat(3, minmax(88px, 1fr));
          }

          .review-nav {
            display: none;
          }

          .why-photo,
          .why-center-photo {
            height: 240px;
          }
        }

        @media (max-width: 767.98px) {
          .home-page {
            padding-top: 72px;
          }

          .home-page::before,
          .home-page::after {
            width: 180px;
            height: 180px;
          }

          .hero-box {
            border-radius: 0 0 20px 20px;
          }

          .hero-inner {
            min-height: auto;
            padding: 38px 0 30px;
          }

          .mini-kicker {
            font-size: 9px;
            letter-spacing: 2px;
            margin-bottom: 10px;
          }

          .hero-title {
            font-size: 28px;
            line-height: 1.15;
            max-width: 100%;
            margin-bottom: 12px;
          }

          .hero-desc {
            font-size: 13px;
            line-height: 1.7;
            margin-bottom: 16px;
            max-width: 100%;
          }

          .hero-rating {
            width: 100%;
            padding: 8px 10px;
            gap: 10px;
          }

          .hero-rating-users img {
            width: 34px;
            height: 34px;
          }

          .hero-rating-content h6 {
            font-size: 13px;
          }

          .hero-rating-content p {
            font-size: 10px;
          }

          .about-section,
          .features-section,
          .review-section,
          .why-section {
            padding: 45px 0;
          }

          .process-section {
            padding: 0 0 45px;
          }

          .about-image-wrap {
            min-height: 290px;
          }

          .about-main-image {
            height: 270px;
            border-radius: 18px;
          }

          .about-small-image {
            width: 110px;
            height: 110px;
            border-radius: 14px;
            border-width: 4px;
            left: 8px;
            bottom: -6px;
          }

          .about-heading,
          .feature-main-heading,
          .review-heading,
          .section-heading,
          .process-title,
          .cta-heading {
            font-size: 28px;
            line-height: 1.2;
          }

          .about-text,
          .about-point p,
          .why-mini p,
          .process-desc,
          .process-card p,
          .review-text {
            font-size: 13px;
          }

          .features-shell {
            border-radius: 22px;
            padding: 12px;
          }

          .feature-row-box + .feature-row-box {
            margin-top: 12px;
          }

          .feature-card {
            border-radius: 20px;
          }

          .feature-content-card,
          .feature-content-card-right,
          .feature-grid-card {
            padding: 18px 14px;
          }

          .feature-number {
            font-size: 28px;
            margin-bottom: 10px;
          }

          .feature-title {
            font-size: 22px;
            margin-bottom: 12px;
          }

          .feature-text {
            font-size: 12px;
            line-height: 1.6;
            margin-bottom: 14px;
            max-width: 100%;
          }

          .feature-image {
            width: 120px;
            height: 90px;
            border-radius: 12px;
          }

          .tile-grid-wrap {
            grid-template-columns: repeat(2, minmax(120px, 1fr));
            gap: 10px;
          }

          .service-tile {
            min-height: 104px;
            border-radius: 14px;
            padding: 10px 6px 8px;
          }

          .tile-icon-wrap {
            width: 34px;
            height: 34px;
            margin-bottom: 8px;
          }

          .tile-icon {
            font-size: 14px;
          }

          .tile-text {
            font-size: 10px;
            line-height: 1.15;
          }

          .why-photo,
          .why-center-photo {
            height: 220px;
            border-radius: 18px;
          }

          .why-feature-card {
            padding: 20px;
            border-radius: 20px;
          }

          .why-feature-card h5 {
            font-size: 20px;
          }

          .review-card {
            padding: 16px 16px 14px;
          }

          .read-more-text {
            font-size: 13px;
          }

          .process-banner {
            border-radius: 22px;
            padding: 26px 16px 18px;
          }

          .process-card {
            border-radius: 18px;
            padding: 18px 14px;
          }

          .cta-section {
            padding: 50px 0 0;
          }

          .cta-label {
            font-size: 12px;
            letter-spacing: 3px;
          }

          .cta-btn,
          .primary-btn {
            width: 100%;
          }

          .cta-doctors {
            margin-top: 24px;
          }

          .cta-doctors img {
            max-width: 100%;
          }
        }

        @media (max-width: 575.98px) {
          .home-page {
            padding-top: 66px;
          }

          .hero-inner {
            padding: 32px 0 24px;
          }

          .hero-title {
            font-size: 24px;
          }

          .hero-desc {
            font-size: 12.5px;
          }

          .tile-grid-wrap {
            grid-template-columns: repeat(2, 1fr);
          }

          .service-tile {
            min-height: 98px;
          }

          .about-point {
            gap: 10px;
          }

          .why-icon {
            width: 42px;
            height: 42px;
            font-size: 16px;
          }
        }
      `}</style>

      <div className="home-page">
        <section className="hero-section site-section">
          <Container fluid className="px-0">
            <div className="hero-box">
              <Container>
                <div className="hero-inner">
                  <Row className="align-items-center g-4">
                    <Col lg={7}>
                      <div className="mini-kicker">WELCOME TO PASSTELA CARE</div>

                      <h1 className="hero-title">
                        Best <span className="accent">Healthcare</span> Services <br />
                        At Home
                      </h1>

                      <p className="hero-desc">
                        We provide best healthcare services at home in Ahmedabad designed
                        to ensure comfort, safety, and personalized support for your
                        loved ones.
                      </p>

                      {heroStats.map((item, index) => (
                        <div className="hero-rating" key={index}>
                          <div className="hero-rating-users">
                            <img src={item.image} alt={item.title} />
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                              alt="Client"
                            />
                          </div>

                          <div className="hero-rating-content">
                            <h6>{item.title}</h6>
                            <p>Caring hand, trusted homecare always</p>
                          </div>
                        </div>
                      ))}
                    </Col>

                    <Col lg={5} className="d-none d-lg-block">
                      <div className="consult-card">
                        <h3 className="consult-title">Book A Free Consultation</h3>
                        <p className="consult-desc">
                          Get expert homecare guidance through our personalized
                          consultation form.
                        </p>

                       
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
          </Container>
        </section>

        <section className="about-section site-section">
          <Container>
            <Row className="align-items-center g-lg-5 g-4">
              <Col lg={5}>
                <div className="about-image-wrap">
                  <img
                    className="about-main-image"
                    src="https://passtelacare.com/wp-content/uploads/elementor/thumbs/steptodown.com850211-rafwor7j4bywibnjfn43k09o95friej2pm49eukq4g.jpg"
                    alt="Doctor support"
                  />

                  <img
                    className="about-small-image"
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80"
                    alt="Healthcare discussion"
                  />
                </div>
              </Col>

              <Col lg={7}>
                <SectionLabel text="ABOUT US" center={false} />

                <h2 className="about-heading">
                  Compassionate Homecare & Private Nursing Services For Your Loved Ones
                </h2>

                <p className="about-text">
                  Our mission is to ensure your loved ones receive professional medical
                  support and compassionate care right at home, without the stress of
                  frequent hospital visits.
                </p>

                <div className="about-points">
                  {trustPoints.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div className="about-point" key={index}>
                        <div className="about-point-icon">
                          <Icon />
                        </div>

                        <div>
                          <h6>{item.title}</h6>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-1">
                  <PrimaryButton>Learn More</PrimaryButton>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="features-section site-section">
          <Container>
            <SectionLabel text="Features" />
            <h2 className="feature-main-heading text-center">
              Begin Your Health Journey With <br />
              Passtela Care
            </h2>

            <div className="features-shell">
              <div className="feature-row-box">
                <Row className="g-4 align-items-stretch">
                  <Col lg={6}>
                    <Card className="feature-card feature-content-card border-0">
                      <div className="feature-number">01.</div>

                      <div className="feature-title">
                        <span className="green">Care</span>{" "}
                        <span className="white">Services</span>
                      </div>

                      <p className="feature-text">
                        We leverage cutting-edge technology to enhance our home healthcare
                        services. Our technology-enabled approach allows us to provide
                        efficient, effective, and personalized care to each of our patients.
                      </p>

                      <img
                        className="feature-image"
                        src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80"
                        alt="Care services"
                      />
                    </Card>
                  </Col>

                  <Col lg={6}>
                    <Card className="feature-card feature-grid-card border-0">
                      <div className="tile-grid-wrap">
                        {careServices.map((item, index) => (
                          <ServiceTile key={index} item={item} />
                        ))}
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>

              <div className="feature-row-box second-row">
                <Row className="g-4 align-items-stretch">
                  <Col lg={6} className="order-2 order-lg-1">
                    <Card className="feature-card feature-grid-card border-0">
                      <div className="tile-grid-wrap">
                        {medicalServices.map((item, index) => (
                          <ServiceTile key={index} item={item} />
                        ))}
                      </div>
                    </Card>
                  </Col>

                  <Col lg={6} className="order-1 order-lg-2">
                    <Card className="feature-card feature-content-card feature-content-card-right border-0">
                      <div className="feature-number">02.</div>

                      <div className="feature-title">
                        <span className="green">Medical</span>
                        <br />
                        <span className="white">Services</span>
                      </div>

                      <p className="feature-text">
                        Experience the convenience and peace of mind that comes with We
                        Passtelacare's transformative approach to home healthcare. Let us
                        redefine how you receive care – ensuring comfort, safety, and
                        improved outcomes in the comfort of your own home.
                      </p>

                      <img
                        className="feature-image"
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                        alt="Medical services"
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </section>

        <section className="why-section site-section">
          <Container>
            <Row className="g-4 why-grid">
              <Col lg={4}>
                <img
                  className="why-photo"
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80"
                  alt="Senior care"
                />
              </Col>

              <Col lg={4}>
                <SectionLabel text="Why Choose Us" center={false} />
                <h2 className="section-heading">
                  A Community Where Seniors Thrive, Not Just Survive
                </h2>

                <div className="mt-4">
                  <PrimaryButton>Get Started</PrimaryButton>
                </div>

                <div className="mt-4 d-grid gap-4">
                  {whyChoose.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div className="why-mini" key={index}>
                        <div className="d-flex gap-3 align-items-start">
                          <div className="why-icon">
                            <Icon />
                          </div>
                          <div>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>

              <Col lg={4}>
                <Row className="g-4">
                  <Col xs={12}>
                    <img
                      className="why-center-photo"
                      src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80"
                      alt="Family discussion"
                    />
                  </Col>
                  <Col xs={12}>
                    <div className="why-feature-card">
                      <h5>Our Featured Benefits</h5>
                      <p>
                        We focus on dependable home healthcare that combines professional
                        skill, patient comfort and modern care planning.
                      </p>
                      <ul className="check-list">
                        <li>
                          <FaCheckCircle /> Flexible and compassionate care plans
                        </li>
                        <li>
                          <FaCheckCircle /> Skilled professionals at your service
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="review-section">
          <Container>
            <SectionLabel text="Testimonials" />
            <h2 className="review-heading">
              Begin Your Health Journey With Passtela Medical Emergency Care
            </h2>

            <div className="review-slider-wrap">
              <button className="review-nav prev" aria-label="Previous reviews">
                ‹
              </button>
              <button className="review-nav next" aria-label="Next reviews">
                ›
              </button>

              <Row className="g-4">
                {testimonials.map((item, index) => (
                  <Col lg={4} md={6} key={index}>
                    <div className="review-card">
                      <div className="review-top">
                        <div className="review-stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                          <span className="verified-badge">
                            <FaCheckCircle />
                          </span>
                        </div>
                        <div className="google-badge" />
                      </div>

                      <div className="review-text">{item.text}</div>
                      <div className="read-more-text">Read more</div>

                      <div className="review-footer">
                        <div className="avatar-circle">
                          {item.avatarImage ? (
                            <img src={item.avatarImage} alt={item.name} />
                          ) : (
                            item.name.charAt(0)
                          )}
                        </div>

                        <div className="review-meta">
                          <h6>{item.name}</h6>
                          <span>{item.role}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>

        <section className="process-section site-section">
          <Container>
            <div className="process-banner">
              <SectionLabel text="How It Works" center={false} />
              <h2 className="process-title">How Our Healthcare Services Process Works</h2>
              <p className="process-desc">
                At Passtela Care, our step-by-step care process ensures a smooth and
                patient-first healthcare experience from consultation to service delivery.
              </p>

              <Row className="g-4">
                {processSteps.map((item, index) => (
                  <Col md={6} lg={3} key={index}>
                    <div className="process-card">
                      <div className="process-no">{item.no}</div>
                      <h6>{item.title}</h6>
                      <p>{item.desc}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>

        <section className="cta-section site-section">
          <Container>
            <div className="cta-box text-center">
              <p className="cta-label">JOIN US TODAY</p>

              <h2 className="cta-heading">
                Schedule A Personalized Tour <br />
                Or Care Consultation
              </h2>

              <div className="mt-4">
                <PrimaryButton className="cta-btn">Book Appointment</PrimaryButton>
              </div>
            </div>
          </Container>

          <div className="cta-doctors">
            <img
              src="https://passtelacare.com/wp-content/uploads/2025/06/cta-box-image.png"
              alt="Doctors"
            />
          </div>
        </section>
      </div>
    </>
  );
}