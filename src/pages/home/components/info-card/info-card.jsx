import React from 'react'

export const InfoCard = ({icon: Icon, title, text}) => {
  return (
    <div className='flex items-center gap-5'>
        <div className='rounded-2xl p-[25px] bg-white'>
            {<Icon/>}
        </div>
        <div>
            <h3 className='font-roboto font-extrabold text-[25px] text-text-color mb-[7px] '>{title}</h3>
            <p className='max-w-[444px] text-[18px] font-openSans text-text-secondary '>{text}</p>
        </div>
    </div>
  )
}
