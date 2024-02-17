import clsx from 'clsx'
import React from 'react'

export const Input = ({className, variant, value, placeholder, type}) => {
  return (
    <input value={value} className={clsx("border py-[29px] pl-[24px] outline-none",
    {
        "rounded-md": variant == "primary",
        "rounded-full bg": variant == "rounded"
    },
    className)} variant={variant} placeholder={placeholder} type={type} />
  )
}
