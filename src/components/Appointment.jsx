import React, { useEffect, useState } from "react";
import "./Appointment.css";
import { Upload } from "lucide-react";
import api from "../Service/Api";
import { useParams } from "react-router-dom";

const Appointment = () => {

  const [patientData, setPatientData] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    notes: "",
    fileName: "Upload File",
    file: null
  });

  const today = new Date().toISOString().split("T")[0];

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startOptions, setStartOptions] = useState([]);
  const [endOptions, setEndOptions] = useState([]);

  const [disdata, setDisdata] = useState(null);

  const { id } = useParams();

  // Generate Start Time Options
  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const options = [];

    for (let h = currentHour + 1; h <= 23; h++) {
      const hourStr = h < 10 ? `0${h}:00` : `${h}:00`;
      options.push(hourStr);
    }

    setStartOptions(options);
  }, []);

  // Generate End Time based on Start Time
  useEffect(() => {
    if (startTime) {
      const startHour = parseInt(startTime.split(":")[0]);
      const options = [];

      for (let h = startHour + 1; h <= 24; h++) {
        const hourStr = h < 10 ? `0${h}:00` : `${h}:00`;
        options.push(hourStr);
      }

      setEndOptions(options);
    } else {
      setEndOptions([]);
    }
  }, [startTime]);

  // Handle Inputs
  const handleInput = (e) => {
    const { name, value } = e.target;

    setPatientData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle File Upload
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPatientData((prev) => ({
        ...prev,
        fileName: file.name,
        file: file
      }));
    }
  };

  // Fetch Nurse Data
  useEffect(() => {
    displayApi();
  }, []);

  const displayApi = async () => {
    const res = await api.get("/nurses");
    const filterData = res.data.find((n) => n.id == id);
    setDisdata(filterData);
  };

  // Submit Appointment
  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      nurse: disdata?.name,
      nurseid:disdata?.id,
      patientName: patientData.name,
      number: patientData.number,
      email: patientData.email,
      address: patientData.address,
      notes: patientData.notes,
      startTime,
      endTime,
      fileName: patientData.fileName
    };

    await api.post("/appointmentdata", appointmentData);

    console.log(appointmentData);

  };

  return (
    <div className="appointment-card">

      <h2 className="form-title">Book Your Care</h2>

      <span>
        <h3>{disdata?.name}</h3>
        <p>({disdata?.availability})</p>
      </span>

      <form onSubmit={handleSubmit}>

        <div className="row">

          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Patient Name"
              onChange={handleInput}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              name="number"
              className="form-control"
              placeholder="Contact Number"
              onChange={handleInput}
              required
            />
          </div>

        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter Address"
            onChange={handleInput}
            required
          />
        </div>

        {/* Date */}

        <div className="mb-3">
          <label className="form-label">Select Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue={today}
            min={today}
            disabled
          />
        </div>

        {/* Start and End Time */}

        <div className="row">

          <div className="col-md-6 mb-3">
            <label className="form-label">Start Time</label>

            <select
              className="form-control"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            >

              <option value="">Choose Start Time</option>

              {startOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}

            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">End Time</label>

            <select
              className="form-control"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            >

              <option value="">Choose End Time</option>

              {endOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}

            </select>

          </div>

        </div>

        {/* File Upload */}

        <div className="mb-3">

          <label className="form-label">
            Upload Doctor's Receipt / Prescription
          </label>

          <div className="file-upload-wrapper">

            <label htmlFor="receipt-upload" className="file-upload-label">
              <Upload size={18} />
              <span>{patientData.fileName}</span>
            </label>

            <input
              id="receipt-upload"
              type="file"
              className="file-input-hidden"
              accept="image/*,.pdf"
              onChange={handleFile}
            />

          </div>

          <small className="text-muted">
            Max file size: 5MB (JPG, PNG, PDF)
          </small>

        </div>

        {/* Notes */}

        <div className="mb-3">
          <textarea
            name="notes"
            className="form-control"
            rows="3"
            placeholder="Symptoms or Additional Notes"
            onChange={handleInput}
          ></textarea>
        </div>

        <button type="submit" className="pm-btn-primary w-100 mt-2">
          Confirm Appointment
        </button>

      </form>

    </div>
  );
};

export default Appointment;