import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { CartItem } from '../CartItem';
import { CartContainer, CartItems, CartResume, CartVoid } from './styled';

import { HiOutlineShoppingBag } from 'react-icons/hi';

export function Cart() {
  const { cartItems, isCartVisible } = useCart();

  const totalPrice = cartItems.reduce((acumulador, item) => {
    return item.price + acumulador;
  }, 0);

  return (
    <CartContainer isVisible={isCartVisible}>
      {cartItems.length > 0 ? (
        <CartItems>
          {cartItems.map((carItem) => (
            <CartItem key={carItem.id} data={carItem} />
          ))}
        </CartItems>
      ) : (
        <CartVoid>
          <HiOutlineShoppingBag size={70} />
          <span>Monte um carrinho de compras!</span>
        </CartVoid>
      )}
      <CartResume style={{ display: cartItems.length ? 'block' : 'none' }}>
        {formatCurrency(totalPrice)}
      </CartResume>
    </CartContainer>
  );
}
