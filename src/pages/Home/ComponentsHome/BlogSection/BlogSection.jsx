import "./BlogSection.css";
import review1 from "../../../../assets/review1.jpg";
import review2 from "../../../../assets/review2.jpg";
import review3 from "../../../../assets/review3.jpg";
import { Link } from "react-scroll";

const BlogSection = () => {
  
  const testimonials = [
    {
      quote: "I read a lot of reviews and decided to turn to this bureau for legal support of business. I don't have many questions but they always come up unexpectedly and it's good to have experienced lawyers on hand. I've been working with them for over a year now. Never failed. I recommend.",
      image: review1,
      name: "Barbara Davies",
      role: "Entrepreneur"
    },
    {
      quote: "Never expected to get such a powerful theme for this little money! It's a pleasure to work with, seems it just guesses my thoughts! I was looking for a really powerful corporate theme for my website, that would allow formatting and very Diverse content representation. Now I've found it!",
      image: review2,
      name: "Bobby Brown",
      role: "IT-specialist"
    },


  ];
  const LastCard = testimonials[testimonials.length - 1];


  return (
    <section className="blog-section">
      <div className="container">
        <div className="row g-4">
          {/* Left Side - Header */}
          <div className="col-lg-6">
            <div className="col-lg-12">
              <div className="blog-header">
                <span className="blog-label">Testimonials</span>
                <h2 className="blog-title">What Our Clients Say</h2>
                <Link to="contact" spy={true} smooth duration={500} className="blog-link">
                  Share Your Story <span className="arrow">→</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-12">
            
                <div className="col-md-12">
                  <div className="testimonial-card">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{LastCard.quote}</p>
                    <div className="testimonial-author">
                      <img src={LastCard.image} alt={LastCard.name} className="author-img" />
                      <div className="author-info">
                        <h4 className="author-name">{LastCard.name}</h4>
                        <span className="author-role">{LastCard.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
           


            </div>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="col-lg-6">
            <div className="row g-4">
              {testimonials.map((item, index) => (
                <div className="col-md-12" key={index}>
                  <div className="testimonial-card">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{item.quote}</p>
                    <div className="testimonial-author">
                      <img src={item.image} alt={item.name} className="author-img" />
                      <div className="author-info">
                        <h4 className="author-name">{item.name}</h4>
                        <span className="author-role">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
