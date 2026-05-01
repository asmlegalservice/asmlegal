import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="page-title">About Us</h1>
            <div className="title-underline"></div>
            
            <div className="about-content">
              <p className="lead">
                ASM Legal Services is a premier law firm dedicated to providing exceptional legal 
                services to individuals and businesses across India.
              </p>
              
              <p>
                With years of experience in diverse practice areas including Real Estate Law, 
                Family Law, Corporate Law, and Litigation, our team of expert attorneys brings 
                comprehensive knowledge and strategic thinking to every case.
              </p>
              
              <p>
                We believe in building lasting relationships with our clients based on trust, 
                integrity, and results. Our mission is to understand each client's unique objectives, 
                resolve their legal challenges effectively, and proactively prevent future problems.
              </p>
              
              <h3>Our Values</h3>
              <ul>
                <li><strong>Integrity:</strong> We uphold the highest ethical standards in all our dealings.</li>
                <li><strong>Excellence:</strong> We strive for exceptional outcomes in every case.</li>
                <li><strong>Client-Centricity:</strong> Your needs and goals are our top priority.</li>
                <li><strong>Innovation:</strong> We leverage modern legal strategies and technology.</li>
                <li><strong>Teamwork:</strong> Collaborative approach for comprehensive solutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
