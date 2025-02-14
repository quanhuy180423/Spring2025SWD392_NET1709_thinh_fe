import { Link } from 'react-router-dom';
import routes from '../../router';
import { Assets } from '../../assets/Assets';
import { FaUser } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';

const Header = () => {
    return (
        <>
            <header className="flex flex-wrap items-center justify-between p-2 bg-white shadow-md">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to={routes.home}>
                        <img
                            src={Assets.logoMedicineRemoveBackground}
                            alt="logo"
                            className="w-16 h-16 rounded-full cursor-pointer border-2 border-slate-300"
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center">
                    <ul className="list-none flex flex-row gap-6">
                        <li className="text-lg font-medium hover:text-teal-500">
                            <Link to={routes.home}>Home</Link>
                        </li>
                        <li className="text-lg font-medium hover:text-teal-500">Guide</li>
                        <li className="text-lg font-medium hover:text-teal-500">Services</li>
                        <li className="text-lg font-medium hover:text-teal-500">Price List</li>
                        <li className="text-lg font-medium hover:text-teal-500">
                            <Link to={routes.aboutUs}>About Us</Link>
                        </li>
                    </ul>
                </div>

                {/* User Actions */}
                <div className="flex flex-col gap-2 items-center md:items-end">
                    <div className="flex gap-3 items-center">
                        <FaUser className="text-teal-500" />
                        <Link to={routes.auth.login} className="text-lg font-medium hover:text-teal-500">
                            Login
                        </Link>
                    </div>
                    <div className="flex gap-3 items-center bg-teal-100 p-2 rounded-md hover:bg-teal-200">
                        <FaCalendar className="text-teal-500" />
                        <Link
                            to={routes.registerVaccination}
                            className="text-lg font-medium hover:text-teal-500"
                        >
                            Register for vaccination
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu (Hamburger Icon) */}
                <div className="block md:hidden">
                    <button className="text-teal-500 focus:outline-none">
                        {/* Add your mobile menu icon here */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
