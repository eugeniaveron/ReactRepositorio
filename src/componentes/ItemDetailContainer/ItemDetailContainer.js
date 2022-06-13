import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import Spinner from '../spinner.js'


const ItemDetailContainer = () => {
//useState y useEffect para mostrar spinner, mientras se cargan los productos
  const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }, [])

  return (
    <>
    {/* Spinner y luego llama a la lista de productos */}  
    <div className='p-20'></div>
    {loader ? <Spinner/> : <ItemDetail/> }    
    </>
  )
}

export default ItemDetailContainer