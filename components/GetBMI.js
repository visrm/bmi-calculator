export default function GetBMI({ bmi, bmiType, weighChange }) {
  return (
    <>
      <div className="flex justify-center items-center mx-auto mb-16 sm:mb-0 flex-col flex-nowrap p-2 md:p-4 border border-accent dark:border-teal-900 shadow-lg sm:shadow-xl bg-accent dark:bg-teal-900 text-white rounded-lg h-1/3 sm:h-2/5 w-2/3 sm:w-1/4 z-20">
        <h2 className="flex justify-center items-center font-archivo font-semibold text-lg p-1 md:p-3">
          BMI Score
        </h2>
        <div className="grid place-content-center rounded-md bg-secondary/75 backdrop-blur sm:backdrop-blur-md text-base-100 dark:text-teal-900 text-3xl sm:text-4xl font-archivo font-semibold p-4 w-fit">
          {bmi}
        </div>
        <div className="grid place-content-center text-lg sm:text-xl pt-2 pb-1">
          {bmiType}
        </div>
        {weighChange.type == "positive" && (
          <div className="flex justify-center flex-col md:flex-row flex-nowrap text-lg pb-1 w-fit">
            You need to lose
            <span className="inline-flex place-items-end px-1 font-archivo font-bold text-lg sm:text-xl">
              {weighChange.weight}kg
            </span>
          </div>
        )}
        {weighChange.type == "negative" && (
          <div className="flex justify-center flex-col md:flex-row flex-nowrap text-lg pb-1 w-fit">
            You need to gain
            <span className="inline-flex place-items-end px-1 font-archivo font-bold text-lg sm:text-xl">
              {weighChange.weight}kg
            </span>
          </div>
        )}
        {weighChange.type == "normal" && (
          <div className="flex justify-center flex-col md:flex-row flex-nowrap text-lg pb-1 w-fit">
            Your weight is
            <span className="inline-flex place-items-end px-1 font-archivo font-bold text-lg sm:text-xl">
              Normal!
            </span>
          </div>
        )}
      </div>
    </>
  );
}
