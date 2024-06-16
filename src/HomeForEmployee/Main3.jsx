
import NavBar from '../SharedComponents/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponents/Footer';

const Main3 = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main3;