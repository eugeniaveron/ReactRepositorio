import React from 'react'
import { useCartContext } from '../Context/CartContext'


const CartCard = ({producto}) => {
  const { deleteFromCart } = useCartContext() 

  return (
      <>
  
       <div className='grid grid-cols-9 p-8 border-b-2 border-gris mr-40 ml-40' >
        <div className='grid col-span-3 '>
          <div className='flex flex-row gap-4'>
        <img className='w-20 flex flex-row' src={producto.img} alt='foto'></img>
        <div className='flex items-center '> {producto.title} </div>
        </div>
        </div>
        <div className='grid col-span-2 '>
        <p> {producto.quantity}</p>
        </div>
        <div className='grid col-span-2 '>
        <p>$ {producto.quantity * producto.price}</p>
        </div>
        <div className='grid col-span-2 justify-items-center'>
        <button className='btn' onClick={ () => { deleteFromCart(producto) } }> 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        </div>
        
        
        
        
        
        </div>
     
    </>
    
  )
}

export default CartCard