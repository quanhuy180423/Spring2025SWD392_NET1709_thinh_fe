import { Link } from "react-scroll";

const sectionNames = {
    home: "Trang chủ",
    guide: "Hướng dẫn",
    service: "Dịch vụ",
    "price List": "Bảng giá",
    "registerVaccination": "Đăng ký tiêm",
    "about Us": "Giới thiệu",
    blog: "Blog",
};

const Navigation = () => {
    return (
        <ul className="list-none gap-6 sm:flex">
            {Object.entries(sectionNames).map(([section, displayName]) => (
                <li key={section} className="text-lg text-left text-blue-500 md:text-white font-medium md:text-center cursor-pointer relative my-2">
                    <Link
                        to={section}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="hover:text-teal-500 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {displayName}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;
