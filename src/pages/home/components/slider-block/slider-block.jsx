import React from 'react'
import { Stars } from '../../../../assets/icons/stars'

export const SliderBlock = ({ img, text, name, job }) => {
    return (
        <div className=' w-[780px] ml-auto mr-auto text-center '>
            <div className='flex flex-col items-center justify-center gap-5 mb-[25px] '>
                <div>
                    <img src={img} alt={name} />
                </div>
                <Stars />
            </div>
            <div>
                <p className=' font-openSans text-[18px] text-text-secondary mb-5 '>{text}</p>
                <h3 className=' font-roboto font-semibold text-[25px] text-text-color '>{name}</h3>
                <p className=' font-openSans text-[15px] text-text-secondary mb-10 '>{job}</p>
            </div>
        </div>
    )
}
