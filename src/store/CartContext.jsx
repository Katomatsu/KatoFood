import React, { useReducer } from 'react';
import { createContext } from 'react';

export const CartContext = createContext({
	items: [],
	addItemToCart: item => {},
	removeItemFromCart: id => {}
});

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex((item) => {
      item.id === action.item.id
    })

    const updatedItems = [...state.items]
    const existingCartItem = updatedItems[existingCartItemIndex]

    if (existingCartItemIndex === -1) {
      updatedItems.push({...action.item, quantity: 1})
    } else {
      const updatedItem = {...existingCartItem, quantity: existingCartItem.quantity + 1}
      updatedItems[existingCartItemIndex] = updatedItem
    }
    return {
      ...state,
      items: updatedItems
    }
  }

	if (action.type === 'REMOVE_ITEM') {
		const existingCartItemIndex = state.items.findIndex(item => {
			return item.id === action.id;
		});
		const updatedItems = [...state.items];
		const existingCartItem = state.items[existingCartItemIndex];

		if (existingCartItem.quantity === 1) {
			updatedItems.splice(existingCartItemIndex, 1);
		} else {
			const updatedItem = {
				existingCartItem,
				quantity: existingCartItem.quantity - 1
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		}
		return {
			...state,
			items: updatedItems
		};
	}

	return state;
};

export const CartContextProvider = props => {
	const [cart, dispatch] = useReducer(cartReducer, { items: [] });

	const addItemToCart = item => {
		dispatch({ type: 'ADD_ITEM', item });
	};

	const removeItemFromCart = id => {
		dispatch({ type: 'REMOVE_ITEM', id });
	};

	const cartContext = {
		items: cart.items,
		addItemToCart,
		removeItemFromCart
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};
