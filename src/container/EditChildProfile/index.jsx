import { userService } from "@src/services/userService.js";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    FaUser, FaCalendarAlt, FaVenusMars, FaTimes,
    FaHospital, FaExclamationTriangle, FaRulerVertical, FaWeight
} from 'react-icons/fa';
import { toast } from "react-toastify";
import { Modal, Box, Typography, Button } from "@mui/material";

const EditProfileChild = ({ onClose, isOpen, childId }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    console.log(childId)
    useEffect(() => {
        const fetchChild = async () => {
            const reponse = await userService.getChildById(childId);
            setValue("childName", reponse.childName);
            setValue("childGender", reponse.childGender);
            setValue("dateOfBirth", reponse.dateOfBirth);
            setValue("birthPlace", reponse.birthPlace);
            setValue("birthMethod", reponse.birthMethod);
            setValue("birthWeight", reponse.birthWeight);
            setValue("birthHeight", reponse.birthHeight);
            setValue("abnormalities", reponse.abnormalities);
        }

        fetchChild();
    }, [childId]);


    // Set default values for the form if childInfo is provided
    // if (childInfo) {
    //     setValue("childName", childInfo.childName);
    //     setValue("childGender", childInfo.childGender);
    //     setValue("dateOfBirth", childInfo.dateOfBirth);
    //     setValue("birthPlace", childInfo.birthPlace);
    //     setValue("birthMethod", childInfo.birthMethod);
    //     setValue("birthWeight", childInfo.birthWeight);
    //     setValue("birthHeight", childInfo.birthHeight);
    //     setValue("abnormalities", childInfo.abnormalities);
    // }

    if (!isOpen) return null; // Ẩn modal nếu chưa mở

    const onSubmit = async (data) => {
        const updatedData = {
            ...data,
            id: childId, // Giữ lại ID của trẻ để cập nhật
        };

        const response = await userService.updateChildProfile(updatedData); // Sử dụng API update
        if (!response) {
            toast.error("❌ Cập nhật hồ sơ cho trẻ thất bại!");
        } else {
            toast.success("🎉 Cập nhật hồ sơ cho trẻ thành công!");
            onClose();
        }
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={modalStyle}>
                {/* Nút đóng modal */}
                <Button
                    onClick={onClose}
                    sx={{ position: "absolute", top: 10, right: 10, color: "gray" }}
                >
                    <FaTimes size={20} />
                </Button>

                <Typography variant="h5" textAlign="center" fontWeight="bold" mb={3}>
                    Chỉnh sửa hồ sơ cho trẻ
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {/* Họ và tên */}
                    <div>
                        <label>Họ và tên</label>
                        <div className="relative flex items-center border-b">
                            <FaUser className="text-gray-500 mr-3" />
                            <input {...register("childName", { required: true })} placeholder="Nhập họ và tên" />
                        </div>
                        {errors.childName && <span className="text-red-500">Nhập họ và tên</span>}
                    </div>

                    {/* Giới tính và Ngày sinh */}
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div>
                            <label>Giới tính</label>
                            <div className="relative flex items-center border-b">
                                <FaVenusMars className="text-gray-500 mr-3" />
                                <select {...register("childGender", { required: true })}>
                                    <option value="">Chọn giới tính</option>
                                    <option value="F">Nữ</option>
                                    <option value="M">Nam</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label>Ngày sinh</label>
                            <div className="relative flex items-center border-b">
                                <FaCalendarAlt className="text-gray-500 mr-3" />
                                <input {...register("dateOfBirth", { required: true })} type="date" />
                            </div>
                        </div>
                    </div>

                    {/* Nơi sinh */}
                    <div>
                        <label>Nơi sinh</label>
                        <div className="relative flex items-center border-b">
                            <FaHospital className="text-gray-500 mr-3" />
                            <input {...register("birthPlace", { required: true })} placeholder="Nhập nơi sinh" />
                        </div>
                    </div>

                    {/* Phương pháp sinh */}
                    <div>
                        <label>Phương pháp sinh</label>
                        <div className="relative flex items-center border-b">
                            <FaHospital className="text-gray-500 mr-3" />
                            <select {...register("birthMethod", { required: true })}>
                                <option value="">Chọn phương pháp sinh</option>
                                <option value="Sinh thường">Sinh thường</option>
                                <option value="Sinh mổ">Sinh mổ</option>
                            </select>
                        </div>
                    </div>

                    {/* Cân nặng và Chiều cao */}
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div>
                            <label>Cân nặng (kg)</label>
                            <div className="relative flex items-center border-b">
                                <FaWeight className="text-gray-500 mr-3" />
                                <input {...register("birthWeight", { required: true, valueAsNumber: true })} type="number" step="0.1" />
                            </div>
                        </div>
                        <div>
                            <label>Chiều cao (cm)</label>
                            <div className="relative flex items-center border-b">
                                <FaRulerVertical className="text-gray-500 mr-3" />
                                <input {...register("birthHeight", { required: true, valueAsNumber: true })} type="number" step="0.1" />
                            </div>
                        </div>
                    </div>

                    {/* Bất thường khi sinh */}
                    <div>
                        <label>Bất thường khi sinh</label>
                        <div className="relative flex items-center border-b">
                            <FaExclamationTriangle className="text-gray-500 mr-3" />
                            <input {...register("abnormalities")} placeholder="Ghi chú (nếu có)" />
                        </div>
                    </div>

                    {/* Nút Submit */}
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Cập nhật hồ sơ
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

// Style cho modal
const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    outline: "none",
};

export default EditProfileChild;
