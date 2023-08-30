import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import { useState } from "react";
import CartMenu from "./CartMenu";
import mobileNav from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
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
  cartItem: CartItem;
}

function NavBar({ cartItem }: ParentProps) {
  const routes = [
    ["/collections", "Collections"],
    ["/men", "Men"],
    ["/women", "Women"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];

  const [isCart, setIsCart] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    if (cartItem && !isNaN(cartItem.id)) {
      setCartItems([...cartItems, cartItem]);
    } else {
      setCartItems([]);
    }
  }, [cartItem]);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 700);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openNav = () => {
    setOpenMobile(!openMobile);
  };

  // console.log(isMobile , window.innerWidth)

  const deleteById = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const showCart = () => {
    setIsCart(!isCart);
  };
  // console.log(isCart)

  return (
    <header className="w-screen flex justify-center items-center h-12 mt-5  ">
          {isMobile && openMobile && (
      <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={openNav}></div>
    )}
      <div className="w-10/12 flex items-center justify-between pb-6 border-light-grayish-blue border-b-2 ">
        <div className="flex  w-full h-full items-center justify-start">
          {isMobile && (
            <img
              src={mobileNav}
              alt="Mobile nav Icon"
              className=" mr-4 h-4 w-5"
              role="button"
              onClick={openNav}
            />
          )}
          <img src={logo} alt="My Company Logo" className="w-fit h-fit" />
          {!isMobile && (
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
          )}

          {/* temproray */}

          {isMobile && openMobile && (
            <nav className="flex flex-col w-3/6 justify-start items-start pl-4 gap-4  h-screen bg-white absolute z-50 top-0 left-0">
              <img
                src={close}
                alt="close button"
                role="button"
                onClick={openNav}
                className=" self-start mt-6"
              />
              {routes.map(([key, value], idx) => (
                <a
                  className="text-very-dark-blue font-bold text-base  hover:border-b-2 hover:border-primary-orange"
                  key={idx}
                  href={key}
                >
                  {value}
                </a>
              ))}
            </nav>
            
          )}
        </div>

        <div className="flex justify-end gap-2 w-4/12 items-center">
          <button
            type="button"
            className="relative inline-flex items-center  text-sm font-medium text-center text-white "
            onClick={() => showCart()}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
          >
            <img src={cart} alt="Cart Logo" className="w-6 h-6 " />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-primary-orange border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {Object.entries(cartItems).length}
            </div>
          </button>
          {isCart && (
            <CartMenu
              items={cartItems}
              resetItems={() => setCartItems([])}
              deleteItemById={(item) => deleteById(item)}
            />
          )}

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
