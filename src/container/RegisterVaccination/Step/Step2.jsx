const SelectVaccine = ({ selectedVaccines, setSelectedVaccines }) => (
    <div>
        <h2 className="text-xl font-bold mb-4 text-blue-600">Chọn Vaccine</h2>
        <div className="border p-4 mb-4 text-left">
            {selectedVaccines.map((vaccine, index) => (
                <div key={index} className="flex justify-between items-center bg-blue-100 p-2 mb-2 rounded">
                    <span>{vaccine}</span>
                    <button onClick={() => setSelectedVaccines(selectedVaccines.filter((v) => v !== vaccine))} className="text-red-500">
                        X
                    </button>
                </div>
            ))}
        </div>
    </div>
);
export default SelectVaccine;