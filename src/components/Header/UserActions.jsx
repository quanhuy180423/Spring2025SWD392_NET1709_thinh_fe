import { Link } from "react-router-dom";
import { FaUser, FaRegCalendarAlt } from "react-icons/fa";
import routes from "@src/router/index.js";

const UserActions = () => {
    return (
        <div className="flex flex-col md:flex-row md:gap-4 items-start md:items-center justify-center">
            <div className="flex gap-3 items-center cursor-pointer bg-white py-2 rounded-full">
                <FaUser className="text-[rgb(33,103,221)]" />
                <Link to={routes.auth.login} className="text-lg text-[rgb(33,103,221)] font-medium ">Đăng nhập</Link>
            </div>
            <div className="flex gap-3 items-center cursor-pointer bg-white py-2 rounded-full">
                <FaRegCalendarAlt className="text-[rgb(33,103,221)]" />
                <Link to={routes.registerVaccination} className="text-lg text-[rgb(33,103,221)] font-medium">Đăng ký tiêm</Link>
            </div>
        </div>
    );
};

export default UserActions;
