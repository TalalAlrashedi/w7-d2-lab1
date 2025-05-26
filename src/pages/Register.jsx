import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigator = useNavigate();
  const validFunc = (e) => {
    e.preventDefault();

    if (fullName.length < 3 || fullName.length > 50) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "الاسم يجب ان يكون من اكثر من ثلاث احرف",
      });
      return;
    }

    if (password.length < 8) {
      Swal.fire({
        icon: "warning",
        title: "كلمة المرور ضعيفة !",
        text: "يجب ان تكون كلمة المرور اعلى اوتساوي ٨ احرف",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "كلمة المرور غير مطابقة !! !",
        text: "يجب ان تكون كلمة المرور مطابقة !!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "تم التسجيل بنجاح!",
    });
    localStorage.setItem("user", JSON.stringify({ fullName, email, password }));
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigator("login");
  };

  return (
    <div className="w-full h-screen  flex flex-col items-center justify-center bg-gray-100 shadow-md rounded">
      <div className="lg:w-[30%] w-[90%] bg-white p-4 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">التسجيل</h2>

        <form
          onSubmit={validFunc}
          className="flex flex-col justify-center space-y-4"
        >
          <div className="flex flex-col">
            <label className="text-right">الاسم الكامل</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              className="border px-3 py-2 rounded inputText"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-right">البريد الإلكتروني</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="border px-3 py-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-right">كلمة المرور</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="border px-3 py-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-right">تأكيد كلمة المرور</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="border px-3 py-2 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-violet-500 w-1/2 p-2 text-lg rounded-2xl outline-none mx-auto text-white hover:bg-violet-600 transition"
          >
            إرسال
          </button>
        </form>

        <p className="text-1xl">
          لديك حساب؟
          <Link className="block text-blue-600" to="login">
            الذهاب لصفحة الدخول{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
