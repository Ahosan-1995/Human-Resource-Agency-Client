import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";




const Slider = () => {
  return (
    <div className="mt-20">
      <Carousel>
        <div>
          <img src='https://i.ibb.co/b2j4Qwn/Office-discussion.jpg' />
          <Link to="/registerHr"><button className="legend">Join as HR manager</button></Link>
        </div>
        <div>
          <img src='https://i.ibb.co/Nm2mf31/Office-Room.jpg' />
          <Link to="/registerEmp"><button className="legend">Join as employee</button></Link>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
