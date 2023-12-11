import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Item = styled.li`
  width: 100%;
  display: flex;
  gap: ${theme.spacing(3)};
  justify-content: space-between;
  align-items: center;
  background-color: #dedef3;
  padding: ${theme.spacing(2)};

  &:not(:last-child) {
    margin-bottom: ${theme.spacing(5)};
  }
`;
export const ContactInfo = styled.p`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const Button = styled.button`
  padding: ${theme.spacing(3)};
  box-shadow: ${theme.shadows.small};
  background-color: darkblue;
  border-radius: ${theme.spacing(2)};
  color: white;
  transition: background-color ${theme.transition};
  &:disabled {
    background-color: #abbcd0;
    pointer-events: none;
  }
  &:hover,
  :focus {
    background-color: #3232da;
  }
`;
