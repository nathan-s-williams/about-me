import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='flex items-center h-24 w-full bg-[#1c2321]'>
            <p className='flex justify-center flex-1 min-w-[250px] text-white text-3xl'>Nathan Williams</p>
            <div className='flex justify-center flex-1 text-slate-300 min-w-[450px]'>
                <Link className='flex justify-center flex-1' to='/'>Home</Link>
                <Link className='flex justify-center flex-1' to='/career'>Career</Link>
                <Link className='flex justify-center flex-1' to='/school'>School</Link>
                <Link className='flex justify-center flex-1' to='/hobbies'>Hobbies</Link>
                <Link className='flex justify-center flex-1' to='/contact'>Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;