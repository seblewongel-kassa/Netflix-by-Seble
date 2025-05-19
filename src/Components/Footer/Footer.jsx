import React from 'react'
import "./Footer.css"
import FacebookIcon from "@mui/icons-material/Facebook"; 
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div>
      <div className="Footer_outer_container">
        <div className="Footer_inner_container">
          <div className="Footer_link">
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <YouTubeIcon/>
          </div>
          <div className="Footer_data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relation</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Legal Notices</li>
                <li>Do not sell or share My Personal Information</li>
                <li></li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Nateflix Shope</li>
                <li>Cookie Preferances</li>
                <li>Ad Coices</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Terms Of Use</li>
                <li>Corporate Information</li>
                
              </ul>
            </div>
          </div>

          <div className="service_para">
            <p>Service Code</p>
          </div>

          <div className="copy_right">
            &copy;1997_2025 Netflix,inc.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
