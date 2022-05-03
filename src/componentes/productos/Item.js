import React from 'react'



const Item = (props) => {
  const {img, name, price} = props.producto
  return (
    
        <div className='box-border w-80 p-1 pb-4 border-gray shadow-md rounded border-2'>
            <img src={img} alt='foto'></img>
            <h1 className='font-semibold text-metal tracking-widest pt-4'>{name}</h1>
            <h2 className='text-gray'>{price}</h2>
            <button className='bg-green p-3 mt-3 text-white text-bold shadow-md '>AGREGAR AL CARRITO</button>
        </div>
    
  )
}

export default Item