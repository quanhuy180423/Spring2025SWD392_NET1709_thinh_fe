
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { FaUser, FaCalendarAlt, FaVenusMars } from 'react-icons/fa'; // Import icons

const RegisterProfileChild = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status } = useSelector((state) => state.auth);

    const onSubmit = async (data) => {
        console.log(data)
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-6">
                <div className="w-full max-w-lg bg-white basis-1/2 mr-0 md:mr-3 my-11 p-6 ring-2  ring-inset rounded-xl">
                    <h1 className="text-2xl font-bold mb-3 text-center text-gray-700">Đăng ký hồ sơ cho cho trẻ</h1>
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

                        {/* Gender */}
                        <div className="relative flex items-center border-b-2">
                            <FaVenusMars className="text-gray-500 mr-3" />
                            <select
                                {...register("gender", { required: true })}
                                className="w-full p-2 focus:outline-none focus:none text-center"
                            >
                                {/* <option value="">Select Gender</option> */}
                                <option value=''>----Chọn giới tính----</option>
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

                </div>
            </div>
        </div>
    )
}

export default RegisterProfileChild