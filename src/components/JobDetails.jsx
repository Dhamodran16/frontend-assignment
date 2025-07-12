export default function JobDetails() {
  return (
    <div className="job-details">
      <hr className="divider" />
      <span className="job-section-label">About the job</span>
      <ol className="job-section-list">
        <li>Handle the UI/UX research design</li>
        <li>Work on researching on latest web applications designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>Work on creating graphics content and other graphic related works</li>
      </ol>
      <div style={{ marginTop: '1.5rem' }}>
        <span className="job-section-label">Benefits:</span>
        <ul className="job-section-list">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <span className="job-section-label">Schedule:</span>
        <div style={{ marginLeft: '1.2rem', marginBottom: '0.7rem' }}>Day shift</div>
        <span className="job-section-label">Supplemental pay types:</span>
        <ul className="job-section-list">
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        <span style={{ color: '#888' }}>Work Location:</span> <strong>In person</strong>
      </div>
    </div>
  );
}