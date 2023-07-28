//Import mui icons
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
    return (
        <div className='flex justify-center items-center mt-auto h-28 bg-[#7d98a1] text-white text-xs'>
            <p className='basis-5/12 min-w-[260px] ml-3'>&copy; 2023 Created by me... for those interested</p>
            <div className='flex justify-center flex-1 basis-2/12 text-slate-300 min-w-[330px]'>
                <a className='flex justify-center flex-1' href={'#'}><HomeIcon /></a>
                <a className='flex justify-center flex-1' href={'#'}><WorkIcon /></a>
                <a className='flex justify-center flex-1' href={'#'}><SchoolIcon /></a>
                <a className='flex justify-center flex-1' href={'#'}><SportsBasketballIcon /></a>
                <a className='flex justify-center flex-1' href={'#'}><CallIcon /></a>
            </div>
            <div className='basis-5/12'></div>
        </div>
    );
}

export default Footer;