import expresso from '../../assets/coffees/expresso.svg'
import { QuantityOfItemsInACart } from '../QuantityOfItemsInACart'
import { AddToCartButton } from './AddToCartButton'
import { ProductPrice } from './ProductPrice'
import {
  ProductContainer,
  ProductDescription,
  ProductTag,
  ProductTitle,
  ButtonsContainer,
  ProductTagContainer,
} from './styles'

export function CoffeeCard() {
  return (
    <ProductContainer>
      <img
        src={expresso}
        alt="Foto de uma chicara e um pires com um café expresso"
      />

      <ProductTagContainer>
        <ProductTag>TRADICIONAL</ProductTag>
        <ProductTag>Gelado</ProductTag>
        <ProductTag>Gelado</ProductTag>
      </ProductTagContainer>

      <ProductTitle>Expresso Tradicional</ProductTitle>

      <ProductDescription>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing el</p>
      </ProductDescription>

      <ButtonsContainer>
        <ProductPrice />
        <QuantityOfItemsInACart />
        <AddToCartButton />
      </ButtonsContainer>
    </ProductContainer>
  )
}
