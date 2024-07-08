export default function BmiTable({ range, bmi }) {
  return (
    <>
      <div className="block mx-auto my-auto md:w-1/2 w-11/12 bg-white z-20">
        <div className="grid text-black md:min-h-[480px] md:min-w-[360px] w-full font-poppins text-base">
          <div className="rows grid grid-cols-3 place-items-center p-4 font-archivo border-0 bg-secondary">
            <div className="font-bold">Weight Type</div>
            <div className="font-bold">
              BMI{" "}
              <span className="font-light sm:font-normal text-xs md:text-sm">
                {" "}
                ( in kg/m² ){" "}
              </span>
            </div>
            <div className="font-bold">
              Weight
              <span className="font-light sm:font-normal text-xs md:text-sm">
                {" "}
                ( in kg ){" "}
              </span>
            </div>
          </div>
          <div
            className={
              bmi < 16.0 ? "border-4 scale-105 bg-white border-secondary" : "border-0"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4 border-2">
              <div>Severe Thinness</div>
              <div>&lt; 16.0</div>
              <div>&lt; {range.severeThin.low}</div>
            </div>
          </div>
          <div
            className={
              bmi > 16.0 && bmi < 16.9
                ? "border-4 scale-105 bg-white border-secondary"
                : "border-0"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4 border-2">
              <div>Moderate Thinness</div>
              <div>16.0 - 16.9</div>
              <div>
                {range.moderateThin.low} - {range.moderateThin.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi > 17.0 && bmi < 18.4
                ? "border-4 scale-105 bg-white border-secondary"
                : "border-0"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4 border-2">
              <div>Mild Thinness</div>
              <div>17.0 - 18.4</div>
              <div>
                {range.mildThin.low} - {range.mildThin.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi > 18.5 && bmi < 24.9
                ? "border-4 scale-105 bg-white border-secondary"
                : "border-0"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4 border-2">
              <div>Normal Weight</div>
              <div>18.5 - 24.9</div>
              <div>
                {range.normal.low} - {range.normal.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi > 25.0 && bmi < 29.9
                ? "border-4 scale-105 bg-white border-secondary"
                : "border-0"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4 border-2">
              <div>Overweight</div>
              <div>25.0 - 29.9</div>
              <div>
                {range.overWeight.low} - {range.overWeight.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi > 30.0 && bmi < 34.9
                ? "border-4 scale-105 bg-white border-secondary"
                : "border-0"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4 border-2">
              <div>Obese Class I</div>
              <div>30.0 - 34.9</div>
              <div>
                {range.obeseOne.low} - {range.obeseOne.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi > 35.0 && bmi < 40.0
                ? "border-4 scale-105 bg-white border-secondary"
                : "border-0"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4 border-2">
              <div>Obese Class II</div>
              <div>35.0 - 40.0</div>
              <div>
                {range.obeseTwo.low} - {range.obeseTwo.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi > 40.0 ? "border-4 scale-105 bg-white border-secondary" : "border-0"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4 border-2">
              <div>Obese Class III</div>
              <div>&gt; 40.0</div>
              <div>&gt; {range.obeseThree.high}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
