
function Navbar() {
    return (
        <div className='flex h-24 w-full bg-black'>
            <p className='flex flex-1 justify-center self-center min-w-[250px] text-white text-[30px]'>Nathan Williams</p>
            <div className='flex flex-1 self-center text-slate-300'>
                <div className='flex flex-1 min-w-[250px]'>
                    <a className='flex justify-center flex-1' href={'#'}>Home</a>
                    <a className='flex justify-center flex-1' href={'#'}>Career</a>
                    <a className='flex justify-center flex-1' href={'#'}>School</a>
                    <a className='flex justify-center flex-1' href={'#'}>Hobbies</a>
                </div>
                <div className='flex flex-1 justify-center gap-x-[30px] min-w-[120px]'>
                    <img src={'#'} alt={'#'} />
                    <img src={'#'} alt={'#'} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;