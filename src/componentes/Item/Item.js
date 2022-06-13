import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, img, title, price} )=> {

  return (
    <div>
      {/* Card para mostrar productos */}
      <div className=' '>
        <div className='grid '>
          <div>
            <img className='opacity-100 hover:opacity-90' src={img} alt='foto'></img>
          </div>
          <div>
            <h1 className='font-semibold text-metal tracking-widest pt-4'>{title}</h1>
          </div>
          <div>
            <h2 className='text-gray'>$ {price}</h2>  
          </div> 
          <div>        
            <Link to= {`/productos/${id}`}><button className='bg-verdeo font-medium p-3 mt-3 text-white text-bold shadow-md w-full '> VER MAS </button></Link>
          </div>
        </div>
      </div>  
    </div>  
  )
}

export default Item