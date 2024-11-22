import React from 'react';
import DoctorDashboard from '../components/sidebar';

function Settings() {
  return (
    <div className="flex">
      <DoctorDashboard />

      <div className="flex-grow p-4">
        <h1 className="text-xl font-bold">Settings</h1>
        <p>Here you can add the main content related to Settings.</p>
      </div>
    </div>
  );
}

export default Settings;
