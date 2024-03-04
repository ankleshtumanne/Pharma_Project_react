import React from 'react'
import p8_1 from '../assets/p8_1.webp'
import p8_2 from '../assets/p8_2.webp'
import p8_3 from '../assets/p8_3.webp'
import p8_4 from '../assets/p8_4.webp'
import p8_5 from '../assets/p8_5.webp'
import p8_6 from '../assets/p8_6.webp'
import p8_7 from '../assets/p8_7.webp'
const part8 = () => {
  return (
    <>
       <div className='part8_div'>
          <p>Popular categories</p>
        </div>
        <div className='part8_grid_div'>
            <div className='part_8_img'>
                <img src={p8_1} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Best Offers</p>

            </div>
            <div className='part_8_img'>
                <img src={p8_2} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Vittamins And Suppliments</p>

            </div>
            <div className='part_8_img'>
                <img src={p8_3} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Nutritional Drinks <br /> Care</p>

            </div>
            <div className='part_8_img'>
                <img src={p8_4} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Skin Care</p>

            </div>
            <div className='part_8_img'>
                <img src={p8_5} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Hair Care</p>

            </div>
            <div className='part_8_img'>
                <img src={p8_6} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Sexual Wallness</p>

            </div>
            <div className='part_8_img'>
                <img src={p8_7} alt="" />
                <p style={{textAlign:"center",paddingTop:"10px"}}>Ayurveda Products</p>

            </div>
        </div>
    </>
  )
}

export default part8;