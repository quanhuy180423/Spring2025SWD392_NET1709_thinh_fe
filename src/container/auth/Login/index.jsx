import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons
import routes from '@src/router';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md bg-white max-h-4/5">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div className="relative flex items-center border-b-2">
          <FaEnvelope className="text-gray-500 mr-3" />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 focus:outline-none focus:none"
          />
        </div>
        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

        {/* Password */}
        <div className="relative flex items-center border-b-2">
          <FaLock className="text-gray-500 mr-3" />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="w-full p-3 focus:outline-none focus:none"
          />
        </div>
        {errors.password && <span className="text-red-500 text-sm">Password is required</span>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold transition"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-center text-gray-600 mt-4">
        Don't have an account? <Link to={routes.auth.register} className="text-blue-500">Sign up here</Link>
      </p>
    </div>
  );
};

export default Login;
