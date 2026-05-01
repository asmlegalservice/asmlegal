import "./Timeline.css";

const timelineData = [
  { title: "HUMAN RIGHTS", year: "2018", date: "April, 12" },
  { title: "NOMINEE OF THE YEAR", year: "2019", date: "June, 19" },
  { title: "BEST FIRM", year: "2020", date: "May, 20" },
  { title: "START", year: "2015", date: "May, 13" },
  { title: "FOUNDING", year: "2016", date: "May, 5" },
];

export default function Timeline() {
  return (
    <div className="timeline-section">

      {/* BACKGROUND */}
      <div className="bg-fixed"></div>
      <div className="overlay"></div>

      <div className="container timeline-content text-white text-center">
        <p className="sub-title">HISTORY</p>
        <h1 className="main-title">Timeline Company</h1>

        <div className="timeline-wrapper">

          {/* LINE */}
          <div className="timeline-line"></div>

          {/* ITEMS */}
          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <div className="timeline-item" key={index}>

                <h6>{item.title}</h6>

                {/* DOT */}
                <div className="dot"></div>

                <p className="year">{item.year}</p>
                <p className="date">{item.date}</p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}