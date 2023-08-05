//Import mui icons
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import CallIcon from '@mui/icons-material/Call';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='flex justify-center items-center mt-auto h-28 bg-[#7d98a1] text-white text-xs'>
            <p className='basis-5/12 min-w-[260px] ml-3'>&copy; 2023 Created by Nathan Williams</p>
            <div className='flex justify-center flex-1 basis-2/12 text-slate-300 min-w-[330px]'>
                <Tooltip title='Home'>
                    <Link to='/' className='flex justify-center flex-1'>
                        <HomeIcon />
                    </Link>
                </Tooltip>
                <Tooltip title='Career'>
                    <Link to='/career' className='flex justify-center flex-1'>
                        <WorkIcon/>
                    </Link>
                </Tooltip>
                <Tooltip title='School'>
                    <Link to='/school' className='flex justify-center flex-1'>
                        <SchoolIcon/>
                    </Link>
                </Tooltip>
                <Tooltip title='Hobbies'>
                    <Link to='/hobbies' className='flex justify-center flex-1'>
                        <SportsBasketballIcon/>
                    </Link>
                </Tooltip>
                <Tooltip title='Contact'>
                    <Link to='/contact' className='flex justify-center flex-1'>
                        <CallIcon/>
                    </Link>
                </Tooltip>
            </div>
            <div className='basis-5/12'></div>
        </div>
    );
}

export default Footer;