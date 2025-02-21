const ConfirmInfo = ({ selectedChild, selectedVaccines, register, errors }) => (
    <div>
        <h2 className="text-xl font-bold mb-4 text-blue-600">Xác nhận thông tin</h2>
        <div className="text-left mb-4">
            <p>
                <strong>Người tiêm:</strong> {selectedChild?.fullName}
            </p>
            <p>
                <strong>Vaccine đã chọn:</strong> {selectedVaccines.join(", ")}
            </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
                <label className="font-semibold text-black">Chọn ngày tiêm:</label>
                <input
                    type="date"
                    {...register("date", { required: "Vui lòng chọn ngày tiêm" })}
                    className="w-full p-2 mt-1 h-12 border rounded bg-blue-100 text-black"
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
            </div>

            <div className="mb-4">
                <label className="font-semibold text-black">Chọn giờ tiêm:</label>
                <select {...register("time", { required: "Vui lòng chọn giờ tiêm" })} className="w-full p-2 mt-1 h-12 border rounded bg-blue-100 text-black">
                    {[...Array(24).keys()].map((hour) => (
                        <option key={hour} value={hour + 1}>
                            {hour + 1}:00
                        </option>
                    ))}
                </select>
                {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
            </div>
        </div>

    </div>
);

export default ConfirmInfo;