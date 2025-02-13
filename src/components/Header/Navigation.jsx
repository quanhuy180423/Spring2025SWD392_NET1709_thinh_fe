import routes from "@src/router/index.js";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="list-none gap-6 sm:flex">
            <li className="text-lg font-medium text-center cursor-pointer relative my-2 ">
                <Link to={routes.home} className="hover:text-teal-500 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full">
                    Home
                </Link>
            </li>
            <li className="text-lg font-medium text-center cursor-pointer relative my-2">
                <span className="hover:text-teal-500 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full">
                    Guide
                </span>
            </li>
            <li className="text-lg font-medium text-center cursor-pointer relative my-2">
                <span className="hover:text-teal-500 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full">
                    Services
                </span>
            </li>
            <li className="text-lg font-medium text-center cursor-pointer relative my-2">
                <span className="hover:text-teal-500 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full">
                    Price List
                </span>
            </li>
            <li className="text-lg font-medium text-center cursor-pointer relative my-2">
                <Link to={routes.aboutUs} className="hover:text-teal-500 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full">
                    About Us
                </Link>
            </li>
        </ul>
    );
};

export default Navigation;
