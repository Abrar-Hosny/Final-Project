import React from "react";
import logo from '../../assets/freshcart-logo.svg'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-slate-200 border-gray-200 fixed top-0 right-0 left-0 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            
            <img
              src={logo}
              width="200px"
              className="h-8"
              alt="freshcart Logo"
            />
            <ul className="flex gap-4">
<li><Link to="">Home</Link></li>
<li><Link to="cart">Cart</Link></li>
<li><Link to="products">Products</Link></li>
<li><Link to="categories">Categories</Link></li>
<li><Link to="brands">Brands</Link></li>

            </ul>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">

            <div className="icons">
           
              <i className="fab fa-facebook"></i> 
              <i className="fab fa-linkedin"></i> 
              <i className="fab fa-facebook"></i> 
              <i className="fab fa-facebook"></i> 

            </div>
           
           <div className="links flex gap-4">
           <Link to="login" className="text-sm">
              Login

            </Link>
            <Link to="register" className="text-sm">
              Register
            </Link>
            <Link to="login" className="text-sm">
              Login
            </Link>

           </div>
          </div>
        </div>
      </nav>
    </>
  );
}
