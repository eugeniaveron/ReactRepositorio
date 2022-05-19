import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore,  } from "firebase/firestore";
import Item from '../productos/Item';

const Productos = () => {

    const [products, setProducts] = useState()

    useEffect(() => {
      const db = getFirestore()

      const ItemCollection = collection(db, 'Items')
      getDocs( ItemCollection ).then (snapshot =>{
          const productsList = []
        snapshot.docs.forEach(s => { 
            productsList.push ({id: s.id, ...s.data()})
        })
        console.log(productsList)
        setProducts(productsList)
      })
    }, [])
    

  return (
      <>
    <div className='p-20'></div>
    <div className='grid grid-cols-4 gap-4 m-3'>
    {products.map( p => <Item key= {p.id} producto={p}/>)}
    </div>
    </>
  )
}

export default Productos