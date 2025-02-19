import { useEffect, useState } from "react";
import { userService } from "@src/services/userService.js";
import TextField from "@src/components/TextField/index.jsx";
import { formatDate } from "@utils/format.js";
import ChangePasswordModal from "@src/components/Modal/index.jsx";
import RegisterProfileChild from "@containers/RegisterProfileChild/index.jsx";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await userService.getUser();
        setUserData(data);
        setEditedData(data); // Khởi tạo dữ liệu chỉnh sửa
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await userService.updateUser(editedData);
      setUserData(editedData);
      setIsEditing(false);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  return (
    <div className="h-full mx-auto bg-white rounded-lg p-6">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Thông tin khách hàng
        </h2>
        <button
          onClick={() => { setIsModalRegister(true); console.log(isModalRegister) }}
          className="bg-[rgb(33,103,221)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 mr-4">
          Đăng ký hồ sơ trẻ em
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {isEditing ? (
            <>
              <div className="pb-4">
                <label className="block text-sm font-bold mb-2">
                  Tên đầy đủ
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={editedData.fullname}
                  onChange={handleInputChange}
                  className="shadow border rounded w-full py-2 px-3 h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="pb-4">
                <label className="block text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={editedData.email}
                  onChange={handleInputChange}
                  className="shadow border rounded w-full py-2 px-3 h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          ) : (
            <>
              <TextField title="Tên đầy đủ" data={userData.fullname} />
              <TextField title="Email" data={userData.email} />
            </>
          )}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {isEditing ? (
            <>
              <div className="pb-4">
                <label className="block text-sm font-bold mb-2">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={editedData.phoneNumber}
                  onChange={handleInputChange}
                  className="shadow border rounded w-full py-2 px-3 h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="pb-4">
                <label className="block text-sm font-bold mb-2">
                  Ngày sinh
                </label>
                <input
                  type="date"
                  name="birthday"
                  value={editedData.birthday}
                  onChange={handleInputChange}
                  className="shadow border rounded w-full py-2 px-3 h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="pb-4">
                <label className="block text-sm font-bold mb-2">
                  Giới tính
                </label>
                <div className="shadow border rounded w-full py-2 px-3 h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <select
                    name="gender"
                    value={editedData.gender === "M" ? "Nam" : " Nữ"}
                    onChange={handleInputChange}
                    className="rounded w-full focus:outline-none"
                  >
                    <option value="M">Nam</option>
                    <option value="F">Nữ</option>
                  </select>
                </div>
              </div>
            </>
          ) : (
            <>
              <TextField
                title="Số điện thoại"
                data={userData.phoneNumber}
              />
              <TextField
                title="Ngày sinh"
                data={formatDate(userData.birthday)}
              />
              <TextField title="Giới tính" data={userData.gender === "M" ? "Nam" : "Nữ"} />
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {isEditing ? (
          <>
            <div className="pb-4">
              <label className="block text-sm font-bold mb-2">
                Số nhà
              </label>
              <input
                type="text"
                name="fullname"
                value={editedData.address.unitNumber}
                onChange={handleInputChange}
                className="shadow border rounded w-full py-2 px-3 h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="pb-4">
              <label className="block text-sm font-bold mb-2">
                Phường/Xã
              </label>
              <input
                type="email"
                name="email"
                value={editedData.address.ward}
                onChange={handleInputChange}
                className="shadow border rounded w-full py-2 px-3 h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </>
        ) : (
          <>
            <TextField title="Số nhà" data={userData.address.unitNumber} />
            <TextField title="Phường/Xã" data={userData.address.ward} />
          </>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {isEditing ? (
          <>
            <div className="pb-4">
              <label className="block text-sm font-bold mb-2">
                Quận/Huyện
              </label>
              <input
                type="text"
                name="fullname"
                value={editedData.address.district}
                onChange={handleInputChange}
                className="shadow border rounded w-full py-2 px-3 h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="pb-4">
              <label className="block text-sm font-bold mb-2">
                Tỉnh/Thành phố
              </label>
              <input
                type="email"
                name="email"
                value={editedData.address.province}
                onChange={handleInputChange}
                className="shadow border rounded w-full py-2 px-3 h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </>
        ) : (
          <>
            <TextField title="Quận/Huyện" data={userData.address.district} />
            <TextField title="Tỉnh/Thành phố" data={userData.address.province} />
          </>
        )}
      </div>
      <div>
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6 mr-4"
            >
              Lưu
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-6"
            >
              Hủy
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-[rgb(33,103,221)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 mr-4"
            >
              Thay đổi thông tin
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[rgb(33,103,221)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
            >
              Đổi mật khẩu
            </button>
          </>
        )}
      </div>

      {/* Modal đổi mật khẩu */}
      <ChangePasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Modal đăng ký tài khoảng cho trẻ em */}
      <RegisterProfileChild
        isOpen={isModalRegister}
        onClose={() => setIsModalRegister(false)} />
    </div>
  );
};

export default UserProfile;
