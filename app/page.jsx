"use client";
import { useState } from "react";
import Nav from "@/components/Navbar";
import Form from "@/components/BmiForm";
import GetBmi from "@/components/GetBMI";
import BmiTable from "@/components/BmiTable";
import RetroGrid from "@/components/magicui/retro-grid";

export default function Home() {
  const [bmi, setBmi] = useState(0);
  const [bmiType, setBmiType] = useState("--");
  const [weightChange, setWeightChange] = useState(0);
  const [bmiRange, setBmiRange] = useState({
    severeThin: { low: "" },
    moderateThin: { low: "", high: "" },
    mildThin: { low: "", high: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obeseOne: { low: "", high: "" },
    obeseTwo: { low: "", high: "" },
    obeseThree: { high: "" },
  });

  // function to determine the weight-class based on BMI.
  const weightType = (bmi) => {
    if (bmi < 16.0) return "Severe Thinness";
    else if (bmi < 16.9 && bmi > 16.0) return "Moderate Thinness";
    else if (bmi < 18.4 && bmi > 17.0) return "Mild Thinness";
    else if (bmi < 24.9 && bmi > 18.5) return "Normal Weight";
    else if (bmi < 29.9 && bmi > 25.0) return "Overweight";
    else if (bmi < 34.9 && bmi > 30.0) return "Obese Class I";
    else if (bmi < 39.9 && bmi > 35.0) return "Obese Class II";
    else return "Obese Class III";
  };

  // function to calculate BMI, rounded-off to 2 decimals.
  const calBmi = (weight, height) => (weight / (height * height)).toFixed(2);

  // function to calculate weight from BMI.
  const getWeight = (bmi, height) => (bmi * height * height).toFixed(2);

  const onSub = (w, h) => {
    let b = calBmi(w, h);
    setBmi(b);
    setBmiType(weightType(b));
    const range = {
      severeThin: { low: getWeight(16.0, h) },
      moderateThin: { low: getWeight(16.0, h), high: getWeight(16.9, h) },
      mildThin: { low: getWeight(17.0, h), high: getWeight(18.4, h) },
      normal: { low: getWeight(18.5, h), high: getWeight(24.9, h) },
      overWeight: { low: getWeight(25.0, h), high: getWeight(29.9, h) },
      obeseOne: { low: getWeight(30.0, h), high: getWeight(34.9, h) },
      obeseTwo: { low: getWeight(35.0, h), high: getWeight(40.0, h) },
      obeseThree: { high: getWeight(40.0, h) },
    };
    setBmiRange(range);
  };

  return (
    <>
      <main className="min-h-screen min-w-full pb-2">
        <Nav />
        <RetroGrid />
        <div className="grid place-content-center my-3">
          <div className="mockup-phone">
            <div className="camera z-0"></div>
            <div className="display mx-auto">
              <div className="artboard artboard-demo phone-1 bg-slate-800 bg-opacity-80">
                <span className="font-serif font-bold text-xl text-purple-600 underline underline-offset-4">
                  Body-Mass Index (BMI)
                </span>
                <Form getData={onSub} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-black p-2 text-white">
          <GetBmi Bmi={bmi} BmiType={bmiType} weighChange={weightChange} />
          <BmiTable range={bmiRange} />
        </div>
      </main>
    </>
  );
}
