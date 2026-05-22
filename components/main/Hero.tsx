import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden" id="about-me">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none rotate-180 absolute -top-24 md:-top-44 lg:-top-64 h-full w-full left-0 z-[1] object-cover object-center"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
