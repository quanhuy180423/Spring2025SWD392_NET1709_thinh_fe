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
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
          <div className="bg-gray-300 p-8 rounded-lg w-[500px] text-center">
            <h2 className="text-xl font-bold mb-4">Đăng ký tiêm chủng</h2>
            
            <div className="text-left mb-4">
              <label className="font-semibold">Chọn người tiêm:</label>
              <div className="bg-gray-400 text-white p-2 mt-1 rounded">Select your child</div>
            </div>
            
            <h3 className="text-lg font-semibold mb-2">Thông tin của child</h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-400 text-white p-2 rounded">Name</div>
              <div className="bg-gray-400 text-white p-2 rounded">Name</div>
              <div className="bg-gray-400 text-white p-2 rounded">Name</div>
              <div className="bg-gray-400 text-white p-2 rounded">Name</div>
            </div>
            
            <div className="text-left mb-4">
              <label className="font-semibold">Chọn Vaccine:</label>
              <div className="bg-gray-400 text-white p-2 mt-1 rounded">Select vaccine</div>
            </div>
            
            <div className="text-left mb-4">
              <label className="font-semibold">Chọn ngày tiêm:</label>
              <div className="bg-gray-400 text-white p-2 mt-1 rounded">18/04/2024</div>
            </div>
            
            <div className="text-left mb-4">
              <label className="font-semibold">Chọn ngày tiêm:</label>
              <div className="bg-gray-400 text-white p-2 mt-1 rounded">14:00</div>
            </div>
            
            <button className="bg-gray-400 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </div>
      );
};

export default RegisterVaccination;
