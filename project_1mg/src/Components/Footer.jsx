import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import insta from '../assets/insta.webp'
import twitter from '../assets/twitter.png'
import youTube from '../assets/youTube.png'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='foot_cont'>
      <h1 style={{textAlign:"center"}}> INDIA’S LARGEST HEALTHCARE PLATFORM </h1>
       <div className='main_cont'>

          <div>
            <h2>260m+</h2>
            <p style={{fontSize:"25px",paddingLeft:"10px"}}>Visitors</p>
          </div>
          <div>
            <h2>31M+</h2>
            <p style={{fontSize:"25px",paddingRight:"20px"}}>Orders Delivered</p>
          </div>
          <div>
            <h2>1800+</h2>
            <p style={{fontSize:"25px"}}>Cities</p>
          </div>
       </div>
       <div className='part_2_footer'>
            <div><p>Get the link to download App</p></div>
            <div > <input className='send_link' type="number" name="" id="" placeholder='Enter Phone Number' /></div>
            <div><button className='send_link_btn'>Send Link</button></div>
       </div>
       <div className='Main_footer'>
          <div>
                <h3>Know Us</h3>
                <div className='foot_about'><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>About</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Contact Us</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Press Coverage</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Careers</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Business Partnership</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Become a Health Partner</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Corporate Governance</span></Link></div>
          
          </div>
          <div>
                <h3>Our Policies</h3>
                <div className='foot_about'><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Privacy Policy</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Terms and Conditions </span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Editorial Policy</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Return Policy</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>IP Policy</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Grievance Redressal Policy</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span style={{marginTopTop:"40px"}}>Fake Jobs and Fraud Disclaimer</span></Link></div>
          
          </div>
          <div>
                <h3>Our Services</h3>
                <div className='foot_about'><Link className='foot_links' to="" ><span >Order Medicines</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span >Book Lab Tests </span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span >Consult a Doctor</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span >Ayurveda Articles</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span >Hindi Articles</span></Link></div>
                <div className=''><Link className='foot_links' to="" ><span >Care Plan</span></Link></div>
          
          </div>
          <div>
                <h3>Connect</h3>
                <div className='foot_about'><Link className='foot_links' to="" ><span >Social Links</span></Link></div>

                <div className='icons_foot'>
                    <div ><Link className='foot_links' to="" ><img className='insta_icons' src={insta} alt="" /></Link></div>
                    <div className=''><Link className='foot_links' to="" ><img className='twit_icon' src={twitter} alt="" /> </Link></div>
                    <div className=''><Link className='foot_links' to="" ><img className='youTube_icon' src={youTube} alt="" /></Link></div>
                    <div className=''><Link className='foot_links' to="" ></Link></div>
                    <div className=''><Link className='foot_links' to="" ></Link></div>
                </div>
          
          </div>
                
                
        
        
        
      </div>
    </div>
  )
}

export default Footer