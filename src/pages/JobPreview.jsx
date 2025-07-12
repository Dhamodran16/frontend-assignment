import Navbar from '../components/Navbar';
import JobHeader from '../components/JobHeader';
import JobDetails from '../components/JobDetails';
import SidebarStats from '../components/SidebarStats';
import CompanyInfo from '../components/CompanyInfo';

export default function JobPreview() {
  return (
    <div>
      <Navbar />
      <div className="main-card-container">
        <div className="left-panel">
          <JobHeader />
          <JobDetails />
          <CompanyInfo />
        </div>
        <div className="vertical-divider" />
        <div className="right-panel">
          <SidebarStats />
        </div>
      </div>
    </div>
  );
}
