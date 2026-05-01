import { useState, useEffect, useMemo } from "react";
import { useLottie } from "lottie-react";
import gavelData from "../../assets/Gavel.json";
import "./Loader.css";

const replaceColors = (data) => {
    const jsonStr = JSON.stringify(data);
    // Brand red: #ef4524 → [0.937,0.271,0.141,1]
    const red = "[0.937,0.271,0.141,";
    const replaced = jsonStr
        .replace(/\[0\.043\d*,0\.42\d*,0\.404\d*,/g, red)
        .replace(/\[0\.059\d*,0\.58\d*,0\.561\d*,/g, red);
    return JSON.parse(replaced);
};

const Loader = ({ onDone }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            if (onDone) onDone();
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const modifiedData = useMemo(() => replaceColors(gavelData), []);

    const options = {
        animationData: modifiedData,
        loop: true,
        style: { width: 150, height: 150 }
    };

    const { View } = useLottie(options);

    return (
        <div className={`loader-container ${loading ? '' : 'hidden'}`}>
            {View}
        </div >
    );
};

export default Loader;