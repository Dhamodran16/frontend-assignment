import { FaUserFriends, FaUserCheck, FaRegCommentDots, FaRegEye, FaTrash } from 'react-icons/fa';

export default function SidebarStats() {
  return (
    <div className="sidebar-box">
      <div className="sidebar-btn-row">
        <button className="btn-delete"><FaTrash /> Delete job</button>
        <button className="btn-edit">Edit job</button>
      </div>
      <ul>
        <li><span className="sidebar-label"><FaUserFriends /> Applicants:</span> <strong>400</strong></li>
        <li><span className="sidebar-label"><FaUserCheck /> Matches:</span> <strong>100</strong></li>
        <li><span className="sidebar-label"><FaRegCommentDots /> Messages:</span> <strong>147</strong></li>
        <li><span className="sidebar-label"><FaRegEye /> Views:</span> <strong>800</strong></li>
      </ul>
    </div>
  );
}