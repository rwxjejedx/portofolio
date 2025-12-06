import HeroImage from "./assets/hero.png";

import Js from "./assets/tools/js.png";
import Nextjs from "./assets/tools/nextjs.png";
import Tailwind from "./assets/tools/tailwind.png";
import Node from "./assets/tools/nodejs.png";
import React from "./assets/tools/reactjs.png";
import Ai from "./assets/tools/ai.png";
import Bootstrap from "./assets/tools/bootstrap.png";
import Canva from "./assets/tools/canva.png";
import Figma from "./assets/tools/figma.png";
import Github from "./assets/tools/github.png";
import Vscode from "./assets/tools/vscode.png";

function App() {

  return (
    <>
    {/* Hero */}
      <div className="hero flex flex-col md:flex-row gap-4 bg-white/80 backdrop-blur-md rounded-2xl md:mt-50">
        <div className="flex-1"> 
            <div className="flex items-center p-4 rounded-2xl opacity-100 bg-white/20 backdrop-blur-md">
                <div className="p-10 text-black">
                    <h1 className="font-bold text-5xl mb-5"> i'm Julham Maulana </h1>
                    <p className="text-sm sm:font-medium sm:text-xl mb-5 ">"I design and engineer comprehensive web applications, from pixel-perfect frontend interfaces (using React) to robust, scalable backend systems. Let's transform your ideas into fast and reliable web applications."</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="bg-zinc-700 rounded-xl p-3 hover:bg-zinc-600 border text-white">Portofolio</a>
                        <a href="#" className="bg-zinc-700 rounded-xl p-3 hover:bg-zinc-600 border text-white">Contact</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-center items-center p-4">
            <img 
                src={HeroImage} 
                alt="Hero Background" 
                className="w-[300px] h-[300px] object-cover rounded-2xl" 
            />
        </div>
    </div>
    {/* About Me */}
    <div className="about mt-80">
        <div className="mt-16 p-8 flex flex-col items-center justify-center text-center text-white">
          <h3 className="font-extrabold text-5xl md:text-6xl mb-2">About Me</h3>
          <p className="font-semibold text-xl">A story of growth and discovery</p>
        </div>
        <div className="text-white mt-10 flex flex-col  p-10 md:w-full lg:ml-80 lg:w-180">
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
                className="w-10" 
            />
            <img 
                src={Nextjs} 
                alt="NextJs" 
                className="w-10" 
            />
            <img 
                src={Tailwind} 
                alt="Tailwind" 
                className="w-10" 
            />
            <img 
                src={Node} 
                alt="NodeJs" 
                className="w-10" 
            />
            <img 
                src={React} 
                alt="React" 
                className="w-10" 
            />
        </div>
        </div>
    </div>

    {/* skill */}
    <section className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
          <div className="mt-16 p-8 flex flex-col items-center justify-center text-center text-white">
            <h2 className="font-extrabold text-5xl md:text-6xl mb-20">
              Skills and Tools
            </h2>
          </div>
         
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">Front-End</h3>
                  
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                      
                      <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                          <img src={React} alt="React" className="w-8 h-8 mb-1" />
                          <p className="text-white text-xs font-semibold">React</p>
                      </div>
                      
                      
                      <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                          <img src={Js} alt="JavaScript" className="w-8 h-8 mb-1" />
                          <p className="text-white text-xs font-semibold">JS</p>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                          <img src={Tailwind} alt="Tailwind CSS" className="w-8 h-8 mb-1" />
                          <p className="text-white text-xs font-semibold">Tailwind</p>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                          <img src={Bootstrap} alt="Bootstrap" className="w-8 h-8 mb-1" />
                          <p className="text-white text-xs font-semibold">Bootstrap</p>
                      </div>

                      </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">Back-End</h3>
                  
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                      
                      <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                          <img src={Node} alt="Node.js" className="w-8 h-8 mb-1" />
                          <p className="text-white text-xs font-semibold">Node.js</p>
                      </div>

                      <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                          <img src={Nextjs} alt="Next.js" className="w-8 h-8 mb-1" />
                          <p className="text-white text-xs font-semibold">Next.js</p>
                      </div>
                      
                      </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">DevOps & Tools</h3>
                  
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                      
                      <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                          <img src={Github} alt="GitHub" className="w-8 h-8 mb-1" />
                          <p className="text-white text-xs font-semibold">GitHub</p>
                      </div>

                      <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                          <img src={Vscode} alt="VS Code" className="w-8 h-8 mb-1" />
                          <p className="text-white text-xs font-semibold">VS Code</p>
                      </div>

                      <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                          <img src={Figma} alt="Figma" className="w-8 h-8 mb-1" />
                          <p className="text-white text-xs font-semibold">Figma</p>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                          <img src={Canva} alt="Canva" className="w-8 h-8 mb-1" />
                          <p className="text-white text-xs font-semibold">Canva</p>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                          <img src={Ai} alt="Adobe Illustrator" className="w-8 h-8 mb-1" />
                          <p className="text-white text-xs font-semibold">Illustrator</p>
                      </div>

                      </div>
              </div>
          </div>
      </div>
  </section>
    </>
  )
}

export default App
