import React, { useState,useEffect} from 'react'
import './Products.css'
import { Navigate, useNavigate } from 'react-router-dom'
// import { Button, ButtonGroup } from '@chakra-ui/react'
import Cart from './Cart'
function Products() {
    const [Data,setdata]=useState([])
    const [loading,setloading]=useState(false)
    const navigate=useNavigate()
    async function fetchdata(){
        setloading(true)
        try {
            const res=await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
            const finalres=await res.json()
            setdata(finalres)
            setloading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchdata()
    },[])

    if(loading){
        return <h1>loading.....</h1>
    }
    function handlecart(){
        // navigate("/cart")
       <Cart {...ele}/>
       
    }
  return (
    <>
    <div id='main_CARD'>
    {Data.map((ele)=>{
        return <>
        <div id='CARD'>
        <div>
            <div><img src={ele.image_link} alt="" /></div>
            <div><h3>Brand:{ele.name}</h3></div>
            <div><p>Name:{ele.brand}</p></div>
            <div><h3>Price Rs:{Math.floor(ele.price*82)}</h3></div>
        </div>
        <div>
        <button onClick={handlecart} colorScheme='blue'>ADD TO CART</button>
        </div>
       
       </div>  
        
        </>
    })}
    </div>
    
    </>
  )
}

export default Products