import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  // ✅ Email validation
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  // ✅ Phone validation
  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(phone)) {
      setPhoneError("Phone number must be 10 digits");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Field-specific validation
    if (name === "email") validateEmail(value);
    if (name === "phone") validatePhone(value);
  };

  // ✅ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);

    if (!isEmailValid || !isPhoneValid) {
      return;
    }

    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");

    // Optional: reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

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
              <p>
                103/3/3, Unit No. 409, 4th Floor, Krystal Square, E Ward,
                Nagala Park, Near Khanvilkar Pump, Kolhapur - 416 003
              </p>
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
              <p>adv.abduloffice@gmail.com</p>
              <p>support@asmlegal.com</p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="contact-form-wrapper">
              <h3 className="form-title">Send Us a Message</h3>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {emailError && (
                      <small className="text-danger">{emailError}</small>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    {phoneError && (
                      <small className="text-danger">{phoneError}</small>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <select
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Legal Consultation">
                        Legal Consultation
                      </option>
                      <option value="Case Evaluation">Case Evaluation</option>
                      <option value="Career Opportunity">
                        Career Opportunity
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;