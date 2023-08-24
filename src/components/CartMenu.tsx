import { useState } from "react";

function CartMenu() {
  const [cartItems ,setCartItems] =useState([{itemName:'' , itemPrice:0 , itemCount:0,itemPriceAfter:0}]);

  return (
    <>
      <div id="dropdown" className="z-10 mt-60  mr-80  bg-white divide-y divide-gray-100 rounded-lg drop-shadow  dark:bg-gray-700 absolute w-80 shadow-lg ">
          <div className=" border-b p-2 font-bold">
            Cart
          </div>
          <div className="flex flex-col justify-center items-center p-1">
            {Object.entries(cartItems).length >0 ? 
            cartItems.map((item,idx)=> 
            <div key={idx}>
              {item}</div>) :
            <p>No Items found in cart</p>
          }
          </div>
      </div>
 
    </>
  );
}

export default CartMenu;