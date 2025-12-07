function ContactSection() {
  return (
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
  )
}

export default ContactSection