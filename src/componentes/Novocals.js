import React from 'react'

const Novocals = () => {

  const onKeyDown = (event) => { 
    console.log('se introdujo una tecla: ', event.key)
    /*const vocales = 'aeiouAEIOU'
    if(vocales.search(event.key) !== -1){
      event.preventDefault()
    }*/

    const vocales = ['a', 'e', 'i', 'o', 'u']

    if(vocales.includes(event.key.toLowerCase())) {
      event.preventDefault()
    }
  }
  return (
      <div>
        <div className= 'pt-40'>No se muestran vocales</div>
        <input type='text' onKeyDown={onKeyDown} className='border border-solid border-gray border-2 rounded mt-2'></input>
    </div>
  )
}

export default Novocals