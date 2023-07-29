import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function BoilerPlate({content}) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            {content}
            <Footer />
        </div>
    );
}

export default BoilerPlate
