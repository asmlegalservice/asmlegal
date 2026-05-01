import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="page-title">Contact Us</h1>
            <div className="title-underline"></div>
            <p className="lead">
              Get in touch with us for expert legal consultation and support.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="contact-card">
              <i className="bi bi-geo-alt contact-icon"></i>
              <h4>Office Address</h4>
              <p> 103/3/3, Unit No. 409, 4th Floor, Krystal Square, E Ward, Nagala Park, Near Khanvilkar Pump, Kolhapur - 416 003</p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="contact-card">
              <i className="bi bi-telephone contact-icon"></i>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
              <p>+91 98765 43211</p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="contact-card">
              <i className="bi bi-envelope contact-icon"></i>
              <h4>Email</h4>
              <p> adv.abduloffice@gmail.com</p>
              <p>support@asmlegal.com</p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="contact-form-wrapper">
              <h3 className="form-title">Send Us a Message</h3>
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                </div>
                <div className="mb-3">
               
                  <select name="Subject" id="Subject" className="form-control">
                    <option value="">Select Subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Legal Consultation">Legal Consultation</option>
                    <option value="Case Evaluation">Case Evaluation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
