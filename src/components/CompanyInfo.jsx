import companyLogo from '../assets/logo.webp';

export default function CompanyInfo() {
  return (
    <>
      <hr className="divider" />
      <div className="company-info">
        <div className="company-header">
          <div className="company-logo">
            <img src={companyLogo} alt="Company Logo" className="company-logo-img" />
          </div>
          <h3>Atlassian</h3>
        </div>
        <div className="company-details-grid">
          <div>
            <div className="label">Company size</div>
            <div className="value">1k - 2k Employees</div>
          </div>
          <div>
            <div className="label">Type</div>
            <div className="value">Private</div>
          </div>
          <div>
            <div className="label">Sector</div>
            <div className="value">Information Technology, Infrastructure</div>
          </div>
          <div>
            <div className="label">Funding</div>
            <div className="value">Bootstrapped</div>
          </div>
          <div>
            <div className="label">Founded In</div>
            <div className="value">2019</div>
          </div>
          <div>
            <div className="label">Founded By</div>
            <div className="value">Scott Farquhar, Mike Cannon-Brookes</div>
          </div>
        </div>
      </div>
    </>
  );
}