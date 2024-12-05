import React from 'react'

export default function Card_livraison(props) {
  return (
    <div className='w-full'>
        <div className='grid grid-cols-1 justify-items-center py-10 px-5 shadow-lg my-5 bg-white '>
            <div>
            <props.icon className="text-6xl text-orange-500 my-2" /> 
            </div>
            <p className='font-bold pb-2'>{props.label}</p>
            <p className='text-gray-500 text-center'>{props.para}</p>
        </div>
       
    </div>
  )
}
