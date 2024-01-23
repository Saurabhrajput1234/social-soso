import React from 'react';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const Sidebars = () => {
  const[selectedTab,setSelectedTab] = useState("Home");


  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px" ,height:"800px",position:"fixed" }}>
    <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick = {()=>{
        setSelectedTab("Home")
      }}>
        <a href="/posts" className={`nav-link text-white ${selectedTab === 'Home' && 'active'}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li onClick = {()=>{
        setSelectedTab("CreatePost")
      }}>
        <a href="/CreatePost" className={`nav-link text-white ${selectedTab === 'CreatePost' && 'active'}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          CreatePost
        </a>
      </li>
      
      </ul>
    </div>
  </div>
    
  )
}

export default Sidebars
