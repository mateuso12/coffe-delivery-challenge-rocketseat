import styled from 'styled-components'

export const QuantityItemsButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 72px;
  height: 38px;

  border-radius: 6px;

  background: ${(props) => props.theme['base-400']};

  button {
    background: none;
    border: none;
    cursor: pointer;

    height: 100%;
    width: 100%;
    font-size: 22px;
    font-family: 'Baloo', sans-serif;

    color: ${(props) => props.theme['purple-200']};
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 20.8px;
  }
`
