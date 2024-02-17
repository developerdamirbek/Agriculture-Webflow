import React from 'react'
import { InstagramIcon } from '../../../../assets/icons/instagram-icon'
import { FacebookIcon } from '../../../../assets/icons/facebook-icon'
import { TwitterIcon } from '../../../../assets/icons/twitter-icon'

export const TeamCard = ({img, name, job}) => {
  return (
    <div className=' w-[450px] cursor-pointer rounded-3xl group transition-all duration-500 overflow-hidden hover:scale-[1.05] hover:shadow-card-shadow '>
        <div className=' w-[100%] h-[485px] '>
            <img src={img} alt="user image" />
        </div>
        <div className=' bg-doctor py-[35px] flex items-end justify-between group-hover:bg-white transition-all duration-300 px-[28px] '>
            <div>
                <h3 className=' font-roboto font-extrabold text-text-color text-[25px] '>{name}</h3>
                <p className='title text-sea-lettuce text-[22px]'>{job}</p>
            </div>
            <div className='flex gap-[17px]'>
                <a href="#">
                    <InstagramIcon/>
                </a>
                <a href="#">
                    <FacebookIcon/>
                </a>
                <a href="#">
                    <TwitterIcon/>
                </a>
            </div>
        </div>
    </div>
  )
}
