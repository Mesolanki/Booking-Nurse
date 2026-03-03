import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <style>{`
        :root{
          --deep-twilight: #03045eff;
          --bright-teal-blue: #0077b6ff;
          --turquoise-surf: #00b4d8ff;
          --frosted-blue: #90e0efff;
          --light-cyan: #caf0f8ff;
        }

        .contact-page{
          background: radial-gradient(1200px 700px at 50% 12%,
            rgba(144,224,239,.35),
            rgba(202,240,248,.18) 55%,
            #ffffff 85%);
          color: #0b1220;
        }

       
        

        

        /* SECTION HEAD */
        .pill{
          display:inline-block;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          color: var(--bright-teal-blue);
          border: 1px solid rgba(0,180,216,.35);
          background: rgba(202,240,248,.50);
        }

        .big-title{
          font-weight: 900;
          letter-spacing: -0.02em;
          color: #0b1220;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .muted-para{
          color: #6b7280;
          line-height: 1.9;
          max-width: 520px;
        }

        /* CARDS */
        .soft-card{
          background: rgba(255,255,255,.94);
          border: 1px solid rgba(144,224,239,.45);
          border-radius: 18px;
          box-shadow: 0 18px 45px rgba(3,4,94,.08);
        }

        .info-img{
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(0,119,182,.95), rgba(0,180,216,.65));
          min-height: 170px;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.15);
        }

        .info-img img{
          width: 100%;
          max-width: 210px;
          height: auto;
          filter: drop-shadow(0 16px 22px rgba(3,4,94,.18));
        }

        .icon-badge{
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(0,180,216,.12);
          border: 1px solid rgba(0,180,216,.30);
          display:grid;
          place-items:center;
          color: var(--bright-teal-blue);
          flex: 0 0 auto;
        }

        .label{
          font-size: 12px;
          font-weight: 800;
          color: #0b1220;
          margin-bottom: 2px;
        }

        .value{
          margin:0;
          color:#1f2937;
          font-weight: 600;
          font-size: 14px;
        }

        /* FORM */
        .form-title{
          font-weight: 900;
          color:#0b1220;
          margin-bottom: 14px;
        }

        .form-control, .form-select{
          border-radius: 10px;
          border: 1px solid rgba(148,163,184,.55);
          padding: 10px 12px;
          box-shadow: none !important;
        }

        .form-control:focus, .form-select:focus{
          border-color: rgba(0,180,216,.75);
          box-shadow: 0 0 0 .2rem rgba(0,180,216,.18) !important;
        }

        .send-btn{
          background: var(--bright-teal-blue);
          border: 0;
          font-weight: 800;
          padding: 10px 18px;
          border-radius: 10px;
          box-shadow: 0 14px 28px rgba(0,119,182,.22);
        }

        .send-btn:hover{
          background: #0468a1;
        }

        /* RESPONSIVE */
        @media (max-width: 576px){
          .contact-hero{ min-height: 240px; border-radius: 16px; }
          .hero-title{ font-size: 2rem; }
          .big-title{ font-size: 2.05rem; }
          .muted-para{ max-width: 100%; }
        }

        @media (min-width: 577px){
          .hero-title{ font-size: 2.4rem; }
          .big-title{ font-size: 2.6rem; }
        }
      `}</style>

      {/* HERO */}
      

      {/* BODY */}
      <div className="container pb-5">
        <div className="row g-4 justify-content-center align-items-start">
          {/* LEFT */}
          <div className="col-lg-6">
            <div className="pt-2">
              <span className="pill">Get in Touch</span>
              <h2 className="big-title">We&apos;re Here to Help You</h2>
              <p className="muted-para">
                Reach out to our friendly medical team for clear guidance, quick
                responses, and personalized support for your health concerns.
              </p>
            </div>

            <div className="row g-3 align-items-stretch mt-2">
              <div className="col-md-6">
                <div className="info-img h-100 p-3">
                  <img
                    alt="Doctors"
                    src="https://pngimg.com/uploads/doctor/doctor_PNG16041.png"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="soft-card h-100 p-3 p-md-4">
                  {/* Address */}
                  <div className="d-flex gap-3 mb-3">
                    <div className="icon-badge">📍</div>
                    <div>
                      <div className="label">Address</div>
                      <p className="value">
                        456 Creative District <br />
                        Ahmad Yani, Medan
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="d-flex gap-3 mb-3">
                    <div className="icon-badge">✉️</div>
                    <div>
                      <div className="label">Email</div>
                      <p className="value">hola@dominantsite.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="d-flex gap-3">
                    <div className="icon-badge">📞</div>
                    <div>
                      <div className="label">Phone</div>
                      <p className="value">
                        +800-3374-4676 <br />
                        555-278-4364
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-5">
            <div className="soft-card p-3 p-md-4">
              <h4 className="form-title">Write Us a Message</h4>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">
                      Name *
                    </label>
                    <input
                      className="form-control"
                      placeholder="Your Real Name"
                      type="text"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">
                      Email *
                    </label>
                    <input
                      className="form-control"
                      placeholder="Your Email"
                      type="email"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">
                      Telephone *
                    </label>
                    <input
                      className="form-control"
                      placeholder="Your Phone Number"
                      type="tel"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">
                      Subject *
                    </label>
                    <input
                      className="form-control"
                      placeholder="What Your Urgency"
                      type="text"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-bold text-muted">
                      Message *
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Write your detail urgency here..."
                      rows="5"
                      required
                    />
                  </div>

                  <div className="col-12 pt-1">
                    <button className="btn send-btn text-white" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="py-2" />
      </div>
    </div>
  );
}

