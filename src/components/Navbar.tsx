import "../App.css";

import { FaVideo } from "react-icons/fa";
import { useState } from "react";
import GoogleSignInButton from "./GoogleSignInButton";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  const navigate = useNavigate();

  const handlerChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    navigate('/search');
  };

  const handleLogoClick = () => {
    // Recargar la página cuando se hace clic en el logo
    window.location.href = '/';
  };


  return (
    <nav className="bg-slate-100 w-full h-20 flex justify-between items-center px-5">
      <div className="flex items-center gap-3">
        <Link to='/' onClick={handleLogoClick}>
        <FaVideo className="text-xl mt-1" />
        </Link>
        <h1 className="text-black text-2xl font-medium">
        <Link to='/' onClick={handleLogoClick}>Streamr</Link>
        </h1>
        <GoogleSignInButton />
      </div>
      <form onSubmit={handlerSubmit} className="relative">
        <div className="flex items-center justify-center">
       
          <div
            className="flex items-center max-w-md mx-auto bg-white rounded-lg "
           
          >
            <div className="w-full">
              <input
                onChange={(event) => handlerChange(event)}
                value={searchTerm}
                className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                placeholder="Buscar videos"
                x-model="search"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div> 
      </form>
    </nav>
  );
};

export default Navbar;