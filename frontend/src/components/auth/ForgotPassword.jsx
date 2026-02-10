import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async () => {
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/forgot-password`,
        { email },
        { withCredentials: true }
      );
      setMessage(res.data.message);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-semibold">Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter email"
        className="border p-2 mt-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={submitHandler}
        className="mt-4 bg-black text-white px-4 py-2"
      >
        Send Reset Link
      </button>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
