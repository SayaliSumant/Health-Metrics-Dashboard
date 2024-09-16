// src/components/HealthRecordDetail.jsx
import React from 'react';

const HealthRecordDetail = ({ record, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Health Record Details</h2>
      <p>Date: {record.date}</p>
      <p>Body Temperature: {record.temperature} °C</p>
      <p>Blood Pressure: {record.bloodPressure}</p>
      <p>Heart Rate: {record.heartRate} bpm</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default HealthRecordDetail;
