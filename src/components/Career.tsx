import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Lead Consultant</h4>
                <h5>AI Automation & WP Solutions</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Helped businesses automate daily workflows and build their digital presence through WordPress.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / Workflow Automation</h4>
                <h5>Freelance Consultant</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built AI agents, automated data collection pipelines, and deployed 24/7 customer support chatbots for various clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>WordPress Developer</h4>
                <h5>Independent</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed full-stack school management websites and business portals giving zero-technical-knowledge clients full control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
