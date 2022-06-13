import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import Contador from '../Contador'

const ItemDetail = () => {
//
  const {productosId}= useParams()

  const [producto, setProductos] = useState([])

  useEffect(() => {
      const db = getFirestore()
      const ItemDet = doc(db, 'Items', productosId)

      getDoc ( ItemDet ).then (snapshot =>{
        if (snapshot.exists()){           
            const item = snapshot.data()
            item.id = productosId
            setProductos(item)
        }
      })
    }, [productosId])
    
  const [finalizar, setFinalizar] = useState(false)

  const onAdd = (count) =>{
    setFinalizar(true)
    console.log (count)
  }    
  return (   
    <>
    {/* detalles de productos */}
        <div className='grid grid-cols-1 sm:grid-cols-12'>
          <div className='col-start-2 col-span-6'>
            <img className='w-full' src={producto.img} alt='foto'></img>
          </div>
          <div className='bg-white col-start-9 col-span-3'>
            <h1 className='font-semibold text-metal tracking-widest pt-4 text-2xl'>{producto.title}</h1>
            <h2 className='text-gray text-lg mt-2 border-b-2 border-gris p-4'>$ {producto.price}</h2>
            
{/* Si hay productos en el carrito, se muestra el botón de finalizar compra */}
            {finalizar ? (
              <Link to = '/cart'> <button className='bg-verdei font-medium p-3 mt-3  text-bold shadow-md mt-6 w-full text-white hover:text-gris ' >FINALIZAR COMPRA</button> </Link>              
            ):(
              <Contador stock ={producto.stock} Initial={1} onAdd={onAdd} id={producto.id}/>
            )}                    
            <div>
{/* Descripción de productos */}
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
                  <p className='text-gray text-sm text-justify'>{producto.des}</p>
                </div>
              </details>
            </div>              
          </div>
        </div>
    </>    
  )
  
}

export default ItemDetail