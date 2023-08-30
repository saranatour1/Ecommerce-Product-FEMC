import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import cart from "../assets/icon-cart.svg";
import productSmOne from '../assets/image-product-1-thumbnail.jpg';
import { useState } from "react";

interface CartItem {
  id: number;
  itemName: string;
  itemPrice: number;
  itemCount: number;
  itemPriceAfter: number;
  imgLink: string;
}
interface ParentProps{
  getItem(item: CartItem): void;
}

function ItemDetails({getItem}:ParentProps) {
  const sneakerInfo = {
    companyName: "Sneaker Company",
    productName: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    currentPrice: 125.0,
    discountPercentage: "50%",
    originalPrice: 250.0,
  };

  const [cartItem, setCartItem] = useState(0);
  const [price, setPrice] = useState(sneakerInfo.currentPrice);
  const [id, setId] = useState(0);

  // id: 1, itemName:'Fall Limited Edition Sneakers' , itemPrice:125 , itemCount:1,itemPriceAfter:125 , imgLink:productSmOne

  const decreaseItems = () => {
    if (cartItem > 0) {
      setCartItem((prev) => prev - 1);

      setPrice((prev) => prev - sneakerInfo.currentPrice);
    }
    if (cartItem - 1 === 0 || cartItem === 0) {
      setPrice(sneakerInfo.currentPrice);
    }
  };

  const increaseItem = () => {
    if (price === sneakerInfo.currentPrice && cartItem === 0) {
      setCartItem((prev) => prev + 1);
      setPrice(sneakerInfo.currentPrice);
    } else {
      setCartItem((prev) => prev + 1);
      setPrice((prev) => prev + sneakerInfo.currentPrice);
    }
  };



  const moveToCart = () => {
    if(cartItem>0){
      const cartObject={id:id, itemName:sneakerInfo.productName , itemPrice:sneakerInfo.currentPrice, itemCount:cartItem, itemPriceAfter:price , imgLink:productSmOne};
      setCartItem(0);
      setPrice(sneakerInfo.currentPrice);
      setId(prev => prev+=1);
      // console.log(cartObject)
      getItem(cartObject)
    }

  };

  return (
    <div className="flex flex-col h-full justify-start items-start p-2">
      <p className=" uppercase text-primary-orange font-c-bold text-sm my-3 tracking-wider max-xs:my-0">
        {sneakerInfo.companyName}
      </p>
      <hgroup className="">
        <h3 className="text-5xl max-xs:text-3xl  font-c-bold my-3 text-very-dark-blue max-xs:my-1">
          {sneakerInfo.productName}
        </h3>
        <p className=" p-1 text-dark-grayish-blue text-justify w-11/12 my-2 max-xs:my-0 max-xs:w-full max-xs:text-ellipsis">
          {sneakerInfo.description}
        </p>
      </hgroup>

      <div className="my-2 max-xs:flex max-xs:justify-between max-xs:w-full max-xs:items-center">
        <div className="flex w-8/12 justify-between max-xs:justify-start items-center max-xs:self-start">
          <p className="mr-3 text-2xl font-c-bold">${price}</p>
          <p className="ml-3 bg-primary-pale-orange p-1 rounded-lg text-primary-orange font-c-bold drop-shadow">
            {sneakerInfo.discountPercentage}
          </p>
        </div>
        <span className="block text-base font-bold line-through  text-grayish-blue  max-xs:self-end max-xs:pb-1">
          $ {sneakerInfo.originalPrice}
        </span>
      </div>

      <div className="flex justify-between items-center w-full max-xs:flex-col">
        <div className="w-1/4 flex items-center justify-around h-auto bg-light-grayish-blue py-1 px-3 rounded-lg shadow-md max-xs:w-full max-xs:my-1 ">
          <div
            className="px-4 py-3 flex items-center justify-center hover:opacity-60"
            role="button"
            onClick={decreaseItems}
          >
            <img
              src={minus}
              alt="Minus Sign"
              className="hover:cursor-pointer hover:opacity-60 py-auto px-auto min-h-max min-w-max"
            />
          </div>

          <p className="font-bold text-lg">{cartItem}</p>
          <div
            role="button"
            onClick={increaseItem}
            className="px-4 py-3 flex items-center justify-center hover:opacity-60"
          >
            <img
              src={plus}
              alt="Plus sign"
              className="hover:cursor-pointer hover:opacity-60 min-h-max min-w-max"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-start bg-white ">
          <button
            className="py-3 px-16 flex justify-center items-center  mx-4 max-xs:mx-0 bg-primary-orange rounded-lg shadow-lg drop-shadow hover:brightness-110  hover:opacity-50 max-xs:w-full"
            onClick={moveToCart}
          >
            <img
              src={cart}
              alt="Cart Logo"
              className="mr-3 w-5 h-5 "
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-white font-bold"> Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
