import React, { useEffect, useState } from 'react'
import Spinner from '../spinner.js'
import ItemDetail from '../consumiendoapis/ItemDetail';

const Detail = () => {

  const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }, [])

  return (
    <>
    <div className='p-20'></div>
    {loader ? <Spinner/> : <ItemDetail/> }
    
    </>
  )
}

export default Detail