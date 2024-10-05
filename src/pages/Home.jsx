import React from "react";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  return (
    <main className="container mx-1 max-width overflow-hidden md:flex justify-between items-center">
      <div>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold whitespace-nowrap">
          Hi, 👋<br />My Name is<br />
        </h1>
        <h1 className="text-2xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold whitespace-nowrap">
          {name}
        </h1>
        <h2 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl font-bold whitespace-nowrap">
          {tagline}
        </h2>
      </div>
      <div className="w-full hero-section">
        <img className="hidden w-full sm:block" src={img} alt="Profile" />
      </div>
    </main>
  );
}

export default Home;
