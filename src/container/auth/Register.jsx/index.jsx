import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaHome, FaCalendarAlt, FaVenusMars } from 'react-icons/fa'; // Import icons
import routes from '@src/router';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="w-full max-w-md bg-white basis-1/2 mr-0 md:mr-3">
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Full Name */}
                        <div className="relative flex items-center border-b-2">
                            <FaUser className="text-gray-500 mr-3" />
                            <input
                                {...register("fullname", { required: true })}
                                placeholder="Full Name"
                                className="w-full p-2 focus:outline-none focus:none"
                            />
                        </div>
                        {errors.fullname && <span className="text-red-500 text-sm">Full name is required</span>}

                        {/* Address */}
                        <div className="relative flex items-center border-b-2">
                            <FaHome className="text-gray-500 mr-3" />
                            <input
                                {...register("address", { required: true })}
                                placeholder="Address"
                                className="w-full p-2 focus:outline-none focus:none"
                            />
                        </div>
                        {errors.address && <span className="text-red-500 text-sm">Address is required</span>}

                        {/* Date of Birth */}
                        <div className="relative flex items-center border-b-2">
                            <FaCalendarAlt className="text-gray-500 mr-3" />
                            <input
                                {...register("dob", { required: true })}
                                type="date"
                                placeholder="Date of Birth"
                                className="w-full p-2 focus:outline-none focus:none"
                            />
                        </div>
                        {errors.dob && <span className="text-red-500 text-sm">Date of Birth is required</span>}

                        {/* Gender */}
                        <div className="relative flex items-center border-b-2">
                            <FaVenusMars className="text-gray-500 mr-3" />
                            <select
                                {...register("gender", { required: true })}
                                className="w-full p-2 focus:outline-none focus:none"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        {errors.gender && <span className="text-red-500 text-sm">Gender is required</span>}

                        {/* Email */}
                        <div className="relative flex items-center border-b-2">
                            <FaEnvelope className="text-gray-500 mr-3" />
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 focus:outline-none focus:none"
                            />
                        </div>
                        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

                        {/* Password */}
                        <div className="relative flex items-center border-b-2">
                            <FaLock className="text-gray-500 mr-3" />
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Password"
                                className="w-full p-2 focus:outline-none focus:none"
                            />
                        </div>
                        {errors.password && <span className="text-red-500 text-sm">Password is required</span>}

                        {/* Confirm Password */}
                        {/* <div className="relative flex items-center border-b-2">
                    <FaLock className="text-gray-500 mr-3" />
                    <input
                        {...register("confirmPassword", { required: true })}
                        type="password"
                        placeholder="Repeat your password"
                        className="w-full p-3 focus:outline-none focus:none"
                    />
                </div>
                {errors.confirmPassword && <span className="text-red-500 text-sm">Repeat password is required</span>} */}

                        {/* Terms and Conditions */}
                        <div className="flex items-center">
                            <input
                                {...register("terms", { required: true })}
                                type="checkbox"
                                className="mr-2"
                            />
                            <label className="text-sm text-gray-600">
                                I agree all statements in <Link to="#" className="text-blue-500">Terms of service</Link>
                            </label>
                        </div>
                        {errors.terms && <span className="text-red-500 text-sm">This field is required</span>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold transition"
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Already have an account? <Link to={routes.auth.login} className="text-blue-500">Login here</Link>
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
