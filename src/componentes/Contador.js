import React, { useEffect, useState } from 'react'

const Contador = () => {
    console.log('Acá hay un render del componente contador');

    const [count, setCount] = useState(1)
    const stock = 5;

    
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
    
    
  return (
    <>
    <h1 className='font-semibold text-metal tracking-widest pt-4'>GUASHA CORAZON</h1>
    <h2 className='text-gray'>$ 1.710</h2>
    <div className='text-center text-inherit'>
    <button className='p-3' onClick={restHandler}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
    <strong className='mt-9 ' >{count}</strong>
    <button className='p-3' onClick={addHandler}> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
    
    </div>
    
    <button className='bg-green p-3 mt-3 text-white text-bold '>AGREGAR AL CARRITO</button>

    </>
  )
}

export default Contador