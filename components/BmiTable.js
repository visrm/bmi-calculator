export default function BmiTable({ range }) {
  return (
    <>
      <div className="grid grid-rows-9 bg-amber-300 text-black h-96 min-w-[360px] text-sm">
        <div className="rows grid grid-cols-3 place-items-center p-2 bg-slate-500 border-4">
          <div className="font-bold">Weight Type</div>
          <div className="font-bold">
            BMI <span className="font-light text-xs"> ( in kg/m² ) </span>
          </div>
          <div className="font-bold">Weight</div>
        </div>
        <div className="rows grid grid-cols-3 place-items-center p-2 bg-slate-500 border-4">
          <div>Severe Thinness</div>
          <div>&lt; 16.0</div>
          <div>&lt; {range.severeThin.low}</div>
        </div>
        <div className="rows grid grid-cols-3 place-items-center p-2 bg-slate-500 border-4">
          <div>Moderate Thinness</div>
          <div>16.0 - 16.9</div>
          <div>{range.moderateThin.low} - {range.moderateThin.high}</div>
        </div>
        <div className="rows grid grid-cols-3 place-items-center p-2 bg-slate-500 border-4">
          <div>Mild Thinness</div>
          <div>17.0 - 18.4</div>
          <div>{range.mildThin.low} - {range.mildThin.high}</div>
        </div>
        <div className="rows grid grid-cols-3 place-items-center p-2 bg-slate-500 border-4">
          <div>Normal Weight</div>
          <div>18.5 - 24.9</div>
          <div>{range.normal.low} - {range.normal.high}</div>
        </div>
        <div className="rows grid grid-cols-3 place-items-center p-2 bg-slate-500 border-4">
          <div>Overweight</div>
          <div>25.0 - 29.9</div>
          <div>{range.overWeight.low} - {range.overWeight.high}</div>
        </div>
        <div className="rows grid grid-cols-3 place-items-center p-2 bg-slate-500 border-4">
          <div>Obese Class I</div>
          <div>30.0 - 34.9</div>
          <div>{range.obeseOne.low} - {range.obeseOne.high}</div>
        </div>
        <div className="rows grid grid-cols-3 place-items-center p-2 bg-slate-500 border-4">
          <div>Obese Class II</div>
          <div>35.0 - 40.0</div>
          <div>{range.obeseTwo.low} - {range.obeseTwo.high}</div>
        </div>
        <div className="rows grid grid-cols-3 place-items-center p-2 bg-slate-500 border-4">
          <div>Obese Class III</div>
          <div>&gt; 40.0</div>
          <div>&gt; {range.obeseThree.high}</div>
        </div>
      </div>
    </>
  );
}
