import { userService } from "@src/services/userService.js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StepIndicator from "./Steper.jsx";
import SelectChild from "./Step/Step1.jsx";
import SelectVaccine from "./Step/Step2.jsx";
import ConfirmInfo from "./Step/Step3.jsx";


const RegisterVaccination = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [step, setStep] = useState(1);
  const [listChild, setListChild] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [selectedVaccines, setSelectedVaccines] = useState([]);
  
  const Parent = localStorage.getItem("userDataNhanAi");
  const idParent = JSON.parse(Parent).id;

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await userService.getAllChildProfile(idParent);
        setListChild(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChildren();
  }, []);

  const onSubmit = (data) => {
    console.log({ selectedChild, selectedVaccines, ...data });
  };

  return (
    <div className="flex flex-col items-center my-3 h-screen  p-6">
      <div className="w-screen max-w-4xl min-w-min text-center">

        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <StepIndicator step={step} />
          {step === 1 && <SelectChild listChild={listChild} setSelectedChild={setSelectedChild} selectedChild={selectedChild} />}
          {step === 2 && <SelectVaccine selectedVaccines={selectedVaccines} setSelectedVaccines={setSelectedVaccines} />}
          {step === 3 && <ConfirmInfo selectedChild={selectedChild} selectedVaccines={selectedVaccines} register={register} errors={errors} />}
        </div>
        <div className="mt-4 flex justify-between">
          {step > 1 && (
            <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500" onClick={() => setStep(step - 1)}>
              Quay lại
            </button>
          )}
          {step < 3 ? (
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => { setStep(step + 1); console.log(selectedChild) }}>
              Tiếp tục
            </button>
          ) : (
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" onClick={handleSubmit(onSubmit)}>
              Đăng ký
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default RegisterVaccination;