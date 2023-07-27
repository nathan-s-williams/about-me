
function Footer() {
    return (
        <div className='flex justify-center items-center mt-auto h-28 bg-[#7d98a1] text-white text-xs'>
            <p className='basis-7/12 min-w-[260px] ml-3'>&copy; 2023 Created by me... for those interested</p>
            <div className='flex justify-center flex-1 text-slate-300 min-w-[330px]'>
                <a className='flex justify-center flex-1 border-r-2' href={'#'}>Home</a>
                <a className='flex justify-center flex-1 border-r-2' href={'#'}>Career</a>
                <a className='flex justify-center flex-1 border-r-2' href={'#'}>School</a>
                <a className='flex justify-center flex-1 border-r-2' href={'#'}>Hobbies</a>
                <a className='flex justify-center flex-1 border-r-2' href={'#'}>Contact</a>
                <a className='flex justify-center flex-1' href={'#'}>This Site</a>
            </div>
        </div>
    );
}

export default Footer;