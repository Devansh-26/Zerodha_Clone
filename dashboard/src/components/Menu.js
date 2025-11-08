import React, { useState }from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Menu = () => {
  const [ selectedMenu , setSelectedMenu ]=useState(0);
  const [ isProfileDropdownOpen, setIsProfileDropdownOpen ]=useState(false);

  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  }

  const handleProfileClick=()=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const menuClass="menu";
  const activeMenuClass="menu selected";

  const logout = async () => {
  await axios.get("http://localhost:3002/logout", {
    withCredentials: true,
  });

  window.location.href = "http://localhost:3000/login";
};


  return (
    <div className="menu-container">
      <img src="logo.png" style={{width:"50px"}}></img>
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(1)}>
              <p className={selectedMenu===1?activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/Orders" onClick={()=>handleMenuClick(2)}>
              <p className={selectedMenu===2?activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/Holdings" onClick={()=>handleMenuClick(3)}>
              <p className={selectedMenu===3?activeMenuClass:menuClass}>Holding</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/Positions" onClick={()=>handleMenuClick(4)}>
              <p className={selectedMenu===4?activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/Funds" onClick={()=>handleMenuClick(5)}>
              <p className={selectedMenu===5?activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/Apps" onClick={()=>handleMenuClick(6)}>
              <p className={selectedMenu===6?activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
           <li onClick={logout}>
              <p>Logout</p>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleMenuClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
