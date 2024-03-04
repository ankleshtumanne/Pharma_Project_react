import React from 'react'
import p10_1 from '../assets/p10_1.webp'
import p10_2 from '../assets/p10_2.webp'
import p10_3 from '../assets/p10_3.webp'
import p10_4 from '../assets/p10_4.webp'
const Part10 = () => {
  return (
    <>
         <div className='part10_div'>
          <p>Shop by health concerns</p>
        </div>
        <div className='part10_grid_div'>
            <div className='part_10_img'>
                <img src={p10_1} alt="" />
                <h3 className='p10_text' >wheat germ</h3>
                <p className= 'p10_txt2'> Wheat germ is a part of the wheat kernel and the main byproduct of wheat flour milling.</p>


            </div>
            <div className='part_10_img'>
                <img src={p10_2} alt="" />
                <h3 className='p10_text' >Karela</h3>
               
                <p className= 'p10_txt2'>  Karela, also known as bitter gourd, is a vegetable with important medicinal value.</p>
            </div>
            <div className='part_10_img'>
                <img src={p10_3} alt="" />
                <h3 className='p10_text' >Kokum</h3>
                <p className= 'p10_txt2'> Kokum is also known as the “Indian Butter Tree” and is a fruit-bearing tree.</p>

            </div>
            <div className='part_10_img'>
                <img src={p10_4} alt="" />
                <h3 className='p10_text' >Cheese</h3>
                <p className= 'p10_txt2'>Cheese is a dairy product prepared from milk. It is available in a wide range of flavors and textures.</p>

            </div>
        </div>
    </>
  )
}

export default Part10