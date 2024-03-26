import React from 'react'
import './footer.scss';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";
const Footer = () => {
  return (
    <footer className="footer">
    <ContentWrapper>
        <ul className="menuItems">
            <li className="menuItem">Terms & Conditions</li>
            <li className="menuItem">Privacy-Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
        Thank you for being a part of the "Movie Sync" community. We hope you enjoy exploring the world of movies and TV series with us. Your support and engagement make it all worthwhile!
        </div>
        <div className="socialIcons">
            <span className="icon">
                <Link target='_blank' to="https://www.facebook.com/priyansh.malakar.5"><FaFacebookF /></Link>   
            </span>
            <span className="icon">
            <Link target='_blank' to="https://www.instagram.com/priyansh_malakar/"> <FaInstagram /></Link>   
               
            </span>
            <span className="icon">
            <Link target='_blank' to="https://twitter.com/Priyans36379383"><FaTwitter /></Link>   
            </span>
            <span className="icon">
            <Link target='_blank' to="https://www.linkedin.com/in/priyansh-malakar-68753121b/"><FaLinkedin /></Link>   
            </span>
        </div>
    </ContentWrapper>
</footer>
  )
}

export default Footer
