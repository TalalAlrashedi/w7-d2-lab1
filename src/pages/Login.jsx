import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser || savedUser.email !== email) {
      Swal.fire({
        icon: "error",
        title: "خطأ في كلمة المرور",
        text: "كلمة المرور غير صحيحة!",
      });
    }
    Swal.fire({
      icon: "success",
      title: "تم تسجيل الدخول بنجاح!",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    });
  };

  return (
    <div className="w-full h-screen  flex flex-col items-center justify-center bg-gray-100 shadow-md rounded">
            <div className="lg:w-[30%] w-[90%] bg-white p-4 rounded-2xl shadow-2xl">

      <h2 className="text-2xl font-bold mb-6 text-center">تسجيل الدخول</h2>

      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center space-y-4"
      >
        <div className="flex flex-col">
          <label className="text-right">البريد الإلكتروني</label>
          <input
            type="email"
            className="border px-3 py-2 rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-right">كلمة المرور</label>
          <input
            type="password"
            className="border px-3 py-2 rounded"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-violet-500 w-1/2 p-2 text-lg rounded-2xl outline-none mx-auto text-white hover:bg-violet-600 transition"
        >
          إرسال
        </button>

        <p className="text-1xl">
          مستخدم جديد؟
          <Link className="block text-blue-600" to="/">
            الذهاب لصفحة التسجيل{" "}
          </Link>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Login;
