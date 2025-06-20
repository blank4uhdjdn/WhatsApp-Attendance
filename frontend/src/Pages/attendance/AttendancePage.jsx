import React from 'react';
import { useLocation } from 'react-router-dom'; // To receive data passed via navigation
import toast from 'react-hot-toast';

const AttendancePage = () => {
  const location = useLocation();
  const attendanceData = location.state?.attendanceData || []; // Get data passed from the previous page

  if (attendanceData.length === 0) {
    toast.error('No attendance data found.');
  }

  const presentCount = attendanceData.filter((item) => item.status === 'present').length;
  const absentCount = attendanceData.filter((item) => item.status === 'absent').length;
  const total = attendanceData.length;
  const percentage = total > 0 ? ((presentCount / total) * 100).toFixed(2) : '0.00';

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>📄 Attendance Summary</h2>

      <p><strong>✅ Present:</strong> {presentCount}</p>
      <p><strong>❌ Absent:</strong> {absentCount}</p>
      <p><strong>📊 Attendance %:</strong> {percentage}%</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th>#</th>
            <th>Subject</th>
            <th>Roll Number</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.subject}</td>
              <td>{item.rollNumber}</td>
              <td style={{ color: item.status === 'present' ? 'green' : 'red' }}>
                {item.status}
              </td>
              <td>{new Date(item.createdAt).toLocaleDateString('en-US')}</td> {/* Formatting the date */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendancePage;
