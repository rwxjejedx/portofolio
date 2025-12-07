import { useNavigate } from 'react-router-dom';
import proyek1 from "@/assets/proyek/proyek1.webp";

function DetailProyek1() {
    const navigate = useNavigate(); 
  
  // Fungsi yang akan dipanggil saat tombol diklik
    const handleGoHome = () => {
        // navigate('/') akan mengarahkan pengguna ke path root
    navigate('/'); 
  };
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-6">
        Website Perumahan
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-lg container mx-auto max-w-4xl">
        <img src={proyek1} alt="React" className="w-fit mb-10" loading="lazy" />

        <div className="text-justify">
        <h3 className='font-bold'>
            Situation
        </h3>
        <p>
           Perum Nusantara, sebuah perusahaan properti skala menengah, kesulitan meningkatkan daya tarik digital dan membangun kepercayaan konsumen karena tidak memiliki platform promosi online yang memadai. Ketergantungan pada brosur cetak dan informasi yang tersebar menyebabkan prospek yang minim dan persepsi kredibilitas yang rendah di kalangan calon pembeli properti yang didominasi oleh pencarian online. 
        </p>
        <h3 className='font-bold'>Task</h3>
        <p>Saya bertanggung jawab penuh untuk merancang dan membangun Website Resmi Perum Nusantara yang ringan dan ramah mobile. Tujuan utama proyek ini adalah menyediakan akses 24/7 ke informasi proyek (lokasi, tipe unit, galeri), menampung lead konsumen melalui formulir kontak, dan secara keseluruhan meningkatkan citra profesional perusahaan.</p>
        <h3 className='font-bold'>Action</h3>
        <ol  className='list-decimal pl-5 space-y-2'>
            <li>Struktur dan Semantik (HTML): Saya merancang struktur halaman menggunakan HTML5 semantik untuk memastikan keterbacaan kode yang baik dan optimasi dasar untuk Search Engine Optimization (SEO). Struktur ini mencakup layout untuk galeri foto, detail unit, dan formulir pendaftaran prospek.</li>
            <li>Visualisasi dan Responsivitas (CSS): Saya menggunakan CSS3 secara ekstensif untuk menerapkan desain profesional yang sesuai dengan branding perusahaan. Saya membangun tata letak yang sepenuhnya responsif menggunakan media queries dan teknik Flexbox/Grid, memastikan tampilan sempurna di desktop, tablet, dan smartphone. Saya juga mengimplementasikan efek visual hover dan animasi loading sederhana menggunakan CSS murni.</li>
            <li>Interaktivitas (JavaScript)</li>
        </ol>
        <h3 className='font-bold'>Result</h3>
        <p>Website selesai dalam empat minggu dan langsung diluncurkan. Dampaknya adalah:</p>
        <ul className='list-disc pl-5'>
            <li>Peningkatan Prospek: Karena formulir kontak mudah diakses dan validasi real-time yang cepat, tingkat pengiriman data prospek meningkat sebesar 30% dalam dua bulan pertama.</li>
            <li>Aksesibilitas dan Kecepatan: Penggunaan HTML/CSS/JS yang ringan menghasilkan time-to-interactive yang sangat cepat di perangkat mobile, berkontribusi pada laporan peningkatan kepuasan pengguna sebesar 90% terhadap kecepatan situs.</li>
            <li>Dukungan Sales: Tim sales kini memiliki aset digital tunggal yang profesional untuk mendukung promosi, yang secara signifikan memperkuat kredibilitas perusahaan saat berinteraksi dengan calon pembeli.</li>
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

export default DetailProyek1