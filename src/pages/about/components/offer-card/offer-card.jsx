import React from 'react'

export const OfferCard = ({img, name}) => {
  return (
    <div className='w-[334px]'>
        <div className='w-[100%] overflow-hidden cursor-pointer group h-[314px] mb-6 rounded-3xl bg-white'>
            <img src={img} alt="offer product image" className='group-hover:scale-[0.85] transition-all duration-500 ' />
        </div>
        <h3 className=' text-center font-roboto text-white text-[25px]'>{name}</h3>
    </div>
  )
}
