// import React from 'react'
import React from 'react'
import p7_1 from '../assets/p7_1.webp'
import p7_2 from '../assets/p7_2.webp'
import p7_3 from '../assets/p7_4.webp'
import p7_4 from '../assets/p7_3.webp'
import p7_5 from '../assets/p7_5.webp'
import p7_6 from '../assets/p7_6.webp'
import p7_7 from '../assets/p7_7.webp'
// import { colors } from '@mui/material'
const Part7 = () => {
  return (
    <>
    <div className='part7_div'>
         <div> <p>Trending now</p></div>
         <div><button className='see_all_1'>See All</button></div>
          
    </div>

    <div className='part7_grid_div'>
            <div className='part7_div_img'>
               <img src={p7_1} alt="" />
               <p className='p7_text'>Swisse Beauty Vegan Collagen Builder | With Biotin... </p>
               <p className='p7_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Tue, 5 mar..</span></p>
               <p className='Rupee_text'>Rs 1000</p>
            </div>
            <div className='part7_div_img'>
               <img src={p7_2} alt="" />
               <p className='p7_text'>HealthCArt HK Vittal Desolve with Marine.... </p>
               <p className='p7_text_2'> Box of 30 teblets Delevery by <span style={{color:"black"}}>Sun, 10 mar..</span></p>
               <p className='Rupee_text'>Rs 449</p>
            </div>
            <div className='part7_div_img'>
               <img src={p7_3} alt="" />
               <p className='p7_text'>Power Gummies Jaw  For Jaw-Dropping Skins </p>
               <p className='p7_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Tommo, 5 mar..</span></p>
               <p className='Rupee_text'>Rs 510</p>
            </div>
            <div className='part7_div_img'>
               <img src={p7_4} alt="" />
               <p className='p7_text'>Swisse Beauty Vegan Collagen Builder | With Biotin... </p>
               <p className='p7_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Sut, 2 mar..</span></p>
               <p className='Rupee_text'>Rs 962</p>
            </div>
            <div className='part7_div_img'>
               <img src={p7_5} alt="" />
               <p className='p7_text'>Swisse  Collagen + hyaluranic Acid.. </p>
               <p className='p7_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Fri, 15 mar..</span></p>
               <p className='Rupee_text'>Rs 810</p>
            </div>
            <div className='part7_div_img'>
               <img src={p7_6} alt="" />
               <p className='p7_text'>The Body Temple Marine  Colageen... </p>
               <p className='p7_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Thu, 7 mar..</span></p>
               <p className='Rupee_text'>Rs 2075</p>
            </div>
            <div className='part7_div_img'>
               <img src={p7_7} alt="" />
               <p className='p7_text'>Natures Iseland HyDrolide Marine... </p>
               <p className='p7_text_2'> bottle of 30 teblets Delevery by <span style={{color:"black"}}>Tue, 5 mar..</span></p>
               <p className='Rupee_text'>Rs 847</p>
            </div>
    </div>
    </>
  )
}

export default Part7 