import { useEffect, useState } from 'react';
import productSmOne from '../assets/image-product-1-thumbnail.jpg';
import productLgOne from '../assets/image-product-1.jpg';

import productSmTwo from '../assets/image-product-2-thumbnail.jpg';
import productLgTwo from '../assets/image-product-2.jpg';

import productSmThree from '../assets/image-product-3-thumbnail.jpg';
import productLgThree from '../assets/image-product-3.jpg';

import productSmFour from '../assets/image-product-4-thumbnail.jpg';
import productLgFour from '../assets/image-product-4.jpg';


import left from '../assets/icon-previous.svg';
import right from '../assets/icon-next.svg';

function ImageCarousel() {
  // How to do this, large Images are shown by default,
  const images = [
    { lg: productLgOne, sm: productSmOne },
    { lg: productLgTwo, sm: productSmTwo },
    { lg: productLgThree, sm: productSmThree },
    { lg: productLgFour, sm: productSmFour }
  ];

  // Move this into hooks file later
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 700);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const [itemIndex , setItemIndex] = useState(0);

  const moveRight = () => {
    setItemIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const moveLeft = () => {
    setItemIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  
  return (
<div className="w-4/6 mt-5 flex flex-col items-center justify-center max-xs:w-screen px-1 ">
  <div className='flex items-center justify-center'>
  {isMobile && <img src={left} alt='Previous icon' className='relative left-9 px-2 py-2  rounded-full bg-white' role='button' onClick={moveLeft}/>}
  <img src={images[itemIndex].lg} alt="product" className=' rounded-lg my-4' />
  {isMobile && <img src={right} alt=' Next icon' className='relative right-9 px-2 py-2  rounded-full bg-white' role='button' onClick={moveRight}/>}
  </div>
  {!isMobile &&   <div className='flex w-full gap-1 justify-between'>
    {images.map((item, idx) => (
      <img
        key={idx}
        src={item.sm}
        alt='product'
        onClick={() => setItemIndex(idx)}
        className={`w-1/2 rounded-lg  hover:cursor-pointer ${itemIndex === idx && ' border border-y-2 border-primary-orange inset-0 bg-primary-pale-orange opacity-50'}`}
      />
    ))}
  </div>}

</div>

  );
}

export default ImageCarousel;