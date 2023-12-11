import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Form = styled.form`
  width: 100%;
  background-color: #83b0f3;
  padding: ${theme.spacing(5)};
  margin-bottom: ${theme.spacing(4)};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${theme.spacing(2)};
`;

export const Input = styled.input`
  font-size: inherit;
  width: 100%;
  padding: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(5)};
  border: 2px solid transparent;

  outline: none;
  &:focus {
    border: 2px solid darkblue;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Button = styled.button`
  padding: ${theme.spacing(3)};
  box-shadow: ${theme.shadows.small};
  background-color: darkblue;
  border-radius: ${theme.spacing(2)};
  color: white;
  display: block;
  margin: 0 auto;
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
