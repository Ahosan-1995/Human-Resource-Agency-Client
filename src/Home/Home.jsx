import { Helmet } from "react-helmet-async";
import EmployeeHome from "../HomeForEmployee/EmployeeHome";
import HomeHrMain from "../HomeForHr/HomeHrMain";
import About from "./About";
import Package from "./Package";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Human Agency | Home</title>
      </Helmet>
      <Slider></Slider>
      <About></About>
      <Package></Package>

      {/* Remove later */}
      <HomeHrMain></HomeHrMain>

      <br />

      <EmployeeHome></EmployeeHome>
    </div>
  );
};

export default Home;
