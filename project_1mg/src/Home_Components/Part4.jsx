import React from 'react'
import p4_1 from '../assets/p4_1.webp'
import p4_2 from '../assets/p4_2.webp'
import p4_3 from '../assets/p4_3.webp'
import p4_4 from '../assets/p4_4.webp'
import p4_5 from '../assets/p4_5.webp'
import p4_6 from '../assets/p4_6.webp'
import p4_7 from '../assets/p4_7.webp'
// import p4_8 from '../assets/p4_8.webp'

const Part4 = () => {
  return (
    <>
        <div className='part4_div'>
          <p>Featured brands</p>
        </div>
         <div className='part4_grid_div'>
            <div className='part_4_img'>
                    <img src={p4_1} alt="" />
            </div>
            <div className='part_4_img'>
                <img src={p4_2} alt="" />
                
            </div>
            <div className='part_4_img'>
                <img src={p4_3} alt="" />
                
            </div>
            <div className='part_4_img'>
                <img src={p4_4} alt="" />
                
            </div>
            <div className='part_4_img'>
                <img src={p4_5} alt="" />
                
            </div>
            <div className='part_4_img'>
                <img src={p4_6} alt="" />
                
            </div>
            <div className='part_4_img'>
                <img src={p4_7} alt="" />
                
            </div>
         </div>
    </>
  )
}

export default Part4