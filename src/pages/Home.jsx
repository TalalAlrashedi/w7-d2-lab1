import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.fullName) {
    return null;
  }

  const userName = user?.fullName;
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [idealWeight, setIdealWeight] = useState("");
  const [image, setImage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightMeter = height / 100;
    const bmiValue = (weight / (heightMeter * heightMeter)).toFixed(1);
    setBmi(bmiValue);

    const ideal = (22 * (heightMeter * heightMeter)).toFixed(1);
    setIdealWeight(ideal);

    let msg = "";
    let img = "";

    if (bmiValue < 18.5) {
      msg = "وزنك منخفض (نحيف)";
      img = "bmiImages/underweight.png";
    } else if (bmiValue < 25) {
      msg = "وزنك مثالي";
      img = "bmiImages/normal.png";
    } else if (bmiValue < 30) {
      msg = "وزنك زائد";
      img = "bmiImages/overweight.png";
    } else {
      msg = "تعاني من سمنة";
      img = "bmiImages/deadly.png";
    }

    setMessage(msg);
    setImage(img);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-5 ">
      <h2 className="text-2xl   font-bold text-center text-violet-600">
        مرحبًا، {userName}
      </h2>

      <form
        onSubmit={calculateBMI}
        className="space-y-4  p-4  rounded-2xl rounded shadow"
      >
        <div className="flex flex-col">
          <label className="text-right">الوزن (كجم)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-right">الطول (سم)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-violet-500 text-white px-5 py-2 rounded hover:bg-violet-600 transition"
        >
          احسب الكتلة
        </button>
      </form>

      {bmi && (
        <div className="text-center bg-white p-4 rounded shadow">
          <p className="text-xl font-semibold">مؤشر كتلة الجسم: {bmi}</p>
          <p className="text-lg mt-2">{message}</p>
          <p className="mt-2">الوزن المثالي: {idealWeight} كجم</p>
          {image && <img src={image} alt="BMI" className="w-32 mx-auto mt-4" />}
        </div>
      )}
    </div>
  );
};

export default Home;
