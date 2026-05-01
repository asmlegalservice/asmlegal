import "./NavBar.css";
import logo from "../../assets/ASM_Main_Logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Collapse } from "bootstrap";

const servicesData = [
  {
    title: "Real Estate & Property Law",
    items: [
      "Real Estate Collaboration & Joint Venture",
      "Documentation & Registration",
      "Real Estate Counseling & Development Transaction",
      "Corporate And Retail Leasing",
      "Dispute Resolution",
      "Consultation, Contract & Sub-Contract",
      "Property Transfer & Succession",
      "Revenue Matters",
    ],
  },
  {
    title: "Matrimonial & Disputes",
    items: ["Divorce", "Family Disputes", "Domestic Violence", "Counselling & Consultation"],
  },
  {
    title: "Litigation",
    items: ["Civil Cases", "Commercial Disputes", "Mediation", "Insolvency"],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [isMobile, setIsMobile]         = useState(window.innerWidth < 992);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogOpen, setBlogOpen]         = useState(false);
  const servicesTimer = useRef(null);
  const blogTimer     = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    const nav = document.getElementById("navbarMain");
    if (nav) {
      const bsCollapse = Collapse.getInstance(nav);
      bsCollapse?.hide();
    }
    setServicesOpen(false);
    setBlogOpen(false);
  };

  // Desktop: hover handlers with delay so gap doesn't kill menu
  const makeHoverHandlers = (setter, timer) => ({
    onMouseEnter: () => {
      if (isMobile) return;
      clearTimeout(timer.current);
      setter(true);
    },
    onMouseLeave: () => {
      if (isMobile) return;
      timer.current = setTimeout(() => setter(false), 100);
    },
  });

  // Mobile: tap toggle
  const makeClickHandler = (state, setter, otherSetter) => ({
    onClick: () => {
      if (!isMobile) return;
      otherSetter(false); // close the other dropdown
      setter(!state);
    },
  });

  return (
    <nav className={`navbar navbar-expand-lg custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid px-4">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="ASM Logo" className="navbar-logo" />
          <span>Legal Services</span>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mx-auto gap-3">

            <li className="nav-item">
              <NavLink to="/" onClick={closeMenu} className="nav-link">Home</NavLink>
            </li>

            {/* SERVICES */}
            <li
              className="nav-item dropdown services-dropdown"
              {...makeHoverHandlers(setServicesOpen, servicesTimer)}
            >
              <button
                className="nav-link dropdown-toggle nav-btn"
                {...makeClickHandler(servicesOpen, setServicesOpen, setBlogOpen)}
              >
                Services
              </button>

              {servicesOpen && (
                <div
                  className="dropdown-menu services-menu show"
                  {...makeHoverHandlers(setServicesOpen, servicesTimer)}
                >
                  <div className="services-grid">
                    {servicesData.map((service, index) => (
                      <div className="services-item" key={index}>
                        <span className="service-title">{service.title}</span>
                        <ul>
                          {service.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* BLOG */}
            <li
              className="nav-item dropdown"
              {...makeHoverHandlers(setBlogOpen, blogTimer)}
            >
              <button
                className="nav-link dropdown-toggle nav-btn"
                {...makeClickHandler(blogOpen, setBlogOpen, setServicesOpen)}
              >
                Blog
              </button>

              {blogOpen && (
                <div
                  className="dropdown-menu blog-menu show"
                  {...makeHoverHandlers(setBlogOpen, blogTimer)}
                >
                  <div className="blog-grid">
                    {[1, 2, 3, 4].map((b) => (
                      <Link key={b} to="/blogs" onClick={closeMenu} className="blog-item">
                        <span>Blog Title {b}</span>
                        <small>Category</small>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li className="nav-item">
              <NavLink to="/about" onClick={closeMenu} className="nav-link">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" onClick={closeMenu} className="nav-link">Contact</NavLink>
            </li>

          </ul>

          <div className="ms-auto">
            <Link to="/contact">
              <button className="btn btn-getInTouch">
                <i className="bi bi-telephone me-2"></i>
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;