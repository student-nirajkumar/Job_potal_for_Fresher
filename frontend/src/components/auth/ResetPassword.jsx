import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const submitHandler = async () => {
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/reset-password/${token}`,
        { password },
        { withCredentials: true }
      );

      setSuccess(true);
      setMessage(res.data.message);
    } catch (err) {
      setSuccess(false);
      setMessage(
        err.response?.data?.message || "Reset failed"
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-semibold">Reset Password</h2>

      <input
        type="password"
        placeholder="Enter new password"
        className="border p-2 mt-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={submitHandler}
        className="mt-4 bg-black text-white px-4 py-2"
      >
        Reset Password
      </button>

      {message && <p className="mt-3">{message}</p>}

      {success && (
        <Link to="/login" className="mt-3 text-blue-600">
          Go to Login
        </Link>
      )}
    </div>
  );
};

export default ResetPassword;
