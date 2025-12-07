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

import proyek1 from "./assets/proyek/proyek1.webp";
import proyek2 from "./assets/proyek/proyek2.webp";

function App() {

  return (
    <>
    {/* Hero */}
      <div className="hero flex flex-col md:flex-row gap-4 bg-white/80 backdrop-blur-md rounded-2xl md:mt-50 animate__animated animate__fadeInUp animate__delay-1s">
        <div className="flex-1 animate__animated animate__fadeInUp animate__delay-2s"> 
            <div className="flex items-center p-4 rounded-2xl opacity-100 bg-white/20 backdrop-blur-md">
                <div className="p-10 text-black">
                    <h1 className="font-bold text-xl md:text-xl xl:text-4xl mb-5"> i'm Julham Maulana </h1>
                    <p className="text-sm sm:font-medium sm:text-xl mb-5 text-justify">I design and engineer comprehensive web applications, from pixel-perfect frontend interfaces (using React) to robust, scalable backend systems. Let's transform your ideas into fast and reliable web applications.</p>
                    <div className="flex items-center gap-4">
                        <a href="#portofolio" className="bg-zinc-700 rounded-xl p-3 hover:bg-zinc-600 border text-white">Portofolio</a>
                        <a href="#contact" className="bg-zinc-700 rounded-xl p-3 hover:bg-zinc-600 border text-white">Contact</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-center items-center p-4">
            <img 
                src={HeroImage} 
                alt="Hero Background" 
                className="w-[300px] h-[300px] object-cover rounded-2xl animate__animated animate__fadeInUp animate__delay-2s" loading="lazy"
            />
        </div>
    </div>
    {/* About Me */}
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

    {/* skill */}
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

    {/* Portofolio */}

    <div className="portofolio" id="portofolio">
        <div className="mt-16 p-8 text-center text-white">
              <h2 className="font-extrabold text-5xl md:text-6xl mb-20">
                Portofolio
              </h2>
        </div>
        <div className="container flex flex-col md:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-duration="1000">
          <div className="card bg-white/100 rounded-xl">
           <div className="p-4 rounded-lg">
              <p className="font-bold text-xl mb-4 text-black text-center">Website Perumahan</p>
                <img src={proyek1} alt="React" className="w-fit mb-5" loading="lazy" />
                <a 
                      href="#" 
                      className="bg-blue-600 p-3 text-white rounded font-semibold hover:bg-blue-700 transition duration-300 
                                w-full block text-center" 
                  >
                      Lihat Detail
                </a>
            </div>
            </div>
            <div className="card bg-white/100 rounded-xl">
              <div className="p-4 rounded-lg">
                  <p className="font-bold text-xl mb-4 text-black text-center">Brosur Perumahan</p>
                  
                  <img src={proyek2} alt="Brosur Perumahan" className="w-fit mb-5 " loading="lazy" /> 
                  
                  <a 
                      href="#" 
                      className="bg-blue-600 p-3 text-white rounded font-semibold hover:bg-blue-700 transition duration-300 w-full block text-center" 
                  >
                      Lihat Detail
                  </a>
              </div>
          </div>
              
        </div>
    </div>

    {/* Expirience Sections */}
    <div className="expirience mt-20" id="pengalaman">
      <div className="mt-30 p-8 text-center text-white">
              <h2 className="font-extrabold text-5xl md:text-6xl mb-20">
                Experience
              </h2>
        </div>
        
        <div className="flex flex-col md:flex-row text-white" data-aos="fade-up" data-aos-duration="5000">
        <div className="ml-2 w-100 p-1 md:p-4">
          <p className="font-bold text-xl">SEP 2017- NOV 2025</p>
        </div>
        <div className="w-full p-4">
          <h3 className="font-bold text-xl">IT Support</h3>
            <p className="mt-2 text-justify">PT Panen Unduh Kencana is a company engaged in the property sector, specifically specializing in housing development in the Bekasi and Subang regions.</p>
            
            <h4 className="font-bold mt-4 text-lg">Key Responsibilities:</h4>
            <ul className="text-md list-disc ml-6 space-y-2 text-justify">
                <li>Dukungan Teknis & Troubleshooting (L1/L2): Providing first and second-level technical support for hardware and software issues to maintain operational continuity.</li>
                <li>Network Infrastructure Management: Monitoring, maintaining, and configuring network devices such as routers, switches, and Wi-Fi access points.</li>
                <li>System Maintenance & Deployment: Executing the installation, configuration, and necessary updates for operating systems (Windows, macOS, Linux) and critical business applications.</li>
                <li>User Account Management: Creating, modifying, and decommissioning user accounts (e.g., email, domain, and system access) while adhering to security protocols.</li>
                <li>Basic Security Management: Administering antivirus solutions and performing essential security patching on user systems.</li>
                <li>IT Asset Inventory: Documenting and tracking all company IT assets, including laptops, monitors, and software licenses, for resource planning.</li>
                <li>Data Backup & Recovery: Ensuring critical data is backed up regularly and conducting successful data restoration procedures following system failures.</li>
                <li>User Training: Providing essential guidance and training to staff on software usage and internal IT policies.</li>
                <li>Dokumentasi: Creating and maintaining technical documentation (SOPs, knowledge base) for long-term internal support and team continuity.</li>
            </ul>
        </div>
        </div>
    </div>

    {/* Testimoni */}
    <div className="testimoni h-200" id="testimoni">
    
    <div className="mt-30 p-8 text-center text-white">
        <h2 className="font-extrabold text-5xl md:text-6xl mb-10">
            Testimonials
        </h2>
    </div>
    
    <div className="flex justify-center mt-30"> 
        
            <div className="bg-white/100 p-6 rounded-2xl shadow-xl
                w-11/12 md:w-3/5 lg:w-2/5 max-w-xl h-100
            ">
                <p className="text-xl font-medium mt-10 mb-6 text-justify text-gray-800">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nisi natus ab voluptatem aliquam, impedit vitae facere eaque iusto ut quas dolor fugit autem voluptates molestias sed, rem aperiam non."
                </p>
                
                <h2 className="text-center text-2xl font-bold mt-15 text-gray-900">Prajogo Pangestu</h2>
                <p className="text-center text-lg text-gray-600">PT Panen Unduh Kencana</p>
            </div>
            
        </div>

    </div>

    {/* Contact */}
    <div className=" text-blue h-200" id="contact">
    
      <div className="mt-16 p-8 text-center text-white">
          <h2 className="font-extrabold text-5xl md:text-6xl mb-10">
              Contact Me
          </h2>
      </div>
      <div className="flex justify-center items-center" >
          <form action="https://formspree.io/f/xjknonyr" method="POST" className="bg-white/100 p-6 rounded-2xl shadow-xl w-11/12 md:w-3/5 lg:w-2/5 max-w-xl" autoComplete="off">
            <div className="flex flex-col gap-6">

              <div className="flex flex-col gap-2">
                <label>Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Masukan nama" className="border border-zinc-500 p-2 rounded-md" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input type="email" name="email" placeholder="Masukan email..." className="border border-zinc-500 p-2 rounded-md" required />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">Pesan</label>
                <textarea name="pesan" id="pesan" cols={45} rows={7} placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-blue-700 p-3 rounded-lg bloc w-full cursor-pointer border-blue-600 hover:bg-blue-500">Kirim Pesan</button>
              </div>
            </div>
          </form>
        </div>
    </div>
    
    </>
  )
}

export default App
