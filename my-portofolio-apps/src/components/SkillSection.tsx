import Js from "@/assets/tools/js.png";
import Nextjs from "@/assets/tools/nextjs.png";
import Tailwind from "@/assets/tools/tailwind.png";
import Node from "@/assets/tools/nodejs.png";
import React from "@/assets/tools/reactjs.png";
import Ai from "@/assets/tools/ai.png";
import Bootstrap from "@/assets/tools/bootstrap.png";
import Canva from "@/assets/tools/canva.png";
import Figma from "@/assets/tools/figma.png";
import Github from "@/assets/tools/github.png";
import Vscode from "@/assets/tools/vscode.png";

function SkillSection() {
  return (
    <div className="py-16 bg-white/5 backdrop-blur-sm " id="skill" >
        <div className="container mx-auto px-4">
            <div className="mt-16 p-8 flex flex-col items-center justify-center text-center text-white">
              <h2 className="font-extrabold text-5xl md:text-6xl mb-20">
                Skills and Tools
              </h2>
            </div>
          
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 " data-aos="fade-up" data-aos-duration="1000" >
                
                <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">Front-End</h3>
                    
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                        
                        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                            <img src={React} alt="React" className="w-8 h-8 mb-1" loading="lazy"/>
                            <p className="text-white text-xs font-semibold">React</p>
                        </div>
                        
                        
                        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                            <img src={Js} alt="JavaScript" className="w-8 h-8 mb-1" loading="lazy" />
                            <p className="text-white text-xs font-semibold">JS</p>
                        </div>
                        
                        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                            <img src={Tailwind} alt="Tailwind CSS" className="w-8 h-8 mb-1" loading="lazy" />
                            <p className="text-white text-xs font-semibold">Tailwind</p>
                        </div>
                        
                        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                            <img src={Bootstrap} alt="Bootstrap" className="w-8 h-8 mb-1" loading="lazy" />
                            <p className="text-white text-xs font-semibold">Bootstrap</p>
                        </div>

                        </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">Back-End</h3>
                    
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                        
                        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                            <img src={Node} alt="Node.js" className="w-8 h-8 mb-1" loading="lazy" />
                            <p className="text-white text-xs font-semibold">Node.js</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                            <img src={Nextjs} alt="Next.js" className="w-8 h-8 mb-1" loading="lazy" />
                            <p className="text-white text-xs font-semibold">Next.js</p>
                        </div>
                        
                        </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">DevOps & Tools</h3>
                    
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                        
                        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                            <img src={Github} alt="GitHub" className="w-8 h-8 mb-1" loading="lazy" />
                            <p className="text-white text-xs font-semibold">GitHub</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                            <img src={Vscode} alt="VS Code" className="w-8 h-8 mb-1" loading="lazy" />
                            <p className="text-white text-xs font-semibold">VS Code</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                            <img src={Figma} alt="Figma" className="w-8 h-8 mb-1" loading="lazy" />
                            <p className="text-white text-xs font-semibold">Figma</p>
                        </div>
                        
                        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                            <img src={Canva} alt="Canva" className="w-8 h-8 mb-1" loading="lazy" />
                            <p className="text-white text-xs font-semibold">Canva</p>
                        </div>
                        
                        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center hover:bg-gray-600 transition duration-300">
                            <img src={Ai} alt="Adobe Illustrator" className="w-8 h-8 mb-1" loading="lazy" />
                            <p className="text-white text-xs font-semibold">Illustrator</p>
                        </div>

                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillSection