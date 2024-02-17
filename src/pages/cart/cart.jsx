import React from 'react';
import { useCart } from '../../context/cart-context/cart-context';
import { Button } from '../../components/ui/button';
import { Newsletter } from '../../components/newsletter';

export const CartPage = () => {
    const { state, dispatch } = useCart();

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_FROM_CART', payload: id });
    };

    const handleIncrement = (id) => {
        dispatch({ type: 'INCREMENT_ITEM', payload: id });
    };

    const handleDecrement = (id) => {
        dispatch({ type: 'DECREMENT_ITEM', payload: id });
    };

    const getTotalPrice = () => {
        return state.items.reduce((total, item) => {
            const itemPrice = item.price || 0;
            const itemQuantity = item.quantity || 1;
            return total + itemPrice * itemQuantity;
        }, 0);
    };


    return (
        <div>
            <section className=' py-[30px] border-t borde-t-1 border-t-border-color border-b borde-b-1 border-b-border-color'>
                <div className='h-[560px] no-scrollbar w-[100%] overflow-y-auto '>
                    <div className="container">
                        <div className=''>
                            {state.items.length === 0 ? (
                                <h3 className='text-center font-roboto font-semibold text-[35px] text-text-color'>No Items Here Yet...</h3>
                            ) : (
                                <div className='flex flex-col gap-[20px]'>
                                    {state.items.map((item) => (
                                        <div key={item.id} className='w-[100%] h-[160px] flex items-center bg-rain rounded-2xl px-[40px] justify-between'>
                                            <Button onClick={() => handleDelete(item.id)} className="text-[35px] hover:text-red-400 ">
                                                &times;
                                            </Button>
                                            <div className='w-[150px]'>
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className='w-[400px] text-center'>
                                                <h3 className=' font-roboto font-medium text-[22px] text-text-color '>{item.name}</h3>
                                            </div>
                                            <div className='flex items-center gap-2 w-[200px]'>
                                                <Button className="text-[24px] font-openSans w-10 h-10 flex items-center justify-center bg-border-color " variant="circle" onClick={() => handleIncrement(item.id)}>+</Button>
                                                <span className='p-[10px]  rounded-full bg-rain w-8 h-8 flex items-center justify-center'><p className='font-roboto font-medium text-text-color text-[20px] p-3'>{item.quantity}</p></span>
                                                <Button className="text-[24px] font-openSans w-10 h-10 flex items-center justify-center bg-border-color " variant="circle" onClick={() => handleDecrement(item.id)}>-</Button>
                                            </div>
                                            <div>
                                                <p>${item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <p className='text-end font-roboto pt-5 font-semibold text-[35px] '>Total Price: ${getTotalPrice()}</p>
                    </div>
                </div>
            </section>
            <section className='py-[100px]'>
                <Newsletter/>
            </section>
        </div>
    );
};
