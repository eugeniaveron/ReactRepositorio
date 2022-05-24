import React, { useEffect, useState } from 'react'
import { useAppContext } from './Context/AppContext'
import { useCartContext } from './Context/CartContext'


const Contador = ({stock, Initial, onAdd, id}) => {
  
    const [count, setCount] = useState(parseInt(Initial))

    const{addToCart} = useCartContext()
    const{products}= useAppContext()

    
    
    
    useEffect (() =>{ 
        console.log('El estado cambió');}, [count] )
    
    const addHandler = () => {
        if (count < stock){
            setCount(count + 1)
        }      
    }

    const restHandler = () => {
        if (count > 1){
            setCount(count - 1);
        }        
      }
    
      const handleClick =(id, cantidad)=> {
        const findProduct = products.find((products) => products.id === id)
        if (!findProduct){
          alert('Error en la base de datos')
          return
        }
        addToCart(findProduct, cantidad)
        onAdd(count)
      }

    
  return (
    <>
    
    <div className='text-center text-inherit'>
    <button className='p-3' onClick={restHandler}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  stroke-metal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
    <strong className='mt-4 ' >{count}</strong>
    <button className='p-3' onClick={addHandler}> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-metal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
<button className='bg-verdei p-3 mt-3 text-white text-bold shadow-md mt-6 w-full ' onClick={()=> handleClick(id, count)} >AGREGAR AL CARRITO</button>
    </div>
    </>
  )
}

export default Contador