import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 2rem;
  background: #48bb78;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  transition: 0.2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background: #38a169;
    cursor: pointer;
  }
  &:active {
    background: #2f855a;
  }
`;
