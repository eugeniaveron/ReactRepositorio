import React from 'react'

const Cartwidget = () => {
    return (
        <>
        <div className='flex flex-row '>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 stroke-metal" fill="none" viewBox="0 0 24 24" stroke="whiteColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-metal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
        </div>
        </div>
        </>
    )
}

export default Cartwidget