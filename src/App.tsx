
import { useState } from 'react'
import './App.css'
import ItemComponent from './components/ItemComponent'
import NavBar from './components/NavBar'

function App() {
  const [cartItem, setCartItem] = useState({})

  // console.log(cartItem);
  return (
    <>
     <NavBar cartItem={cartItem} />
     <ItemComponent getItem={(item) => setCartItem(item)} />
    </>
  )
}

export default App
