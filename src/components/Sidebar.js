import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaUser,
  FaBook,
  FaClipboardCheck,
  FaBell,
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🎓 Student Dashboard</h2>

      <ul>
        <li><Link to="/"><FaTachometerAlt /> Dashboard</Link></li>

        <li><Link to="/students"><FaUserGraduate /> Students</Link></li>

        <li><Link to="/profile"><FaUser /> Profile</Link></li>

        <li><Link to="/courses"><FaBook /> Courses</Link></li>

        <li><Link to="/attendance"><FaClipboardCheck /> Attendance</Link></li>

        <li><Link to="/notifications"><FaBell /> Notifications</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;