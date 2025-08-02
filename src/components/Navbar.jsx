import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
return(
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Job Tracker
        </Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-3 hover:underline hover:underline-offset-4 hover:decoration-2 hover:font-semibold hover:text-lg">
            Dashboard
          </Link>
          <Link to="/add" className="text-gray-300 hover:text-white px-3">
            Add Job
          </Link>
          <Link to="/delete" className="text-gray-300 hover:text-white px-3">
            Delete Job
          </Link>
          <Link to="/edit" className="text-gray-300 hover:text-white px-3">
            Edit Job
          </Link>
          
        </div>
      </div>
    </nav>
  );


}