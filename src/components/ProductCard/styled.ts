import styled from 'styled-components';

export const ProductCardContainer = styled('div')`
  max-width: 300px;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;
  position: relative;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    button {
      display: flex;
    }
  }

  img {
    width: 100%;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    margin: 12px 15px;
    color: #0c5dd6;
    display: none;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.5s;
  }
`;

export const CardInfo = styled('div')`
  padding: 20px;
  border-top: 1px solid #ddd;

  span {
    font-size: 1.875rem;
    font-weight: 400;
    display: block;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 0.938rem;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.5;
    font-weight: 500;
  }
`;
