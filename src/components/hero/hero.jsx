import React from 'react'

export const Hero = ({img, title}) => {
  return (
    <section className= 'py-[184px] bg-no-repeat bg-cover bg-center ' style={{backgroundImage: `url(${img})`}}>
        <h1 className=' text-center font-roboto font-bold text-[70px] text-text-color '>{title}</h1>
    </section>
  )
}
