import Image from "next/image";
import weighScale from "./assets/weigh-scale.png";

// Client Components:
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="min-w-full relative min-h-svh md:min-h-lvh lg:min-h-screen bg-white/85">
        <header className="navbar flex flex-row flex-nowrap px-2 min-h-14 min-w-full fixed top-0 left-0 items-center bg-primary bg-gradient-to-r from-secondary to-accent shadow-sm z-50">
          <div className="navbar-center block px-2 absolute top-3 left-5">
            <div className="text-xl sm:text-2xl font-poppins font-bold text-primary/45 bg-white/10 supports-[backdrop]:backdrop-blur pointer-events-none">
              BMI Checker
            </div>
          </div>
        </header>
        <main className="flex flex-col flex-nowrap min-h-screen min-w-full mt-5">
          <Hero />
          <section className="block w-full h-full min-h-screen text-base sm:text-lg font-poppins bg-white/85">
            <h1 className="block p-4 md:p-6 text-2xl sm:text-3xl md:text-4xl w-full font-bold text-primary/75 z-10">
              Body-Mass Index
            </h1>
            <article className="info grid grid-cols-12 p-2 min-h-screen min-w-full bg-white/75 bg-gradient-to-b from-white/85 to-white/75">
              <div className="flex flex-col flex-nowrap justify-center py-2 sm:py-4 sm:pl-6 ml-4 col-span-6">
                <h2 className="font-semibold font-archivo text-xl sm:text-2xl md:text-3xl sm:px-2 sm:py-1 sm:mb-1">
                  Calculate BMI
                </h2>
                <p className="text-base font-normal font-poppins w-full max-w-full px-2">
                  There are several ways to calculate your BMI. Here's the basic
                  formula :
                  <span className="block sm:p-1 font-medium font-poppins text-sm">
                    BMI = weight (in kilograms) / height (in meters) squared
                  </span>
                  <span className="block font-light text-xs p-1 sm:mt-5">
                    Use online calculators or smartphone apps to do the
                    calculation.
                  </span>
                </p>
              </div>
              <Image
                src={weighScale}
                alt="Weight Scale"
                height={720}
                width={720}
                priority={true}
                className="col-span-6 ml-2 drop-shadow-lg sm:drop-shadow-xl"
                style={{
                  height: "auto",
                  minWidth: '100%',
                }}
              />
            </article>
            <article className="info">
              <h2>Interpreting Your BMI:</h2>
              <p>
                Once you have your BMI score, you can compare it to the
                following chart:
              </p>
              <ul>
                <li>Below 18.5: Underweight</li>
                <li>18.5 - 24.9: Healthy weight</li>
                <li>25 - 29.9: Overweight</li>
                <li>30 and above: Obese</li>
              </ul>
            </article>
            <article className="info">
              <h2>Limitations of BMI:</h2>
              <p>
                While BMI is a widely used tool, it's important to understand
                its limitations:
              </p>
              <ul>
                <li>
                  Muscle mass: BMI doesn't differentiate between muscle and fat.
                  People with a lot of muscle mass, like athletes, may have a
                  high BMI even though they have a low body fat percentage.
                </li>
                <li>
                  Age: As we age, we tend to lose muscle mass and gain fat. This
                  can cause older adults to have a higher BMI even if they're
                  not overweight.
                </li>
                <li>
                  Ethnicity: BMI categories may not be equally accurate for all
                  ethnicities.
                </li>
              </ul>
            </article>
            <article className="info">
              <h2>What BMI Doesn't Tell You:</h2>
              <p>
                BMI is a starting point, not the entire picture. It doesn't tell
                you:
              </p>
              <ul>
                <li>
                  Body fat percentage: A more accurate measure of body fat can
                  be obtained through methods like bioelectrical impedance
                  analysis (BIA) or skin fold calipers. (Consult a healthcare
                  professional for these options)
                </li>
                <li>
                  Body composition: BMI doesn't consider muscle mass, bone
                  density, or body fat distribution, all of which can impact
                  health.
                </li>
                <li>
                  Overall health: BMI doesn't account for factors like diet,
                  exercise habits, or medical conditions that can affect your
                  health.
                </li>
              </ul>
              <p>
                While BMI has limitations, it can be a helpful tool when used in
                conjunction with other health assessments by a healthcare
                professional.
              </p>
            </article>
            <article className="info">
              <p>
                Remember: BMI is just one tool in your health toolbox. It's
                important to work with your doctor to understand your individual
                health and develop a healthy lifestyle plan.
              </p>
            </article>
          </section>
        </main>
      </div>
    </>
  );
}
