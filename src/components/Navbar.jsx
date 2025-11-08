export default function Navbar() {
  return (
    <header className="border-b border-gray-300 shadow-sm">
      {/* Top Header Section */}
      <div className="bg-white flex items-center px-10 py-3 space-x-4">
        <img
          src="/assets/uttarakhand-logo.png"
          alt="Uttarakhand Logo"
          className="h-14 w-auto object-contain"
        />
        <div className="leading-tight">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            उत्तराखंड सरकार
          </h1>
          <p className="text-sm sm:text-base text-gray-700">
            Government of Uttarakhand
          </p>
        </div>
      </div>

      {/* Blue Navbar Section */}
      <nav className="bg-blue-900 text-white text-sm font-semibold">
        <ul className="flex justify-start items-center gap-8 px-10 py-2">
          <li className="hover:bg-blue-800 px-3 py-1 rounded">Home</li>
          <li className="hover:bg-blue-800 px-3 py-1 rounded">Feedback</li>
          <li className="hover:bg-blue-800 px-3 py-1 rounded">Meri Yojna Book</li>
          <li className="hover:bg-blue-800 px-3 py-1 rounded">GOs & Gazettes</li>
          <li className="hover:bg-blue-800 px-3 py-1 rounded">Citizen</li>
          <li className="hover:bg-blue-800 px-3 py-1 rounded">State Profile</li>
          <li className="hover:bg-blue-800 px-3 py-1 rounded">Apex Bodies</li>
          <li className="hover:bg-blue-800 px-3 py-1 rounded">Downloads</li>
        </ul>
      </nav>
    </header>
  );
}
