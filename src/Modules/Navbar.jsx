
function Navbar() {
    return (
        <div className='flex items-center h-24 w-full bg-[#1c2321]'>
            <p className='flex justify-center flex-1 min-w-[250px] text-white text-[30px]'>Nathan Williams</p>
            <div className='flex justify-center flex-1 text-slate-300 min-w-[450px]'>
                <a className='flex justify-center flex-1' href={'#'}>Home</a>
                <a className='flex justify-center flex-1' href={'#'}>Career</a>
                <a className='flex justify-center flex-1' href={'#'}>School</a>
                <a className='flex justify-center flex-1' href={'#'}>Hobbies</a>
                <a className='flex justify-center flex-1' href={'#'}>Contact</a>
                <a className='flex justify-center flex-1' href={'#'}>This Site</a>
            </div>
        </div>
    );
}

export default Navbar;