import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { FormOrder } from './FormOrder'
import { PaymentMethodOptions } from './PaymentMethodOptions'

import {
  AddressTitleContainer,
  AddressContainer,
  PaymentContainer,
  PaymentText,
  ButtonContainer,
} from './styles'

export function CoffeeOrder() {
  return (
    <>
      <h1>Complete seu pedido</h1>
      <AddressContainer>
        <AddressTitleContainer>
          <MapPinLine size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressTitleContainer>
        <FormOrder />
      </AddressContainer>

      <PaymentContainer>
        <PaymentText>
          <div>
            <CurrencyDollar size={22} />
          </div>
          <div>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a melhor forma que deseja
              pagar.
            </p>
          </div>
        </PaymentText>

        <ButtonContainer id="button-container">
          <PaymentMethodOptions />
        </ButtonContainer>
      </PaymentContainer>
    </>
  )
}
