import { useState } from "react";
import { Link } from "react-router-dom";

import { Assets } from '../../assets/Assets.js'
import Navigation from "./Navigation.jsx";
import UserActions from "./UserActions.jsx";
import MobileMenu from "./MobileMenu.jsx";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md ">
            {/* Logo */}
            <div className="flex items-center gap-2 px-2  cursor-pointer mlg:w-full">
                <Link to="/">
                    <img src={Assets.logoMedicineRemoveBackground} alt="logo" className="w-16 h-16 rounded-full cursor-pointer" />
                </Link>
                <h4 className="text-lg font-semibold">Nhân Ái</h4>
            </div>

            {/* Navigation Links (Ẩn trên mobile) */}
            <div className="hidden md:flex">
                <Navigation />
            </div>


            {/* User Actions */}
            <div className="hidden md:flex">
                <UserActions />
            </div>

            {/* Mobile Menu (Hiển thị khi màn hình nhỏ) */}
            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </header>
    );
};

export default Header;
