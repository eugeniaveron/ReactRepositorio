import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';

const ItemList = () => {
    //Llamar lista de productos
    
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
    {/* map para mostrar productos en card */}   
    <div className='grid grid-cols-4 gap-4 ml-14 mr-14 mt-5 mb-5'>
      {productos.map( p => <Item id = {p.id} key= {p.id} title={p.title} price={p.price} img={p.img}/>)}
    </div>
    </>
  )
}

export default ItemList