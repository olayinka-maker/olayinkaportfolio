import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen ">
      <div className="flex flex-col items-center justify-center -mt-20 text-center">
        <h1 className="frijole-text font-extrabold text-6xl">
          Hello, I'm Ajibode Olayinka
        </h1>
        <p className="text-2xl sniglet-text mt-4">A Frontend Developer</p>
        <p className="text-lg sniglet-text mt-2">
          I create beautiful and functional web applications.
        </p>
        <a
          href="#projects"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
