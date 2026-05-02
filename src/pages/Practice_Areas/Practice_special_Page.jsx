
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { practiceAreas } from "../../Data/Practice_Areas";

const Practice_special_Page = () => {
  const { id } = useParams();

  const service = practiceAreas.find(
    item => item.id === Number(id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <div className="details">
      <img src={service.img} alt={service.title} />
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default Practice_special_Page;