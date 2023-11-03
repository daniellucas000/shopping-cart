import { useCart } from '../../context/CartContext';
import { ICartProduct } from '../../types';
import { formatCurrency } from '../../utils/formatCurrency';

import {
  CardInfo,
  OriginalPrice,
  ProductCardContainer,
  PromotionalPrice,
  SplitPrice,
} from './styled';
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
        <h2>{product.title}</h2>
        {product.original_price ? (
          <OriginalPrice>
            {formatCurrency(product.original_price)}
          </OriginalPrice>
        ) : null}
        <PromotionalPrice>{formatCurrency(product.price)}</PromotionalPrice>
        <div>
          <SplitPrice>
            em <span> 10x {formatCurrency(product.price / 10)} sem juros</span>
          </SplitPrice>
        </div>
      </CardInfo>

      <button type="button" onClick={handleAddCart}>
        <BsCart2 />
      </button>
    </ProductCardContainer>
  );
}
