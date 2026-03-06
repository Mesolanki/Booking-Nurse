import React, { useEffect, useMemo } from "react";

/**
 * ✅ UI Polish Update (Bootstrap + scoped CSS)
 * - ✅ Global page side padding (content no longer touches screen edge)
 * - ✅ Hero banner more “premium” + better mobile spacing
 * - ✅ How We Work section redesigned (equal height cards + cleaner grid + responsive)
 * - ✅ Keeps your theme colors + bootstrap only
 */

export default function HomePage() {
  const heroImg =
    "https://images.unsplash.com/photo-1580281658628-11e394ee3f5a?auto=format&fit=crop&w=1900&q=80";
  const aboutDoc1 =
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80";
  const aboutDoc2 =
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80";
  const ctaImg =
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1300&q=80";
  const workImg =
    "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80";
  const port1 =
    "https://images.unsplash.com/photo-1582719478171-2ff0d9f7f1d6?auto=format&fit=crop&w=1200&q=80";
  const port2 =
    "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&w=1200&q=80";
  const port3 =
    "https://images.unsplash.com/photo-1576765608866-5b3e2b5b4b6a?auto=format&fit=crop&w=1200&q=80";

  const FALLBACK_IMG =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="#03045e"/>
            <stop offset="1" stop-color="#00b4d8"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
        <circle cx="250" cy="260" r="140" fill="rgba(255,255,255,0.18)"/>
        <circle cx="960" cy="560" r="220" fill="rgba(255,255,255,0.10)"/>
        <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle"
              font-family="Arial" font-size="46" font-weight="800"
              fill="rgba(255,255,255,0.82)">Image Preview</text>
      </svg>
    `);

  const safeImg = (src) => ({
    src,
    onError: (e) => (e.currentTarget.src = FALLBACK_IMG),
  });

  const services = useMemo(
    () => [
      {
        title: "General Health Check-Up",
        text: "Routine assessments to monitor overall health and detect early concerns.",
        icon: "bi-heart-pulse-fill",
        bg: "hp-icBg1",
      },
      {
        title: "Cardiology Consultation",
        text: "Specialized heart evaluations and care focused on long-term wellness.",
        icon: "bi-activity",
        bg: "hp-icBg2",
      },
      {
        title: "Pediatric Wellness Care",
        text: "Medical support for infants, children, and teens to grow healthy.",
        icon: "bi-emoji-smile-fill",
        bg: "hp-icBg3",
      },
      {
        title: "Diagnostic Laboratory Tests",
        text: "Accurate reports designed to support faster decisions and treatment.",
        icon: "bi-droplet-half",
        bg: "hp-icBg4",
      },
      {
        title: "Vaccination & Immunization",
        text: "Safe vaccines to strengthen immunity and protect against infection.",
        icon: "bi-shield-check",
        bg: "hp-icBg5",
      },
      {
        title: "Orthopedic Care",
        text: "Care for bones, joints, pain and injuries with tailored plans.",
        icon: "bi-bandaid-fill",
        bg: "hp-icBg6",
      },
    ],
    []
  );

  const steps = useMemo(
    () => [
      {
        n: "1",
        t: "Listen and Understand",
        d: "We start by listening to you and building trust from the first conversation.",
        icon: "bi-ear-fill",
      },
      {
        n: "2",
        t: "Design Your Care Plan",
        d: "We create a clear plan focused on comfort, trust, and recovery.",
        icon: "bi-clipboard2-check-fill",
      },
      {
        n: "3",
        t: "Care with Compassion",
        d: "Our team supports you at every stage with guidance and empathy.",
        icon: "bi-hand-heart-fill",
      },
      {
        n: "4",
        t: "Healing and Beyond",
        d: "We continue supporting you even after recovery for a stronger life.",
        icon: "bi-stars",
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        q: "They took time to understand me. Genuine care and expertise made recovery smooth.",
        n: "James Carter",
        r: "Orthopedic Patient",
        stars: 5,
      },
      {
        q: "Very compassionate team. Every visit felt professional and full of trust.",
        n: "Lisa Mitchell",
        r: "Cardiac Patient",
        stars: 5,
      },
      {
        q: "Clean clinic, quick reports, and supportive staff. I felt safe and informed.",
        n: "Ava Robinson",
        r: "Diagnostics Patient",
        stars: 5,
      },
    ],
    []
  );

  const partners = useMemo(
    () => [
      { name: "Medora", tag: "Trusted Hospitals", icon: "bi-hospital-fill" },
      { name: "Medicalab", tag: "Lab Network", icon: "bi-droplet-fill" },
      { name: "HealthPro", tag: "Care Partners", icon: "bi-heart-pulse" },
      { name: "NovoCare", tag: "Modern Clinics", icon: "bi-building" },
      { name: "Helvetia", tag: "Pharmacy Chain", icon: "bi-capsule-pill" },
    ],
    []
  );

  useEffect(() => {
    const nodes = document.querySelectorAll(".hp-reveal");
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("hp-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div className="hp">
      {/* ✅ Global Page Padding wrapper (so nothing touches edges) */}
      <div className="hp-pagePad">
        {/* ================= HERO ================= */}
        <section className="hp-hero">
          <div className="hp-heroBg" style={{ backgroundImage: `url(${heroImg})` }} />
          <div className="hp-heroOverlay" />

          <div className="container hp-heroContainer">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-7">
                <div className="hp-heroLeft hp-reveal hp-delay1">
                  <span className="hp-pill">
                    <i className="bi bi-shield-fill-check me-2" />
                    Your Health is Our Priority
                  </span>

                  <h1 className="hp-heroTitle mt-3 mb-3">
                    Promise of <br className="d-none d-md-block" />
                    Care and Trust
                  </h1>

                  <p className="hp-heroDesc mb-4">
                    Built on integrity, compassion, and reliability — so every patient feels valued,
                    understood, and confident.
                  </p>

                  <div className="d-flex flex-column flex-sm-row gap-3">
                    <button className="btn btn-primary hp-btn">
                      <i className="bi bi-search-heart me-2" />
                      Find a Nurse
                    </button>

                    <a href="#cta" className="btn btn-outline-light hp-btn hp-btnGhost">
                      <i className="bi bi-envelope-paper-heart me-2" />
                      Contact Us
                    </a>
                  </div>

                  <div className="hp-miniStats mt-4">
                    <div className="hp-miniStat">
                      <div className="hp-miniNum">23k+</div>
                      <div className="hp-miniLbl">Patients</div>
                    </div>
                    <div className="hp-miniStat">
                      <div className="hp-miniNum">99%</div>
                      <div className="hp-miniLbl">Satisfaction</div>
                    </div>
                    <div className="hp-miniStat">
                      <div className="hp-miniNum">24/7</div>
                      <div className="hp-miniLbl">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="hp-heroRight hp-reveal hp-delay2">
                  <div className="hp-heroGlass p-4 p-md-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="hp-glassTitle">Quick Help</div>
                        <div className="text-white-50" style={{ fontWeight: 800 }}>
                          Chat • Call • Book
                        </div>
                      </div>
                      <div className="hp-iconCircle hp-float">
                        <i className="bi bi-headset" />
                      </div>
                    </div>

                    <div className="row g-2 mt-3">
                      <div className="col-12 col-sm-6">
                        <a href="#services" className="hp-miniCard">
                          <i className="bi bi-grid-1x2-fill me-2" />
                          Services
                        </a>
                      </div>
                      <div className="col-12 col-sm-6">
                        <a href="#cta" className="hp-miniCard">
                          <i className="bi bi-chat-dots-fill me-2" />
                          Support
                        </a>
                      </div>
                      <div className="col-12 col-sm-6">
                        <a href="#portfolio" className="hp-miniCard">
                          <i className="bi bi-images me-2" />
                          Portfolio
                        </a>
                      </div>
                      <div className="col-12 col-sm-6">
                        <a href="#partners" className="hp-miniCard">
                          <i className="bi bi-patch-check-fill me-2" />
                          Partners
                        </a>
                      </div>
                    </div>

                    <div className="hp-callRow mt-3">
                      <div className="hp-callChip">
                        <i className="bi bi-shield-check me-2" />
                        Verified Support
                      </div>
                      <a className="hp-phone" href="tel:5552784364">
                        <i className="bi bi-telephone-outbound me-2" />
                        555-278-4364
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom cards */}
            <div className="hp-heroBottom hp-reveal hp-delay2">
              <div className="row g-3">
                <div className="col-12 col-md-7">
                  <div className="hp-card p-4 h-100">
                    <div className="d-flex align-items-start justify-content-between gap-3">
                      <div>
                        <h3 className="hp-cardTitle mb-2">Emergency Cases</h3>
                        <p className="hp-cardText mb-0">
                          Personalized attention and continuous support for every patient.
                        </p>
                      </div>
                      <div className="hp-iconCircle hp-bounce">
                        <i className="bi bi-telephone-fill" />
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3 mt-3 flex-wrap">
                      <div className="hp-callChip">
                        <i className="bi bi-headset me-2" />
                        24/7 Online
                      </div>
                      <a className="hp-phone2" href="tel:5552784364">
                        <i className="bi bi-telephone-outbound me-2" />
                        555-278-4364
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-5">
                  <div className="hp-card p-4 h-100">
                    <div className="d-flex align-items-start justify-content-between gap-3">
                      <div>
                        <h3 className="hp-cardTitle mb-2">Doctor Timetable</h3>
                        <p className="hp-cardText mb-0">Check availability and book faster.</p>
                      </div>
                      <div className="hp-iconCircle hp-float">
                        <i className="bi bi-calendar-week-fill" />
                      </div>
                    </div>

                    <a href="#cta" className="btn btn-primary hp-btn mt-3 w-100">
                      Book / Support <span className="ms-1">+</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
          <div className="container-fluid">
        <section className="hp-section hp-about " id="about">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-6">
                <div className="hp-aboutWrap hp-reveal">
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <div className="hp-aboutCard">
                        <img {...safeImg(aboutDoc1)} alt="Doctor" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="hp-aboutCard hp-aboutCardAlt">
                        <img {...safeImg(aboutDoc2)} alt="Clinic" className="img-fluid" />
                      </div>
                    </div>
                  </div>

                  <div className="hp-aboutStat mt-3">
                    <div className="d-flex align-items-end justify-content-between gap-3 flex-wrap">
                      <div>
                        <div className="hp-statNum">
                          <span className="hp-gradText">23k+</span>
                        </div>
                        <div className="hp-statText">Patients cared with compassion</div>
                      </div>
                      <div className="hp-aboutBadge">
                        <i className="bi bi-award-fill me-2" />
                        Trusted Care
                      </div>
                    </div>

                    <p className="hp-muted mt-2 mb-0">
                      We focus on empathy, trust, and long-term relationships — not just treatment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="hp-reveal">
                  <span className="hp-outlinePill">
                    <i className="bi bi-info-circle-fill me-2" />
                    About Us
                  </span>

                  <h2 className="hp-h2 mt-3">Guided by Heart and Hope</h2>
                  <p className="hp-muted mt-3">
                    Medicine is more than science — it’s hope, care, and commitment. We help you feel
                    safe, heard, and supported at every step.
                  </p>

                  <div className="row g-3 mt-3">
                    {[
                      { t: "Expert Doctors", i: "bi-person-badge-fill" },
                      { t: "Modern Diagnostics", i: "bi-capsule-pill" },
                      { t: "Personalized Care", i: "bi-hand-heart-fill" },
                      { t: "Fast Support", i: "bi-lightning-charge-fill" },
                    ].map((x, i) => (
                      <div className="col-12 col-sm-6" key={i}>
                        <div className="hp-miniFeature">
                          <div className="hp-miniFeatureIcon">
                            <i className={`bi ${x.i}`} />
                          </div>
                          <div className="fw-bold" style={{ color: "var(--deep-twilight)" }}>
                            {x.t}
                          </div>
                          <div className="hp-muted" style={{ fontSize: 13, fontWeight: 800 }}>
                            Reliable and patient-focused service.
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                    <a href="#services" className="btn btn-primary hp-btn">
                      Explore Services <span className="ms-1">+</span>
                    </a>
                    <a href="#cta" className="btn btn-outline-primary hp-btn hp-btnOutline2">
                      Support / Booking
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </section>
          </div>

        {/* ================= SERVICES ================= */}
        <section className="hp-section hp-soft" id="services">
          <div className="container">
            <div className="text-center mb-4 hp-reveal">
              <span className="hp-outlinePill">
                <i className="bi bi-grid-1x2-fill me-2" />
                Our Services
              </span>
              <h2 className="hp-h2 mt-3">Dedicated to Your Wellness</h2>
              <div className="hp-quote mt-2">"Trusted Hands, Caring Hearts"</div>
            </div>

            <div className="row g-4">
              {services.map((s, idx) => (
                <div className="col-12 col-sm-6 col-lg-4 hp-reveal" key={idx}>
                  <div className="hp-serviceCard p-4 h-100">
                    <div className={`hp-serviceIcon ${s.bg}`}>
                      <i className={`bi ${s.icon}`} />
                    </div>
                    <h5 className="mt-3 mb-2 fw-bold">{s.title}</h5>
                    <p className="hp-muted mb-3">{s.text}</p>

                    <div className="d-flex align-items-center justify-content-between">
                      <a className="hp-link" href="#cta">
                        <i className="bi bi-arrow-right-circle me-1" />
                        Get Help
                      </a>
                      <div className="hp-miniAction">
                        <i className="bi bi-lightning-charge-fill me-1" />
                        Quick
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="hp-section hp-soft hp-ctaBanner" id="cta">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-6 hp-reveal">
                <span className="hp-outlinePill">
                  <i className="bi bi-chat-dots-fill me-2" />
                  Need Help?
                </span>

                <h2 className="hp-h2 mt-3">Talk to Our Support Team</h2>

                <p className="hp-muted mt-2 mb-4" style={{ maxWidth: 520 }}>
                  Get quick assistance, consultation guidance, and booking support. We respond fast
                  and keep everything simple for you.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3">
                  <a href="mailto:support@yourclinic.com" className="btn btn-primary hp-btn">
                    <i className="bi bi-envelope-paper-heart-fill me-2" />
                    Email Support
                  </a>

                  <a href="tel:5552784364" className="btn btn-outline-primary hp-btn hp-btnOutline2">
                    <i className="bi bi-telephone-outbound me-2" />
                    Call Now
                  </a>
                </div>

                <div className="hp-formHint mt-3">
                  <i className="bi bi-shield-check me-2" />
                  Your details are safe • Quick response within minutes
                </div>
              </div>

              <div className="col-12 col-lg-6 hp-reveal">
                <div className="hp-ctaImgWrap">
                  <img {...safeImg(ctaImg)} alt="Support" className="hp-ctaImg" />
                  <div className="hp-ctaBadge">
                    <div className="hp-ctaBadgeIcon">
                      <i className="bi bi-headset" />
                    </div>
                    <div className="ms-2">
                      <div className="fw-bold text-white">24/7 Support</div>
                      <div className="text-white-50" style={{ fontWeight: 800, fontSize: 12 }}>
                        Chat • Call • Email
                      </div>
                    </div>
                  </div>
                  <div className="hp-ctaTag">
                    <i className="bi bi-lightning-charge-fill me-2" />
                    Fast Response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW WE WORK (PERFECT ✅) ================= */}
        <section className="hp-section hp-how">
          <div className="container">
            <div className="text-center mb-4 hp-reveal">
              <span className="hp-outlinePill">
                <i className="bi bi-diagram-3-fill me-2" />
                How We Work
              </span>
              <h2 className="hp-h2 mt-3">Simple Steps, Better Care</h2>
              <p className="hp-muted mt-2" style={{ maxWidth: 760, margin: "0 auto" }}>
                Clean process with clear communication — so you always know what happens next.
              </p>
            </div>

            <div className="row g-4 align-items-stretch">
              {/* Left: Step Cards */}
              <div className="col-12 col-lg-7">
                <div className="row g-4">
                  {steps.map((x) => (
                    <div className="col-12 col-sm-6 hp-reveal" key={x.n}>
                      <div className="hp-workCard h-100">
                        <div className="hp-workTop">
                          <div className="hp-workNum">{x.n}</div>
                          <div className="hp-workIcon">
                            <i className={`bi ${x.icon}`} />
                          </div>
                        </div>
                        <div className="hp-workTitle">{x.t}</div>
                        <div className="hp-muted" style={{ fontWeight: 800 }}>
                          {x.d}
                        </div>
                        <div className="hp-workLine" />
                        <a href="#cta" className="hp-workLink">
                          Get Support <i className="bi bi-arrow-right ms-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Feature Card */}
              <div className="col-12 col-lg-5 hp-reveal">
                <div className="hp-workSide h-100">
                  <div className="hp-workSideTop">
                    <div>
                      <div className="hp-workPct">99%</div>
                      <div className="hp-workSub">Satisfaction Rate*</div>
                    </div>
                    <div className="hp-sideChip">
                      <i className="bi bi-patch-check-fill me-2" />
                      Verified
                    </div>
                  </div>

                  <div className="hp-workFoot">*Trusted by 1.2k Patients on Google</div>

                  <div className="hp-workImgWrap">
                    <img {...safeImg(workImg)} alt="Doctors" className="hp-workImg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="hp-section">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              <div className="col-12 col-lg-4 hp-reveal">
                <span className="hp-outlinePill">
                  <i className="bi bi-chat-quote-fill me-2" />
                  Testimonials
                </span>
                <h2 className="hp-h2 mt-3">Trusted by Patients</h2>
                <p className="hp-muted mt-2">
                  Real stories of care, recovery, and trust — reflecting our dedication.
                </p>
                <a href="#cta" className="btn btn-primary hp-btn mt-3 w-100 w-lg-auto">
                  <i className="bi bi-headset me-2" />
                  Get Support <span className="ms-1">+</span>
                </a>
              </div>

              <div className="col-12 col-lg-8 hp-reveal">
                <div
                  id="hpReviewCarousel"
                  className="carousel slide hp-carousel"
                  data-bs-ride="carousel"
                  data-bs-interval="3500"
                >
                  <div className="carousel-inner">
                    {testimonials.map((t, idx) => (
                      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                        <div className="hp-testCard p-4 p-md-5">
                          <div className="d-flex align-items-center justify-content-between gap-3">
                            <div className="hp-quoteMark">“</div>
                            <div className="hp-stars">
                              {Array.from({ length: t.stars }).map((_, i) => (
                                <i className="bi bi-star-fill" key={i} />
                              ))}
                            </div>
                          </div>

                          <div className="hp-testText mt-2">{t.q}</div>

                          <div className="d-flex align-items-center gap-3 mt-4">
                            <div className="hp-avatar" />
                            <div>
                              <div className="fw-bold">{t.n}</div>
                              <div className="hp-linkSmall">{t.r}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="carousel-control-prev hp-carBtn"
                    type="button"
                    data-bs-target="#hpReviewCarousel"
                    data-bs-slide="prev"
                    aria-label="Previous"
                  >
                    <span className="hp-carIcon">
                      <i className="bi bi-arrow-left" />
                    </span>
                  </button>
                  <button
                    className="carousel-control-next hp-carBtn"
                    type="button"
                    data-bs-target="#hpReviewCarousel"
                    data-bs-slide="next"
                    aria-label="Next"
                  >
                    <span className="hp-carIcon">
                      <i className="bi bi-arrow-right" />
                    </span>
                  </button>

                  <div className="carousel-indicators hp-indicators">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        data-bs-target="#hpReviewCarousel"
                        data-bs-slide-to={i}
                        className={i === 0 ? "active" : ""}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO ================= */}
        <section className="hp-section hp-soft" id="portfolio">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 align-items-lg-start hp-reveal">
              <div>
                <span className="hp-outlinePill">
                  <i className="bi bi-images me-2" />
                  Our Portfolio
                </span>
                <h2 className="hp-h2 mt-3">Clean, Modern Facilities</h2>
              </div>
              <p className="hp-muted mt-lg-5 mb-0" style={{ maxWidth: 520 }}>
                Modern medical infrastructure with a human touch — designed for comfort and trust.
              </p>
            </div>

            <div className="row g-4 mt-3">
              {[
                { img: port1, title: "Advanced Diagnostic Center" },
                { img: port2, title: "Modern Surgical Facilities" },
                { img: port3, title: "Pediatric Wellness Care" },
              ].map((p, idx) => (
                <div className="col-12 col-sm-6 col-lg-4 hp-reveal" key={idx}>
                  <div className="hp-portCard">
                    <img {...safeImg(p.img)} alt={p.title} className="hp-portImg" />
                    <div className="hp-portOverlay" />
                    <div className="hp-portContent">
                      <div className="hp-plus">+</div>
                      <div className="hp-portTitle">{p.title}</div>
                      <a href="#cta" className="btn btn-dark hp-portBtn">
                        <i className="bi bi-arrow-right-circle me-2" />
                        Get Support
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PARTNERS ================= */}
        <section className="py-4 hp-soft" id="partners">
          <div className="container">
            <div className="text-center hp-reveal">
              <span className="hp-outlinePill">
                <i className="bi bi-patch-check-fill me-2" />
                Our Partners
              </span>
              <h2 className="hp-h2 mt-3" style={{ fontSize: "clamp(22px, 2.8vw, 42px)" }}>
                Trusted Healthcare Network
              </h2>
              <p className="hp-muted mt-2" style={{ maxWidth: 720, margin: "0 auto" }}>
                Partners that help us deliver quality care across hospitals, labs, clinics, and
                pharmacies.
              </p>
            </div>

            <div className="row g-3 g-md-4 mt-2 justify-content-center">
              {partners.map((x, i) => (
                <div className="col-12 col-sm-6 col-lg-4 col-xl-2 hp-reveal" key={i}>
                  <div className="hp-partnerCard">
                    <div className="hp-partnerIcon">
                      <i className={`bi ${x.icon}`} />
                    </div>
                    <div className="mt-2 fw-bold" style={{ color: "var(--deep-twilight)" }}>
                      {x.name}
                    </div>
                    <div className="hp-muted" style={{ fontSize: 12, fontWeight: 800 }}>
                      {x.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hp-reveal mt-4">
              <div className="hp-footerStrip">
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                  <div>
                    <div className="fw-bold" style={{ color: "var(--deep-twilight)", fontSize: 18 }}>
                      Need support or booking help?
                    </div>
                    <div className="hp-muted" style={{ fontWeight: 800 }}>
                      Email: support@yourclinic.com • Ahmedabad, India
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-sm-row gap-2">
                    <a href="#cta" className="btn btn-primary hp-btn">
                      <i className="bi bi-headset me-2" />
                      Support
                    </a>
                    <a href="tel:5552784364" className="btn btn-outline-primary hp-btn hp-btnOutline2">
                      <i className="bi bi-telephone-outbound me-2" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= CSS ================= */}
      <style>{`
      
        :root{
          --deep-twilight:#03045e;
          --bright-teal-blue:#0077b6;
          --turquoise-surf:#00b4d8;
          --frosted-blue:#90e0ef;
          --light-cyan:#caf0f8;
         

        }

        .hp{ overflow-x:hidden; background:#fff; scroll-behavior:smooth; }
        .hp *{ max-width:100%; }

        /* ✅ Page padding so UI never touches edges */
        .hp-pagePad{
          padding-left: clamp(10px, 3.2vw, 26px);
          padding-right: clamp(10px, 3.2vw, 26px);
        }

        /* Pills */
        .hp-pill{
          display:inline-flex; align-items:center;
          padding:10px 16px; border-radius:999px;
          background:var(--bright-teal-blue); color:#fff;
          font-weight:800; font-size:14px;
          box-shadow:0 12px 30px rgba(0,119,182,.25);
        }
        .hp-outlinePill{
          display:inline-flex; align-items:center;
          padding:8px 16px; border-radius:12px;
          border:1px solid rgba(0,119,182,.35);
          color:var(--bright-teal-blue);
          font-weight:800; background:#fff;
        }
        .hp-h2{
          font-size: clamp(26px, 3.2vw, 54px);
          font-weight:900; color:var(--deep-twilight);
          letter-spacing:-.5px; line-height:1.05;
        }
        .hp-muted{ color:#6b7a90; }
        .hp-linkSmall{ color:var(--bright-teal-blue); font-size:13px; text-decoration:none; }

        .hp-section{ padding: 86px 0; }
        .hp-soft{ background:#eaf6ff; border-radius: 22px; }

        /* HERO */
        .hp-hero{
          position:relative;
          padding:30px;
          margin: 18px 0; /* ✅ already padded by wrapper */
          border-radius: 28px;
          overflow:hidden;
          min-height: 800px;
          box-shadow: 0 28px 90px rgba(0,0,0,.10);
        }
        .hp-heroBg{
          position:absolute; inset:0;
          background-size:cover;
          background-position:center;
          transform:scale(1.06);
          animation: hpZoom 9s ease-in-out infinite alternate;
        }
        .hp-heroOverlay{
          position:absolute; inset:0;
          background:linear-gradient(90deg, rgba(3,4,94,.78) 0%, rgba(3,4,94,.46) 58%, rgba(3,4,94,.10) 100%);
        }
        .hp-heroContainer{ position:relative; z-index:2; padding: 62px 12px 172px; }
        .hp-heroTitle{
          color:#fff; font-weight:900;
          font-size: clamp(36px, 5.2vw, 76px);
          line-height:1;
          text-shadow: 0 12px 34px rgba(0,0,0,.28);
        }
        .hp-heroDesc{ color:rgba(255,255,255,.92); max-width:540px; }

        .hp-btn{
          border-radius:14px;
          font-weight:900;
          padding:12px 18px;
          box-shadow: 0 18px 45px rgba(0,0,0,.12);
        }
        .hp-btnGhost{ border-width:2px; }
        .hp-btnOutline2{ border-width:2px; }

        .hp-miniStats{ display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
        .hp-miniStat{
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(8px);
          border-radius:16px;
          padding:10px 12px;
          min-width: 120px;
        }
        .hp-miniNum{ color:#fff; font-weight:900; font-size:20px; line-height:1; }
        .hp-miniLbl{ color:rgba(255,255,255,.85); font-weight:800; font-size:12px; margin-top:4px; }

        .hp-heroGlass{
          background: rgba(255,255,255,.10);
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 24px;
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 55px rgba(0,0,0,.18);
          color:#fff;
        }
        .hp-glassTitle{ font-weight: 900; font-size: 18px; }
        .hp-miniCard{
          display:flex; align-items:center; justify-content:center;
          padding: 12px 12px;
          border-radius: 16px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.18);
          color:#fff; text-decoration:none; font-weight:900;
        }
        .hp-miniCard:hover{ background: rgba(255,255,255,.16); }

        .hp-heroBottom{
          position:absolute; left:0; right:0;
          bottom:-78px;
          padding: 0 12px;
        }
        .hp-card{
          background:rgba(255,255,255,.97);
          border-radius:22px;
          box-shadow: 0 20px 55px rgba(0,0,0,.18);
          backdrop-filter: blur(8px);
          transition:.22s ease;
        }
        .hp-card:hover{ transform: translateY(-6px); }
        .hp-cardTitle{ font-weight:900; color:var(--deep-twilight); }
        .hp-cardText{ color:#5f6f88; margin-bottom:0; }

        .hp-iconCircle{
          width:54px; height:54px; border-radius:999px;
          display:grid; place-items:center;
          background:var(--deep-twilight); color:#fff;
          font-size:20px;
        }
        .hp-callChip{
          display:inline-flex; align-items:center;
          padding:8px 10px; border-radius:999px;
          background: rgba(0,119,182,.12);
          color: var(--deep-twilight);
          font-weight:900; font-size:12px;
        }
        .hp-callRow{ display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; }
        .hp-phone{ color:#fff; font-weight:900; font-size:16px; text-decoration:none; }
        .hp-phone2{ color:var(--bright-teal-blue); font-weight:900; font-size:18px; text-decoration:none; }

        /* ABOUT */
        .hp-aboutCard{
          border-radius:26px; overflow:hidden;
          box-shadow: 0 18px 45px rgba(0,0,0,.12);
          border: 1px solid rgba(0,0,0,.05);
          background:#fff;
        }
        .hp-aboutCard img{ width:100%; height: 320px; object-fit:cover; display:block; }
        .hp-aboutStat{
          background: rgba(255,255,255,.86);
          border: 1px solid rgba(0,0,0,.05);
          border-radius: 22px;
          padding: 16px;
          box-shadow: 0 16px 40px rgba(0,0,0,.06);
        }
        .hp-statNum{ font-size:54px; font-weight:900; line-height:1; }
        .hp-gradText{
          background: linear-gradient(135deg, var(--deep-twilight), var(--bright-teal-blue));
          -webkit-background-clip:text; background-clip:text; color:transparent;
        }
        .hp-statText{ font-weight:900; color:var(--bright-teal-blue); font-size:16px; }
        .hp-aboutBadge{
          display:inline-flex; align-items:center;
          padding:10px 12px; border-radius:999px;
          background: rgba(0,180,216,.12);
          color: var(--deep-twilight);
          font-weight:900;
        }
        .hp-miniFeature{
          background:#fff;
          border:1px solid rgba(0,0,0,.04);
          border-radius: 18px;
          padding: 14px;
          box-shadow: 0 16px 40px rgba(0,0,0,.06);
          height: 100%;
        }
        .hp-miniFeatureIcon{
          width: 44px; height: 44px;
          border-radius: 14px;
          display:grid; place-items:center;
          background: rgba(0,119,182,.12);
          color: var(--deep-twilight);
          margin-bottom: 10px;
          font-size: 18px;
        }

        /* SERVICES */
        .hp-serviceCard{
          background:#fff;
          border-radius:22px;
          border:1px solid rgba(0,0,0,.03);
          box-shadow: 0 16px 40px rgba(0,0,0,.06);
          transition:.22s ease;
          position:relative;
          overflow:hidden;
        }
        .hp-serviceCard:hover{ transform: translateY(-6px); }
        .hp-serviceIcon{
          width:72px; height:72px;
          border-radius:18px;
          display:grid; place-items:center;
          font-size:28px;
          color: var(--deep-twilight);
          border: 1px solid rgba(0,0,0,.04);
        }
        .hp-icBg1{ background: rgba(0,119,182,.12); }
        .hp-icBg2{ background: rgba(0,180,216,.12); }
        .hp-icBg3{ background: rgba(144,224,239,.18); }
        .hp-icBg4{ background: rgba(202,240,248,.75); }
        .hp-icBg5{ background: rgba(3,4,94,.08); }
        .hp-icBg6{ background: rgba(0,119,182,.10); }
        .hp-quote{ font-weight:900; color:var(--deep-twilight); }
        .hp-miniAction{
          font-size:12px; font-weight:900;
          color: var(--deep-twilight);
          background: rgba(3,4,94,.06);
          padding:6px 10px; border-radius:999px;
        }

        /* CTA */
        .hp-ctaImgWrap{
          position:relative;
          border-radius:26px;
          overflow:hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,.10);
        }
        .hp-ctaImg{ width:100%; height:520px; object-fit:cover; display:block; transform:scale(1.02); }
        .hp-ctaBadge{
          position:absolute; left:16px; bottom:16px;
          background: rgba(3,4,94,.92);
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 22px;
          padding: 12px 14px;
          display:flex; align-items:center;
          box-shadow: 0 20px 60px rgba(0,0,0,.22);
        }
        .hp-ctaBadgeIcon{
          width:42px; height:42px; border-radius:14px;
          display:grid; place-items:center;
          background: rgba(255,255,255,.14);
          color:#fff; font-size:18px;
        }
        .hp-ctaTag{
          position:absolute; right:14px; top:14px;
          background: rgba(255,255,255,.92);
          border: 1px solid rgba(0,0,0,.06);
          border-radius: 999px;
          padding: 8px 12px;
          font-weight: 900;
          color: var(--deep-twilight);
          box-shadow: 0 16px 40px rgba(0,0,0,.12);
          display:flex; align-items:center;
        }

        /* ✅ HOW WE WORK (new perfect UI) */
        .hp-how .container{ padding-left: 12px; padding-right: 12px; }
        .hp-workCard{
          background:#fff;
          border:1px solid rgba(0,0,0,.04);
          border-radius:22px;
          padding:18px;
          box-shadow: 0 16px 40px rgba(0,0,0,.06);
          transition:.22s ease;
          display:flex;
          flex-direction:column;
          gap:10px;
          height:100%;
        }
        .hp-workCard:hover{ transform: translateY(-6px); }
        .hp-workTop{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
        }
        .hp-workNum{
          width:44px; height:44px; border-radius:999px;
          background: rgba(0,119,182,.14);
          color: var(--deep-twilight);
          display:grid; place-items:center;
          font-weight: 900;
        }
        .hp-workIcon{
          width:44px; height:44px; border-radius:16px;
          background: rgba(202,240,248,.85);
          border:1px solid rgba(0,0,0,.04);
          display:grid; place-items:center;
          color: var(--deep-twilight);
          font-size: 18px;
        }
        .hp-workTitle{
          font-weight: 900;
          color: var(--deep-twilight);
          font-size: 18px;
        }
        .hp-workLine{
          height:1px;
          background: rgba(3,4,94,.08);
          margin-top: 4px;
        }
        .hp-workLink{
          text-decoration:none;
          font-weight: 900;
          color: var(--bright-teal-blue);
          display:inline-flex;
          align-items:center;
          margin-top:auto;
        }

        .hp-workSide{
          position:relative;
          border-radius:26px;
          overflow:hidden;
          background: linear-gradient(135deg, var(--bright-teal-blue), var(--deep-twilight));
          padding: 18px;
          box-shadow: 0 20px 60px rgba(0,0,0,.10);
          display:flex;
          flex-direction:column;
          gap:10px;
        }
        .hp-workSideTop{
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:12px;
          color:#fff;
        }
        .hp-workPct{ font-size:56px; font-weight:900; line-height:1; }
        .hp-workSub{ font-weight:900; opacity:.95; }
        .hp-sideChip{
          background: rgba(255,255,255,.14);
          border:1px solid rgba(255,255,255,.16);
          border-radius:999px;
          padding: 8px 10px;
          font-weight: 900;
          color:#fff;
          white-space:nowrap;
        }
        .hp-workFoot{
          color: rgba(255,255,255,.88);
          font-weight: 800;
          font-size: 12px;
        }
        .hp-workImgWrap{
          margin-top:auto;
          border-radius: 22px;
          overflow:hidden;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
        }
        .hp-workImg{
          width:100%;
          height: 280px;
          object-fit: cover;
          display:block;
          transform: scale(1.01);
        }

        /* TESTIMONIALS */
        .hp-testCard{
          background:#fff;
          border-radius:26px;
          box-shadow: 0 16px 45px rgba(0,0,0,.08);
          min-height: 260px;
        }
        .hp-quoteMark{ font-size:52px; color:var(--bright-teal-blue); font-weight:900; line-height:1; }
        .hp-testText{ font-style:italic; font-weight:900; color:var(--deep-twilight); font-size:18px; line-height:1.35; }
        .hp-avatar{
          width:44px; height:44px; border-radius:999px;
          background:#eaf6ff;
          border:2px solid rgba(0,119,182,.25);
        }
        .hp-stars{ display:flex; gap:6px; color:#f4b400; font-size:16px; }

        .hp-carousel{ position:relative; }
        .hp-carBtn{ width: 46px; opacity: 1; }
        .hp-carIcon{
          width: 46px; height: 46px;
          border-radius: 999px;
          background: rgba(3,4,94,.10);
          display:grid; place-items:center;
          color: var(--deep-twilight);
          border: 1px solid rgba(0,0,0,.06);
        }
        .hp-indicators{ position: static; margin-top: 12px; gap: 8px; }
        .hp-indicators [data-bs-target]{
          width: 8px; height: 8px; border-radius: 999px;
          background: var(--bright-teal-blue);
          opacity: .3;
        }
        .hp-indicators .active{ opacity: 1; }

        /* PORTFOLIO */
        .hp-portCard{
          position:relative;
          border-radius:26px;
          overflow:hidden;
          height: 320px;
          box-shadow: 0 20px 55px rgba(0,0,0,.12);
        }
        .hp-portImg{ width:100%; height:100%; object-fit:cover; display:block; }
        .hp-portOverlay{
          position:absolute; inset:0;
          background: linear-gradient(180deg, rgba(3,4,94,.05) 0%, rgba(3,4,94,.78) 100%);
        }
        .hp-portContent{
          position:absolute;
          left:18px; right:18px; bottom:18px;
          color:#fff;
        }
        .hp-plus{
          width:34px; height:34px; border-radius:999px;
          background: rgba(255,255,255,.18);
          border:1px solid rgba(255,255,255,.35);
          display:grid; place-items:center;
          font-weight:900;
          margin-bottom:10px;
        }
        .hp-portTitle{ font-size:22px; font-weight:900; margin-bottom:10px; }
        .hp-portBtn{ border-radius:14px; font-weight:900; padding:10px 14px; }

        /* PARTNERS */
        .hp-partnerCard{
          background: rgba(255,255,255,.75);
          border:1px solid rgba(0,0,0,.04);
          border-radius: 20px;
          padding: 14px 12px;
          text-align:center;
          box-shadow: 0 16px 40px rgba(0,0,0,.06);
          transition: .22s ease;
          height: 100%;
        }
        .hp-partnerCard:hover{ transform: translateY(-6px); }
        .hp-partnerIcon{
          width: 54px; height: 54px;
          margin: 0 auto;
          border-radius: 18px;
          display:grid; place-items:center;
          font-size: 22px;
          color: var(--deep-twilight);
          background: linear-gradient(135deg, rgba(0,119,182,.14), rgba(144,224,239,.35));
          border:1px solid rgba(0,0,0,.04);
        }
        .hp-footerStrip{
          background: rgba(255,255,255,.80);
          border:1px solid rgba(0,0,0,.05);
          border-radius: 22px;
          padding: 16px;
          box-shadow: 0 16px 40px rgba(0,0,0,.06);
        }

        /* Scroll reveal */
        .hp-reveal{ opacity:0; transform: translateY(14px); transition:.65s ease; will-change: transform, opacity; }
        .hp-reveal.hp-in{ opacity:1; transform: translateY(0); }
        .hp-delay1{ transition-delay:.06s; }
        .hp-delay2{ transition-delay:.14s; }

        /* micro animations */
        .hp-bounce{ animation: hpBounce 1.6s ease-in-out infinite; }
        .hp-float{ animation: hpFloat 2.6s ease-in-out infinite; }
        @keyframes hpZoom{ from{ transform:scale(1.06);} to{ transform:scale(1.12);} }
        @keyframes hpBounce{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-6px);} }
        @keyframes hpFloat{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(7px);} }

        /* RESPONSIVE */
        @media (max-width: 991px){
          .hp-heroOverlay{
            background: linear-gradient(180deg, rgba(3,4,94,.80) 0%, rgba(3,4,94,.50) 62%, rgba(3,4,94,.18) 100%);
          }
          .hp-heroContainer{ padding: 52px 10px 22px; }
          .hp-heroBottom{ position: static; margin-top: 22px; padding: 0; }
          .hp-section{ padding: 68px 0; }
          .hp-ctaImg{ height: 380px; }
          .hp-workImg{ height: 260px; }
          .hp-soft{ border-radius: 18px; }
        }

        @media (max-width: 575px){
          .hp-hero{ min-height: 700px; border-radius: 22px; }
          .hp-heroTitle{ font-size: 40px; }
          .hp-miniStat{ min-width: 104px; }
          .hp-aboutCard img{ height: 240px; }
          .hp-statNum{ font-size: 46px; }
          .hp-portCard{ height: 280px; }
          .hp-ctaImg{ height: 320px; }
          .hp-workPct{ font-size: 48px; }
          .hp-workImg{ height: 240px; }
        }
      `}</style>
    </div>
  );
}