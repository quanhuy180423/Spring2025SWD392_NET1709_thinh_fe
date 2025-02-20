
import { userService } from "@src/services/userService.js";
import { useForm } from "react-hook-form";
import {
    FaUser, FaCalendarAlt, FaVenusMars, FaTimes,
    FaHospital, FaExclamationTriangle, FaRulerVertical, FaWeight
}
    from 'react-icons/fa'; // Import icons
import { toast } from "react-toastify";

const RegisterProfileChild = ({ onClose, isOpen, parentInfo }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    if (!isOpen) return null; // Ẩn modal nếu chưa mở

    const onSubmit = async (data) => {
        const updatedData = {
            ...data,
            customerId: parentInfo.id,
            parentName: parentInfo.fullname
        };

        const response = userService.registerChildProfile(updatedData);
        if (!response) {
            toast.error("❌ Đăng ký hồ sơ cho trẻ thất bại!");
        } else {
            toast.success("🎉 Đăng ký hồ sơ cho trẻ thành công!");
            onClose();
        }
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
                    {/* Họ và tên của trẻ */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Họ và tên</label>
                        <div className="relative flex items-center border-b-2">
                            <FaUser className="text-gray-500 mr-3" />
                            <input
                                {...register("childName", { required: true })}
                                placeholder="Nhập họ và tên"
                                className="w-full p-2 focus:outline-none"
                            />
                        </div>
                        {errors.childName && <span className="text-red-500 text-sm">Nhập họ và tên</span>}
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                        {/* Giới tính */}
                        <div className="mt-3">
                            <label className="block text-gray-700 font-semibold mb1 ">Giới tính</label>
                            <div className="relative flex items-center border-b-2">
                                <FaVenusMars className="text-gray-500 mr-3" />
                                <select
                                    {...register("childGender", { required: true })}
                                    className="w-full p-2 focus:outline-none text-center"
                                >
                                    <option value="">----Chọn giới tính----</option>
                                    <option value="F">Nữ</option>
                                    <option value="M">Nam</option>
                                </select>
                            </div>
                            {errors.childGender && <span className="text-red-500 text-sm">Chọn giới tính</span>}
                        </div>

                        {/* Ngày sinh */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Ngày sinh</label>
                            <div className="relative flex items-center border-b-2">
                                <FaCalendarAlt className="text-gray-500 mr-3" />
                                <input
                                    {...register("dateOfBirth", { required: true })}
                                    type="datetime-local"
                                    className="w-full p-2 focus:outline-none"
                                />
                            </div>
                            {errors.dateOfBirth && <span className="text-red-500 text-sm">Nhập ngày sinh</span>}
                        </div>
                    </div>


                    {/* Nơi sinh */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Nơi sinh</label>
                        <div className="relative flex items-center border-b-2">
                            <FaHospital className="text-gray-500 mr-3" />
                            <input
                                {...register("birthPlace", { required: true })}
                                placeholder="Nhập nơi sinh"
                                className="w-full p-2 focus:outline-none"
                            />
                        </div>
                        {errors.birthPlace && <span className="text-red-500 text-sm">Nhập nơi sinh</span>}
                    </div>

                    {/* Phương pháp sinh */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Phương pháp sinh</label>
                        <div className="relative flex items-center border-b-2">
                            <FaHospital className="text-gray-500 mr-3" />
                            <select
                                {...register("birthMethod", { required: true })}
                                className="w-full p-2 focus:outline-none text-center"
                            >
                                <option value="">----Chọn phương pháp sinh----</option>
                                <option value="Sinh thường">Sinh thường</option>
                                <option value="Sinh mổ">Sinh mổ</option>
                            </select>
                        </div>
                        {errors.birthMethod && <span className="text-red-500 text-sm">Chọn phương pháp sinh</span>}
                    </div>



                    <div className="grid grid-cols-2 gap-4">
                        {/* Cân nặng khi sinh */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Cân nặng khi sinh (kg)</label>
                            <div className="relative flex items-center border-b-2">
                                <FaWeight className="text-gray-500 mr-3" />
                                <input
                                    {...register("birthWeight", { required: true, valueAsNumber: true })}
                                    type="number"
                                    step="0.1"
                                    placeholder="Nhập cân nặng (kg)"
                                    className="w-full p-2 focus:outline-none"
                                />
                            </div>
                            {errors.birthWeight && <span className="text-red-500 text-sm">Nhập cân nặng hợp lệ</span>}
                        </div>

                        {/* Chiều cao khi sinh */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Chiều cao khi sinh (cm)</label>
                            <div className="relative flex items-center border-b-2">
                                <FaRulerVertical className="text-gray-500 mr-3" />
                                <input
                                    {...register("birthHeight", { required: true, valueAsNumber: true })}
                                    type="number"
                                    step="0.1"
                                    placeholder="Nhập chiều cao (cm)"
                                    className="w-full p-2 focus:outline-none"
                                />
                            </div>
                            {errors.birthHeight && <span className="text-red-500 text-sm">Nhập chiều cao hợp lệ</span>}
                        </div>
                    </div>


                    {/* Bất thường khi sinh */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Bất thường khi sinh</label>
                        <div className="relative flex items-center border-b-2">
                            <FaExclamationTriangle className="text-gray-500 mr-3" />
                            <input
                                {...register("abnormalities")}
                                placeholder="Ghi chú (nếu có)"
                                className="w-full p-2 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Nút Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold transition"
                    >
                        Đăng ký
                    </button>
                </form>

            </div >
        </div >
    );
}

export default RegisterProfileChild