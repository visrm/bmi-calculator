export default function BmiTable({ range, bmi }) {
  return (
    <>
      <div className="block mx-auto mb-12 sm:my-auto md:w-1/2 w-11/12 bg-white/95 dark:bg-zinc-900 z-20">
        <div className="grid text-black dark:text-slate-200 md:min-h-[480px] md:min-w-[360px] w-full text-sm">
          <div className="rows grid grid-cols-3 place-items-center p-4 font-archivo text-black text-base border-2 bg-secondary dark:bg-secondary/90">
            <div className="font-bold">Weight Type</div>
            <div className="font-bold">
              BMI
              <span className="font-normal sm:font-normal text-xs md:text-sm">
                ( in kg/m² )
              </span>
            </div>
            <div className="font-bold">
              Weight
              <span className="font-normal sm:font-normal text-xs md:text-sm">
                ( in kg )
              </span>
            </div>
          </div>
          <div
            className={
              bmi < 16.0
                ? "border-4 scale-105 bg-white dark:bg-zinc-800 dark:text-slate-200 border-secondary"
                : "border-2 border-t-0 dark:border-base-300"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4">
              <div>Severe Thinness</div>
              <div>&lt; 16.0</div>
              <div>&lt; {range.severeThin.low}</div>
            </div>
          </div>
          <div
            className={
              bmi >= 16.0 && bmi < 17.0
                ? "border-4 scale-105 bg-white dark:bg-zinc-800 dark:text-slate-200 border-secondary"
                : "border-2 border-t-0 dark:border-base-300"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4">
              <div>
                Moderate Thinne
                <wbr />
               ss
              </div>
              <div>16.0 - 17.0</div>
              <div>
                {range.moderateThin.low} - {range.moderateThin.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi >= 17.0 && bmi < 18.5
                ? "border-4 scale-105 bg-white dark:bg-zinc-800 dark:text-slate-200 border-secondary"
                : "border-2 border-t-0 dark:border-base-300"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4">
              <div>Mild Thinness</div>
              <div>17.0 - 18.5</div>
              <div>
                {range.mildThin.low} - {range.mildThin.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi >= 18.5 && bmi < 25.0
                ? "border-4 scale-105 bg-white dark:bg-zinc-800 dark:text-slate-200 border-secondary"
                : "border-2 border-t-0 dark:border-base-300"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4">
              <div>Normal Weight</div>
              <div>18.5 - 25.0</div>
              <div>
                {range.normal.low} - {range.normal.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi >= 25.0 && bmi < 30.0
                ? "border-4 scale-105 bg-white dark:bg-zinc-800 dark:text-slate-200 border-secondary"
                : "border-2 border-t-0 dark:border-base-300"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4">
              <div>Overweight</div>
              <div>25.0 - 30.0</div>
              <div>
                {range.overWeight.low} - {range.overWeight.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi >= 30.0 && bmi < 35.0
                ? "border-4 scale-105 bg-white dark:bg-zinc-800 dark:text-slate-200 border-secondary"
                : "border-2 border-t-0 dark:border-base-300"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4">
              <div>Obese Class I</div>
              <div>30.0 - 35.0</div>
              <div>
                {range.obeseOne.low} - {range.obeseOne.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi >= 35.0 && bmi < 40.0
                ? "border-4 scale-105 bg-white dark:bg-zinc-800 dark:text-slate-200 border-secondary"
                : "border-2 border-t-0 dark:border-base-300"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4">
              <div>Obese Class II</div>
              <div>35.0 - 40.0</div>
              <div>
                {range.obeseTwo.low} - {range.obeseTwo.high}
              </div>
            </div>
          </div>
          <div
            className={
              bmi >= 40.0
                ? "border-4 scale-105 bg-white dark:bg-zinc-800 dark:text-slate-200 border-secondary"
                : "border-2 border-t-0 dark:border-base-300"
            }
          >
            <div className="rows grid grid-cols-3 place-items-center p-2 md:p-4">
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
