import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Blogs from "./Blogs";
import CalculationUsers from "./CalculationUsers";
import Gallery from "./Gallery";
import Supplies from "./Supplies";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Banner />
      <Supplies />
      <Testimonials />
      <Gallery />
      <AboutUs />
      <Blogs />
      <CalculationUsers />
    </div>
  );
};

export default Home;
