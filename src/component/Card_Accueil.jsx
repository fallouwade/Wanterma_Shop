import React from 'react'

export default function Card_Accueil(props) {
  return (
    <div className=' flex justify-center mt-5  w-full '>
        <div className=' shadow-lg grid grid-cols-1 sm:grid-cols-2 w-full  bg-white gap-x-16 py-5 px-5 items-center'>
            <div >
                <h3 className='text-3xl font-bold'>{props.title}</h3>
                <p className='text-gray-400 py-2'>{props.description}</p>
                <button className='px-4  my-5 font-normal text-xl py-2 text-white bg-black rounded-sm'>Acheter maintenant</button>
            </div>
            <div >
                <img src={props.image} alt="" className='w-96 h-96'/>
            </div>
        </div>
    </div>
  )
}
