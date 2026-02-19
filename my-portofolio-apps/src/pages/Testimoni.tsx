function Testimoni() {
  return (
    <div className="testimoni min-h-screen">
      <div className="mt-30 p-8 text-center text-white">
        <h2 className="font-extrabold text-5xl md:text-6xl mb-10">
          Testimonials
        </h2>
      </div>

      <div className="flex justify-center mt-30">
        <div
          className="bg-white/100 p-6 rounded-2xl shadow-xl w-11/12 md:w-3/5 lg:w-2/5 max-w-xl h-120"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-xl font-medium mt-10 mb-6 text-justify text-gray-800">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nisi natus ab voluptatem aliquam, impedit vitae facere eaque iusto ut quas dolor fugit autem voluptates molestias sed, rem aperiam non."
          </p>
          <h2 className="text-center text-2xl font-bold mt-15 text-gray-900">Prajogo Pangestu</h2>
          <p className="text-center text-lg text-gray-600">PT Panen Unduh Kencana</p>
        </div>
      </div>
    </div>
  );
}

export default Testimoni;
