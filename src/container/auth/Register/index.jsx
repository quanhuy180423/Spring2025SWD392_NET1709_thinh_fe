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
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign up</h1>
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
                        {errors.fullname && <span className="text-red-500 text-sm">Full name is required</span>}

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
                        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

                        {/* Password */}
                        <div className="relative flex items-center border-b-2">
                            <FaLock className="text-gray-500 mr-3" />
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters",
                                    },
                                    validate: {
                                        hasUpperCase: (value) =>
                                            /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                                        hasLowerCase: (value) =>
                                            /[a-z]/.test(value) || "Password must contain at least one lowercase letter",
                                        hasNumber: (value) =>
                                            /\d/.test(value) || "Password must contain at least one number",
                                        hasSpecialChar: (value) =>
                                            /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Password must contain at least one special character",
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
                                <span className="text-red-500 text-sm">Unit number is required</span>
                            )}

                            <div className="relative flex items-center border-b-2 mb-2">

                                <input
                                    {...register("address.ward", { required: true })}
                                    placeholder='Phường'
                                    className="w-full p-2 focus:outline-none"
                                />
                            </div>
                            {errors.address?.ward && (
                                <span className="text-red-500 text-sm">Ward is required</span>
                            )}

                            <div className="relative flex items-center border-b-2 mb-2">
                                <input
                                    {...register("address.district", { required: true })}
                                    placeholder='Quận'
                                    className="w-full p-2 focus:outline-none"
                                />
                            </div>
                            {errors.address?.district && (
                                <span className="text-red-500 text-sm">District is required</span>
                            )}

                            <div className="relative flex items-center border-b-2 mb-2">
                                <input
                                    {...register("address.province", { required: true })}
                                    placeholder='Thành phố'
                                    className="w-full p-2 focus:outline-none"
                                />
                            </div>
                            {errors.address?.province && (
                                <span className="text-red-500 text-sm">Province is required</span>
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
                                <option value="F">Female</option>
                                <option value="M">Male</option>

                            </select>
                        </div>
                        {errors.gender && <span className="text-red-500 text-sm">Gender is required</span>}

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
                        {errors.birthday && <span className="text-red-500 text-sm">Date of Birth is required</span>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold transition"
                        >
                            {status === "loading" ? "Register in..." : "Register"}

                        </button>
                    </form>
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Đã có tài khoảng? <Link to={routes.auth.login} className="text-blue-500">Đăng nhập</Link>
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