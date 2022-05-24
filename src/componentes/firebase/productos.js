import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Item from '../productos/Item';
import { useParams } from 'react-router-dom';

const ItemList = () => {

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
      const db = getFirestore()

      const ItemCollection = collection(db, 'Items')

    
      getDocs( ItemCollection ).then (snapshot =>{
          const productsList = []
        snapshot.docs.forEach(s => { 
            productsList.push ({id: s.id, ...s.data()})
        })
        console.log(productsList)
        setProductos(productsList)
      })
    }, [categoryId])
    

  return (
      <>
    
    <div className='grid grid-cols-4 gap-4 m-3'>
    {productos.map( p => <Item id = {p.id} key= {p.id} title={p.title} price={p.price} img={p.img}/>)}
    </div>
    </>
  )
}

export default ItemList