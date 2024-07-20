"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

// Client Components:
const Form = dynamic(() => import("@/components/BmiForm"), {
  loading: () => (
    <div className="grid place-content-center mx-2 mb-1 sm:min-h-screen p-1 scale-90">
      <div className="skeleton h-4/5 w-10/12"></div>
    </div>
  ),
});
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
      <div className="skeleton h-13 w-10/12"></div>
      <div className="skeleton h-13 w-10/12"></div>
      <div className="skeleton h-13 w-10/12"></div>
      <div className="skeleton h-13 w-10/12"></div>
      <div className="skeleton h-13 w-10/12"></div>
      <div className="skeleton h-13 w-10/12"></div>
      <div className="skeleton h-13 w-10/12"></div>
      <div className="skeleton h-13 w-10/12"></div>
      <div className="skeleton h-13 w-10/12"></div>
    </div>
  ),
});

export default function Calc() {
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

  //function triggered after form submit.
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
      <section className="flex relative justify-center items-center flex-col flex-nowrap min-h-screen md:min-h-screen min-w-full overflow-hidden">
        <div className="grid place-content-center mx-2 mb-1 sm:min-h-screen p-1 scale-75">
          <Form getData={onSub} />
        </div>
      </section>
      {bmiVisible && (
        <article className="flex md:items-center flex-col md:flex-row flex-nowrap px-2 sm:px-4 py-5 min-h-svh md:min-h-screen min-w-full w-full z-10">
          <GetBmi bmi={bmi} bmiType={bmiType} weighChange={weightChange} />
          <BmiTable range={bmiRange} bmi={bmi} />
        </article>
      )}
    </>
  );
}
