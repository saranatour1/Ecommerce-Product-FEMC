import { useState } from "react";
import deleteBtn from '../assets/icon-delete.svg';
import { useEffect } from "react";

interface CartItem {
  id: number;
  itemName: string;
  itemPrice: number;
  itemCount: number;
  itemPriceAfter: number;
  imgLink: string;
}

interface ParentProps {
  items: CartItem[];
  resetItems(): void;
  deleteItemById(id:number): void;
}
function CartMenu({items ,resetItems , deleteItemById}:ParentProps) {
  //{itemName:'' , itemPrice:0 , itemCount:0,itemPriceAfter:0}
  const [cartItems ,setCartItems] =useState<CartItem[]>([]);

  const deleteById=(id:number)=>{
    setCartItems(prev => prev.filter(item => item.id !==id))
    deleteItemById(id);
  }
  const checkOut = () =>{
    setCartItems([]);
    resetItems();
  }

  useEffect(()=>{
    return setCartItems(items);
  },[items])

  // console.log(cartItems.length ,items.length)

  return (
    <div id="dropdown" className="z-10 mt-44 mr-15  bg-white divide-y divide-gray-100 rounded-lg drop-shadow  dark:bg-gray-700 absolute w-80 shadow-lg">
    <div className="border-b p-2 font-bold indent-3">Cart</div>
    <div className="flex flex-col justify-center items-center p-1">
      {cartItems.length > 0 ? (
        cartItems.map((item, idx) => (
          <div key={idx} className="flex justify-around items-center w-full p-3 gap-1">
            <img src={item.imgLink} alt={item.itemName} width={50} height={50} />
            <hgroup className="w-9/12">
              <h3 className="text-dark-grayish-blue">{item.itemName}</h3>
              <p className="text-dark-grayish-blue w-full space-x-2">
                <span>${item.itemPrice}</span> <span>x{item.itemCount}</span>{" "}
                <span className="font-bold text-very-dark-blue">${item.itemPriceAfter}</span>
              </p>
            </hgroup>
            <button onClick={() => deleteById(item.id)}>
              <img src={deleteBtn} alt="delete button icon" />
            </button>
          </div>
        ))
      ) : (
        <p className="w-full h-16 flex flex-col justify-center items-center font-bold text-dark-grayish-blue">Your Cart Is Empty.</p>
      )}
      
      <div className="p-2 w-full">
        <button
          className="px-auto py-2 rounded-lg bg-primary-orange w-full text-white font-bold shadow-lg drop-shadow hover:brightness-110 hover:opacity-50"
          onClick={checkOut}
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
  );
}

export default CartMenu;