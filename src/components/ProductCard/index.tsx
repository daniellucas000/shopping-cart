import { useCart } from '../../context/CartContext';
import { ICartProduct } from '../../types';
import { formatCurrency } from '../../utils/formatCurrency';

import { CardInfo, ProductCardContainer } from './styled';
import { BsCart2 } from 'react-icons/bs';

export interface Product {
  product: ICartProduct;
}

export function ProductCard({ product }: Product) {
  const { cartItems, setCartItems } = useCart();

  function handleAddCart() {
    setCartItems([...cartItems, product]);
  }
  return (
    <ProductCardContainer>
      <img
        src={product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
      />

      <CardInfo>
        <span>{formatCurrency(product.price)}</span>
        <h2>{product.title}</h2>
      </CardInfo>

      <button type="button" onClick={handleAddCart}>
        <BsCart2 />
      </button>
    </ProductCardContainer>
  );
}
