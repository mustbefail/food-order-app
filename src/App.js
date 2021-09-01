import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';

import CartProvider from './store/CartProvider'

const App = () => {
  const [cartIsVisible, setcartIsVisible] = useState(false);

  const showCartHandler = () => {
    setcartIsVisible(true);
  };

  const hideCartHandler = () => {
    setcartIsVisible(false);
  };

  return (
    <CartProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
