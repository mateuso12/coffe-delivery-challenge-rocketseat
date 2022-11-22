import { CoffeeOrder } from './components/CoffeeOrder'
import { SelectedCoffee } from './components/SelectedCoffee'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <CoffeeOrder />
      </div>

      <div>
        <SelectedCoffee />
      </div>
    </CheckoutContainer>
  )
}
