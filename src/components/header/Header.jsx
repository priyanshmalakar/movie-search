// IMPORTION
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.scss";
import MovieSyncLogo from "../../assets/ms-logo.svg";
import ContentWrapper from "../contentWrapper/ContentWrapper";


// COMPONENT 
const Header = () => {
  
  // *********HOOKS******** // 
  // useState
  const [show, setShow] = useState("show");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // useEffect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);


  // *********FUNCTIONS******** // 

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };
  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const onChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };
  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    }
    setLastScrollY(window.scrollY);
  };


  // *********COMPONENT HTML******** // 

  return (
    // Navbar
    <div className={`header ${show} ${mobileMenu ? "mobileView" : ""}`}>
      <ContentWrapper>
        <div className="logo" onClick={()=>{
          navigate('/')
        }}>
          <img src={MovieSyncLogo} alt="logo" />
        </div>
        <ul className="menuItems">
          <li
            className="menuItem"
            onClick={() => {
              navigationHandler("movie");
            }}>Movies</li>
          <li
            className="menuItem"
            onClick={() => {
              navigationHandler("tv");
            }
            }>Tv shows</li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        {/* Toggle menu for smaller screens */}
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {/* search bar */}
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                onKeyUp={searchQueryHandler}
                onChange={onChange}
                type="text"
                value={query}
                placeholder="Search for any movie or Tv series..."
              />
              <VscChromeClose
                onClick={() => {
                  setShowSearch(false);
                }}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default Header;
