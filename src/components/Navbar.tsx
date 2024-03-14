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
        <FaVideo className="text-xl mt-1" />
        <h1 className="text-black text-2xl font-medium">
        <Link to='/' onClick={handleLogoClick}>Streamr</Link>
        </h1>
      </div>
      <form onSubmit={handlerSubmit} className="relative">
        <div className="flex items-center justify-center min-h-screen">
        <GoogleSignInButton />
          <div
            className="flex items-center max-w-md mx-auto bg-white rounded-lg "
           
          >
            <div className="w-full">
              <input
                onChange={(event) => handlerChange(event)}
                value={searchTerm}
                className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                placeholder="Buscar videos/canal"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div> 
      </form>
      {/* <img className='rounded-full w-10' src="data:image/png;base64,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" alt="persona anonima img" /> */}
    </nav>
  );
};

export default Navbar;
