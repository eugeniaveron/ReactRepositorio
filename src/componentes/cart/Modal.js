import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from '../Context/CartContext';



const Modal = ({open, buyer, id, mail}) => {
    const { deleteCart } = useCartContext()
    if(!open) return null
    

  return (
    <>
        <div className='  fixed inset-0 z-50 '>
            <div className='flex h-screen bg-gray justify-center items-center '>
               <div className='flex-col  justify-center bg-gris   opacity-90 '>
                <div className='grid  bg-white py-20 px-14 shadow-xl'>
               <Link to = '/'> <button onClick={deleteCart}   className=' grid pb-5 justify-items-center ' > 
          <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button> </Link>
       
            <p className='text-lg font-medium tracking-normal uppercase pb-5'>¡{buyer } gracias por ser parte de la manada!</p>
            <p className=''>Tu orden de compra es: {id}, te enviaremos un mail a {mail} con los detalles de tu pedido.</p>
            <p className=''>Esperamos que disfrutes de tu objeto mágico!</p>

            <Link to = '/'> <button onClick={deleteCart} className=' mt-5 bg-verdei p-3 text-sm mt-3 font-medium shadow-md mt-6 text-white hover:text-gris   ' > 
          HASTA LA PROXIMA
        </button> </Link>

            </div>
            </div> 
            </div>

        </div>
    </>
  )
}

export default Modal