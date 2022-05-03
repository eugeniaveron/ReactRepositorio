import React, { useEffect, useState } from 'react'
import {productosData} from '../../data/data.js'
import ItemDetail from './ItemDetail.js'
const ItemDetailContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos()
  }, [])

 const getProductos = () =>{
    const getProductosP = new Promise ((res, rej) => {
      setTimeout (() => {
        res (productosData)
      }, 2000);
    })

    getProductosP.then(data => {
      setProductos (data)
    })
 }
  
  return (
    <>
    <h1 className='pt-40'> </h1>
    <div >
        {productos.map( p => <ItemDetail key= {p.id} producto={p}/>)}
    </div>
    </>
  )
}

export default ItemDetailContainer