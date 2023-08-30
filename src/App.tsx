
import { useState } from 'react'
import './App.css'
import ItemComponent from './components/ItemComponent'
import NavBar from './components/NavBar'

interface CartItem {
  id: number;
  itemName: string;
  itemPrice: number;
  itemCount: number;
  itemPriceAfter: number;
  imgLink: string;
}

function App() {
  const [cartItem, setCartItem] = useState<CartItem|null>(null);

  // console.log(cartItem);
  return (
    <div className=' overflow-x-hidden '>
     <NavBar cartItem={cartItem as CartItem} />
     <ItemComponent getItem={(item) => setCartItem(item)} />
    </div>
  )
}

export default App
