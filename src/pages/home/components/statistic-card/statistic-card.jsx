import React from 'react'

export const StatisticCard = ({num, name}) => {
  return (
    <div className='w-[211px] h-[211px] p-[2px] rounded-full border-[3px] border-sea-lettuce '>
        <div className='border-[3px] bg-beluga w-[100%] h-[100%] flex flex-col items-center justify-center border-white rounded-full'>
            <h3 className=' font-roboto font-extrabold text-[50px] text-text-color '>{num}</h3>
            <p className=' font-openSans font-semibold text-[18px] text-text-color '>{name}</p>
        </div>
    </div>
  )
}
