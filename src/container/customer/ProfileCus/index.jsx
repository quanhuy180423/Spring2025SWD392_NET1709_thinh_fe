import { useEffect, useState } from "react";
import { userService } from "@src/services/userService.js";
import TextField from "@src/components/TextField/index.jsx";
import { formatDate } from "@utils/format.js";
import ChangePasswordModal from "@src/components/Modal/index.jsx";
import RegisterProfileChild from "@containers/RegisterProfileChild/index.jsx";
import EditProfileChild from "@containers/EditChildProfile/index.jsx";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [childData, setChildData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState(null);
  const [childToDelete, setChildToDelete] = useState(null);
  const [count, setCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await userService.getUser();
        const childData = await userService.getAllChildProfile(data.id);
        setUserData(data);
        setEditedData(data);
        setChildData(childData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [count]);

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

  const handleEditChild = (data) => {
    setSelectedChild(data);
    setIsEditModalOpen(true);
  };

  const handleDeleteChild = (id) => {
    setChildToDelete(id);
    setIsDeleteModalOpen(true);
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
    <div className="h-full mx-auto bg-white rounded-lg p-6 overflow-y-auto">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl font-semibold mb-6">Thông tin khách hàng</h2>
        <button
          onClick={() => {
            setIsModalRegister(true);
            console.log(isModalRegister);
          }}
          className="bg-[rgb(33,103,221)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 mr-4"
        >
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
                <label className="block text-sm font-bold mb-2">Email</label>
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
              <TextField title="Số điện thoại" data={userData.phoneNumber} />
              <TextField
                title="Ngày sinh"
                data={formatDate(userData.birthday)}
              />
              <TextField
                title="Giới tính"
                data={userData.gender === "M" ? "Nam" : "Nữ"}
              />
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {isEditing ? (
          <>
            <div className="pb-4">
              <label className="block text-sm font-bold mb-2">Số nhà</label>
              <input
                type="text"
                name="fullname"
                value={editedData.address.unitNumber}
                onChange={handleInputChange}
                className="shadow border rounded w-full py-2 px-3 h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="pb-4">
              <label className="block text-sm font-bold mb-2">Phường/Xã</label>
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
              <label className="block text-sm font-bold mb-2">Quận/Huyện</label>
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
            <TextField
              title="Tỉnh/Thành phố"
              data={userData.address.province}
            />
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

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-6">Thông tin hồ sơ trẻ em</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-center">
                <th className="border px-4 py-2">Tên</th>
                <th className="border border-l px-4 py-2">Giới tính</th>
                <th className="border px-4 py-2">Ngày sinh</th>
                <th className="border px-4 py-2">Nơi sinh</th>
                <th className="border px-4 py-2">Phương pháp sinh</th>
                <th className="border px-4 py-2">Cân nặng</th>
                <th className="border px-4 py-2">Chiều cao</th>
                <th className="border px-4 py-2">Dị tật</th>
                <th className="border px-4 py-2">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {childData.map((child) => (
                <tr key={child.id} className="border-b text-center">
                  <td className="border px-4 py-2">{child.childName}</td>
                  <td className="border px-4 py-2">
                    {child.childGender === "M" ? "Nam" : "Nữ"}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(child.dateOfBirth).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">{child.birthPlace}</td>
                  <td className="border px-4 py-2">{child.birthMethod}</td>
                  <td className="border px-4 py-2">{child.birthWeight} kg</td>
                  <td className="border px-4 py-2">{child.birthHeight} cm</td>
                  <td className="border px-4 py-2">{child.abnormalities}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEditChild(child)}
                      className="bg-[rgb(33,103,221)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDeleteChild(child.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-1"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isDeleteModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded p-6 w-1/3">
                <h3 className="text-xl font-semibold">Xóa hồ sơ trẻ em</h3>
                <p className="my-4">
                  Bạn có chắc chắn muốn xóa hồ sơ của trẻ này?
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsDeleteModalOpen(false)}
                    className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={async () => {
                      if (childToDelete) {
                        await userService.deleteChildProfile(childToDelete); // Gọi API để xóa hồ sơ
                        setChildData(
                          childData.filter(
                            (child) => child.id !== childToDelete
                          )
                        ); // Cập nhật danh sách sau khi xóa
                        setIsDeleteModalOpen(false); // Đóng modal
                      }
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal đổi mật khẩu */}
      <ChangePasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Modal đăng ký tài khoảng cho trẻ em */}
      <RegisterProfileChild
        parentInfo={userData}
        isOpen={isModalRegister}
        onClose={() => {
          setIsModalRegister(false);
          setCount(count + 1);
        }}
      />

      <EditProfileChild
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setCount(count + 1);
        }}
        childInfo={selectedChild}
      />
    </div>
  );
};

export default UserProfile;
