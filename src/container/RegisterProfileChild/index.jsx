import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { FaUser, FaCalendarAlt, FaVenusMars, FaHospital, FaExclamationTriangle, FaRulerVertical, FaWeight } from "react-icons/fa";
import { toast } from "react-toastify";
import { userService } from "@src/services/userService.js";

const RegisterProfileChild = ({ onClose, isOpen, parentInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const updatedData = {
      ...data,
      customerId: parentInfo.id,
      parentName: parentInfo.fullname,
    };

    const response = userService.registerChildProfile(updatedData);
    if (!response) {
      toast.error("❌ Đăng ký hồ sơ cho trẻ thất bại!");
    } else {
      toast.success("🎉 Đăng ký hồ sơ cho trẻ thành công!");
      onClose();
      reset();
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Đăng ký hồ sơ cho trẻ</DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Họ và tên */}
          <TextField
            label="Họ và tên"
            fullWidth
            variant="outlined"
            {...register("childName", { required: "Nhập họ và tên" })}
            error={!!errors.childName}
            helperText={errors.childName?.message}
            InputProps={{
              startAdornment: <FaUser className="mr-2 text-gray-500" />,
            }}
          />

          <div className="grid grid-cols-2 gap-4">
            {/* Giới tính */}
            <TextField
              select
              label="Giới tính"
              fullWidth
              variant="outlined"
              {...register("childGender", { required: "Chọn giới tính" })}
              error={!!errors.childGender}
              helperText={errors.childGender?.message}
              InputProps={{
                startAdornment: <FaVenusMars className="mr-2 text-gray-500" />,
              }}
            >
              <MenuItem value="M">Nam</MenuItem>
              <MenuItem value="F">Nữ</MenuItem>
            </TextField>

            {/* Ngày sinh */}
            <TextField
              type="datetime-local"
              label="Ngày sinh"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              {...register("dateOfBirth", { required: "Nhập ngày sinh" })}
              error={!!errors.dateOfBirth}
              helperText={errors.dateOfBirth?.message}
              InputProps={{
                startAdornment: <FaCalendarAlt className="mr-2 text-gray-500" />,
              }}
            />
          </div>

          {/* Nơi sinh */}
          <TextField
            label="Nơi sinh"
            fullWidth
            variant="outlined"
            {...register("birthPlace", { required: "Nhập nơi sinh" })}
            error={!!errors.birthPlace}
            helperText={errors.birthPlace?.message}
            InputProps={{
              startAdornment: <FaHospital className="mr-2 text-gray-500" />,
            }}
          />

          {/* Phương pháp sinh */}
          <TextField
            select
            label="Phương pháp sinh"
            fullWidth
            variant="outlined"
            {...register("birthMethod", { required: "Chọn phương pháp sinh" })}
            error={!!errors.birthMethod}
            helperText={errors.birthMethod?.message}
            InputProps={{
              startAdornment: <FaHospital className="mr-2 text-gray-500" />,
            }}
          >
            <MenuItem value="Sinh thường">Sinh thường</MenuItem>
            <MenuItem value="Sinh mổ">Sinh mổ</MenuItem>
          </TextField>

          <div className="grid grid-cols-2 gap-4">
            {/* Cân nặng */}
            <TextField
              label="Cân nặng (kg)"
              type="number"
              fullWidth
              variant="outlined"
              {...register("birthWeight", { required: "Nhập cân nặng hợp lệ" })}
              error={!!errors.birthWeight}
              helperText={errors.birthWeight?.message}
              InputProps={{
                startAdornment: <FaWeight className="mr-2 text-gray-500" />,
              }}
            />

            {/* Chiều cao */}
            <TextField
              label="Chiều cao (cm)"
              type="number"
              fullWidth
              variant="outlined"
              {...register("birthHeight", { required: "Nhập chiều cao hợp lệ" })}
              error={!!errors.birthHeight}
              helperText={errors.birthHeight?.message}
              InputProps={{
                startAdornment: <FaRulerVertical className="mr-2 text-gray-500" />,
              }}
            />
          </div>

          {/* Bất thường khi sinh */}
          <TextField
            label="Bất thường khi sinh (nếu có)"
            fullWidth
            variant="outlined"
            {...register("abnormalities")}
            InputProps={{
              startAdornment: <FaExclamationTriangle className="mr-2 text-gray-500" />,
            }}
          />

          <DialogActions>
            <Button onClick={onClose} color="secondary">
              Hủy
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Đăng ký
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterProfileChild;
