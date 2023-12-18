import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import { Outlet } from 'react-router-dom';

function SiteMaster() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default SiteMaster
