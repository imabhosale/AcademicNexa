// StudentDashboard.js
import React from 'react';
import './StudentDashboard.css';
import { Route, Routes } from 'react-router-dom';
import StudentDashboardCards from './DashboardComponents/StudentDashboardCards';
import Sidebar from './DashboardComponents/Sidebar';
import StudentProfile from './StudentProfile'

function StudentDashboard() {
  return (
    <>
      <div className="student-dashboard">
        {/* <Navbar /> */}

        <main className='sidebar-main'>
          <div className="side-sidebar">
            {/* Link to Student Profile */}
            <Sidebar />
          </div>

          <div className="sidebar-cards">
            <StudentDashboardCards/>
                      
            <Routes>
             
              <Route path="/studentprofile" element={<StudentProfile/>} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

export default StudentDashboard;