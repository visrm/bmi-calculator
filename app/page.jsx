"use client";
import { useState } from "react";
import Nav from "@/components/Navbar";
import Form from "@/components/BmiForm";
import GetBmi from "@/components/GetBMI";
import BmiTable from "@/components/BmiTable";
import RetroGrid from "@/components/magicui/retro-grid";

export default function Home() {
  const [bmiVisible, setBmiVisible] = useState(false);
  const [bmi, setBmi] = useState(0);
  const [bmiType, setBmiType] = useState("Not Calculated");
  const [weightChange, setWeightChange] = useState({ weight: "", type: "" });
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
  const getWeight = (bmi, height) => (bmi * height * height).toFixed(1);

  // function to calculate weight change.
  function weighChange(b, w, range) {
    let changeObj;
    if (b > 24.9) {
      changeObj = {
        weight: (w - range.normal.high).toFixed(1),
        type: "positive",
      };
    } else if (b < 18.5) {
      changeObj = {
        weight: (range.normal.low - w).toFixed(1),
        type: "negative",
      };
    } else {
      changeObj = {
        weight: 0,
        type: "normal",
      };
    }
    return changeObj;
  }

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
    setWeightChange(weighChange(b, w, range));
    setBmiVisible(true);
  };

  return (
    <>
      <main className="flex justify-center flex-col flex-nowrap grow shrink min-h-screen min-w-full pb-2 bg-white/75">
        <Nav />
        <section className="min-h-full md:min-h-screen w-full overflow-hidden">
          <RetroGrid />
          <div className="grid place-content-center my-1 p-1 shrink">
            <div className="mockup-phone">
              <div className="camera z-0"></div>
              <div className="display mx-auto">
                <div className="artboard artboard-demo phone-1 bg-slate-800 bg-opacity-80">
                  <span className="font-serif font-bold text-xl text-accent underline underline-offset-4">
                    Body-Mass Index (BMI)
                  </span>
                  <Form getData={onSub} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {bmiVisible && (
          <section className="flex justify-center items-center flex-col sm:flex-row flex-nowrap p-4 my-4 h-full md:min-h-screen w-10/12 md:w-11/12">
            <GetBmi Bmi={bmi} BmiType={bmiType} weighChange={weightChange} />
            <BmiTable range={bmiRange} bmi={bmi} />
          </section>
        )}
      </main>
    </>
  );
}
