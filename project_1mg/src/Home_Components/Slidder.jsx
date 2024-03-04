import { useState,useEffect} from 'react';
// import { BiSolidSkipNextCircle } from "react-icons/bi";
// import { BiSolidSkipPreviousCircle } from "react-icons/bi";

const ImageSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 2000); 
  
      return () => clearInterval(intervalId); // Cleanup function to clear the interval when the component unmounts or changes
    }, [currentImageIndex]); // Run effect whenever c
    return (
      <div className="slider last">
        <button className="slider-btn prev-btn" onClick={prevSlide}>
        {/* <BiSolidSkipPreviousCircle size={30} /> */}
        </button>
        <img
          className="slider-image"
          src={images[currentImageIndex]}
        />
        <button className="slider-btn next-btn" onClick={nextSlide}>
        {/* <BiSolidSkipNextCircle size={30} /> */}
        </button>
      </div>
    );
  };
  export default  ImageSlider