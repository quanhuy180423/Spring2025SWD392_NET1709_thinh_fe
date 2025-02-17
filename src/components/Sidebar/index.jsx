import { Assets } from '@src/assets/Assets.js';
import { FaBlog, FaClipboardList, FaSyringe, FaUser, FaUsers } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { SiGoogleanalytics } from 'react-icons/si';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    // Danh sách chức năng với icon và đường dẫn
    const listFunctions = [
        { name: 'Dashboard', icon: <SiGoogleanalytics size={20} />, path: '/admin' },
        { name: 'User', icon: <FaUsers size={20} />, path: '/users' },
        { name: 'Vaccination', icon: <FaSyringe size={20} />, path: '/vaccination' },
        { name: 'Service', icon: <FaClipboardList size={20} />, path: '/service' },
        { name: 'Blog', icon: <FaBlog size={20} />, path: '/blog' },
        { name: 'Logout', icon: <MdLogout size={20} />, path: '/logout' },
    ];

    return (
        <div className="h-screen bg-gradient-to-b text-blue-400 shadow-lg flex flex-col">
            <div className='mt-3'>
                <div className="flex items-center justify-center gap-2 px-2 cursor-pointer mlg:w-full">
                    <Link to="/">
                        <img src={Assets.logoMedicince} alt="logo" className="w-10 h-10 sm:w-12 bg-blue-400 sm:h-12 rounded-full cursor-pointertransition-all duration-300" />
                    </Link>
                    <h4 className="text-base sm:text-base text-blue-400 font-semibold transition-all duration-300">Nhân Ái</h4>
                </div>

                <div className='p-3'>
                    <Link className='flex items-center justify-center gap-4'>
                        <FaUser size={25} />
                        <h2 className='text-2xl font-bold'>Admin</h2>
                    </Link>
                </div>
            </div>

            <ul className="flex-1 bg-white text-[rgb(33,103,221)]">
                {listFunctions.map((func, index) => (
                    <li key={index} className="group">
                        <Link to={func.path} className="flex items-center gap-3 p-4 hover:bg-blue-500 hover:text-white transition duration-300">
                            {func.icon}
                            <span className="text-lg">{func.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="p-4 text-center text-sm text-blue-400">© 2024 Nhân Ái</div>
        </div>
    );
};

export default Sidebar;
