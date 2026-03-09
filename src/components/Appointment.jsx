import React, { useEffect, useState } from 'react';
import './Appointment.css';
import { Upload } from 'lucide-react';
import api from '../Service/Api';
import { useParams } from 'react-router-dom';

const Appointment = () => {

  const [peasuentdata, setpeasuentdata] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    start_time: "",
    end_time: "",
    fileName: "file name"
  })
  const today = new Date().toISOString().split("T")[0];
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startOptions, setStartOptions] = useState([]);
  const [endOptions, setEndOptions] = useState([]);


  useEffect(() => {
    // Generate start time options dynamically
    const now = new Date();
    const currentHour = now.getHours();
    const options = [];
    let h = currentHour + 1
    // Assuming service runs 24 hours, show next hours from now
    for (h ; h <= 23; h++) {
      const hourStr = h < 10 ? `0${h}:00` : `${h}:00`;
      options.push(hourStr);
    }
    setStartOptions(options);
  }, []);

   useEffect(() => {
  if (startTime) {
    const startHour = parseInt(startTime.split(":")[0]);
    const options = [];
    for (let h = startHour + 1; h <= 23; h++) {
      const hourStr = h < 10 ? `0${h}:00` : `${h}:00`;
      options.push(hourStr);
    }
    setEndOptions(options);
  } else {
    setEndOptions([]);
  }
}, [startTime]);



  const handlinput = ((e) => {
    const { name, value } = e.target
    setpeasuentdata((prev) => ({
      ...prev, [name]: value
    }))
  })
  const [disdata, setdisdata] = useState();

  

  const { id } = useParams();



  useEffect(() => {
    displayapi();
  }, []);

  const displayapi = async () => {
    const res = await api.get("/nurses");
    const filterdata = res.data.find((l) => l.id == id);
    setdisdata(filterdata);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentData = {
      nurse: disdata?.name,
      startTime,
      endTime
    };

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
              className="form-control"
              placeholder="Enter Patient Name"
              onChange={handlinput}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Contact Number"
              onChange={handlinput}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={handlinput}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            onChange={handlinput}
            required
          />
        </div>

        <div className="row">
          <div className="col-md-12 mb-3">
            <label className="form-label">Select Date</label>

            <input
              type="date"
              className="form-control"
              defaultValue={today}
              min={today}
              disabled

            />

          </div>
        </div>

        {/* Start Time and End Time */}

          <div className="row animate-fade-in">
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

        <div className="mb-3">
          <label className="form-label">
            Upload Doctor's Receipt / Prescription
          </label>

          <div className="file-upload-wrapper">
            <label htmlFor="receipt-upload" className="file-upload-label">
              <Upload size={18} />
              <span>{peasuentdata.fileName}</span>
            </label>

            <input
              id="receipt-upload"
              type="file"
              className="file-input-hidden"
              accept="image/*,.pdf"
              onChange={handlinput}
            />
          </div>

          <small className="text-muted">
            Max file size: 5MB (JPG, PNG, PDF)
          </small>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Symptoms or Additional Notes"
            onChange={handlinput}
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