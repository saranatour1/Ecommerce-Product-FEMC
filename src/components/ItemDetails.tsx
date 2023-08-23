import plus from '../assets/icon-plus.svg';
import minus from '../assets/icon-minus.svg';
import { useState } from 'react';

function ItemDetails() {

  const sneakerInfo = {
    companyName: "Sneaker Company",
    productName: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    currentPrice: 125.00,
    discountPercentage: "50%",
    originalPrice: 250.00,
  };

  const [cartItem, setCartItem] = useState(0);
  const [price, setPrice] = useState(sneakerInfo.currentPrice);

  const decreaseItems = () => {
    if (cartItem > 0) {
      setCartItem(prev => prev - 1);
      setPrice(prev => prev - sneakerInfo.currentPrice);
    } else {
      setPrice(sneakerInfo.currentPrice);
    }
  };

  const increaseItem = () => {
    if(price === sneakerInfo.currentPrice && cartItem ===0){
      setCartItem(prev => prev + 1);
      setPrice(sneakerInfo.currentPrice);
    }else{
      setCartItem(prev => prev + 1);
      setPrice(prev => prev + sneakerInfo.currentPrice);
    }

  };

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <p className=" uppercase">{sneakerInfo.companyName}</p>
      <h3>
        {sneakerInfo.productName}
      </h3>
      <p>{sneakerInfo.description}</p>

      <div>
        <p>
        ${price}
        </p>
        <p>
          {sneakerInfo.discountPercentage}
        </p>
        <p>
          $ {sneakerInfo.originalPrice}
        </p>

      </div>

      <div className='w-2/4'>
        <img src={minus} alt="Minus Sign" className='hover:cursor-pointer' role='button' onClick={decreaseItems} />
        <p>{cartItem}</p>
        <img src={plus} alt="Plus sign" className='hover:cursor-pointer' role='button' onClick={increaseItem} />
      </div>

    </div>
  );
}

export default ItemDetails;