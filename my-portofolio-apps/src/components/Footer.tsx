const Footer = () => {
  return (
    <div className="text-white mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center border-t-4 border-blue-500 shadow-md">
        <div className="">
            <h1 className="text-2xl font-bold">Julham Maulana</h1>
        </div>
        <div className="flex gap-3 flex-row">
            <a href="#beranda" className="">Home</a>
            <a href="#about" className="">About</a>
            <a href="#skill" className="">Tools</a>
            <a href="#portofolio" className="">Portofolio</a>
            <a href="#contact" className="">Contact</a>
        </div>
        <div className="flex flex-row items-center gap-3">
                <a href="#" className="ri-github-fill ri-2x"></a>
                <a href="#" className="ri-instagram-fill ri-2x"></a>
                <a href="#" className="ri-twitter-fill ri-2x"></a>
                <a href="#" className="ri-linkedin-fill ri-2x"></a>
        </div>
    </div>
  )
}

export default Footer