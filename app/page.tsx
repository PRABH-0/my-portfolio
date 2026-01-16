import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-white backdrop-blur-md border border-gray-300 mx-[40px] ">
      <Hero />
    </div>
  );
}
