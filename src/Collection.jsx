import React from 'react'

export default function Collection(props) {
    return (
        <div>
            <div className='flex flex-col gap-3 justify-center bg-white items-center py-5 shadow-lg px-5'>
                <div>
                    <img src={props.image} alt="" className='w-48 h-72' />
                </div>

                <div className='w-full text-center '>
                    <p className='font-semibold '>{props.categorie}</p>
                    <h3 className='text-xl text-orange-400 font-semibold my-2'>{props.offre}</h3>
                    <button className='py-1 my-2 px-2 bg-stone-800  text-white w-full'>shop Now</button>
                </div>

            </div>
        </div>
    )
}
