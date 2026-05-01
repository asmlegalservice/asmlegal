

import Carousel from "./ComponentsHome/Slider/Carousel.jsx";
import PracticeArea from "./ComponentsHome/PracticeArea/PracticeArea.jsx";
import BlogSection from "./ComponentsHome/BlogSection/BlogSection.jsx";
import VisionSection from "./ComponentsHome/VisionSection/VisionSection.jsx";

const Home = () => {
    return (
        <div className="">
           <Carousel />
           <VisionSection />
           <BlogSection />
           <PracticeArea />
           
          
        </div>
    );
};

export default Home;