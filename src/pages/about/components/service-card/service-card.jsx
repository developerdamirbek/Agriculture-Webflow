import React from 'react'

export const ServiceCard = ({ icon: Icon, title, text }) => {
    return (
        <div className=' rounded-3xl w-[260px] bg-white py-[50px] px-[35px] flex flex-col items-center justify-center text-center '>
            <div className=' bg-doctor rounded-2xl p-[22px] flex items-center justify-center mb-[15px] '>
                <Icon />
            </div>
            <h3 className=' font-roboto font-extrabold text-[25px] whitespace-nowrap text-text-color mb-3 '>{title}</h3>
            <p className=' font-openSans text-[18px] text-text-secondary '>{text}</p>
        </div>
    )
}
