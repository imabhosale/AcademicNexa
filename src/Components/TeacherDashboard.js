import React from 'react';
import SidebarTeacher from './DashboardComponents/SidebarTeacher';
import { Route, Routes } from 'react-router-dom';
// import Sidebar from './Question/AllQuestion';
import AddQuestion from './Question/AddQuestion';

function TeacherDashboard() {
  return (
    <div>
      <>
      <div className="student-dashboard">
        {/* <Navbar /> */}

        <main className='sidebar-main'>
          <div className="side-sidebar">
            {/* Link to Student Profile */}
            <SidebarTeacher/>
          </div>

          <div className="sidebar-cards">
           
                      
            <Routes>
            <Route exact path='/addquestion' element={<AddQuestion/>}></Route>
            
            </Routes>
          </div>
        </main>
      </div>
    </>
    </div>
  );
}

export default TeacherDashboard;
