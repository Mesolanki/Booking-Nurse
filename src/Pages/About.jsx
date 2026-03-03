import React, { useRef } from "react";

export default function About() {
  const trackRef = useRef(null);

  const managementTeam = [
    {
      name: "Sunaina Mam",
      role: "Co-founder and Chairperson",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Ganesh Krishnan",
      role: "Co-founder & Director",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Vaibhav Tewari",
      role: "Co-founder & CEO",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Aarav Mehta",
      role: "VP Operations",
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Riya Sharma",
      role: "Head – Partnerships",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Kunal Verma",
      role: "Head – Growth",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const medicalTeam = [
    {
      name: "Dr. Kavitha S Manjunath",
      role: "Clinical Head – Primary, Preventive & Elderly",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr Allia Rahaman",
      role: "Clinical Head South",
      img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const scrollByCards = (dir = 1) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector(".m-card");
    const cardW = firstCard ? firstCard.getBoundingClientRect().width : 320;
    const gap = 16; // same as CSS gap
    track.scrollBy({ left: dir * (cardW + gap), behavior: "smooth" });
  };

  return (
    <div className="about-page">
      <style>{`
        :root{
          --deep-twilight: #03045eff;
          --bright-teal-blue: #0077b6ff;
          --turquoise-surf: #00b4d8ff;
          --frosted-blue: #90e0efff;
          --light-cyan: #caf0f8ff;
        }

        .about-page{
          background: radial-gradient(1200px 700px at 50% 15%,
            rgba(144,224,239,.35),
            rgba(202,240,248,.15) 50%,
            #fff 80%);
          color: #0b1220;
          overflow-x: hidden;
        }

        .section-eyebrow{
          font-size: 14px;
          letter-spacing: .08em;
          color: #1b263b;
          margin-bottom: 14px;
        }

        .accent-bar{
          width: 10px;
          height: 42px;
          background: var(--turquoise-surf);
          border-radius: 8px;
          margin-right: 14px;
          flex: 0 0 auto;
        }

        .hero-title{
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .hero-title .brand{ color: #0b1220; }
        .hero-title .highlight{ color: #ff6b2c; }

        .hero-para{
          font-size: 18px;
          line-height: 1.9;
          color: #1f2937;
          max-width: 620px;
          margin-left: auto;
        }

        .soft-card{
          background: rgba(255,255,255,.92);
          border: 1px solid rgba(144,224,239,.35);
          border-radius: 18px;
          box-shadow: 0 18px 45px rgba(3,4,94,.08);
        }

        .check-badge{
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(0,180,216,.12);
          display: grid;
          place-items: center;
          border: 1px solid rgba(0,180,216,.25);
        }
        .check-badge span{
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--turquoise-surf);
          display: grid;
          place-items: center;
          color: #fff;
          font-size: 18px;
          font-weight: 800;
        }

        .section-title{
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0b1220;
        }

        .divider-line{
          height: 2px;
          background: linear-gradient(90deg, rgba(0,119,182,.9), rgba(0,180,216,.15));
          border-radius: 999px;
          margin: 14px 0 26px;
        }

        .team-img{
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 12px 30px rgba(3,4,94,.12);
        }

        .team-card{
          background: rgba(255,255,255,.92);
          border-radius: 18px;
          box-shadow: 0 18px 45px rgba(3,4,94,.08);
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
          border: 1px solid rgba(144,224,239,.40);
          height: 100%;
        }
        .team-card:hover{
          transform: translateY(-6px);
          box-shadow: 0 24px 55px rgba(3,4,94,.12);
        }
        .team-card-body{ padding: 14px 14px 16px; }
        .team-name{ font-weight: 800; margin: 14px 0 6px; }
        .team-role{ color:#334155; font-size:14px; margin:0; }

        /* ✅ Management Slider (No dots, fully responsive, swipe on mobile) */
        .m-slider-wrap{
          position: relative;
        }
        .m-slider{
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding: 10px 6px 18px;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .m-slider::-webkit-scrollbar{ height: 0px; }
        .m-slider{ scrollbar-width: none; }

        .m-card{
          scroll-snap-align: center;
          flex: 0 0 auto;
          width: 86%;
        }

        /* 2 cards on small+ */
        @media (min-width: 576px){
          .m-card{ width: 48%; }
        }
        /* 3 cards on large+ */
        @media (min-width: 992px){
          .m-card{ width: 32%; }
        }

        /* Slider arrows (desktop/tablet only) */
        .m-nav-btn{
          border: 1px solid rgba(144,224,239,.55);
          background: rgba(255,255,255,.95);
          width: 44px;
          height: 44px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          box-shadow: 0 12px 30px rgba(3,4,94,.10);
          color: var(--deep-twilight);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .m-nav-btn:hover{
          transform: translateY(-2px);
          box-shadow: 0 16px 38px rgba(3,4,94,.14);
        }
        .m-nav-left{
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }
        .m-nav-right{
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }
        @media (max-width: 575.98px){
          .m-nav-left, .m-nav-right{ display:none; } /* mobile clean, swipe only */
        }

        @media (max-width: 576px){
          .hero-title{ font-size: 2.2rem; }
          .hero-para{ font-size: 16px; line-height: 1.85; max-width: 100%; }
          .team-img{ height: 240px; border-radius: 16px; }
          .divider-line{ margin: 12px 0 18px; }
        }

        @media (max-width: 991px){
          .hero-para{ margin-left: 0; }
          .team-img{ height: 260px; }
        }
      `}</style>

      {/* HERO / ABOUT */}
      <div className="container py-5">
        <div className="row align-items-start g-4">
          <div className="col-lg-7">
            <div className="d-flex align-items-start">
              <div className="accent-bar" />
              <div>
                <div className="section-eyebrow">About Us</div>
                <h1 className="hero-title display-4 m-0" >
                  <span className="brand">PORTEA</span>
                  <span> — </span>
                  <span className="highlight">Heal at The</span>
                  <br />
                  <span className="highlight">Comfort</span> of Your Home
                </h1>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <p className="hero-para mb-0">
              Portea Medical delivers quality care with compassion. We bring
              quality medical care into our patients’ homes and aim to make
              primary healthcare not only more accessible, but also more
              affordable and accountable to our patients’ needs.
            </p>
          </div>
        </div>
      </div>

      {/* VISION / MISSION */}
      <div className="container pb-5">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6">
            <div className="card soft-card p-4 p-md-5 h-100">
              <div className="d-flex gap-3 align-items-start">
                <div className="check-badge"><span>✓</span></div>
                <div>
                  <h3 className="fw-bold mb-2">Our Vision</h3>
                  <p className="mb-0" style={{ color: "#475569", lineHeight: 1.9 }}>
                    Portea Medical aims to deliver quality ‘out-of-hospital’
                    medical care, which is affordable and easily accessible to
                    patients, thus improving the quality of life of patients and
                    families.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card soft-card p-4 p-md-5 h-100">
              <div className="d-flex gap-3 align-items-start">
                <div className="check-badge"><span>✓</span></div>
                <div>
                  <h3 className="fw-bold mb-2">Our Mission</h3>
                  <p className="mb-0" style={{ color: "#475569", lineHeight: 1.9 }}>
                    To provide the best care to every patient through a strong
                    focus on service excellence and simplified processes guided
                    by evidence-based medical care and technology in the
                    following areas – Preventive Care | Pre/Post Natal Care |
                    Post-operative Care | Critical Care | Chronic Disease
                    Management | Palliative Care | & Elder Care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className="container py-5">
        <div className="section-eyebrow">About Us</div>
        <h2 className="section-title display-5 mb-4">Meet Our Team</h2>

        {/* MANAGEMENT (Slider - no dots) */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h3 className="section-title m-0">Management Team</h3>

          <div className="d-none d-sm-flex gap-2">
            <button className="m-nav-btn" onClick={() => scrollByCards(-1)} aria-label="Previous">
              ‹
            </button>
            <button className="m-nav-btn" onClick={() => scrollByCards(1)} aria-label="Next">
              ›
            </button>
          </div>
        </div>

        <div className="divider-line" />

        <div className="m-slider-wrap">
          {/* Optional floating buttons (tablet/desktop) */}
          <button className="m-nav-btn m-nav-left" onClick={() => scrollByCards(-1)} aria-label="Previous">
            ‹
          </button>
          <button className="m-nav-btn m-nav-right" onClick={() => scrollByCards(1)} aria-label="Next">
            ›
          </button>

          <div className="m-slider" ref={trackRef}>
            {managementTeam.map((m, idx) => (
              <div className="m-card" key={idx}>
                <div className="team-card">
                  <img src={m.img} alt={m.name} className="team-img img-fluid" />
                  <div className="team-card-body">
                    <h5 className="team-name mb-1">{m.name}</h5>
                    <p className="team-role">{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MEDICAL (Grid) */}
        <div className="mt-5 d-flex align-items-end justify-content-between flex-wrap gap-2">
          <h3 className="section-title m-0">Medical Team</h3>
        </div>
        <div className="divider-line" />

        <div className="row g-4">
          {medicalTeam.map((m, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="team-card">
                <img src={m.img} alt={m.name} className="team-img img-fluid" />
                <div className="team-card-body">
                  <h5 className="team-name mb-1">{m.name}</h5>
                  <p className="team-role">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-4" />
      </div>
    </div>
  );
}