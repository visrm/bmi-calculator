import BMIform from "@/components/bmiForm";
import Nav from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full">
      <Nav></Nav>
      <BMIform></BMIform>
    </main>
  );
}
