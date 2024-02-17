import React from 'react'
import clsx from 'clsx'

export const Button = ({children, onClick, type, className, variant }) => {
  return (
    <button onClick={onClick} type={type} className={clsx(" text-[20px] font-roboto font-semibold",
    {
        " py-[26px] px-[38px] rounded-xl ": variant == "primary",
        " rounded-full p-[17px] ": variant == "circle",
        " rounded-lg border border-1 border-text-color ": variant == "outlined"
    }, 
    className
    )} variant={variant}>
        {children}
    </button>
  )
}
