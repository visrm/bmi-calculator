/* eslint-disable react/no-unescaped-entities */
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
    <div className="flex inherit place-items-center m-auto p-4 h-1/3 sm:h-2/5 w-2/3 sm:w-1/4 flex-col flex-nowrap gap-2 rounded-lg shadow-lg sm:shadow-xl bg-primary/20 dark:bg-teal-800">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-5 w-full"></div>
      <div className="skeleton h-5 w-11/12"></div>
    </div>
  ),
});
const BmiTable = dynamic(() => import("@/components/BmiTable"), {
  loading: () => (
    <div className="flex place-items-center inherit m-auto p-2 flex-col flex-nowrap h-fit w-fit md:h-[480px] md:w-1/2 gap-2 rounded-sm bg-primary/20 dark:bg-teal-800">
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
    else if (bmi < 17.0 && bmi >= 16.0) return "Moderate Thinness";
    else if (bmi < 18.5 && bmi >= 17.0) return "Mild Thinness";
    else if (bmi < 25.0 && bmi >= 18.5) return "Normal Weight";
    else if (bmi < 30.0 && bmi >= 25.0) return "Overweight";
    else if (bmi < 35.0 && bmi >= 30.0) return "Obese Class I";
    else if (bmi < 40.0 && bmi >= 35.0) return "Obese Class II";
    else if (bmi >= 40.0) return "Obese Class III";
    else return "Not Defined";
  };

  // function to calculate BMI, rounded-off to 2 decimals.
  const calBmi = (weight, height) => (weight / (height * height)).toFixed(2);

  // function to calculate weight from BMI.
  const getWeight = (bmi, height) => (bmi * height * height).toFixed(2);

  // function to calculate weight change.
  function weighChange(b, w, range) {
    let changeObj;
    if (b > 25.0) {
      changeObj = {
        weight: (w - range.normal.high).toFixed(2),
        type: "positive",
      };
    } else if (b < 18.5) {
      changeObj = {
        weight: (range.normal.low - w).toFixed(2),
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
      moderateThin: { low: getWeight(16.0, h), high: getWeight(17.0, h) },
      mildThin: { low: getWeight(17.0, h), high: getWeight(18.5, h) },
      normal: { low: getWeight(18.5, h), high: getWeight(25.0, h) },
      overWeight: { low: getWeight(25.0, h), high: getWeight(30.0, h) },
      obeseOne: { low: getWeight(30.0, h), high: getWeight(35.0, h) },
      obeseTwo: { low: getWeight(35.0, h), high: getWeight(40.0, h) },
      obeseThree: { high: getWeight(40.0, h) },
    };
    setBmiRange(range);
    setWeightChange(weighChange(b, w, range));
    setBmiVisible(true);
  };

  return (
    <>
      <div className="w-full relative min-h-svh md:min-h-lvh lg:min-h-screen bg-white/50 dark:bg-zinc-900 dark:text-slate-100">
        <header className="navbar flex flex-row flex-nowrap min-h-14 max-w-full fixed top-0 left-0 items-center bg-primary bg-gradient-to-r from-secondary to-accent shadow-sm z-50">
          <div className="navbar-center block px-2 absolute top-3 left-5">
            <div className="text-xl sm:text-2xl font-extrabold font-serif text-primary bg-white/10 dark:text-zinc-800 supports-[backdrop]:backdrop-blur pointer-events-none">
              BMI Checker
            </div>
          </div>
        </header>
        <main className="block p-1 sm:p-2 w-full h-auto sm:min-h-screen min-w-full text-start sm:text-lg bg-white/50 dark:bg-zinc-900 z-10">
          <section className="flex flex-col flex-nowrap h-fit sm:h-full min-h-svh min-w-full sm:mt-5">
            <section className="flex relative justify-center items-center flex-col flex-nowrap min-h-screen md:min-h-screen min-w-full overflow-hidden">
              <div className="grid place-content-center mx-2 mb-1 sm:min-h-screen p-1 scale-90">
                <Form getData={onSub} />
              </div>
            </section>
            {bmiVisible && (
              <article className="flex md:items-center flex-col md:flex-row flex-nowrap px-2 sm:px-4 py-5 min-h-svh md:min-h-screen min-w-full w-full dark:bg-transparent z-10">
                <GetBmi
                  bmi={bmi}
                  bmiType={bmiType}
                  weighChange={weightChange}
                />
                <BmiTable range={bmiRange} bmi={bmi} />
              </article>
            )}
          </section>
          <section className="p-1">
            <h1 className="block ml-2 pl-4 py-4 sm:py-1 text-3xl md:text-4xl text-primary/80 dark:text-teal-400 w-full font-bold z-10">
              Body-Mass Index
            </h1>

            <article className="info grid grid-cols-12 p-2 mx-auto">
              <div className="flex flex-col flex-nowrap justify-center max-h-full col-span-11 sm:col-span-8">
                <h2 className="font-semibold text-primary/80 dark:text-teal-400 text-2xl md:text-3xl px-2 py-1 sm:mb-1 whitespace-nowrap">
                  Calculate BMI
                </h2>
                <p className="text-base sm:text-lg font-normal w-full max-w-full px-2">
                  There are several ways to calculate your BMI. Here's the basic
                  formula :
                  <span className="block p-1 font-medium text-base">
                    BMI = weight (in kilograms) / height (in meters) squared
                  </span>
                  <span className="block font-normal italic text-primary dark:text-teal-300 text-sm sm:p-1 mt-4 sm:mt-5">
                    Use online calculators or smartphone apps to do the calculation.
                  </span>
                </p>
              </div>
            </article>

            <article className="info">
              <h2 className="font-semibold text-primary/80 dark:text-teal-400 text-2xl md:text-3xl px-2 py-1 sm:mb-1 whitespace-nowrap">
                Limitations of BMI
              </h2>
              <p className="text-base sm:text-lg font-normal w-full max-w-full px-2">
                While BMI is a widely used tool, it's important to understand
                its limitations:
              </p>
              <ul className="text-base p-1">
                <li>
                  <span className="font-medium text-primary dark:text-teal-300 underline underline-offset-2">
                    Muscle mass
                  </span>
                  : BMI doesn't differentiate between muscle and fat. People
                  with a lot of muscle mass, like athletes, may have a high BMI
                  even though they have a low body fat percentage.
                </li>
                <li>
                  <span className="font-medium text-primary dark:text-teal-300 underline underline-offset-2">
                    Age
                  </span>
                  : As we age, we tend to lose muscle mass and gain fat. This
                  can cause older adults to have a higher BMI even if they're
                  not overweight.
                </li>
                <li>
                  <span className="font-medium text-primary dark:text-teal-300 underline underline-offset-2">
                    Ethnicity
                  </span>
                  : BMI categories may not be equally accurate for all
                  ethnicities.
                </li>
              </ul>
            </article>
          </section>
        </main>

        <aside className="block p-1 sm:p-2 w-full h-full min-h-full min-w-full text-start sm:text-lg bg-white/50 dark:bg-zinc-900">
          <article className="info">
            <h2 className="font-semibold text-primary/80 dark:text-teal-400 text-2xl md:text-3xl px-2 py-1 sm:mb-1 whitespace-nowrap">
              What BMI Doesn't Tell
            </h2>
            <p className="text-base sm:text-lg font-normal w-full max-w-full px-2">
              BMI is a starting point, not the entire picture. It doesn't tell
              you:
            </p>
            <ul className="text-base p-1">
              <li>
                <span className="font-medium text-primary dark:text-teal-300 underline underline-offset-2">
                  Body fat percentage
                </span>
                : A more accurate measure of body fat can be obtained through
                methods like bioelectrical impedance analysis (BIA) or skin fold
                calipers. (Consult a healthcare professional for these options)
              </li>
              <li>
                <span className="font-medium text-primary dark:text-teal-300 underline underline-offset-2">
                  Body composition
                </span>
                : BMI doesn't consider muscle mass, bone density, or body fat
                distribution, all of which can impact health.
              </li>
              <li>
                <span className="font-medium text-primary dark:text-teal-300 underline underline-offset-2">
                  Overall health
                </span>
                : BMI doesn't account for factors like diet, exercise habits, or
                medical conditions that can affect your health.
              </li>
            </ul>
            <p className="text-base sm:text-lg font-normal w-full max-w-full px-2">
              While BMI has limitations, it can be a helpful tool when used in
              conjunction with other health assessments by a healthcare
              professional.
            </p>
            <p className="text-sm italic sm:text-base font-medium font-archivo text-primary dark:text-teal-400 dark:bg-zinc-800 max-w-full px-3 py-3 mx-auto my-6 bg-secondary/50 rounded-2xl">
              Remember: BMI is just one tool in your health toolbox. It's
              important to work with your doctor to understand your individual
              health and develop a healthy lifestyle plan.
            </p>
          </article>
        </aside>
        <footer className="footer footer-center bg-base-300 text-base-content dark:bg-zinc-900 dark:text-slate-100 p-3 w-full z-40">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Rahul Murali
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
}
