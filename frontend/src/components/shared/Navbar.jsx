import { LogOut, User } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="shadow-sm fixed w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Left Side */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="" className="w-10 h-10" />
            </Link>
            <Link to="/" className="text-xl font-semibold text-gray-900">
              RoadMap
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Right Side */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="h-11 w-1h-11 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  src="https://avatars.githubusercontent.com/u/80962495?v=4"
                  className="h-11 w-1h-11 object-cover"
                  alt="Avatar"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <button
                    className="flex items-center gap-0.5 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <User size={16} /> Profile
                  </button>
                  <button
                    className="flex items-center gap-0.5 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
