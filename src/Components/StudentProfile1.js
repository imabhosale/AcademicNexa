import React from 'react';
import './StudentDashboard.css';
// import StudentNavbar from './DashboardComponents/StudentNavbar';

import StudentDashboardCards from './DashboardComponents/StudentDashboardCards';
import Sidebar from './DashboardComponents/Sidebar';
import StudentProfile from './StudentProfile';


function StudentProfile1() {
  return (
    <>
    <div>
      {/* <nav>
        <StudentNavbar/>
      </nav> */}
  
    <main className='sidebar-main'>
      <div className="side-sidebar">
   <Sidebar/>
      </div>
      <div className="sidebar-cards">

    <StudentProfile/>
      </div>

    </main>
   {/* <StudentDashboardCards/> */}
    </div>
    </>
  );
}

export default StudentProfile1;
