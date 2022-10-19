import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-flex: 1 0 auto;
  -moz-flex: 1 0 auto;
  flex: 1 0 auto;
  align-self: auto;

  width: 16rem;
  padding: 0 24px 20px 24px;

  border-radius: 6px 36px;

  background-color: ${(props) => props.theme['base-200']};
  img {
    position: relative;

    bottom: 26px;

    width: 120px;
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

  background-color: ${(props) => props.theme['yellow-100']};
  border-radius: 100px;

  color: ${(props) => props.theme['yellow-300']};
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

    color: ${(props) => props.theme['base-600']};
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

  color: ${(props) => props.theme['base-50']};

  background: ${(props) => props.theme['purple-300']};

  border: none;
  border-radius: 6px;

  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme['purple-200']};
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

  color: ${(props) => props.theme['base-700']};
`

export const Price = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 31.2px;

  color: ${(props) => props.theme['base-700']};
`
