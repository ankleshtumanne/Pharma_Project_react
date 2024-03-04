import React from 'react';
import sec_image_slid from '../assets/sec_image_slid.png';
// import third_slide_img from '../assets/third_slide_img.webp'
import fourth_slid_img from "../assets/fourth_slid_img.png"
import fifth_slid_img from '../assets/fifth_slid_img.jpg'
import sixth_slid_img from '../assets/sixth_slid_img.png'
import seventh_slid_img from '../assets/seventh_slid_img.png'
import eitgh_slid_img from '../assets/eitgh_slid_img.jpg'
import ninth_slid_img from '../assets/ninth_slid_img.jpg'
import myaxyl_image_1 from '../assets/myaxyl_image_1.jpg'
import './Home.css'
import { Slider } from '@mui/material';
import Slidder from '../Home_Components/Slidder'
import side_slid from '../assets/side_slid.webp'
import Part2 from '../Home_Components/Part2';
import Part3 from '../Home_Components/Part3';
import Part4 from '../Home_Components/Part4';
import Part5 from '../Home_Components/Part5';
import Part6 from '../Home_Components/Part6';
import Part7 from '../Home_Components/Part7';
import Part8 from '../Home_Components/Part8';
import Part9 from '../Home_Components/Part9'
import Part10 from '../Home_Components/Part10';
import Footer from './Footer';

const Home = () => {
    const images=[
        myaxyl_image_1,
        sec_image_slid,
       
        fourth_slid_img,
        fifth_slid_img,
        sixth_slid_img,
        seventh_slid_img,
        eitgh_slid_img,
        ninth_slid_img
    ]

  return (
     <>
     
    <div id='App'>
       
       <div className='slide_bare'>
         <Slidder images={images} />
         <div className='side_slid_img'> <img className='side_slid_img' src={side_slid} alt="" /></div>
        </div>
        <div className='naming'><h2 className='tata_1mg'>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h2></div>

        <Part2 />
        <Part3/>
        <Part4 />
        <Part5 />
        <Part6 />
        <Part7 />
        <Part8/>
        <Part9/>
        <Part10 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
        
    </div>
    </>
  )
}

export default Home