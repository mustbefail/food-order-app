import { useReducer } from 'react';
import cartContext from './cart-context';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item } = action.payload;
      const newItems = [...state.items, item];
      const newTotalAmount = state.totalAmount + item.price * item.amount;
      return {
        items: newItems,
        totalAmount: newTotalAmount,
      };
    }

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });
  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', payload: { item } });
  };
  const removeItemHandler = () => {};

  const context = {
    items: cartState.items,
    amoutn: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};

export default CartProvider;
