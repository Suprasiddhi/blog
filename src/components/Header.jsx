import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-[antiquewhite] m-0 flex items-center justify-between px-5 py-2 relative">
      <div
        className="relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <img src="default.png" alt="Logo" className="cursor-pointer" />

        {dropdownOpen && (
          <ul className="absolute left-0 mt-0 w-40 bg-white shadow-lg rounded-md overflow-hidden z-50">
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="block px-4 py-2 hover:bg-gray-100">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/blogpage"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Blog Page
              </Link>
            </li>
          </ul>
        )}
      </div>

      <div className="hidden md:block m-0">
        <ul className="flex list-none gap-5 cursor-pointer">
          <li>
            <Link
              to="/"
              className="relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blogpage"
              className="relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300"
            >
              Blog Page
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <img src="default.png" alt="User" />
      </div>
    </div>
  );
}

export default Header;
