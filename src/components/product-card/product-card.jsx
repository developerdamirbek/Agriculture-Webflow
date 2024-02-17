import React from 'react'
import { Stars } from '../../assets/icons/stars'
import { Link } from 'react-router-dom'

export const ProductCard = ({ type, img, id, name, price, oldPrice }) => {
    return (
        <Link to={`/shop-single/${id}`}>
            <div className='pt-[30px] cursor-pointer px-[30px] pb-[17px] w-[335px] group rounded-[30px] bg-doctor'>
                <span className=' inline-block mb-[13px] rounded-lg bg-text-color text-white font-openSans font-semibold text-[15px] py-[6px] px-[12px] '>
                    {type}
                </span>
                <div className=' flex items-center justify-center h-[324px] '>
                    <img className='group-hover:scale-[1.2] transition-all duration-700' src={img} alt={name} />
                </div>
                <h3 className=' font-roboto font-semibold mb-[6px] text-[20px] text-text-color pb-[13px] border-b border-b-1 border-b-border-color '>{name}</h3>
                <div className='flex items-center justify-between'>
                    <div className=' flex items-center gap-2 '>
                        <p className=' text-fortress-grey font-openSans font-semibold line-through text-[15px] '>{oldPrice}</p>
                        <p className=' font-openSans font-bold text-text-color text-[18px] '>${price}</p>
                    </div>
                    <div>
                        <Stars />
                    </div>
                </div>
            </div>
        </Link>
    )
}
