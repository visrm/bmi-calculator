
export default function GetBMI({Bmi, BmiType, weighChange}) {

  return (
    <>
      <div className="block mx-auto p-4 shadow-lg bg-white text-black rounded-md">
        <h2 className="flex justify-center">BMI Score</h2>
        <div className="grid place-content-center rounded-sm bg-secondary/50 text-secondary h-1/3">
          <div>{Bmi}</div>
        </div>
        <div>{BmiType}</div>
        <div>You need to lose {weighChange}</div>
      </div>
    </>
  );
}
