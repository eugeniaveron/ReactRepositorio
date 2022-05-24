import React from 'react'
import { Link } from "react-router-dom";


import { useCartContext } from '../Context/CartContext'
import CartCard from './CartCard'

const Cart = () => {

    const { cart, deleteCart } = useCartContext()
    let precioTotal = 0

    
  return (
    <>
    
        
    {cart.length !== 0  ?
    <div className=''> 
    <div className='p-20'></div>
    <div className=' '>
    <div className=' grid  col-span-9 text-2xl tracking-wider border-y-2 border-gris p-2 mr-40 ml-40'>
          <h1>CARRITO  DE  COMPRAS</h1>
        </div> 
        </div>
        <div className='grid grid-cols-9 p-4 border-b-2 border-gris mr-40 ml-40 ' >
            <div className='grid col-span-3 '>
                <h1>PRODUCTO</h1>
            </div>
            <div className='grid col-span-2 '>
                <h1>CANTIDAD</h1>
            </div>
            <div className='grid col-span-2 '>
                <h1>TOTAL</h1>
            </div>
            <div className='grid col-span-2 '></div>
        </div>  
    {cart.map((productos) => {
            precioTotal += productos.price * productos.quantity;
            return (
              <CartCard producto ={productos} key={productos.id}/>
            )
          })}
    

    

        <p>TOTAL: ${precioTotal}</p>

    <button
          className='bg-verdei p-1 mt-3 text-white text-bold shadow-md mt-6 w-20 '
          onClick={ () => { deleteCart ()} }>
            ELIMINAR
        </button> 
        </div> :
        <div className='p-40'>
        <p className="text-xl">No hay productos agregados al carrito.</p>
        <Link to = '/categorias'> <button className='bg-verdei p-3 mt-3 text-white text-bold shadow-md mt-6 w-40 ' >VER PRODUCTOS</button> </Link>
        </div>
      }

       

</>

  )
}

export default Cart