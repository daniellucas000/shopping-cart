import styled, { css } from 'styled-components';

interface CartContainerProps {
  readonly isVisible: boolean;
}

export const CartContainer = styled('section')<CartContainerProps>`
  width: 100%;
  max-width: 330px;
  background: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 100px 20px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(110%, 0);
  transition: all 400ms ease;

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translate(0, 0);
    `}
`;

export const CartItems = styled('div')`
  flex-grow: 1;
  overflow: auto;
`;
export const CartResume = styled('div')`
  font-size: 1.8rem;
  font-weight: 500;
  padding: 35px 0 15px;
`;

export const CartVoid = styled('div')`
  position: relative;
  top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  span {
    font-size: 1.125rem;
  }
  svg {
    stroke-width: 1px;
  }
`;
