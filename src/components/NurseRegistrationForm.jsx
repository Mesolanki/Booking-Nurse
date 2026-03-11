import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Service/Api";

function NurseRegistrationForm() {
  const navigasion=useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    email: "",
    address: "",
    profilePhoto: null,
    qualification: "",
    registrationNumber: "",
    experience: "",
    specialization: "",
    availability: [],
    skills: [],
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      const newArray = formData[name].includes(value)
        ? formData[name].filter((item) => item !== value)
        : [...formData[name], value];
      setFormData({ ...formData, [name]: newArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await api.post("/nurses",formData)
    console.log("Form Data Submitted:", formData)
    // navigasion("/Nursingsloat")
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg">
        <div className="card-body p-4">
          <h2 className="text-center mb-4">Nurse Registration</h2>

          <form onSubmit={handleSubmit}>
            
            
            <h5 className="mb-3 text-primary">Personal Information</h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  className="form-select"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  className="form-control"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                className="form-control"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Profile Photo</label>
              <input
                type="file"
                name="profilePhoto"
                className="form-control"
                onChange={handleChange}
                accept="image/*"
              />
            </div>

          
            <h5 className="mt-4 mb-3 text-primary">Professional Information</h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  className="form-control"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Registration Number</label>
                <input
                  type="text"
                  name="registrationNumber"
                  className="form-control"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Years of Experience</label>
                <input
                  type="number"
                  name="experience"
                  className="form-control"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  className="form-control"
                  value={formData.specialization}
                  onChange={handleChange}
                />
              </div>
            </div>

            
            <h5 className="mt-4 mb-3 text-primary">Availability</h5>
            <div className="d-flex gap-4 mb-3">
              {["Morning", "Evening", "Night"].map((time) => (
                <div className="form-check" key={time}>
                  <input
                    type="checkbox"
                    name="availability"
                    value={time}
                    className="form-check-input"
                    onChange={handleChange}
                  />
                  <label className="form-check-label">{time}</label>
                </div>
              ))}
            </div>

            
            <h5 className="mt-4 mb-3 text-primary">Skills / Services Offered</h5>

            <div className="row">
              {[
                "Dressing",
                "IV Therapy",
                "Medication Administration",
                "Elderly Care",
                "Physiotherapy",
              ].map((skill) => (
                <div className="col-md-4 form-check mb-2" key={skill}>
                  <input
                    type="checkbox"
                    name="skills"
                    value={skill}
                    className="form-check-input"
                    onChange={handleChange}
                  />
                  <label className="form-check-label">{skill}</label>
                </div>
              ))}
            </div>

            
            <div className="mb-3 mt-4">
              <label className="form-label">
                Upload Documents (Degree, License, ID)
              </label>
              <input
                type="file"
                name="documents"
                className="form-control"
                onChange={handleChange}
                accept=".pdf,.jpg,.png"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5 py-2">
                Register
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default NurseRegistrationForm