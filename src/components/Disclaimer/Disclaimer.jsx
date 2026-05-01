import { useEffect, useState } from "react";
import "./Disclaimer.css";

const Disclaimer = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
            document.body.style.overflow = "hidden";
            document.body.classList.add("disclaimer-open");

            if (window.lenis) {
                window.lenis.stop();
            }
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const handleAgree = () => {
        setShow(false);
        document.body.style.overflow = "auto";
        document.body.classList.remove("disclaimer-open");

        if (window.lenis) {
            window.lenis.start();
        }
    };

    if (!show) return null;

    return (
        <div className="disclaimer-overlay">
            <div className="disclaimer-bar">
                <div className="disclaimer-content">
                    <div className="disclaimer-header">
                        <h2 className="disclaimer-title">Disclaimer</h2>
                        <div className="disclaimer-divider"></div>
                    </div>
                    <div className="disclaimer-body">
                        <p>
                            The content provided on the ASM Legal Services website is for informational purposes only and is not intended for commercial exploitation. This information does not constitute, and should not be considered, legal advice or a legal reference. As per the rules of <i>Bar Council of India</i>, this website is not intended to soliciting or advertising in any manner.
                        </p>
                        <p>
                            ASM Legal Services assumes no liability for any interpretation or use of the information contained on this website. This site does not seek to solicit new clients or engage with existing clients. By continuing to use this website, you agree to comply with any updates or revisions to this disclaimer.
                        </p>
                        <p>
                            Unauthorized use of this website's content—including copying, modifying, reproducing, republishing, distributing, displaying, or transmitting any part of the site is strictly prohibited.
                        </p>
                    </div>
                </div>
                <button className="disclaimer-btn" onClick={handleAgree}>
                     Agree
                </button>
            </div>
        </div>
    );
};

export default Disclaimer;