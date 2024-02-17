import React from 'react'

export const SingleCard = ({ type, img, name }) => {
    return (
        <div className='w-[600px] relative flex items-center justify-center h-[600px] bg-doctor rounded-2xl p-[40px] '>
            <span className=' inline-block absolute top-10 left-10 mb-[13px] rounded-lg bg-text-color text-white font-openSans font-semibold text-[15px] py-[6px] px-[12px] '>
                {type}
            </span>
            <img src={img} alt={name} />
        </div>
    )
}
