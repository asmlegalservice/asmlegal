import "./VisionSection.css";

const VisionSection = () => {
    const data = [
        {
            icon: "bi bi-eye-fill",
            title: "Vision",
            desc: "To become a leading legal services provider and key player in assisting our clients with all legal issues.",
        },
        {
            icon: "bi bi-bullseye",
            title: "Mission",
            desc: "To understand a client's objective, resolve it, and proactively prevent future problems.",
        },
        {
            icon: "bi bi-heart-fill",
            title: "Goal",
            desc: "To create and maintain trustworthly professional relations by which we both can grow together.",
        },
    
    ];

    return (
        <div className="container py-5">
            <div className="section-header">
                <h2>The ASM Legal Advantage</h2>
            </div>
            <div className="row vision-section-container g-4">

                {data.map((item, index) => (
                    <div className="col-lg-4 col-md-6 col-12" key={index}>

                        <div className="vision-card">
                            <i className={`icon ${item.icon}`}></i>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default VisionSection;