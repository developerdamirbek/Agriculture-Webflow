import React, { createContext, useContext, useReducer, useEffect } from 'react';

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newItem = { ...action.payload, quantity: 1 };
            return {
                ...state,
                items: [...state.items, newItem],
            };
        case 'INCREMENT_ITEM':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload ? { ...item, quantity: (item.quantity || 1) + 1 } : item 
                ),
            };
        case 'DECREMENT_ITEM':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) } : item
                ),
            };
        case 'DELETE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(state.items));
    }, [state.items]);

    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

