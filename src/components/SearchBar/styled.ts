import styled from 'styled-components';

export const FormContainer = styled('form')`
  display: flex;
  background: #fff;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  gap: 13px;
  padding-right: 13px;

  input {
    padding: 13px;
    flex-grow: 1;
    border: none;
    font-size: 0.8rem;
    font-weight: 500;
    border-right: 1px solid #ddd;
  }

  button {
    background: none;
    border: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    cursor: pointer;
  }
`;