export default function GetBMI({ Bmi, BmiType, weighChange }) {
  return (
    <>
      <div className="flex justify-center items-center mx-auto my-4 flex-col flex-nowrap p-4 shadow-lg sm:shadow-xl bg-accent text-white rounded-lg h-2/3 w-2/3 sm:w-2/5 z-20">
        <h2 className="flex justify-center items-center font-semibold text-lg p-3">
          BMI Score
        </h2>
        <div className="grid place-content-center rounded-sm bg-secondary text-white text-4xl font-semibold p-2 sm:p-4 w-3/5">
          {Bmi}
        </div>
        <div className="grid place-content-center text-xl pt-2 pb-1">
          {BmiType}
        </div>
        {weighChange.type == "positive" && (
          <div className="flex justify-center flex-row flex-nowrap text-lg pb-1">
            You need to lose <span className="mx-2 font-bold text-xl">{weighChange.weight}kg</span>
          </div>
        )}
        {weighChange.type == "negative" && (
          <div className="flex justify-center flex-row flex-nowrap text-lg pb-1">
            You need to gain <span className="mx-2 font-bold text-xl">{weighChange.weight}kg</span>
          </div>
        )}
        {weighChange.type == "normal" && (
          <div className="flex justify-center flex-row flex-nowrap text-lg pb-1">
            Your weight is normal!
          </div>
        )}
      </div>
    </>
  );
}
