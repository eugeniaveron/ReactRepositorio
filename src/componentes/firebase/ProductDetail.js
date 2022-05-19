import React, { useEffect, useState } from 'react'
import { doc,getDoc,getFirestore } from "firebase/firestore";

const ProductDetail = () => {

    const [item, setItem]= useState({})

    useEffect(() => {
        const db = getFirestore()

        const guasha = doc (db, 'Items', 'MVacrBcYvO4XxVXmEKBB')
        getDoc (guasha).then( res => {
            if (res.exists()){
                console.log(res)
                setItem(res.data())
            }
        })
      
    }, [])
    
  return (
      <>
    <div className='p-40'>ProductDetail</div>
    <div>{item.title}</div>
    <div>{item.stock}</div>
    <div>{item.price}</div>
    </>
  )
}

export default ProductDetail