/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { ProductsContainer } from './styled';
import { fetchProducts } from '../../api/fetchProducts';
import { ProductCard } from '../ProductCard';
import { useCart } from '../../context/CartContext';
import { Skeleton } from '../Skeleton';

export function Products() {
  const { products, setProducts, loading, setLoading } = useCart();

  useEffect(() => {
    fetchProducts('notebook').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Skeleton />
  ) : (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
}
