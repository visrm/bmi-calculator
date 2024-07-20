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
      setHeight("");
      setWeight("");
    }
  };

  return (
    <>
      <div className="mockup-phone z-10 scale-90 max-w-full md:scale-95">
        <div className="camera z-10"></div>
        <div className="display relative mx-auto z-10">
          <div className="artboard artboard-demo phone-1 max-h-full max-w-full bg-slate-800 bg-opacity-80 z-10">
            <span className="block absolute top-32 md:top-36 mx-auto font-archivo font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-0% from-secondary to-100% to-accent ">
              Body-Mass Index (BMI)
            </span>
            <div className="p-1 w-full font-archivo z-20">
              <form
                className="w-11/12 max-w-sm my-2 mx-3 pr-2 h-full rounded-2xl"
                onSubmit={onFormSubmit}
              >
                <div className="md:flex md:items-center mb-5">
                  <div className="md:w-1/3">
                    <label
                      htmlFor="inline-height"
                      className="block text-gray-200 font-archivo font-medium md:text-right mb-1 md:mb-0 p-2 text-lg"
                    >
                      Height :
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-100 appearance-none border-2 border-gray-200 rounded-2xl w-full py-1 px-4 md:px-3 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-accent text-base font-priFont"
                      id="inline-height"
                      type="text"
                      value={height}
                      maxLength={6}
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
                      className="block text-gray-200 font-archivo font-medium md:text-right mb-1 md:mb-0 p-2 text-lg"
                    >
                      Weight :
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-100 appearance-none border-2 border-gray-200 rounded-2xl w-full py-1 px-4 md:px-3 text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-accent text-base font-priFont"
                      id="inline-weight"
                      type="text"
                      value={weight}
                      maxLength={6}
                      placeholder="Enter weight (in kg)"
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="md:grid md:items-center mb-3">
                  <div className="md:grid md:place-content-center m-2">
                    <div className="w-1/3">
                      <input
                        className="shadow bg-accent/80 hover:text-primary/70 hover:scale-105 hover:bg-gradient-to-r hover:from-0% hover:from-secondary hover:to-100% hover:to-accent hover:focus:shadow-outline focus:outline-none text-white font-archivo font-normal hover:font-semibold py-1 px-3 rounded-sm md:rounded-2xl"
                        type="submit"
                        value="Get BMI"
                      />
                    </div>
                  </div>
                </div>
                {alert && (
                  <div
                    className="alert px-4 py-0 mx-3 bg-error border-0 text-white text-base font-archivo"
                    role="alert"
                  >
                    Enter a valid data.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
