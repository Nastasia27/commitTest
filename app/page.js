import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Cases from "./components/Cases";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-items-center min-h-screen ">
      <main className="flex flex-col gap-8 items-center sm:items-start w-full ">
        <Hero/>
        <AboutUs/>
        <Cases/>
        <Footer/>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
