import React from 'react'

import spinner from "../data/spin1.gif"

const Spinner = () => {
  return (
   
    <div className="flex min-h-screen -mb-48">
        <img src={spinner} alt="loader" className="m-auto mt-64" />
    </div>
  
  )
}

export default Spinner