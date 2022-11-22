import styled from 'styled-components'

export const InputContainer = styled.div`
  input[type='radio'] {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label > div {
    background-color: ${(props) => props.theme['brand-purple-light']};
    border-color: ${(props) => props.theme['brand-purple']};

    &:hover {
      background: ${(props) => props.theme['brand-purple-light']};
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};
  transition: 0.3s;
  p {
    text-transform: uppercase;
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme['brand-purple']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
