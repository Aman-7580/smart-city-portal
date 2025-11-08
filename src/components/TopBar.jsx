export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white text-xs sm:text-sm py-1 px-6 flex justify-between items-center">
      {/* Left Section */}
      <div className="space-x-3 hidden sm:flex">
        <a href="#" className="hover:underline">Skip to main content</a>
        <a href="#" className="hover:underline">Screen Reader Access</a>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        <div className="hidden sm:flex items-center space-x-1">
          <span>Text Size:</span>
          <button className="border px-1 rounded hover:bg-blue-700">A−</button>
          <button className="border px-1 rounded hover:bg-blue-700">A</button>
          <button className="border px-1 rounded hover:bg-blue-700">A+</button>
        </div>
        <button className="border border-white px-2 rounded hover:bg-blue-700 text-sm">
          हिन्दी में
        </button>
      </div>
    </div>
  );
}
