import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import { useState } from "react";
import CartMenu from "./CartMenu";
import { useEffect } from "react";

interface CartItem {
  id: number;
  itemName: string;
  itemPrice: number;
  itemCount: number;
  itemPriceAfter: number;
  imgLink: string;
}

interface ParentProps{
  cartItem: CartItem;
}


function NavBar({cartItem}:ParentProps) {
  const routes = [
    ["/collections", "Collections"],
    ["/men", "Men"],
    ["/women", "Women"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];


  const [isCart, setIsCart] = useState(false);

  const [cartItems ,setCartItems] =useState([]);

  useEffect(() => {
    setCartItems([...cartItems , cartItem]);
  }, [cartItem]);
  

  const deleteById =(id:number)=>{
    setCartItems(prev => prev.filter(item => item.id !==id))
  }


  const showCart = () => {
    setIsCart(!isCart);
  }
  console.log(isCart)

  return (
    <header className="w-screen flex justify-center items-center h-12 mt-5  ">
      <div className="w-10/12 flex items-center justify-between pb-6 border-light-grayish-blue border-b-2 ">
        <div className="flex  w-full h-12 items-center justify-start">
          <img src={logo} alt="My Company Logo" className="w-fit h-fit" />
          <nav className="flex w-3/6 justify-around items-start ml-5 h-3">
            {routes.map(([key, value], idx) => (
              <a
                className="text-dark-grayish-blue text-sm font-c-normal hover:border-b-2 hover:border-primary-orange"
                key={idx}
                href={key}
              >
                {value}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex justify-around w-2/12 items-center">
          <button
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white "
            onClick={()=> showCart()}
            id="dropdownDefaultButton" 
            data-dropdown-toggle="dropdown"
          >
            <img src={cart} alt="Cart Logo" className="" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary-orange border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {Object.entries(cartItems).length}
            </div>
          </button>
          {isCart && <CartMenu  items={cartItems} resetItems={()=> setCartItems([])}  deleteItemById={(item) => deleteById(item)}/>}



          <img
            src={avatar}
            alt="Avatar"
            className=" w-10 h-10 hover:border-primary-orange hover:border hover:rounded-full"
            role="button"

          />

        </div>
      </div>
    </header>
  );
}

export default NavBar;
