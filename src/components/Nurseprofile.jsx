import React from "react";

function Nurseprofile() {
  return (
    <div className="container-fluid p-4">
      <h4 className="mb-4">Nurse Profile</h4>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="profile-img"
              alt="profile"
            />
            <h5 className="mt-3">Kate Prokopchuk</h5>
            <p className="text-muted">+30 000 23 45 670</p>
            <p className="text-muted">kate@email.com</p>
          </div>
        </div>

        
        <div className="col-md-4">
          <div className="card p-3">
            <h6>General Information</h6>
            <p>Date of Birth: 23.07.1994</p>
            <p>Address: Lviv, Chornovola street</p>
            <p>Registration Date: Thursday, May 25</p>
          </div>
        </div>

        
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Anamnesis</h6>
            <p>Allergies: Nuts, pollen</p>
            <p>Chronic diseases: Asthma</p>
            <p>Blood type: H+</p>
          </div>
        </div>

      </div>

      
      <div className="card mt-4 p-3">
        <h6>Future Visits</h6>

        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Service</th>
              <th>Doctor</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>26 Sep 2023</td>
              <td>Treatment and cleaning</td>
              <td>Oksana Mic.</td>
              <td>
                <span className="badge bg-success">Scheduled</span>
              </td>
            </tr>

            <tr>
              <td>27 Jun 2023</td>
              <td>Teeth Whitening</td>
              <td>Max Oche...</td>
              <td>
                <span className="badge bg-success">Scheduled</span>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      
    </div>
  );
}

export default Nurseprofile;