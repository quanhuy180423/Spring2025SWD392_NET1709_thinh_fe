import { Link } from "react-router-dom";
import { FaUser, FaCalendar } from "react-icons/fa";
import routes from "@src/router/index.js";

const UserActions = () => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <div className="flex gap-3 items-center cursor-pointer">
                <FaUser className="text-teal-500" />
                <Link to={routes.auth.login} className="text-lg font-medium hover:text-teal-500">Login</Link>
            </div>
            <div className="flex gap-3 items-center cursor-pointer">
                <FaCalendar className="text-teal-500" />
                <Link to={routes.registerVaccination} className="text-lg font-medium hover:text-teal-500">Register for vaccination</Link>
            </div>
        </div>
    );
};

export default UserActions;
