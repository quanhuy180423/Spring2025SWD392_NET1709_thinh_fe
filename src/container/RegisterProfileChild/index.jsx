
import { useForm } from "react-hook-form";

import { FaUser, FaCalendarAlt, FaVenusMars, FaTimes, FaHospital } from 'react-icons/fa'; // Import icons

const RegisterProfileChild = ({ onClose, isOpen }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    if (!isOpen) return null; // Ẩn modal nếu chưa mở

    const onSubmit = async (data) => {
        console.log(data)
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
                {/* Button đóng modal */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                    <FaTimes size={20} />
                </button>

                <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
                    Đăng ký hồ sơ cho trẻ
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Họ và tên</label>
                        <div className="relative flex items-center border-b-2">
                            <FaUser className="text-gray-500 mr-3" />
                            <input
                                {...register("fullname", { required: true })}
                                placeholder="Nhập họ và tên"
                                className="w-full p-2 focus:outline-none"
                            />
                        </div>
                        {errors.fullname && <span className="text-red-500 text-sm">Nhập họ và tên</span>}
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Giới tính</label>
                        <div className="relative flex items-center border-b-2">
                            <FaVenusMars className="text-gray-500 mr-3" />
                            <select
                                {...register("gender", { required: true })}
                                className="w-full p-2 focus:outline-none text-center"
                            >
                                <option value="">----Chọn giới tính----</option>
                                <option value="F">Nữ</option>
                                <option value="M">Nam</option>
                            </select>
                        </div>
                        {errors.gender && <span className="text-red-500 text-sm">Chọn giới tính</span>}
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Ngày sinh</label>
                        <div className="relative flex items-center border-b-2">
                            <FaCalendarAlt className="text-gray-500 mr-3" />
                            <input
                                {...register("birthday", { required: true })}
                                type="date"
                                className="w-full p-2 focus:outline-none"
                            />
                        </div>
                        {errors.birthday && <span className="text-red-500 text-sm">Nhập ngày sinh</span>}
                    </div>

                    {/* birth Place */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Nơi sinh</label>
                        <div className="relative flex items-center border-b-2">
                            <FaHospital className="text-gray-500 mr-3" />
                            <input
                                {...register("fullname", { required: true })}
                                placeholder="Nhập nơi sinh"
                                className="w-full p-2 focus:outline-none"
                            />
                        </div>
                        {errors.fullname && <span className="text-red-500 text-sm">Nhập nơi sinh</span>}
                    </div>

                    {/*birth Method */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Phương pháp sinh</label>
                        <div className="relative flex items-center border-b-2">
                            <FaHospital className="text-gray-500 mr-3" />
                            <input
                                {...register("fullname", { required: true })}
                                placeholder="Phương pháp sinh"
                                className="w-full p-2 focus:outline-none"
                            />
                        </div>
                        {errors.fullname && <span className="text-red-500 text-sm">Phương pháp sinh</span>}
                    </div>


{/* cân nặng chiều cao */}
<div>
                        {/*birth Method */}
                        <div>
                        <label className="block text-gray-700 font-semibold mb-1">Phương pháp sinh</label>
                        <div className="relative flex items-center border-b-2">
                            <FaHospital className="text-gray-500 mr-3" />
                            <input
                                {...register("fullname", { required: true })}
                                placeholder="Phương pháp sinh"
                                className="w-full p-2 focus:outline-none"
                            />
                        </div>
                        {errors.fullname && <span className="text-red-500 text-sm">Phương pháp sinh</span>}
                    </div>
</div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold transition"
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterProfileChild