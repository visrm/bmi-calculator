import Nav from "../components/Navbar";
import Form from "../components/BmiForm";
import RetroGrid from "../components/magicui/retro-grid";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full pb-2">
      <Nav></Nav>
      <RetroGrid />
      <div className="grid place-content-center my-3">
        <div className="mockup-phone">
          <div className="camera z-0"></div>
          <div className="display mx-auto">
            <div className="artboard artboard-demo phone-1 bg-slate-800 bg-opacity-80">
              <span className="font-serif font-bold text-xl text-purple-600 underline underline-offset-4">
                Body-Mass Index (BMI)
              </span>
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
