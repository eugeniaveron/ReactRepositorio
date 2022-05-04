import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {productosData} from '../../data/data.js'
import ItemDetail from './ItemDetail.js'

const ItemDetailContainer = () => {
  
  const {productosId}= useParams()

  const [producto, setProductos] = useState([])
  

  useEffect(() => {
    const getProductosP = new Promise ((res, rej) => {
      setTimeout (() => {
        res (productosData.find( m => m.id === productosId))
      }, 1000);
    })
  
    getProductosP.then(data => {
      setProductos (data)
    })   
  }, [productosId])
 
  return (
    <>   
    <h1 className='pt-40'> </h1>
    <ItemDetail productos = {producto}/>
    </>
  )
}

export default ItemDetailContainer
