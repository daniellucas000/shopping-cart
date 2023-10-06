import { Cart } from './components/Cart';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { CartContextProvider } from './context/CartContext';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <CartContextProvider>
      <Header />
      <Products />
      <Cart />
      <GlobalStyle />
    </CartContextProvider>
  );
}
