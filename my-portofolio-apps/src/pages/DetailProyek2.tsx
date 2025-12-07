import { useNavigate } from 'react-router-dom';
import proyek2 from "@/assets/proyek/proyek2.webp";
function DetailProyek2() {
    const navigate = useNavigate(); 
    const handleGoHome = () => {
    navigate('/'); 
    };
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        Brosur Perumahan
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-lg container mx-auto max-w-4xl">
         <img src={proyek2} alt="React" className="w-fit mb-10" loading="lazy" />
        <div className="text-justify">
            <h3 className='font-bold'>
                    Situation
            </h3>
            <p>
                    Perumahan baru Nusantara Residence baru saja diluncurkan, tetapi tim pemasaran hanya memiliki flyer promosi yang sederhana. Dibutuhkan material pemasaran fisik yang lebih premium, informatif, dan persuasif untuk digunakan dalam pameran dan presentasi langsung kepada calon pembeli kelas menengah ke atas.
            </p>

                <h3 className='font-bold'>Task</h3>
                <p>
                    Saya bertanggung jawab merancang yang menyoroti keunggulan lokasi, fasilitas premium, dan desain arsitektur unit. Tujuan utamanya adalah untuk meningkatkan citra merek perumahan dan menyediakan alat yang mudah dibawa namun kaya informasi untuk tim sales.
                </p>

                <h3 className='font-bold'>Action</h3>
                <ol className='list-decimal pl-5 space-y-2'>
                    <li>Pengumpulan Aset: Saya bekerja sama dengan arsitek untuk mendapatkan rendering*3D resolusi tinggi, denah lantai yang akurat, dan peta lokasi strategis.</li>
                    <li>Perancangan Grafis: Menggunakan Adobe Illustrator dan Photoshop (atau Figma/Canva), saya merancang layout tiga lipatan yang menarik, memastikan hierarchy informasi yang jelas. </li>
                    <li>Finalisasi Cetak: Saya menyiapkan file dalam format CMYK dengan resolusi tinggi (300 dpi) dan menambahkan bleed serta safe zone yang diperlukan, sebelum menyerahkannya ke percetakan untuk produksi.</li>
                </ol>

                <h3 className='font-bold'>Result</h3>
                <p>
                    Brosur tersebut dicetak dalam kuantitas besar dan diterima dengan baik oleh tim *sales*. Dalam satu bulan setelah distribusinya:
                </p>
                <ul className='list-disc pl-5'>
                    <li>Peningkatan Kualitas Prospek: Tim sales melaporkan bahwa brosur ini membantu mereka menarik perhatian pembeli yang lebih serius, yang menghasilkan peningkatan engagement sebesar 20% selama presentasi.</li>
                    <li>Persepsi Nilai: Konsumen memberikan umpan balik positif tentang kualitas dan desain brosur, yang berkontribusi pada persepsi nilai properti yang lebih tinggi dibandingkan pesaing.</li>
                </ul>
                </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={handleGoHome} 
            className="bg-gray-500 p-3 text-white rounded font-semibold hover:bg-gray-600 transition duration-300"
          >
            ⬅️ Kembali ke Halaman Utama
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailProyek2