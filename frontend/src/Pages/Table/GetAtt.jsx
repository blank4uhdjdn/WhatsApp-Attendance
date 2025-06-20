  
import React, { useState } from 'react';
import '../MainHome/MainHome.css'
import toast from 'react-hot-toast';
import logo1 from "../Images/logo.jpg";


const AttendanceCard = () => {
  const [getSubject, setGetSubject] = useState('');
  const [getrollNumber, setGetrollNumber] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetAttendance = async () => {
    setLoading(true);
    setAttendanceData([]);

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
        setAttendanceData(data);
      } else {
        toast.error("No attendance found")
      }
    } catch (error) {
      alert('Failed to fetch attendance');
    } finally {
      setLoading(false);
    }
  };

  const presentCount = attendanceData.filter((item) => item.status === 'present').length;
  const absentCount = attendanceData.filter((item) => item.status === 'absent').length;
  const total = attendanceData.length;
  const percentage = total > 0 ? ((presentCount / total) * 100).toFixed(2) : '0.00';

  return (
    <>
      <div className='attcon'>
        <div id='cardsg'>
          <div className='inner-most'>
            <div>
              <img src={logo1} alt="logo" className='imge' />
            </div>
            <label htmlFor="subj" className='Subject'>Subject</label>
            <input
              id='subj'
              type="text"
              value={getSubject}
              onChange={(e) => setGetSubject(e.target.value)}
            />
            <br />
            <label htmlFor="roll" className='rollno'>RollNumber</label>
            <input
              id='roll'
              type="text"
              value={getrollNumber}
              onChange={(e) => setGetrollNumber(e.target.value)}
            />
            <br />
            <button id='butn' onClick={handleGetAttendance}>Get Attendance</button>
          </div>
        </div>
      </div>


      {attendanceData.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Attendance Summary</h3>
          <p>✅ Present: {presentCount}</p>
          <p>❌ Absent: {absentCount}</p>
          <p>📊 Attendance %: {percentage}%</p>

          <table border="1" cellPadding="8" style={{ marginTop: '10px', width: '100%' }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Roll Number</th>
                <th>Status</th>
                <th>Date</th> 
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx + 1}</td>
                  <td>{item.subject}</td>
                  <td>{item.rollNumber}</td>
                  <td style={{ color: item.status === 'present' ? 'green' : 'red' }}>
                    {item.status}
                  </td>
                  <td>{new Date(item.createdAt).toLocaleDateString('en-US')}</td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AttendanceCard;
