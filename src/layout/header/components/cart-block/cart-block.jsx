import React from 'react'
import { Button } from '../../../../components/ui/button'
import { CartIcon } from '../../../../assets/icons/cart-icon'
import { Link } from 'react-router-dom'
import { useCart } from '../../../../context/cart-context/cart-context'

export const CartBlock = () => {
  const { state } = useCart();
  return (
    <div>
      <Link to="/cart">
        <div className=' border pt-[5px] pb-[5px] pl-[6px] pr-[23px] border-1 border-border-color rounded-full flex items-center gap-3 '>
          <Button className=" bg-text-color " variant="circle">
            <CartIcon />
          </Button>
          <p className=' font-roboto font-semibold text-[18px] text-text-color '>Cart ({state.items.length})</p>
        </div>
      </Link>
    </div>
  )
}
