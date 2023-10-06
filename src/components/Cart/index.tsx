import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { CartItem } from '../CartItem';
import { CartContainer, CartItems, CartResume } from './styled';

export function Cart() {
  const { cartItems, isCartVisible } = useCart();

  const totalPrice = cartItems.reduce((acumulador, item) => {
    return item.price + acumulador;
  }, 0);

  return (
    <CartContainer isVisible={isCartVisible}>
      <CartItems>
        {cartItems.map((carItem) => (
          <CartItem key={carItem.id} data={carItem} />
        ))}
      </CartItems>
      <CartResume>{formatCurrency(totalPrice)}</CartResume>
    </CartContainer>
  );
}
