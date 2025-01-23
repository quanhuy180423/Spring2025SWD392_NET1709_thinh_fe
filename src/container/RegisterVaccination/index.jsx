import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FaUser, FaCalendarAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const RegisterVaccination = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isForRelative, setIsForRelative] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Register for Vaccination</h2>
                <p className="text-gray-600">Mời Quý khách đăng ký thông tin tiêm chủng để tiết kiệm thời gian khi đến trung tâm làm thủ tục và hưởng thêm nhiều chính sách ưu đãi khác.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-blue-600 flex items-center mb-4">
                    <FaUser className="mr-2" /> Thông tin người đăng ký
                </h4>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Full Name and Date of Birth */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
                            <input
                                {...register("fullname", { required: "Vui lòng nhập họ và tên" })}
                                type="text"
                                placeholder="Nhập họ và tên"
                                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.fullname && <span className="text-red-500 text-sm">{errors.fullname.message}</span>}
                        </div>
                        <div className="relative">
                            <FaCalendarAlt className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
                            <input
                                {...register("dob", { required: "Vui lòng nhập ngày sinh" })}
                                type="date"
                                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
                        </div>
                    </div>

                    {/* Phone and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <FaPhoneAlt className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
                            <input
                                {...register("phone", { required: "Vui lòng nhập số điện thoại" })}
                                type="tel"
                                placeholder="Nhập số điện thoại"
                                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                        </div>
                        <div className="relative">
                            <FaEnvelope className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Nhập email (Không bắt buộc)"
                                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Registration Type */}
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className={`flex-1 p-3 text-white rounded-lg focus:outline-none ${!isForRelative ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'}`}
                            onClick={() => setIsForRelative(false)}
                        >
                            Tiêm cho tôi
                        </button>
                        <button
                            type="button"
                            className={`flex-1 p-3 rounded-lg focus:outline-none ${isForRelative ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
                            onClick={() => setIsForRelative(true)}
                        >
                            Tiêm cho người thân
                        </button>
                    </div>

                    {/* Additional Form for Relatives */}
                    {isForRelative && (
                        <div className="mt-6">
                            <h5 className="text-lg font-bold text-gray-600 mb-4">Thông tin người thân</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
                                    <input
                                        {...register("relativeFullname", { required: "Vui lòng nhập họ và tên người thân" })}
                                        type="text"
                                        placeholder="Nhập họ và tên người thân"
                                        className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.relativeFullname && <span className="text-red-500 text-sm">{errors.relativeFullname.message}</span>}
                                </div>
                                <div className="relative">
                                    <FaCalendarAlt className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
                                    <input
                                        {...register("relativeDob", { required: "Vui lòng nhập ngày sinh người thân" })}
                                        type="date"
                                        className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.relativeDob && <span className="text-red-500 text-sm">{errors.relativeDob.message}</span>}
                                </div>
                                <div className="relative">
                                    <FaPhoneAlt className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
                                    <input
                                        {...register("relativePhone", { required: "Vui lòng nhập số điện thoại người thân" })}
                                        type="tel"
                                        placeholder="Nhập số điện thoại người thân"
                                        className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.relativePhone && <span className="text-red-500 text-sm">{errors.relativePhone.message}</span>}
                                </div>
                            </div>
                        </div>
                    )}

                    <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterVaccination;
