import { CoffeeOrderCard } from './CoffeeOrderCard'
import { SelectedCoffiesContainer } from './styles'

export function SelectedCoffee() {
  return (
    <div>
      <h1>Cafés selecionados</h1>
      <SelectedCoffiesContainer>
        <CoffeeOrderCard />
      </SelectedCoffiesContainer>
    </div>
  )
}
