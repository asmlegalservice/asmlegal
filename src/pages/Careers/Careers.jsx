import "./Careers.css";
import { Link } from "react-router-dom";

const Careers = () => {
  const openings = [
    {
      id: 1,
      title: "Associate Lawyer",
      location: "Kolhapur",
      type: "Full-time",
      experience: "2-4 years",
      description: "Join our litigation team handling civil and commercial disputes. Strong research and drafting skills required."
    },
    {
      id: 2,
      title: "Legal Intern",
      location: "Kolhapur",
      type: "Internship",
      experience: "Freshers",
      description: "Gain hands-on experience in legal research, documentation, and court procedures. Law students welcome."
    },
    {
      id: 3,
      title: "Real Estate Legal Advisor",
      location: "Kolhapur",
      type: "Full-time",
      experience: "3-5 years",
      description: "Handle property transactions, due diligence, and real estate documentation for corporate clients."
    },
    {
      id: 4,
      title: "Family Law Associate",
      location: "Kolhapur",
      type: "Full-time",
      experience: "2-5 years",
      description: "Specialize in matrimonial disputes, divorce proceedings, and family counseling matters."
    }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="careers-title">Join Our Team</h1>
              <div className="title-underline"></div>
              <p className="careers-subtitle">
                Build your legal career with ASM Legal Services. We value excellence, integrity, and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="why-join-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card">
                <i className="bi bi-graph-up-arrow"></i>
                <h3>Career Growth</h3>
                <p>Clear progression paths and mentorship from senior partners</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card">
                <i className="bi bi-people-fill"></i>
                <h3>Collaborative Culture</h3>
                <p>Work alongside experienced legal professionals</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card">
                <i className="bi bi-book-fill"></i>
                <h3>Learning Opportunities</h3>
                <p>Regular training sessions and skill development programs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card">
                <i className="bi bi-heart-fill"></i>
                <h3>Work-Life Balance</h3>
                <p>Flexible working hours and supportive environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="openings-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Current Openings</h2>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4">
            {openings.map((job) => (
              <div className="col-lg-6" key={job.id}>
                <div className="job-card">
                  <div className="job-header">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <div className="job-meta">
                    <span><i className="bi bi-geo-alt-fill"></i> {job.location}</span>
                    <span><i className="bi bi-briefcase-fill"></i> {job.experience}</span>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <Link to="/contact" className="apply-btn">
                    Apply Now <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="careers-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2>Do not see the right position?</h2>
              <p>Send us your resume and we will contact you when a suitable opening arises.</p>
              <Link to="/contact" className="btn-submit-resume">
                Submit Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
