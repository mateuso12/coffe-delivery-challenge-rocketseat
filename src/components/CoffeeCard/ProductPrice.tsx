import { Coin, Price, PriceContainer } from './styles'

export function ProductPrice() {
  return (
    <PriceContainer>
      <Coin>R$</Coin>
      <Price>9,90</Price>
    </PriceContainer>
  )
}
