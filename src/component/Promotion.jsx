import React from 'react'

export default function Promotion(props) {
  return (
    <div className='w-full'>
         <div className='flex bg-white gap-3 justify-center items-center py-5 shadow-lg px-5'>
            <div>
                <p className='font-bold text-orange-400'>{props.categorie}</p>
                <h3 className='text-xl font-semibold'>{props.offre}</h3>
                <button className='py-1 my-2 px-2 bg-black  text-white'>shop Now</button>
            </div>
            <div>
                <img src={props.image} alt="" className='w-72 h-80'/>
            </div>
        </div>
    </div>
  )
}
