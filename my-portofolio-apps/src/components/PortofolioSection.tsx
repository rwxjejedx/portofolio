import proyek1 from "@/assets/proyek/proyek1.webp";
import proyek2 from "@/assets/proyek/proyek2.webp";
import { Link } from 'react-router-dom';

function PortofolioSection() {
  return (
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
                <Link 
                    to="/proyek/detail-perumahan1" // Path yang didaftarkan di App.tsx
                    className="bg-blue-600 p-3 text-white rounded font-semibold hover:bg-blue-700 transition duration-300 w-full block text-center" 
                    >
                    Lihat Detail
                </Link>
            </div>
            </div>
            <div className="card bg-white/100 rounded-xl">
              <div className="p-4 rounded-lg">
                  <p className="font-bold text-xl mb-4 text-black text-center">Brosur Perumahan</p>
                  
                  <img src={proyek2} alt="Brosur Perumahan" className="w-fit mb-5 " loading="lazy" /> 
                  
                  <Link 
                    to="/proyek/detail-perumahan2" // Path yang didaftarkan di App.tsx
                    className="bg-blue-600 p-3 text-white rounded font-semibold hover:bg-blue-700 transition duration-300 w-full block text-center" 
                    >
                    Lihat Detail
                </Link>
              </div>
          </div>
              
        </div>
    </div>
  )
}

export default PortofolioSection