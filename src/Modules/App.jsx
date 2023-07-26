import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div>
                Home page content..
            </div>
            <Footer />
        </div>
    )
}

export default App
