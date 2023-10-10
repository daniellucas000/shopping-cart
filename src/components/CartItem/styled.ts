import styled from 'styled-components';

export const CartItemContainer = styled('section')`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  position: relative;

  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 70px;
  }
`;

export const CartItemContent = styled('section')`
  padding: 0 35px 0 10px;
  h3 {
    font-size: 0.85rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 8px;

    line-height: 1.3;
    max-height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;

  }

  span {
    font-size: 1.563rem;
    font-weight: 500;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    color: #d83232;
    font-size: 1.4rem;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
