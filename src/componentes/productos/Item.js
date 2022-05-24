import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, img, title, price} )=> {

  return (
    
      <div className='flex justify-around '>
        <div className='box-border w-80 p-1  border-gray shadow-md rounded border-2'>
            <img src={img} alt='foto'></img>
            <h1 className='font-semibold text-metal tracking-widest pt-4'>{title}</h1>
            <h2 className='text-gray'>$ {price}</h2>           
            <Link to= {`/productos/${id}`}><button className='bg-green p-3 mt-3 text-white text-bold shadow-md '> VER MAS </button></Link>
        </div>
      </div>    
  )
}

export default Item