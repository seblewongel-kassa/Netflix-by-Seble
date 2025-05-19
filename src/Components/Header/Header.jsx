import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import netflix from "../../assets/Netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const[isMobileOpen, setIsMobileOpen]= useState(false)

  const mobileRef=useRef(null)

  const toggleMobile =()=>{
    setIsMobileOpen(!isMobileOpen)
  }
  useEffect(() =>{
    const handleClickOutside =(event)=>{
      if(isMobileOpen && mobileRef.current && !mobileRef.current.contains(event.target)){
        setIsMobileOpen(false)
      }
    }
    document.addEventListener("mousedown",handleClickOutside)
    return () =>{
      document.removeEventListener("mousedown",handleClickOutside)
    }
  },[isMobileOpen])
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <img className="Netflix-logo" src={netflix} alt="Netflix" />

          <ul ref={mobileRef} className={` HeaderLink ${isMobileOpen ? "open" : ""}`}>
            <li>Home</li>
            <li>TVshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul className="header-right-licon">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
            <li ref={mobileRef} onClick={toggleMobile} className="MenuIcon">
            <MenuIcon className={`Header-icone ${isMobileOpen ? "open" : ""}`}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
