import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from 'react-router-dom';

function BoilerPlate() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default BoilerPlate
