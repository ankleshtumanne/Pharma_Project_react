import React from 'react'
import p5_1 from '../assets/p5_1.webp'
import p5_2 from '../assets/p5_2.webp'
import p5_3 from '../assets/p5_4.webp'
import p5_4 from '../assets/p5_3.webp'
import p5_5 from '../assets/p5_5.webp'
import p5_6 from '../assets/p5_6.webp'
import p5_7 from '../assets/p5_7.webp'
import { colors } from '@mui/material'


const Part5 = () => {
  return (
    <>
    <div className='part5_div'>
         <div> <p>Collagen | supplement of the week</p></div>
         <div><button className='see_all_1'>See All</button></div>
          
    </div>

    <div className='part5_grid_div'>
            <div className='part5_div_img'>
               <img src={p5_1} alt="" />
               <p className='p5_text'>Swisse Beauty Vegan Collagen Builder | With Biotin... </p>
               <p className='p5_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Tue, 5 mar..</span></p>
               <p className='Rupee_text'>Rs 1000</p>
            </div>
            <div className='part5_div_img'>
               <img src={p5_2} alt="" />
               <p className='p5_text'>HealthCArt HK Vittal Desolve with Marine.... </p>
               <p className='p5_text_2'> Box of 30 teblets Delevery by <span style={{color:"black"}}>Sun, 10 mar..</span></p>
               <p className='Rupee_text'>Rs 449</p>
            </div>
            <div className='part5_div_img'>
               <img src={p5_3} alt="" />
               <p className='p5_text'>Power Gummies Jaw  For Jaw-Dropping Skins </p>
               <p className='p5_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Tommo, 5 mar..</span></p>
               <p className='Rupee_text'>Rs 510</p>
            </div>
            <div className='part5_div_img'>
               <img src={p5_4} alt="" />
               <p className='p5_text'>Swisse Beauty Vegan Collagen Builder | With Biotin... </p>
               <p className='p5_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Sut, 2 mar..</span></p>
               <p className='Rupee_text'>Rs 962</p>
            </div>
            <div className='part5_div_img'>
               <img src={p5_5} alt="" />
               <p className='p5_text'>Swisse  Collagen + hyaluranic Acid.. </p>
               <p className='p5_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Fri, 15 mar..</span></p>
               <p className='Rupee_text'>Rs 810</p>
            </div>
            <div className='part5_div_img'>
               <img src={p5_6} alt="" />
               <p className='p5_text'>The Body Temple Marine  Colageen... </p>
               <p className='p5_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Thu, 7 mar..</span></p>
               <p className='Rupee_text'>Rs 2075</p>
            </div>
            <div className='part5_div_img'>
               <img src={p5_7} alt="" />
               <p className='p5_text'>Natures Iseland HyDrolide Marine... </p>
               <p className='p5_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Tue, 5 mar..</span></p>
               <p className='Rupee_text'>Rs 847</p>
            </div>
    </div>
    </>
  )
}

export default Part5