

import Carousel from "./ComponentsHome/Slider/Carousel.jsx";
import PracticeArea from "./ComponentsHome/PracticeArea/PracticeArea.jsx";
import BlogSection from "./ComponentsHome/BlogSection/BlogSection.jsx";
import VisionSection from "./ComponentsHome/VisionSection/VisionSection.jsx";
import Divider from "../../components/Divider/Divider.jsx";

const Home = () => {
    return (
        <div className="">
           <Carousel />
           <Divider />
           <VisionSection />
             <Divider />
           <BlogSection />
             <Divider />
           <PracticeArea />
           
          
        </div>
    );
};

export default Home;