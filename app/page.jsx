"use client";
import { useState } from "react";
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
    <div className="min-w-full min-h-svh md:min-h-lvh lg:min-h-screen bg-offwhite">
      <header className="navbar flex flex-row flex-nowrap p-2 min-h-20 min-w-full sticky top-0 left-0 items-center bg-primary bg-gradient-to-r from-secondary to-accent shadow-md z-50">
        <div className="navbar-center block px-2 absolute top-5 left-5">
          <div className="text-2xl sm:text-3xl font-heading text-primary/50 bg-white/10 supports-[backdrop]:backdrop-blur pointer-events-none">BMI Checker</div>
        </div>
      </header>
      <main className="flex flex-col flex-nowrap min-h-screen min-w-full">
        <section className="min-h-full md:min-h-screen min-w-full bg-white sm:bg-offwhite">
          <RetroGrid />
          <div className="grid place-content-center mx-2 sm:h-screen my-1 p-1 scale-90">
            <div className="mockup-phone z-10 scale-90 max-w-full md:scale-95">
              <div className="camera z-10"></div>
              <div className="display relative mx-auto z-10">
                <div className="artboard artboard-demo phone-1 max--full max-w-full bg-slate-800 bg-opacity-80 z-10">
                  <span className="block absolute top-32 md:top-36 mx-auto my-1 font-archivo font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-0% from-secondary to-100% to-accent ">
                    Body-Mass Index (BMI)
                  </span>
                  <Form getData={onSub} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {bmiVisible && (
          <article className="flex justify-center md:items-center flex-col md:flex-row flex-nowrap px-4 py-2 md:py-4 min-h-svh md:min-h-screen min-w-full w-full bg-white md:bg-white/85 overflow-hidden">
            <GetBmi bmi={bmi} bmiType={bmiType} weighChange={weightChange} />
            <BmiTable range={bmiRange} bmi={bmi} />
          </article>
        )}
      </main>
      </div>
    </>
  );
}
