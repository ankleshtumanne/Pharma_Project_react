import React from 'react'
import p6_1 from '../assets/p6_1.webp'
import p6_2 from '../assets/p6_2.webp'
import p6_3 from '../assets/p6_3.webp'
import p6_4 from '../assets/p6_4.webp'
import p6_5 from '../assets/p6_5.webp'
import p6_6 from '../assets/p6_6.webp'
import p6_7 from '../assets/p6_7.webp'
const Part6 = () => {
  return (
    <>
        <div className='part6_div'>
            <p>Personal care</p>
       </div>
    <div className='part6_grid_div'>
        <div className='part_6_img'>
                <img src={p6_1} alt="" />
        </div>
        <div className='part_6_img'>
            <img src={p6_2} alt="" />
            
        </div>
        <div className='part_6_img'>
            <img src={p6_3} alt="" />
            
        </div>
        <div className='part_6_img'>
            <img src={p6_4} alt="" />
            
        </div>
        <div className='part_6_img'>
            <img src={p6_5} alt="" />
            
        </div>
        <div className='part_6_img'>
            <img src={p6_6} alt="" />
            
        </div>
        <div className='part_6_img'>
            <img src={p6_7} alt="" />
            
        </div>
    </div>
   </>
  )
}

export default Part6