import React from 'react'

export const Banner = ({img, title, id, info}) => {
  return (
    <div className=' w-[682px] bg-no-repeat bg-cover bg-center pl-[55px] py-[110px] rounded-3xl ' style={{backgroundImage: `url(${img})`}}>
        <div>
            <h3 className={id == 1 ? "text-white title" : " text-sea-lettuce title"}>{title}</h3>
            <h2 className={id == 1 ? "w-[277px] font-roboto text-[40px] font-extrabold text-white": "w-[277px] font-roboto text-[40px] font-extrabold text-text-color"}>{info}</h2>
        </div>
    </div>
  )
}
