import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import toast from 'react-hot-toast';
import '../MainHome/MainHome.css';

const AttendanceCard = () => {
  const [getSubject, setGetSubject] = useState('');
  const [getrollNumber, setGetrollNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const handleGetAttendance = async () => {
    setLoading(true);

    // Clear previous attendance data
    const attendanceData = [];

    try {
      const res = await fetch('/api/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ getSubject, getrollNumber }),
      });

      const data = await res.json();

      if (Array.isArray(data)) {
        // If attendance data is found, navigate to the AttendancePage and pass the data
        navigate('/attendance', { state: { attendanceData: data } });
      } else {
        // If no data, show error toast
        toast.error(data.message || 'No attendance found');
      }
    } catch (error) {
      toast.error('Failed to fetch attendance');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="attcon">
      <div id="cards">
        <div className="inner-most">
          <div>
            <img src="/vite.svg" alt="logo" className="imge" />
          </div>
          <label htmlFor="subj" className="Subject">Subject</label>
          <input
            id="subj"
            type="text"
            value={getSubject}
            onChange={(e) => setGetSubject(e.target.value)}
          />
          <br />
          <label htmlFor="roll" className="rollno">RollNumber</label>
          <input
            id="roll"
            type="text"
            value={getrollNumber}
            onChange={(e) => setGetrollNumber(e.target.value)}
          />
          <br />
          <button id="butn" onClick={handleGetAttendance}>Get Attendance</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
