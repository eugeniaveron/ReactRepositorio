import React, { useEffect, useState } from 'react'
import Productos from './firebase/productos'

import Spinner from './spinner'


const ItemListContainer = () => {

    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }, [])
    

    return (
    <>
    <h1 className='pt-40'> </h1>

    {loader ? <Spinner/> : <Productos/> }
            
    </>
    )
}

export default ItemListContainer