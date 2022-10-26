import styled from 'styled-components'
import { shade } from 'polished'

interface CartButtonProps {
  bgColor: 'purple-300' | 'yellow-200'
  fillColor: 'base-100' | 'yellow-300'
}

export const CartButtonContainer = styled.button<CartButtonProps>`
  width: 2.375rem;
  height: 2.375rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 6px;
  background: '#fea';
  color: '#fff';
  transition: background-color 0.2s;
  &:hover:not(:disabled) {
    background-color: ${(props) =>
      shade(
        0.05,
        props.bgColor === 'purple-300'
          ? props.theme.purple
          : props.theme['yellow-100'],
      )};
  }
  &:disabled {
    cursor: not-allowed;
  }
`

interface CounterProps {
  hasItem: boolean
}

export const CounterWrapper = styled.div<CounterProps>`
  height: 1.25rem;
  width: 1.25rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  color: #fff;
  background: ${(props) => props.theme['yellow-300']};
  border-radius: 9999px;
  opacity: ${(props) => (props.hasItem ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  z-index: 1;
`
