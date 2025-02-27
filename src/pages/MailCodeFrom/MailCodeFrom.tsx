import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useVerifyEmailMutation } from "@/redux/features/auth/authApi";
import { verifyToken } from "@/lib/verifyToken";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const MailCodeForm = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState<string | null>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    setEmail(email);
  }, []);

  const [verifyEmail, { isLoading, isError, isSuccess }] =
    useVerifyEmailMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await verifyEmail({ email, code }).unwrap();
      console.log("mail", result);

      if (result?.success) {
        const user = verifyToken(result.data.accessToken) as TUser;
        dispatch(setUser({ user: user, token: result.data.accessToken }));
        navigate("/dashboard");
        toast.success("Login Successfully");
      }
    } catch (error) {
      navigate("/");
      toast.error("Verification failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm w-full mx-auto p-6 border rounded-md shadow bg-white">
        <h2 className="text-xl font-bold mb-4 text-center">
          Verify Your Email
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter verification code"
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </Button>
        </form>
        {isError && (
          <p className="text-red-500 mt-2 text-center">Verification failed.</p>
        )}
        {isSuccess && (
          <p className="text-green-500 mt-2 text-center">
            Email verified successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default MailCodeForm;
