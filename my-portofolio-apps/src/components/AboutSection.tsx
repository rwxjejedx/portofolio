import Js from "@/assets/tools/js.png";
import Nextjs from "@/assets/tools/nextjs.png";
import Tailwind from "@/assets/tools/tailwind.png";
import Node from "@/assets/tools/nodejs.png";
import React from "@/assets/tools/reactjs.png";

function AboutSection() {
  return (
    <div className="about mt-80 " id="about">
        <div className="mt-16 p-8 flex flex-col items-center justify-center text-center text-white" >
          <h3 className="font-extrabold text-5xl md:text-6xl mb-2">About Me</h3>
          <p className="font-semibold text-xl">A story of growth and discovery</p>
        </div>
        <div className="text-white mt-10 flex flex-col  p-10 md:w-full lg:ml-80 lg:w-180 text-justify" data-aos="fade-up" data-aos-duration="1000">
          <h5 className="font-bold text-2xl mb-1">Julham Maulana</h5>
          <p className="font-semibold text-sm mb-5">Computer Science Fresh Graduate</p>
          <p className="font-semibold text-lg mb-5">Hello! You can call me Julham. I am a Software Engineer who works with the React ecosystem and writes to teach people how to rebuild and redefine fundamental concepts through mental models. </p>

          <p className="font-semibold text-lg mb-5">I was born in 1999 in Batang, Indonesia. When the pandemic hit 5 years ago, my university was closed for a few weeks, and I started to learn web development, especially front-end development, out of boredom.</p>

          <p className="font-semibold text-lg mb-5">As part of my learning journey, I started writing blog articles as a way to solidify my knowledge. When I posted them here as documentation, I discovered that many people found them valuable. Hopefully, it can help you too.</p>

          <p className="font-semibold text-lg mb-5">I am also a full-stack engineer, here are my current favorite tech stack:</p>
          <div className="tools grid grid-cols-3 sm:grid-cols-5 gap-4 md:flex md:flex-row md:gap-10">
          <img 
                src={Js} 
                alt="JS" 
                className="w-10" loading="lazy"
            />
            <img 
                src={Nextjs} 
                alt="NextJs" 
                className="w-10" loading="lazy"
            />
            <img 
                src={Tailwind} 
                alt="Tailwind" 
                className="w-10" loading="lazy"
            />
            <img 
                src={Node} 
                alt="NodeJs" 
                className="w-10" loading="lazy"
            />
            <img 
                src={React} 
                alt="React" 
                className="w-10" loading="lazy"
            />
        </div>
        </div>
    </div>
  )
}

export default AboutSection