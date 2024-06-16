import { Outlet } from "react-router-dom";
import NavBar from "../SharedComponents/NavBar";
import Footer from "../SharedComponents/Footer";


const MainForHr = () => {
    return (
        <div>
            <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainForHr;