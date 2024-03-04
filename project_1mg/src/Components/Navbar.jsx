import React from 'react'

import './Navbar.css'
import { Link } from 'react-router-dom'
// import tata_1mg from "../assets/tata_1mg.PNG"
import { TfiShoppingCart } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
    <div className='first_line' ><h4 style={{textAlign:"center"}}>Limited Period Offer: Get up to 8% off + extra 15% off on medicines & more offers. <span style={{color:"red"}}>Explore</span></h4></div>
    <div id='Main-container'>

          <div><img className='TataLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/TATA_1mg_Logo.svg/1024px-TATA_1mg_Logo.svg.png" alt="" /> </div>
          <div><span style={{color:"red"}}>MEDICINE</span></div>
          <div ><span className='labtest'>LAB TEST</span></div>
          <div className='consult'>CONSULT DOCTERS</div>
          <div className='cancer_care'>CANCER CARE</div>
          <div className='aayurveda'>AAYURVEDA</div>
          <div className='care-plan'>CARE PLAN</div>
          <div><Link to="/Login"><span style={{color:"gray",border:"none"}}>Login/Register</span></Link></div>
          <div style={{color:"gray",border:"none"}}>Offers</div>
          <div ><Link to="/Cart"><TfiShoppingCart size={25} color='grey' /></Link></div>
          <div> Need help? </div>
    </div>
    <div id='secon_nav'>
        <div><CiLocationOn size={20}  className='location_icon' /></div>
        <div > <input className='serchMap' type="text" placeholder='Use_location' /> </div>
        <div><input type="text" className='search_bar' placeholder='Search for medicine and health products'/></div>
        <div className='quiq_buy' ><span >QUICK BUY! Get 15% off on medicine</span></div>
    </div>
    <div id='third_nav'> 
      <div cl>
        <label  htmlFor="health resource center">Health Resource Center
          <select className='select_1' name="Health Resource Center" placeholder="Health Resource Center" id="">Health Resource Center
            
              
              {/* <option value="">All Diseases</option>
              <option value="">All Medicines</option>
              <option value="">Medicines by Therapeutic Class</option> */}
             
          </select>
        </label>
      </div>
      <div>
        <label  htmlFor="Vitamins & Nutrition"> Vitamins & Nutrition
            <select className='select_1' name="" placeholder="health" id=""></select>
          </label>
      </div>
      
      
      <div>
        <label  htmlFor="Personal Care"> Personal Care
            <select className='select_1' name="" placeholder="health" id=""></select>
          </label>
      </div>
      <div>
        <label  htmlFor="Healthcare Devices"> Healthcare Devices
            <select className='select_1' name="" placeholder="health" id=""></select>
          </label>
      </div>
      <div>
        <label  htmlFor="Ayurveda Products"> Ayurveda Products
            <select className='select_1' name="" placeholder="health" id=""></select>
          </label>
      </div>
      <div>
        <label  htmlFor="Diabetes"> Diabetes
            <select className='select_1' name="" placeholder="health" id=""></select>
          </label>
      </div>
      <div>
        <label  htmlFor="Health Conditions">Health Conditions
            <select name="" className='select_1' placeholder="" id="">
            </select>
              <option value="fggf" ></option>
           
          </label>
      </div>
      <div>
        <label  htmlFor="Homeopathy">Homeopathy
            <select className='select_1' name="" placeholder="" id=""></select>
          </label>
      </div>
      <div>
        <label  htmlFor="Featured">Featured
            <select className='select_1' name="" placeholder="" id="">
              <option value="">orage</option>
              <option value="">mango</option>
            </select>
          </label>
      </div>
     </div>
    </>
  )
}

export default Navbar