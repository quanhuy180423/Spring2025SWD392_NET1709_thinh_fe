import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaHome, FaCalendarAlt, FaVenusMars, FaPhone } from 'react-icons/fa'; // Import icons
import routes from '@src/router';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@src/stores/slices/authSlice.js';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status } = useSelector((state) => state.auth);

    const onSubmit = async (data) => {
        dispatch(registerUser({ ...data, role: 'CUSTOMER' })).unwrap().then(navigate(routes.auth.login));
    };


    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="w-full max-w-lg bg-white basis-1/2 mr-0 md:mr-3">
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Đăng ký</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Full Name */}
                        <div className="relative flex items-center border-b-2">
                            <FaUser className="text-gray-500 mr-3" />
                            <input
                                {...register("fullname", { required: true })}
                                placeholder="Họ và tên"
                                className="w-full p-2 focus:outline-none focus:none"
                            />
                        </div>
                        {errors.fullname && <span className="text-red-500 text-sm">Nhập họ và tên</span>}

                        {/* Phone */}
                        <div className="relative flex items-center border-b-2">
                            <FaPhone className="text-gray-500 mr-3" />
                            <input
                                {...register("phoneNumber", { required: true, maxLength: 10, minLength: 10 })}
                                type="text"
                                placeholder="Số điện thoại"
                                className="w-full p-2 focus:outline-none focus:none"
                            />
                        </div>
                        {errors.phoneNumber && <span className="text-red-500 text-sm">Yêu cầu nhập số điện thoại</span>}

                        {/* Email */}
                        <div className="relative flex items-center border-b-2">
                            <FaEnvelope className="text-gray-500 mr-3" />
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Địa chỉ Email"
                                className="w-full p-2 focus:outline-none focus:none"
                            />
                        </div>
                        {errors.email && <span className="text-red-500 text-sm">Nhập địa chỉ Email</span>}

                        {/* Password */}
                        <div className="relative flex items-center border-b-2">
                            <FaLock className="text-gray-500 mr-3" />
                            <input
                                {...register("password", {
                                    required: "Nhập mật khẩu",
                                    minLength: {
                                        value: 8,
                                        message: "Mật khẩu ít nhất 8 ký tự",
                                    },
                                    validate: {
                                        hasUpperCase: (value) =>
                                            /[A-Z]/.test(value) || "Mật khẩu phải có ít nhất 1 ký tự viết hoa",
                                        hasLowerCase: (value) =>
                                            /[a-z]/.test(value) || "Mật khẩu phải có ít nhất 1 ký tự viết thường",
                                        hasNumber: (value) =>
                                            /\d/.test(value) || "Mật khẩu phải có ít nhất 1 số",
                                        hasSpecialChar: (value) =>
                                            /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Mật khẩu phải có ký tự đặc biệt",
                                    },
                                })}
                                type="password"
                                placeholder="Mật khẩu"
                                className="w-full p-2 focus:outline-none"
                            />
                        </div>
                        {errors.password && (
                            <span className="text-red-500 text-sm">{errors.password.message}</span>
                        )}


                        {/* Address */}
                        <div className=" grid grid-cols-4 gap-4 ">
                            <div className="relative flex items-center border-b-2 mb-2">
                                <FaHome className="text-gray-500 mr-3" />
                                <input
                                    {...register("address.unitNumber", { required: true })}
                                    placeholder='Số nhà'
                                    className="w-full p-2 focus:outline-none"
                                />
                            </div>
                            {errors.address?.unitNumber && (
                                <span className="text-red-500 text-sm">Nhập số nhà</span>
                            )}

                            <div className="relative flex items-center border-b-2 mb-2">

                                <input
                                    {...register("address.ward", { required: true })}
                                    placeholder='Phường'
                                    className="w-full p-2 focus:outline-none"
                                />
                            </div>
                            {errors.address?.ward && (
                                <span className="text-red-500 text-sm">Nhập phường/xã</span>
                            )}

                            <div className="relative flex items-center border-b-2 mb-2">
                                <input
                                    {...register("address.district", { required: true })}
                                    placeholder='Quận'
                                    className="w-full p-2 focus:outline-none"
                                />
                            </div>
                            {errors.address?.district && (
                                <span className="text-red-500 text-sm">Nhập quận/huyện</span>
                            )}

                            <div className="relative flex items-center border-b-2 mb-2">
                                <input
                                    {...register("address.province", { required: true })}
                                    placeholder='Thành phố'
                                    className="w-full p-2 focus:outline-none"
                                />
                            </div>
                            {errors.address?.province && (
                                <span className="text-red-500 text-sm">Nhập tỉnh/thành phố</span>
                            )}
                        </div>

                        {/* Gender */}
                        <div className="relative flex items-center border-b-2">
                            <FaVenusMars className="text-gray-500 mr-3" />
                            <select
                                {...register("gender", { required: true })}
                                className="w-full p-2 focus:outline-none focus:none"
                            >
                                {/* <option value="">Select Gender</option> */}
                                <option value="F">Nữ</option>
                                <option value="M">Nam</option>

                            </select>
                        </div>
                        {errors.gender && <span className="text-red-500 text-sm">Chọn giới tính</span>}

                        {/* Date of Birth */}
                        <p>Ngày sinh</p>
                        <div className="relative flex items-center border-b-2">
                            <FaCalendarAlt className="text-gray-500 mr-3" />

                            <input
                                {...register("birthday", { required: true })}
                                type="date"
                                className="w-full p-2 focus:outline-none focus:none"
                            />
                        </div>
                        {errors.birthday && <span className="text-red-500 text-sm">Nhập ngày sinh</span>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold transition"
                        >
                            {status === "Đăng ký" ? "Đợi xíu..." : "Đăng ký"}

                        </button>
                    </form>
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Đã có tài khoản? <Link to={routes.auth.login} className="text-blue-500">Đăng nhập</Link>
                    </p>
                </div>
                <div className="basis-1/2 hidden md:flex justify-center items-center">
                    <img
                        src="https://i.pinimg.com/736x/10/86/27/1086271be4aff93bbc3d704be022231a.jpg"
                        alt="thumbnail"
                    />
                </div>
            </div>

        </>

    );
};

export default Register;