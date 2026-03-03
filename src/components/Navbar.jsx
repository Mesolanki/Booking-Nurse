import React, { useEffect, useState } from "react";
// If using react-router-dom, uncomment:
// import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`pm-nav ${scrolled ? "pm-nav--scrolled" : ""}`}>
      <style>{`
        :root{
          --deep-twilight: #03045eff;
          --bright-teal-blue: #0077b6ff;
          --turquoise-surf: #00b4d8ff;
          --frosted-blue: #90e0efff;
          --light-cyan: #caf0f8ff;
        }

        .pm-nav{
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255,255,255,.75);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(144,224,239,.35);
          transition: box-shadow .25s ease, background .25s ease;
        }
        .pm-nav--scrolled{
          background: rgba(255,255,255,.92);
          box-shadow: 0 18px 45px rgba(3,4,94,.10);
        }

        .pm-brand{
          display:flex;
          align-items:center;
          gap:10px;
          text-decoration:none;
          color: var(--deep-twilight);
          font-weight: 900;
          letter-spacing: -.02em;
        }
        .pm-logo{
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--bright-teal-blue), var(--turquoise-surf));
          box-shadow: 0 12px 26px rgba(0,119,182,.20);
          position: relative;
          overflow: hidden;
        }
        .pm-logo::after{
          content:"";
          position:absolute;
          inset:-40%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.45), transparent 55%);
          transform: rotate(20deg);
        }

        .pm-brand span{
          font-size: 18px;
        }

        .pm-toggler{
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(0,180,216,.35);
          background: rgba(202,240,248,.45);
          display:grid;
          place-items:center;
          transition: transform .18s ease, background .18s ease;
        }
        .pm-toggler:hover{
          transform: translateY(-1px);
          background: rgba(202,240,248,.70);
        }

        .pm-bars{
          width: 20px;
          height: 14px;
          position: relative;
        }
        .pm-bars span{
          position:absolute;
          left:0; right:0;
          height:2px;
          background: var(--deep-twilight);
          border-radius: 999px;
          transition: transform .2s ease, top .2s ease, opacity .2s ease;
        }
        .pm-bars span:nth-child(1){ top:0; }
        .pm-bars span:nth-child(2){ top:6px; }
        .pm-bars span:nth-child(3){ top:12px; }

        .pm-open .pm-bars span:nth-child(1){ top:6px; transform: rotate(45deg); }
        .pm-open .pm-bars span:nth-child(2){ opacity:0; }
        .pm-open .pm-bars span:nth-child(3){ top:6px; transform: rotate(-45deg); }

        .pm-links{
          display:flex;
          align-items:center;
          gap: 6px;
        }

        .pm-link{
          position: relative;
          display:inline-flex;
          align-items:center;
          padding: 10px 12px;
          border-radius: 12px;
          text-decoration:none;
          color: #0b1220;
          font-weight: 800;
          font-size: 14px;
          transition: transform .18s ease, background .18s ease, color .18s ease;
        }

        .pm-link:hover{
          background: rgba(202,240,248,.55);
          transform: translateY(-1px);
          color: var(--deep-twilight);
        }

        /* underline animation */
        .pm-link::after{
          content:"";
          position:absolute;
          left: 12px;
          right: 12px;
          bottom: 7px;
          height: 2px;
          background: linear-gradient(90deg, var(--bright-teal-blue), var(--turquoise-surf));
          border-radius: 999px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .22s ease;
          opacity: .95;
        }
        .pm-link:hover::after{
          transform: scaleX(1);
        }

        /* CTA button */
        .pm-cta{
          margin-left: 8px;
          background: linear-gradient(135deg, var(--bright-teal-blue), var(--turquoise-surf));
          color: #fff !important;
          border: 0;
          padding: 10px 14px;
          border-radius: 14px;
          font-weight: 900;
          box-shadow: 0 16px 32px rgba(0,119,182,.22);
        }
        .pm-cta:hover{
          transform: translateY(-2px);
          background: linear-gradient(135deg, #0567a3, var(--turquoise-surf));
        }
        .pm-cta::after{ display:none; }

        /* Mobile collapse animation (no bootstrap JS needed) */
        .pm-collapse{
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transform: translateY(-6px);
          transition: max-height .28s ease, opacity .22s ease, transform .22s ease;
        }
        .pm-collapse.open{
          max-height: 520px;
          opacity: 1;
          transform: translateY(0);
        }

        .pm-mobile-card{
          background: rgba(255,255,255,.96);
          border: 1px solid rgba(144,224,239,.40);
          border-radius: 18px;
          box-shadow: 0 18px 45px rgba(3,4,94,.08);
          padding: 10px;
        }

        @media (min-width: 992px){
          .pm-collapse{ max-height: none; opacity: 1; transform:none; overflow: visible; }
          .pm-mobile-card{ background: transparent; border: 0; box-shadow: none; padding:0; }
        }
      `}</style>

      <nav className="container py-3">
        <div className="d-flex align-items-center justify-content-between">
          <a className="pm-brand" href="/">
            <div className="pm-logo" />
            <span>PORTEA</span>
          </a>

          <div className="d-none d-lg-flex pm-links">
            <a className="pm-link" href="/">Home</a>
            <a className="pm-link" href="/services">All Services</a>
            <a className="pm-link" href="/nurs">All Nurs</a>
            <a className="pm-link" href="/about">About Us</a>
            <a className="pm-link" href="/contact">Contact</a>
            <a className="pm-link pm-cta" href="/appointment">Book Now</a>
          </div>

          {/* Mobile Toggler */}
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

        {/* Mobile Menu */}
        <div className={`pm-collapse d-lg-none ${open ? "open" : ""}`}>
          <div className="pm-mobile-card mt-3">
            <div className="d-grid gap-1">
              <a className="pm-link" href="/" onClick={close}>Home</a>
              <a className="pm-link" href="/services" onClick={close}>All Services</a>
              <a className="pm-link" href="/nurs" onClick={close}>All Nurs</a>
              <a className="pm-link" href="/about" onClick={close}>About Us</a>
              <a className="pm-link" href="/contact" onClick={close}>Contact</a>
              <a className="pm-link pm-cta" href="/appointment" onClick={close}>Book Now</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}