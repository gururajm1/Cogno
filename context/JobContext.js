// context/IdContext.js
import React, { createContext, useEffect, useState } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (job) {
      localStorage.setItem('job', JSON.stringify(job));
    }
  }, [job]);

  // Retrieve job data from localStorage 
  useEffect(() => {
    const storedJob = localStorage.getItem('job');
    if (storedJob) {
      setJob(JSON.parse(storedJob));
    }
  }, []);

  return (
    <JobContext.Provider value={{ job, setJob }}>
      {children}
    </JobContext.Provider>
  );
};