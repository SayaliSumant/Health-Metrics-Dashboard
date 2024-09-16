// src/App.jsx
import React, { useState } from 'react';
import AddRecordForm from './components/AddRecordForm';
import Dashboard from './components/Dashboard';
import HealthRecordDetail from './components/HealthRecordDetail';
import SearchBar from './components/SearchBar';

const App = () => {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState(records);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleAddRecord = (record) => {
    setRecords([...records, record]);
    setFilteredRecords([...records, record]);
  };

  const handleEditRecord = (index) => {
    const updatedRecords = [...records];
    const editedRecord = prompt('Edit record details:', JSON.stringify(records[index]));
    if (editedRecord) {
      updatedRecords[index] = JSON.parse(editedRecord);
      setRecords(updatedRecords);
      setFilteredRecords(updatedRecords);
    }
  };

  const handleDeleteRecord = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
    setFilteredRecords(updatedRecords);
  };

  const handleSearch = (searchTerm) => {
    const filtered = records.filter(
      (record) =>
        record.date.includes(searchTerm) ||
        record.heartRate >= searchTerm
    );
    setFilteredRecords(filtered);
  };

  const handleSelectRecord = (index) => {
    setSelectedRecord(records[index]);
  };

  return (
    <div>
      <h1>Health Metrics Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <AddRecordForm onAddRecord={handleAddRecord} />
      <Dashboard
        records={filteredRecords}
        onEdit={handleEditRecord}
        onDelete={handleDeleteRecord}
      />
      {selectedRecord && (
        <HealthRecordDetail
          record={selectedRecord}
          onEdit={() => handleEditRecord(records.indexOf(selectedRecord))}
          onDelete={() => handleDeleteRecord(records.indexOf(selectedRecord))}
        />
      )}
    </div>
  );
};

export default App;
