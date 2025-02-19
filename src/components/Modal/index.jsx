import { useForm } from "react-hook-form";
import InputText from "@src/components/InputText/index.jsx";

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Password Change Data:", data);
    // Gửi API đổi mật khẩu tại đây
    onClose(); // Đóng modal sau khi gửi thành công
  };

  if (!isOpen) return null; // Ẩn modal nếu chưa mở

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[30rem]">
        <h2 className="text-xl font-bold mb-4">Change Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputText label="Mật khẩu cũ" name="oldPassword" register={register} required error={errors.oldPassword} type="password" />
          <InputText label="Mật khẩu mới" name="newPassword" register={register} required error={errors.newPassword} type="password" />
          <InputText
            label="Nhập lại mật khẩu mới"
            name="confirmPassword"
            register={register}
            required
            error={errors.confirmPassword}
            type="password"
          />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded">Hủy</button>
            <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded">Gửi</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
