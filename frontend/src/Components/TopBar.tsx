
import { BsCalendar3 } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import { Link } from 'react-router-dom';


function TopBar() {
    return (
        <div className='topbar text-black spay flex items-center justify-between p-3 bg-white shadow'>
            <div className='flex items-center space-x-7'>

                <div className="flex items-center h-10 hover:bg-green-500 hover-bg rounded-lg px-3">
                    <Link to="/home" className="flex items-center">
                        <FaHome className='w-6 h-6' />
                        <button className="ml-1">Home</button>
                    </Link>
                </div>

                <div className="flex items-center h-10 hover:bg-green-500 hover-bg rounded-lg px-3">
                    <Link to="/home/reserva" className="flex items-center">
                        <BsCalendar3 className='w-5 h-5' />
                        <button className="ml-1">Nova Reserva</button>
                    </Link>
                </div>

                <div className="flex items-center h-10 hover:bg-green-500 hover-bg rounded-lg px-3 absolute right-0 mr-3">
                    <Link to="/Login" className="flex items-center">
                        <LuLogOut className='w-5 h-5' />
                        <button className="ml-1">Logout</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default TopBar;