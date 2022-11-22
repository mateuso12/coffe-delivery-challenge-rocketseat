import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  hr {
    border: 1px solid ${(props) => props.theme['base-button']};
    margin: 24px 0;
  }

  button[type='submit'] {
    width: 100%;
    padding: 12px;
    margin-top: 24px;

    border-radius: 6px;
    border: none;

    background: ${(props) => props.theme['brand-yellow']};

    cursor: pointer;

    transition: all 0.4s;
    &:hover {
      background: ${(props) => props.theme['brand-yellow-dark']};
    }

    p {
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 22.4px;

      text-transform: uppercase;
      color: ${(props) => props.theme['base-white']};
    }
  }
`

export const SelectedCoffiesContainer = styled.div`
  display: flex;
  padding: 40px;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const SelectedCoffeOrderCard = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;

  p:first-child {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20.8px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p:last-child {
    font-size: 1rem;
    font-weight: 700;
    line-height: 20.8px;
    margin-left: 73px;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;

  svg {
    display: flex;
    margin-right: 7px;
    color: ${(props) => props.theme['brand-purple']};
  }

  button:nth-child(2) {
    display: flex;
    align-items: center;

    padding: 8px;
    background: ${(props) => props.theme['base-button']};
    border: none;
    border-radius: 6px;

    cursor: pointer;

    p {
      text-transform: uppercase;
      line-height: 19.2px;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
    }
    transition: 0.4s;

    &:hover {
      background: ${(props) => props.theme['base-error']};
    }
  }
`

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 20px;
`

export const SumContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SumOfItems = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme['base-text']};
  }

  p:nth-child(1) {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 18.2px;
  }
  p:nth-child(2) {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20.8px;
  }
`

export const DeliveryPrice = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme['base-text']};
  }

  p:nth-child(1) {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 18.2px;
  }
  p:nth-child(2) {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20.8px;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 26px;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
