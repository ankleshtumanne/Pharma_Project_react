import React from 'react'
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'
import img5 from '../assets/img5.webp'
import img6 from '../assets/img6.webp'
import img7 from '../assets/img7.webp'
import img8 from '../assets/img8.webp'
import img9 from '../assets/img9.webp'

const Part3 = () => {
  return (
    <>
        <div className='part3_div'>
          <p>Shop by health concerns</p>
        </div>
        <div className='part3_grid_div'>
            <div className='part_3_img'>
                <img src={img1} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Stomach Care</p>

            </div>
            <div className='part_3_img'>
            <img src={img2} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Liver care</p>

            </div>
            <div className='part_3_img'>
            <img src={img3} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Bone, joint & Muscle <br /> Care</p>

            </div>
            <div className='part_3_img'>
            <img src={img4} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Kidney Care</p>

            </div>
            <div className='part_3_img'>
            <img src={img5} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Derma Care</p>

            </div>
            <div className='part_3_img'>
            <img src={img6} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Respitory Care</p>

            </div>
            <div className='part_3_img'>
            <img src={img7} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Eye care</p>

            </div>
            {/* <div className='part_3_img'>
            <img src={img8} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Eye care</p>

            </div>
            <div className='part_3_img'>
            <img src={img9} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Eye care</p>

            </div> */}
           
        </div>
    </>
  )
}

export default Part3