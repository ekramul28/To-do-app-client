import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/features/auth/authApi";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [login, { isLoading, error }] = useLoginMutation();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const result = await login(data).unwrap();

      const redirect = result?.data?.redirectUrL;
      navigate(redirect);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google"; // Redirect to backend Google login
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 text-center">Login failed</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-700 transition"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center my-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full  bg-indigo-700  text-white py-2 rounded-lg  transition flex justify-center items-center gap-2"
          >
            Login with Google
          </button>
        </div>

        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 hover:underline font-semibold"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
