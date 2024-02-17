import React from 'react'
import { Button } from '../../../../components/ui/button'
import { useCart } from '../../../../context/cart-context/cart-context';

export const CartCard = ({ img, id, name, price }) => {

    const { state, dispatch } = useCart();

    const handleDelete = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };


    return (
        <div className=' w-[100%] flex items-center px-[40px] justify-between border-2 border-text-color '>
            <div>
                <Button onClick={() => handleDelete(id)} className="text-[35px]">
                    &times;
                </Button>
            </div>
            <div className=' w-[150px] '>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <Button>
                    +
                </Button>
                <Button>
                    -
                </Button>
            </div>
            <div>
                <p>${price}</p>
            </div>
        </div>
    )
}
