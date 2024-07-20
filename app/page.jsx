

// Client Components:
import Calculator from "@/components/Calc";

export default function Home() {
  return (
    <>
      <div className="min-w-full relative min-h-svh md:min-h-lvh lg:min-h-screen">
        <header className="navbar flex flex-row flex-nowrap px-2 min-h-14 min-w-full fixed top-0 left-0 items-center bg-primary bg-gradient-to-r from-secondary to-accent shadow-sm z-50">
          <div className="navbar-center block px-2 absolute top-3 left-5">
            <div className="text-xl sm:text-2xl font-priFont font-extrabold text-primary bg-white/10 supports-[backdrop]:backdrop-blur pointer-events-none">
              BMI Checker
            </div>
          </div>
        </header>
        <main className="flex flex-col flex-nowrap h-screen min-h-screen min-w-full mt-5 bg-white/85">
          <Calculator />
        </main>
        <section className="block w-full h-full min-h-screen min-w-full text-start p-2 sm:text-lg font-priFont bg-white/50 bg-gradient-to-b from-white/85 to-white/50">
          <h1 className="block p-4 text-2xl sm:text-3xl md:text-4xl text-primary/80 w-full font-bold z-10">
            Body-Mass Index
          </h1>

          <article className="info grid grid-cols-12 p-2 mx-auto min-h-fit min-w-full">
            <div className="flex flex-col flex-nowrap justify-center max-h-full py-2 sm:py-4 col-span-8">
              <h2 className="font-semibold text-primary/80 font-priFont text-xl sm:text-2xl md:text-3xl px-2 py-1 sm:mb-1 whitespace-nowrap">
                Calculate BMI
              </h2>
              <p className="text-base sm:text-lg font-normal font-priFont w-full max-w-full px-2">
                There are several ways to calculate your BMI. Here's the basic
                formula :
                <span className="block p-1 font-medium font-priFont text-base">
                  BMI = weight (in kilograms) / height (in meters) squared
                </span>
                <span className="block font-light italic text-primary text-sm sm:p-1 mt-4 sm:mt-5">
                  Use online calculators or smartphone apps to do the
                  calculation.
                </span>
              </p>
            </div>
          </article>

          <article className="info min-w-full min-h-fit">
            <h2 className="font-semibold text-primary/80 font-priFont text-xl sm:text-2xl md:text-3xl px-2 py-1 sm:mb-1 whitespace-nowrap">
              Limitations of BMI
            </h2>
            <p className="text-base sm:text-lg font-normal font-priFont w-full max-w-full px-2">
              While BMI is a widely used tool, it's important to understand its
              limitations:
            </p>
            <ul className="text-base p-1">
              <li>
                <span className="font-medium text-primary underline underline-offset-2">
                  Muscle mass
                </span>
                : BMI doesn't differentiate between muscle and fat. People with
                a lot of muscle mass, like athletes, may have a high BMI even
                though they have a low body fat percentage.
              </li>
              <li>
                <span className="font-medium text-primary underline underline-offset-2">
                  Age
                </span>
                : As we age, we tend to lose muscle mass and gain fat. This can
                cause older adults to have a higher BMI even if they're not
                overweight.
              </li>
              <li>
                <span className="font-medium text-primary underline underline-offset-2">
                  Ethnicity
                </span>
                : BMI categories may not be equally accurate for all
                ethnicities.
              </li>
            </ul>
          </article>
        </section>

        <aside className="block w-full h-full min-h-screen min-w-full text-start p-2 sm:text-lg font-priFont bg-white/50 bg-gradient-to-b from-white/50 to-white/85">
          <article className="info  min-w-full  min-h-fit">
            <h2 className="font-semibold text-primary/80 font-priFont text-xl sm:text-2xl md:text-3xl px-2 py-1 sm:mb-1 whitespace-nowrap">
              What BMI Doesn't Tell
            </h2>
            <p className="text-base sm:text-lg font-normal font-priFont w-full max-w-full px-2">
              BMI is a starting point, not the entire picture. It doesn't tell
              you:
            </p>
            <ul className="text-base p-1">
              <li>
                <span className="font-medium text-primary underline underline-offset-2">
                  Body fat percentage
                </span>
                : A more accurate measure of body fat can be obtained through
                methods like bioelectrical impedance analysis (BIA) or skin fold
                calipers. (Consult a healthcare professional for these options)
              </li>
              <li>
                <span className="font-medium text-primary underline underline-offset-2">
                  Body composition
                </span>
                : BMI doesn't consider muscle mass, bone density, or body fat
                distribution, all of which can impact health.
              </li>
              <li>
                <span className="font-medium text-primary underline underline-offset-2">
                  Overall health
                </span>
                : BMI doesn't account for factors like diet, exercise habits, or
                medical conditions that can affect your health.
              </li>
            </ul>
            <p className="text-base sm:text-lg font-normal font-priFont w-full max-w-full px-2">
              While BMI has limitations, it can be a helpful tool when used in
              conjunction with other health assessments by a healthcare
              professional.
            </p>
            <p className="text-sm italic sm:text-base font-normal font-archivo text-secondary w-full max-w-11/12 px-3 py-2 mx-auto my-6 border-2 border-primary/75 bg-primary/80 rounded-2xl">
              Remember: BMI is just one tool in your health toolbox. It's
              important to work with your doctor to understand your individual
              health and develop a healthy lifestyle plan.
            </p>
          </article>
        </aside>
        <footer className="absolute bottom-0 left-0 bg-slate-600 w-full">
          dbckbdsvkb
        </footer>
      </div>
    </>
  );
}
