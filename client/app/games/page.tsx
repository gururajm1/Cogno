import React from 'react';
import DoctorDashboard from '../components/sidebar';

function Games() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <DoctorDashboard />

      {/* Main Content */}
      <div className="flex-grow p-4">
        <h1 className="text-xl font-bold">Games</h1>
        <p>Here you can add the main content related to games.</p>
      </div>
    </div>
  );
}

export default Games;
