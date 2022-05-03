import React from 'react'
import {useEffect, useState} from "react"
import {productosData} from "../../data/data.js";
import Item from './Item'

const ItemList = () => {
    const [productos, setProductos] = useState([])

useEffect(() => {
    getProductos()
}, [])

const getProductos = () => {
    const getProductosPromise = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productosData)
        }, 2000);
    })

    getProductosPromise.then(dat => {
        setProductos(dat)
        })
    }

  return (
    <div className='grid grid-cols-4 gap-4 m-3'>
        {productos.map( p => <Item key= {p.id} producto={p}/>)}
    </div>
    
  )
}

export default ItemList