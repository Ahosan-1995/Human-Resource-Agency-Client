import { Outlet } from "react-router-dom";
import NavBar from "../SharedComponents/NavBar";
import Footer from "../SharedComponents/Footer";






const Main = () => {


    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;