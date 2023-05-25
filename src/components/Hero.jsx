import React from "react";
import "../App.css";
import { logo } from "../assets";
import summifypng from "../assets/summifypng.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={summifypng}
          alt="summifyai_logo"
          className=" w-20 object-contain"
        ></img>
        <h2 className="font-bold text-2xl">SUMMIFY AI</h2>
        <button
          onClick={() => window.open("https://github.com/satyaprakash2002")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className=" head_text">
        Summerize articles with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">Open Ai GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summify AI, an open source article summarizer
        that transforms leangthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
