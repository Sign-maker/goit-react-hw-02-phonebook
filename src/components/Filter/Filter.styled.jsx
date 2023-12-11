import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Label = styled.label`
  display: block;
  margin-bottom: ${theme.spacing(2)};
  background-color: #83b0f3;
  padding: ${theme.spacing(5)};
`;

export const Input = styled.input`
  font-size: inherit;
  width: 100%;
  padding: ${theme.spacing(2)};
  border: 2px solid transparent;
  margin-top: ${theme.spacing(2)};
  outline: none;
  &:focus {
    border: 2px solid darkblue;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
