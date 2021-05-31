import {
    Link
  } from "react-router-dom";
  
  import React from 'react'
  
  export default function Header() {
      return (
          <div>
              {/* <nav id="nav1" className="navbar navbar-light">
          
    
  </nav> */}
  
         
  <nav id="nav1" className="navbar navbar-light ">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="container-fluid">
      <Link class="navbar-brand" to="/">Shopping App</Link>
    </div>
    </div>
  
    
    </nav>
    <div className="collapse bg-dark " id="navbarToggleExternalContent">  
  <div className="container-md ">
    <div className=" p-4  border border-dark rounded tiles">
      <li class="nav-link">
    <Link class="nav-link link-dark" to="/clothes"><h5 className=" h4">Clothes Window</h5>
    <span className="">15 Accessories</span></Link></li>
      
    </div>
    <div className=" p-4  border border-dark rounded tiles" >
    <li class="nav-link">
    <Link class="nav-link link-dark" to="/crockery"><h5 className=" h4">Crockery Window</h5>
    <span className="">15 Accessories</span></Link></li>
    </div>
    <div className=" p-4  border border-dark rounded tiles">
    <li class="nav-link">
    <Link class="nav-link link-dark" to="/shoe"><h5 className=" h4">Shoe Window</h5>
    <span className="">12 Accessories</span></Link></li>
    </div>
    <div className=" p-4  border border-dark rounded tiles">
  
    <li class="nav-link">
    <Link class="nav-link link-dark" to="/gagets"><h5 className=" h4">Gagets Window</h5>
    <span className="">12 Accessories</span></Link></li>
    </div>
    </div>
  
  
  
    
  </div>  
  
  
  
          </div>
      );
  }