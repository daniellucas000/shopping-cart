import styled from 'styled-components';

export const ButtonContainer = styled('button')`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  color: #333;

  span {
    background: red;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 0.688rem;
    font-weight: 600;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
