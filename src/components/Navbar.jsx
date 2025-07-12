import { Link, useLocation } from 'react-router-dom';
import SegmentedNav from './SegmentedNav';
import avatarLogo from '../assets/logo.webp';
import bellIcon from '../assets/bell.svg';

export default function Navbar() {
  const location = useLocation();
  return (
    <header className="top-navbar">
      <div className="navbar-row-flex">
        <div className="logo-box">
          <span className="logo-text">Logo</span>
          <hr className="divider" style={{ margin: '0 0 0 1.5rem', width: '1px', height: '32px', background: '#ececec', border: 'none', display: 'inline-block', verticalAlign: 'middle' }} />
        </div>
        <div className="segmented-nav-row">
          <SegmentedNav />
        </div>
        <div className="navbar-right">
          <span className="icon-bell"><img src={bellIcon} alt="bell" className="bell-icon-img" /><span className="notif-dot"></span></span>
          <span className="avatar"><img src={avatarLogo} alt="avatar" className="avatar-img" /></span>
        </div>
      </div>
      <nav className="main-nav">
        <Link to="/job-preview" className={location.pathname === '/job-preview' || location.pathname === '/' ? 'active-tab' : ''}>Job preview</Link>
        <Link to="/applicants" className={location.pathname === '/applicants' ? 'active-tab' : ''}>Applicants</Link>
        <Link to="/match" className={location.pathname === '/match' ? 'active-tab' : ''}>Match</Link>
        <Link to="/messages" className={location.pathname === '/messages' ? 'active-tab' : ''}>Messages</Link>
      </nav>
    </header>
  );
}