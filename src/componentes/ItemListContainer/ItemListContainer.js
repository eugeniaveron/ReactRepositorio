import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import hero from '../../data/fotos/heromanada.jpg'
import { Link } from "react-router-dom";
import Spinner from '../spinner'


const ItemListContainer = () => {
//useState y useEffect para mostrar spinner, mientras se cargan los productos
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }, [])
    

    return (
    <>
    {/* Hero */}
    <div className='mb-5 ml-2 mr-2'>
    <Link to={'/'}> <img src={hero} alt='heroimg' className="w-full"/> </Link> 
    </div>

    <div className='mt-2 mb-5'>
        <h1 className='flex justify-center text-lg tracking-wider font-medium uppercase text-black'> LOS ELEGIDOS DE LA TEMPORADA</h1>
    </div>
    {/* Spinner y luego llama a la lista de productos */}    
    {loader ? <Spinner/> : <ItemList/> }            
    </>
    )
}

export default ItemListContainer