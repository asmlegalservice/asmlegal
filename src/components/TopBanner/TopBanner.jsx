import "bootstrap-icons/font/bootstrap-icons.css";
import "./TopBanner.css";

const TopBanner = () => {
  return (
    <div className="TopBanner-container d-none d-md-block">
      <div className="row d-flex justify-content-between align-items-center">

        {/* Left: Navigation Links */}
        <div className="col-auto d-flex align-items-center">
          {/* <div className="topSection">Our Attorneys</div>
          <span className="separator">|</span>
          <div className="topSection">FAQ</div>
          <span className="separator">|</span>
          <div className="topSection">Our Expertise</div> */}
        </div>

        {/* Right: Hours & Contact */}
        <div className="col-auto d-flex gap-3 align-items-center">
          <div className="section gap-4">
            <i className="bi bi-telephone-fill"> </i>
            <span>+91 93700 72022</span>
          </div>
          <span className="separator">|</span>
          <div className="section d-flex align-items-center gap-1">
            <i className="bi bi-envelope-check-fill"></i>
            <span>adv.abduloffice@gmail.com</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBanner;