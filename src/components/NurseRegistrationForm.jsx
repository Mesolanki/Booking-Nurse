import React, { useState } from "react";

function NurseRegistrationForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Here you can send formData to your backend API
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Nurse Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Info */}
        <h5>Personal Information</h5>
        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Gender</label>
          <select
            name="gender"
            className="form-control"
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

        <div className="mb-3">
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            className="form-control"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <textarea
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Profile Photo</label>
          <input
            type="file"
            name="profilePhoto"
            className="form-control"
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        {/* Professional Info */}
        <h5 className="mt-4">Professional Information</h5>
        <div className="mb-3">
          <label>Qualification</label>
          <input
            type="text"
            name="qualification"
            className="form-control"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Registration Number</label>
          <input
            type="text"
            name="registrationNumber"
            className="form-control"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Years of Experience</label>
          <input
            type="number"
            name="experience"
            className="form-control"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Specialization</label>
          <input
            type="text"
            name="specialization"
            className="form-control"
            value={formData.specialization}
            onChange={handleChange}
          />
        </div>

        {/* Availability */}
        <h5 className="mt-4">Availability</h5>
        <div className="form-check">
          <input
            type="checkbox"
            name="availability"
            value="Morning"
            className="form-check-input"
            onChange={handleChange}
          />
          <label className="form-check-label">Morning</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="availability"
            value="Evening"
            className="form-check-input"
            onChange={handleChange}
          />
          <label className="form-check-label">Evening</label>
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="availability"
            value="Night"
            className="form-check-input"
            onChange={handleChange}
          />
          <label className="form-check-label">Night</label>
        </div>

        {/* Skills */}
        <h5 className="mt-4">Skills / Services Offered</h5>
        {["Dressing", "IV Therapy", "Medication Administration", "Elderly Care", "Physiotherapy"].map(
          (skill) => (
            <div className="form-check" key={skill}>
              <input
                type="checkbox"
                name="skills"
                value={skill}
                className="form-check-input"
                onChange={handleChange}
              />
              <label className="form-check-label">{skill}</label>
            </div>
          )
        )}

        {/* Documents */}
        <div className="mb-3 mt-3">
          <label>Upload Documents (Degree, License, ID)</label>
          <input
            type="file"
            name="documents"
            className="form-control"
            onChange={handleChange}
            accept=".pdf,.jpg,.png"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
      </form>
    </div>
  );
}

export default NurseRegistrationForm;