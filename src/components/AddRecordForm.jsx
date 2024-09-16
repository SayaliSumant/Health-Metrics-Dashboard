// src/components/AddRecordForm.jsx
import React, { useState } from 'react';

const AddRecordForm = ({ onAddRecord }) => {
  const [formData, setFormData] = useState({
    date: '',
    temperature: '',
    bloodPressure: '',
    heartRate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecord(formData);
    setFormData({
      date: '',
      temperature: '',
      bloodPressure: '',
      heartRate: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="temperature"
        placeholder="Body temperature"
        value={formData.temperature}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="bloodPressure"
        placeholder="Blood pressure (systolic/diastolic)"
        value={formData.bloodPressure}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="heartRate"
        placeholder="Heart rate (bpm)"
        value={formData.heartRate}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddRecordForm;
