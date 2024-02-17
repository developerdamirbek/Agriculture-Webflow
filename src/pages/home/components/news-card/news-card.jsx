import React from 'react'
import { UserIcon } from '../../../../assets/icons/user-icon'
import { RightArrow } from '../../../../assets/icons/right-arrow'
import { Button } from '../../../../components/ui/button'

export const NewsCard = ({ img, name, title, text, date }) => {
    return (
        <div className='w-[677px] relative p-[46px] h-[524px] rounded-3xl bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${img})` }}>
            <span className=' p-[15px] text-center leading-5 mb-[137px] w-[82px] h-[82px] rounded-full bg-white flex items-center justify-center font-roboto font-extrabold text-[20px] text-text-color '>
                {date}
            </span>
            <div className='rounded-3xl z-10 bg-white shadow-lg pt-[46px] pb-[66px] px-[57px]'>
                <div className='flex items-center gap-2 mb-[15px]'>
                    <UserIcon />
                    <p className='font-roboto text-text-color'>{name}</p>
                </div>
                <h3 className=' font-roboto font-extrabold text-[25px] text-text-color mb-[2px] '>{title}</h3>
                <p className=' font-openSans text-[18px] text-text-secondary mb-[15px] '>{text}</p>
                <Button className="bg-funky-yellow" variant="primary">
                    <div className='flex items-center gap-[10px]'>
                        Read More
                        <RightArrow />
                    </div>
                </Button>
            </div>
        </div>
    )
}
