import HeroImage from "@/assets/hero.png";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;