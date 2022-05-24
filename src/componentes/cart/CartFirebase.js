import React, { useEffect } from 'react'
import { useCartContext } from '../Context/CartContext'

const CartFirebase = () => {

    const { cart, } = useCartContext()
    

    useEffect(() => {
        console.log(cart)
    }, [cart])
    
    const cartItems = () =>{
        const Order = {
            buyer: {
                name: 'Agustina',
                phone: '555',
                mail: 'agust@m.com'
            },
            items: cart,           
        }
        console.log(Order)
    }
  return (
      <>
    <div>CartFirebase</div>
    <button onClick={CartFirebase} className="btn">agregaralcarritodos</button>
    </>
  )
}

export default CartFirebase
