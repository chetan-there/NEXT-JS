function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 pt-20 bg-gray-50">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Build Amazing <span className="text-blue-600">React</span> Projects
        </h1>
        <p className="text-gray-600 text-lg">
          Learn, practice, and grow with interactive web development challenges.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
          alt="React Logo"
          className="w-80 mx-auto animate-bounce"
        />
      </div>
    </section>
  );
}

export default Hero;
