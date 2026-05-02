import "./NavBar.css";
import logo from "../../assets/ASM_Main_logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Collapse } from "bootstrap";

const servicesData = [
  {
    title: "Real Estate & Property Law",
    items: [
      "Consultation, Contracts & Sub-Contracts",
      "Property Transfer & Succession",
      "Property Development & Transactions",
      "Documentation & Registration",
      "Corporate and Retail Leasing",
      "Real Estate Collaboration & Joint Ventures",

    ],
  },
  {
    title: "Matrimonial & Family Disputes",
    items: [
      "Mutual Divorce",
      "Family Disputes",
      "Domestic Violence",
      "Muslim Divorce",
      "Counselling Mediation & Consultation",
      "Property & Family Disputes",
      "Inheritance & Succession Disputes",
      "Property Partition & Family Settlements"
    ],
  },
  {
    title: "Civil & Revenue Litigation",
    items: [
      "Property Matters",
      "Payment / Debt / Money Recovery",
      "Mediation & Counselling",
      "Insolvency & Bankruptcy",
      "Commercial Disputes",
      "Alternative Dispute Resolution (ADR)",
      "Legal Notice Support",
      "Revenue Matters"
    ],
  },
  {
    title: "Criminal Litigation & White Collar Crimes",
    items: [
      "Cheque Bounce & Financial Disputes",
      "Domestic Violence & Matrimonial Offences",
      "Anticipatory & Regular Bail",
      "Corporate & Financial Fraud",
      "White Collar Crimes & Financial Offences Matters",
      "Business Crime & Corporate Offences",
    ],
  },
  {
    title: " Will, Succession & Estate Planning  ",
    items: [
      "Transfer of family assets and wealth ",
      "Business succession planning ",
      "Protection of beneficiaries’ rights ",
      "Minimizing legal risks and delays ",
      "Inheritance & Succession Disputes",
      "Will & Asset Transfer"
    ],
  },

  {
    title: "Startup & Early Stage Companies",
    items: [
      "Business Formation & Structuring",
      "Clear Contracts & Legal Documentation",
      "Safeguard Your Brand & Business",
      "Founder & Investor Documentation",
      "Business Formation & structuring",
      "Strategic dispute resolution & risk control"
    ],
  },


];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const servicesTimer = useRef(null);
  const blogTimer = useRef(null);

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
      <div className="container-fluid navbar-container">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="ASM Logo" className="navbar-logo" />
          <span>Legal Services</span>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            const nav = document.getElementById("navbarMain");
            if (nav) {
              let bsCollapse = Collapse.getInstance(nav);
              if (!bsCollapse) {
                bsCollapse = new Collapse(nav, { toggle: false });
              }
              if (nav.classList.contains("show")) {
                bsCollapse.hide();
                setServicesOpen(false);
                setBlogOpen(false);
              } else {
                bsCollapse.show();
              }
            }
          }}
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
                Practice Areas
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
              <NavLink to="/published-articles" onClick={closeMenu} className="nav-link">Published Articles</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" onClick={closeMenu} className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/careers" onClick={closeMenu} className="nav-link">Careers</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" onClick={closeMenu} className="nav-link">Contact</NavLink>
            </li>



          </ul>

          <div className="ms-auto">
            <Link to="/contact">
              <button className="btn btn-getInTouch">
                <i className="bi bi-telephone me-1"></i>
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