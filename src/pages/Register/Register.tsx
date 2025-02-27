/* eslint-disable @typescript-eslint/no-explicit-any */
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "@/lib/verifyToken";

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
  profileImage?: FileList;
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const [preview, setPreview] = useState<string | null>(null);

  const onSubmit = async (data: RegisterFormInputs) => {
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );

    if (data.profileImage && data.profileImage[0]) {
      formData.append("file", data.profileImage[0]);
    }

    try {
      const result = await registerUser(formData).unwrap();
      if (result?.success) {
        const user = verifyToken(result.data.accessToken) as TUser;
        dispatch(setUser({ user: user, token: result.data.accessToken }));
        navigate("/dashboard");
        toast("Login Successfully");
      }
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  // Handle image preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        {error && (
          <p className="text-red-500 text-center">Registration failed</p>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          encType="multipart/form-data"
        >
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

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

          <div>
            <label className="block text-gray-700">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("profileImage")}
              className="w-full px-4 py-2 border rounded-lg"
              onChange={handleImageChange}
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 h-20 w-20 rounded-full object-cover"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 hover:underline font-semibold"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
