import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";




const Slider = () => {
  return (
    <div className="mt-20">
      <Carousel>
        <div>
          <img src='https://i.ibb.co/b2j4Qwn/Office-discussion.jpg' />
          <button className="legend">Join as HR manager</button>
        </div>
        <div>
          <img src='https://i.ibb.co/Nm2mf31/Office-Room.jpg' />
          <button className="legend">Join as employee</button>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
