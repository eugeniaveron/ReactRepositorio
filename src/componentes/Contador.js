import React, { useEffect, useState } from 'react'
import { useAppContext } from './Context/AppContext'
import { useCartContext } from './Context/CartContext'

//contador de items
const Contador = ({stock, Initial, onAdd, id}) => {
    const [count, setCount] = useState(parseInt(Initial))

    const{addToCart} = useCartContext()
    const{products}= useAppContext()

    useEffect (() =>{ 
        console.log('El estado cambió');}, [count] )
    
  //función para sumar productos
    const addHandler = () => {
        if (count < stock){
            setCount(count + 1)
        }      
    }
  //función para restar productos
    const restHandler = () => {
        if (count > 1){
            setCount(count - 1);
        }        
      }
  //función para agregar productos al carrito  
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
      {/* Botón para restar cantidad */} 
      <button className='p-3' onClick={restHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  stroke-metal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      <strong className='mt-4 ' >{count}</strong>
      {/* Botón para sumar cantidad */} 
      <button className='p-3' onClick={addHandler}> 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-metal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      {/* Botón para agregar productos */} 
      <button className='bg-verdei font-medium p-3 mt-3  text-bold shadow-md mt-6 w-full text-white hover:text-gris ' onClick={()=> handleClick(id, count)} >AGREGAR AL CARRITO</button>
    </div>
    </>
  )
}

export default Contador