import { Trash } from 'phosphor-react'
import expresso from '../../../../assets/coffees/expresso.svg'
import { QuantityOfItemsInACart } from '../../../../components/QuantityOfItemsInACart'
import {
  ButtonsContainer,
  CardInfos,
  CoffeCardContainer,
  DeliveryPrice,
  SelectedCoffeOrderCard,
  SumContainer,
  SumOfItems,
  TextContainer,
  TotalPrice,
} from './styles'

export function CoffeeOrderCard() {
  return (
    <CoffeCardContainer>
      <SelectedCoffeOrderCard>
        <img src={expresso} alt="Café expresso" />
        <CardInfos>
          <TextContainer>
            <p>Expresso tradicional</p>
            <p>R$ 9,90</p>
          </TextContainer>

          <ButtonsContainer>
            <QuantityOfItemsInACart />
            <button>
              {<Trash size={16} />}
              <p> Remover </p>
            </button>
          </ButtonsContainer>
        </CardInfos>
      </SelectedCoffeOrderCard>

      <hr />

      <SumContainer>
        <SumOfItems>
          <p>Total de itens</p>
          <p>R$ 29,8</p>
        </SumOfItems>
        <DeliveryPrice>
          <p>Entrega</p>
          <p>R$ 3,5</p>
        </DeliveryPrice>
        <TotalPrice>
          <p>Total</p>
          <p>R$ 33,20</p>
        </TotalPrice>
      </SumContainer>

      <button type="submit">
        <p>Confirmar pedido</p>
      </button>
    </CoffeCardContainer>
  )
}
