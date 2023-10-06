import { useCart } from '../../context/CartContext';
import { ButtonContainer } from './styled';

import { BsCart2 } from 'react-icons/bs';

export function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useCart();
  return (
    <ButtonContainer onClick={() => setIsCartVisible(!isCartVisible)}>
      <BsCart2 />
      {cartItems.length > 0 && <span>{cartItems.length}</span>}
    </ButtonContainer>
  );
}
