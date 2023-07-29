import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function App({content}) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            {content}
            <Footer />
        </div>
    );
}

export default App
