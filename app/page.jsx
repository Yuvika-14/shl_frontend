"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

   const handleTryForFree = () => {
    router.push("/dashboard");
  };
  const [isVisible, setIsVisible] = useState(false);
  const [isFAQVisible, setIsFAQVisible] = useState(false);
  

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setIsVisible(true), 500);
  };

  const scrollToFAQ = () => {
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
    setIsFAQVisible(true);
  };

  
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-black text-white text-center overflow-x-hidden">

      {/* ✅ Navbar */}
      <nav className="w-full bg-black border-b border-gray-700 p-4 flex items-center justify-between fixed top-0 left-0 z-50">
        <Image src={"/s.png"} width={80} height={80} alt="Logo" />

        <ul className="hidden md:flex gap-10 mx-auto">
          <li className="hover:text-purple-500 cursor-pointer">Dashboard</li>
          <li className="hover:text-purple-500 cursor-pointer" onClick={scrollToDemo}>
            Demo
          </li>
          <li className="hover:text-purple-500 cursor-pointer" onClick={scrollToFAQ}>
            Questions
          </li>
          <li className="hover:text-purple-500 cursor-pointer">How it Works?</li>
        </ul>
      </nav>

      {/* ✅ Main Content */}
      <div className="mt-48 px-6 text-center">
        <h2 className="text-lg text-gray-300">
          Better assessments begin with better recommendations.
        </h2>
        <h1 className="text-4xl font-bold mt-4">SHL Assessment Recommender</h1>
        <p className="text-lg mt-2 text-gray-300">
          Smart assessment choices, powered by intelligence.
        </p>

        <button
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition"
          onClick={handleTryForFree}
        >
          Try For Free
        </button>
      </div>

      {/* ✅ Demo Section */}
      <div id="demo" className="flex min-h-screen w-full items-center justify-center px-3 mt-32">
        <video
          src="/demo/vid.mp4"
          poster="/demo/poster.png"
          id="demo-video"
          controls
          loop
          muted
          className="rounded-xl md:w-2/3 border border-gray-700"
        ></video>
      </div>

      {/* ✅ FAQ Section */}
      
    </div>

  );
}
