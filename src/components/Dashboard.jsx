// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = ({ records, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Body Temperature</th>
          <th>Blood Pressure</th>
          <th>Heart Rate</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.temperature} °C</td>
            <td>{record.bloodPressure}</td>
            <td>{record.heartRate} bpm</td>
            <td>
              <button onClick={() => onEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Dashboard;
