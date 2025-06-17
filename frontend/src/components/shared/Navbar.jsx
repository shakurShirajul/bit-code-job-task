import { LogOut, User } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/logo/logo.svg";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/authSlice";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

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
    <div className="backdrop-blur-md bg-white/10 border-b border-white/20 shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Left Side */}
          <div className="flex items-center gap-1">
            <Link to="/">
              <img src={logo} alt="" className="w-10 h-10 animate-bounce" />
            </Link>
            <Link to="/" className="text-xl font-semibold text-gray-900">
              <div>
                <h1 className="text-xl font-bold text-white ">VoteForge</h1>
                <p className="text-xs text-gray-100 -mt-1">Roadmap App</p>
              </div>
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
                  src={user?.image}
                  className="h-11 w-1h-11 object-cover"
                  alt={user?.name}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2  bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 backdrop-blur-md border border-white/20 rounded-xl shadow-lg text-white min-w-[220px] z-10">
                  <button
                    className="w-full text-left px-4 py-2 text-sm hover:bg-white/20 transition rounded-t-xl"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="grid">
                      <p className="font-medium">{user?.name}</p>
                      <p className="w-[200px] truncate text-xs text-white/70">
                        {user?.email}
                      </p>
                    </div>
                  </button>
                  <button
                    className="flex items-center gap-1 w-full text-left px-4 py-2 text-sm hover:bg-white/20 transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <User size={16} /> Profile
                  </button>
                  <button
                    className="flex items-center gap-1 w-full text-left px-4 py-2 text-sm hover:bg-white/20 transition rounded-b-xl"
                    onClick={() => {
                      setDropdownOpen(false);
                      dispatch(logoutUser());
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
