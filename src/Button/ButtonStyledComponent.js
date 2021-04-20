import styled from 'styled-components';

export const ButtonFeedback = styled.button`
  font-weight: 700;
  font-size: 18px;
  outline: none;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`
