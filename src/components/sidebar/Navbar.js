import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

import StudentAvatar from '../../images/student-avatar.png';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <button onClick={showSidebar} >+</button>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <button>x</button>
              </Link>
            </li>

            <div className='StudentAvatar'><img src={StudentAvatar} alt="solent logo" /></div>
            <li className="nav-text"><p>Student Name</p></li>
            <li className="nav-text"><p>Student Email</p></li>
            <hr className='SidebarHR'></hr>
            <li className='nav-text'><Link to='/study-helper/tasks'>Tasks</Link></li>
            <li className='nav-text'><Link to='/study-helper/exams'>Exams</Link></li>
            <li className='nav-text'><a target="rel=noopener" href="https://sts.solent.ac.uk/adfs/ls/?wa=wsignin1.0&wtrealm=https%3a%2f%2ftimetable.solent.ac.uk%2fcmisgo&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fCMISGo%252fWeb%252fTimetable&wct=2023-01-13T02%3a25%3a40Z">Timetable</a></li>
            <li className='nav-text'><a target="rel=noopener" href="https://students.solent.ac.uk/">Portal</a></li>
          </ul>
        </nav>
    </>
  );
}

export default Navbar;