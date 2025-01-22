import { Outlet } from 'react-router-dom';
import './Styles/LayoutMain.css'; // Import file CSS

const LayoutAuth = () => {
    return (
        <div className="layout-auth">
            {/* Background */}
            <div className="layout-auth-bg"></div>

            {/* Form Container */}
            <div className="max-h-4/5  md:w-3/5 bg-white p-8 rounded-lg my-5 z-10 relative">
                <div className="flex flex-col md:flex-row">
                    <div className="basis-1/2 mr-0 md:mr-3 flex items-center justify-center">
                        <div className="w-full">
                            <Outlet /> {/* Hiển thị các trang con */}
                        </div>
                    </div>
                    <div className="basis-1/2 hidden md:flex justify-center items-center">
                        {/* Chỗ này có thể để hình ảnh khác hoặc bỏ trống */}
                        <img src="https://i.pinimg.com/736x/10/86/27/1086271be4aff93bbc3d704be022231a.jpg" alt="thumnail" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutAuth;
