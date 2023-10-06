import { useState } from 'react';
import { FormContainer } from './styled';
import { BsSearch } from 'react-icons/bs';
import { useCart } from '../../context/CartContext';
import { fetchProducts } from '../../api/fetchProducts';

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const { setProducts, setLoading } = useCart();

  async function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  }

  return (
    <FormContainer onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button type="submit">
        <BsSearch />
      </button>
    </FormContainer>
  );
}
