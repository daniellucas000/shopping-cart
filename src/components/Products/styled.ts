import styled from 'styled-components';

export const ProductsContainer = styled('section')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 50px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;
