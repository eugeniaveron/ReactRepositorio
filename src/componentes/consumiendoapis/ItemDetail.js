import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Contador from '../Contador'


const ItemDetail = ({productos}) => {

  const {img, name, price, des, stock, id } = productos

  const [finalizar, setFinalizar] = useState(false)

  const onAdd = (count) =>{
    setFinalizar(true)
    console.log (count)
  }
    
  return (   
    <>
    
        <div className='grid grid-cols-1 sm:grid-cols-12'>
          <div className='col-start-2 col-span-6'>
            <img className='w-full' src={img} alt='foto'></img>
          </div>
          <div className='bg-white col-start-9 col-span-3'>
            <h1 className='font-semibold text-metal tracking-widest pt-4 text-2xl'>{name}</h1>
            <h2 className='text-gray text-lg mt-2 border-b-2 border-gris p-4'>{price}</h2>
            

            {finalizar ? (
              <Link to = '/cart'> <button className='bg-verdei p-3 mt-3 text-white text-bold shadow-md mt-6 w-full ' >FINALIZAR COMPRA</button> </Link>
              
            ):(
              <Contador stock ={stock} Initial={1} onAdd={onAdd} id={id}/>
            )}
                     
            <div>

              <details className=' shadow peer mt-8  '  >
                <summary className='list-none flex flex-wrap items-center cursor-pointer'>
                  <h3 className='flex flex-1 text-base text-metal p-4'>DETALLES</h3>
                  <div >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 color-metal " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <div className='group-open: bg-metal'></div>
            </div>
                </summary>
              <div className='p-4'>
                  <p className='text-gray text-sm text-justify'>{des}</p>
                </div>
              </details>
            </div>              
          </div>
        </div>

    </>    
  )
  
}

export default ItemDetail
