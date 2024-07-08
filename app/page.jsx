"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

// Client Components:
import Form from "@/components/BmiForm";
const GetBmi = dynamic(() => import("@/components/GetBMI"), {
  loading: () => (
    <div className="flex inherit place-items-center m-auto p-4 h-1/3 sm:h-2/5 w-2/3 sm:w-1/4 flex-col flex-nowrap gap-2 rounded-lg shadow-lg sm:shadow-xl bg-primary/20">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-5 w-full"></div>
      <div className="skeleton h-5 w-11/12"></div>
    </div>
  ),
});
const BmiTable = dynamic(() => import("@/components/BmiTable"), {
  loading: () => (
    <div className="flex place-items-center inherit m-auto p-2 flex-col flex-nowrap md:h-[480px] md:w-1/2 gap-2 rounded-sm bg-primary/20">
      <div className="skeleton h-14 w-full"></div>
      <div className="skeleton h-14 w-full"></div>
      <div className="skeleton h-14 w-full"></div>
      <div className="skeleton h-14 w-full"></div>
      <div className="skeleton h-14 w-full"></div>
      <div className="skeleton h-14 w-full"></div>
      <div className="skeleton h-14 w-full"></div>
      <div className="skeleton h-14 w-full"></div>
      <div className="skeleton h-14 w-full"></div>
    </div>
  ),
});
const RetroGrid = dynamic(() => import("@/components/magicui/retro-grid"));

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
      <div className="min-w-full relative min-h-svh md:min-h-lvh lg:min-h-screen">
        <header className="navbar flex flex-row flex-nowrap p-2 min-h-20 min-w-full fixed top-0 left-0 items-center bg-primary bg-gradient-to-r from-secondary to-accent shadow-md z-50">
          <div className="navbar-center block px-2 absolute top-5 left-5">
            <div className="text-2xl sm:text-3xl font-heading text-primary/50 bg-white/10 supports-[backdrop]:backdrop-blur pointer-events-none">
              BMI Checker
            </div>
          </div>
        </header>
        <main className="flex flex-col flex-nowrap min-h-screen min-w-full mt-10">
          <section className="flex relative justify-center items-center flex-col flex-nowrap min-h-screen md:min-h-screen min-w-full overflow-hidden bg-white">
            <RetroGrid />
            <div className="grid place-content-center mx-2 mb-1 sm:min-h-screen p-1 scale-90">
              <div className="mockup-phone z-10 scale-90 max-w-full md:scale-95">
                <div className="camera z-10"></div>
                <div className="display relative mx-auto z-10">
                  <div className="artboard artboard-demo phone-1 max-h-full max-w-full bg-slate-800 bg-opacity-80 z-10">
                    <span className="block absolute top-32 md:top-36 mx-auto font-archivo font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-0% from-secondary to-100% to-accent ">
                      Body-Mass Index (BMI)
                    </span>
                    <Form getData={onSub} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {bmiVisible && (
            <article className="flex md:items-center flex-col md:flex-row flex-nowrap my-1 px-2 sm:px-4 py-4 min-h-svh md:min-h-screen min-w-full w-full bg-white md:bg-white/85 supports-[backdrop]:backdrop-blur-md z-10 overflow-hidden transition">
              <GetBmi bmi={bmi} bmiType={bmiType} weighChange={weightChange} />
              <BmiTable range={bmiRange} bmi={bmi} />
            </article>
          )}
        </main>
      </div>
    </>
  );
}
