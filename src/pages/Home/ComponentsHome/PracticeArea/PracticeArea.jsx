import "../PracticeArea/PracticeArea.css";
import img1 from "../../../../assets/criminal.jpg";
import img2 from "../../../../assets/bussiness.jpg";
import img3 from "../../../../assets/contract.jpg";
import img4 from "../../../../assets/suit.jpg";
import img5 from "../../../../assets/family.jpg";
import { Link } from "react-scroll";

const PracticeArea = () => {
  const practiceAreas = [
    {
      image: img2,
      title: "Startup & Early-Stage Companies",
      description: "Civil Rights"
    },
     {
      image: img1,
      title: "Disputes & Litigation",
      description: "Comprehensive legal consultation services"
    },
    {
      image: img3,
      title: "Matrimonial Issues & Divorce",
      description: "Family Law"
    },
    {
      image: img4,
      title: "Real Estate & Property",
      description: "Wills, trusts, and succession planning"
    },
    {
      image: img5,
      title: "Will & Succession Planning",
      description: "Business formation and compliance"
    },
    {
      image: img1,
      title: "Services We Facilitate",
      description: "Read More"
    }
  ];

  return (
    <section className="practice-areas">
      <div className="container">
        <div className="section-header">
          <h2>Practice Areas</h2>
      
        </div>
        
        <div className="row g-4">
          {practiceAreas.map((area, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="practice-item">
                <div className="practice-image">
                  <img src={area.image} alt={area.title} />
                </div>
                <div className="practice-content">
                  <div className="practice-header">
                    <Link to="contact" spy={true} activeClass="active-link" smooth duration={500} className="learn-more">
                     →
                    </Link>
                    <h3>{area.title}</h3>
                  </div>
                  <p>{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeArea;