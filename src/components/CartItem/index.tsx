import { useCart } from '../../context/CartContext';
import { ICartProduct } from '../../types';
import { formatCurrency } from '../../utils/formatCurrency';
import { CartItemContainer, CartItemContent } from './styled';
import { BsFillCartDashFill } from 'react-icons/bs';

interface CartItemProps {
  data: ICartProduct;
}

export function CartItem({ data }: CartItemProps) {
  const { cartItems, setCartItems } = useCart();

  function handleRemoveItem() {
    const updatedItens = cartItems.filter((item) => item.id !== data.id);
    setCartItems(updatedItens);
  }
  return (
    <CartItemContainer>
      <img src={data.thumbnail} alt="imagem do produto" />

      <CartItemContent>
        <h3>{data.title}</h3>
        <span>{formatCurrency(data.price)}</span>

        <button type="button" onClick={handleRemoveItem}>
          <BsFillCartDashFill />
        </button>
      </CartItemContent>
    </CartItemContainer>
  );
}
