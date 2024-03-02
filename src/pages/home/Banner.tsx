import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/01.jpg";
import img2 from "../../assets/02.jpg";
import img3 from "../../assets/03.jpg";
import img4 from "../../assets/04.jpg";
import img5 from "../../assets/05.jpg";
import img6 from "../../assets/06.jpg";

const Banner = () => {
  return (
    <div className="mt-0">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
