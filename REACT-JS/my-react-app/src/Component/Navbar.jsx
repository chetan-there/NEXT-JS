function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed w-full top-0 z-10">
      <h1 className="text-2xl font-bold text-blue-600">ReactBrand</h1>

      <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Services</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      <button className="md:hidden text-2xl text-gray-600">
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
