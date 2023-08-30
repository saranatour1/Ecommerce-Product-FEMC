
import { useState } from 'react'
import './App.css'
import ItemComponent from './components/ItemComponent'
import NavBar from './components/NavBar'

function App() {
  const [cartItem, setCartItem] = useState({})

  // console.log(cartItem);
  return (
    <div className=' overflow-x-hidden '>
     <NavBar cartItem={cartItem} />
     <ItemComponent getItem={(item) => setCartItem(item)} />
    </div>
  )
}

export default App
