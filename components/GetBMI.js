export default function GetBMI({ bmi, bmiType, weighChange }) {
  return (
    <>
      <div className="flex justify-center items-center mx-auto my-4 flex-col flex-nowrap p-2 md:p-4 border border-accent shadow-lg sm:shadow-xl bg-accent text-white font-poppins rounded-lg h-1/3 sm:h-2/5 w-2/3 sm:w-2/5 z-20">
        <h2 className="flex justify-center items-center font-archivo font-semibold text-lg p-1 md:p-3">
          BMI Score
        </h2>
        <div className="grid place-content-center rounded-sm bg-secondary/75 backdrop-blur sm:backdrop-blur-md text-white text-3xl sm:text-4xl font-archivo font-semibold p-4 w-4/5 sm:w-3/5">
          {bmi}
        </div>
        <div className="grid place-content-center text-lg sm:text-xl pt-2 pb-1">
          {bmiType}
        </div>
        {weighChange.type == "positive" && (
          <div className="flex justify-center flex-row flex-nowrap text-lg pb-1">
            You need to lose{" "}
            <span className=" mx-2 font-archivo font-bold text-lg sm:text-xl">
              {weighChange.weight}kg
            </span>
          </div>
        )}
        {weighChange.type == "negative" && (
          <div className="flex justify-center flex-row flex-nowrap text-lg pb-1">
            You need to gain{" "}
            <span className=" mx-2 font-archivo font-bold text-lg sm:text-xl">
              {weighChange.weight}kg
            </span>
          </div>
        )}
        {weighChange.type == "normal" && (
          <div className="flex justify-center flex-row flex-nowrap text-lg pb-1">
            Your weight is{" "}
            <span className=" mx-2 font-archivo font-bold text-lg sm:text-xl">Normal!</span>
          </div>
        )}
      </div>
    </>
  );
}
