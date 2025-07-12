import locIcon from '../assets/loc.svg';
import coinIcon from '../assets/coin.svg';

export default function JobHeader() {
  return (
    <div className="job-header">
      <div className="job-header-top">
        <h2 className="job-title">Senior Product Designer</h2>
        <span className="job-meta">posted 2 days ago <span className="job-status job-status-open">● Open</span></span>
      </div>
      <div className="job-header-meta">
        <span className="job-location"><img src={locIcon} alt="Location" className="job-header-icon" /> Delaware, USA</span>
        <span className="job-salary"><img src={coinIcon} alt="Salary" className="job-header-icon" /> $300k–$400k</span>
      </div>
      <hr className="divider" />
      <div className="job-header-details">
        <div>
          <div className="job-header-label">Skills Required</div>
          <div className="job-skills">
            <span className="skill-pill figma">Figma</span>
            <span className="skill-pill illustrator">Adobe Illustrator</span>
            <span className="skill-pill xd">Adobe XD</span>
          </div>
        </div>
        <div>
          <div className="job-header-label">Preferred Language</div>
          <div className="job-header-value">English</div>
        </div>
        <div>
          <div className="job-header-label">Type</div>
          <div className="job-header-value">Full time</div>
        </div>
        <div>
          <div className="job-header-label">Years of Experience</div>
          <div className="job-header-value">3+ Years of Experience</div>
        </div>
      </div>
    </div>
  );
}