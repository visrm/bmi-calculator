import { useState } from "react";

export default function BmiForm({ getData }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      setAlert(true);
      console.log(weight, height);
    } else {
      getData(weight, height);
      setAlert(false);
    }
  };

  return (
    <div className="p-1 w-full z-20">
      <form
        className="w-11/12 max-w-sm my-2 mx-3 pr-4 py-8 h-full rounded-2xl"
        onSubmit={onFormSubmit}
      >
        <div className="md:flex md:items-center mb-5">
          <div className="md:w-1/3">
            <label
              htmlFor="inline-height"
              className="block text-gray-300 font-mono font-semibold md:text-right mb-1 md:mb-0 p-2 text-lg"
            >
              Height:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-2xl w-full py-1 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-base font-serif"
              id="inline-height"
              type="text"
              value={height}
              placeholder="Enter height (in m)"
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-5">
          <div className="md:w-1/3">
            <label
              htmlFor="inline-weight"
              className="block text-gray-300 font-mono font-semibold md:text-right mb-1 md:mb-0 p-2 text-lg"
            >
              Weight:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-2xl w-full py-1 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-base font-serif"
              id="inline-weight"
              type="text"
              value={weight}
              placeholder="Enter weight (in kg)"
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="md:grid md:items-center mb-3">
          <div className="md:grid md:place-content-center">
            <div className="w-1/3">
              <input
                className="shadow bg-accent/75 hover:bg-accent focus:shadow-outline focus:outline-none text-gray-300 font-sans font-semibold py-1 px-3 rounded-lg"
                type="submit"
                value="Get BMI"
              />
            </div>
          </div>
        </div>
        {alert && (
          <div
            className="alert px-4 py-0 mx-3 bg-error border-0 text-white text-base"
            role="alert"
          >
            Enter a valid data.
          </div>
        )}
      </form>
    </div>
  );
}
