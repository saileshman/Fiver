import Fiver from "../assets/fiver.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const user = {
    id: 1,
    username: "joe",
    isSeller: true,
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex items-center justify-between px-4 py-3 bg-white shadow-md relative">
      {/* Left side */}
      <div className="flex items-center gap-6">
        <img src={Fiver} alt="Fiver" className="h-8" />
        <div className="flex gap-5 font-medium">
          <NavLink to="#" className="hover:text-green-600">Fiverpro</NavLink>
          <NavLink to="#" className="hover:text-green-600">Explore</NavLink>
          <NavLink to="#" className="hover:text-green-600">English</NavLink>
          {!user?.isSeller && (
            <NavLink to="#" className="hover:text-green-600">Become a Seller</NavLink>
          )}
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 font-medium relative">
        {user?.id ? (
          <>
            

            {/* Username with dropdown */}
            <div className="relative " ref={dropdownRef}>
              <button
                className="cursor-pointer hover:text-green-600 ml-10"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {user.username}
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg text-gray-700 z-50">
                  <li>
                    <NavLink to="/order" className="block px-4 py-2 hover:bg-gray-100">
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gigs" className="block px-4 py-2 hover:bg-gray-100">
                      Gigs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/messages" className="block px-4 py-2 hover:bg-gray-100">
                      Messages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/add" className="block px-4 py-2 hover:bg-gray-100">
                      Add New Gigs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/logout" className="block px-4 py-2 hover:bg-gray-100">Logout</NavLink>
                  </li>
                </ul>
              )}
            </div>
          </>
        ) : (
          <>
            <NavLink to="#" className="hover:text-green-600">Signin</NavLink>
            <NavLink to="#" className="hover:text-green-600">Join</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
