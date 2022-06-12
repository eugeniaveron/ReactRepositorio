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
    <> 
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
            <div className='grid col-span-2  '>
                <h1>CANTIDAD</h1>
            </div>
            <div className='grid col-span-2 '>
                <h1>SUBTOTAL</h1>
            </div>
            <div className='grid col-span-2 '></div>
        </div>  
    {cart.map((productos) => {
            precioTotal += productos.price * productos.quantity;
            return (
              <CartCard producto ={productos} key={productos.id}/>
            )
          })}
    

    

        
      <div className='grid justify-items-end mr-40'>
    <button
          className='text-xs text-gray '
          onClick={ () => { deleteCart ()} }>
            VACIAR CARRITO
        </button>
        </div> 
        
        <div className='ml-40 border-gris  w-1/4 '>
         <div className=''> 
          <h1 className='flex font-medium tracking-wider border-b-2 border-gris p-5 w-full'>RESUMEN</h1>
          </div>
          
          <div className='flex justify-between p-5 '>
          <h2 className='text-sm '>ENVIO</h2>
          <p className=''> - </p>
          </div>
          <div className='flex justify-between p-5 '>
          <h2 className='text-sm'>TOTAL</h2>
          <p className=''>${precioTotal}</p>
          </div>
          <Link to = '/cartf'> <button className='flex bg-verdei p-2 mt-3  font-medium justify-center text-bold shadow-md mt-6 w-full text-white hover:text-gris ' >PROCEDER AL PAGO</button> </Link>
        </div>
    
        </> 
        :
        <div className='p-40'>
        <p className="text-sm uppercase text-gray">Todavía no agregaste productos al carrito.</p>
        <Link to = '/categorias'> <button className='bg-verdei p-3 mt-3  text-bold shadow-md mt-6 w-40 text-white hover:text-gris ' >VER PRODUCTOS</button> </Link>
        </div>
      }

       

</>

  )
}

export default Cart