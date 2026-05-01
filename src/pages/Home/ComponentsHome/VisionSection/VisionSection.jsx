import "./VisionSection.css";

const VisionSection = () => {
    const data = [
        {
            icon: "bi bi-eye-fill",
            title: "Vision",
            desc: "To become a leading legal services provider and key player in assisting our clients with all legal issues.To become a leading legal services provider and key player in assisting our clients with all legal issues",
        },
        {
            icon: "bi bi-bullseye",
            title: "Mission",
            desc: "To understand a client's objective, resolve it, and proactively prevent future problems.To understand a client's objective, resolve it, and proactively prevent future problems.",
        },
        {
            icon: "bi bi-heart-fill",
            title: "Values",
            desc: "Integrity, Excellence, Client-Centricity, Innovation, and Teamwork.Integrity, Excellence, Client-Centricity, Innovation, and Teamwork.",
        },
    
    ];

    return (
        <div className="container py-5">
            <div className="section-header">
                <h2>The ASM Advantage</h2>
            </div>
            <div className="row vision-section-container g-4">

                {data.map((item, index) => (
                    <div className="col-lg-4 col-md-6 col-12" key={index}>

                        <div className="vision-card">
                            <i className={`icon ${item.icon}`} pri-icon></i>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <button className="btn">Read More →</button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default VisionSection;