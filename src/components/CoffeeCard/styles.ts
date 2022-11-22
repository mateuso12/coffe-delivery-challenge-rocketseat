import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 20px 24px;
  max-width: 16rem;

  @media (max-width: 768px) {
    min-width: 100%;
  }

  border-radius: 6px 36px;

  background-color: ${(props) => props.theme['base-card']};
  img {
    display: flex;
    position: relative;
    bottom: 1.875rem;

    width: 100%;
    height: 120px;
  }
`

export const ProductTagContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 4px;
  flex-wrap: wrap;
`

export const ProductTag = styled.p`
  padding: 4px 8px;
  margin: -12px 0 16px 0;

  background-color: ${(props) => props.theme['brand-yellow-light']};
  border-radius: 100px;

  color: ${(props) => props.theme['brand-yellow-dark']};
  font-size: 10px;
  font-weight: 700;
  line-height: 13px;

  text-transform: uppercase;
`

export const ProductTitle = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 26px;
`

export const ProductDescription = styled.div`
  display: flex;
  text-align: center;
  width: 100%;

  margin: 8px 0 32px 0;

  p {
    font-size: 0.875rem;

    color: ${(props) => props.theme['base-label']};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 8px;
`

export const Button = styled.button`
  padding: 8px;

  color: ${(props) => props.theme['base-white']};

  background: ${(props) => props.theme['brand-purple-dark']};

  border: none;
  border-radius: 6px;

  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme['brand-purple']};
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  margin-right: 23px;

  padding: 3.5px 0;
`

export const Coin = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: ${(props) => props.theme['base-text']};
`

export const Price = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 31.2px;

  color: ${(props) => props.theme['base-text']};
`
