import { Outlet } from "react-router-dom";
import NavBar from "../SharedComponents/NavBar";
import Footer from "../SharedComponents/Footer";
import { Helmet } from "react-helmet-async";

const MainForHr = () => {
  return (
    <div>
      <Helmet>
        <title>Human Agency | HR-Main</title>
      </Helmet>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainForHr;
