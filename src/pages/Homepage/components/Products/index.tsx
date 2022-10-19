import { CoffeeCard } from '../../../../components/CoffeeCard'
import { CoffeeGrid, MenuTitle } from './styles'

export function Products() {
  return (
    <div>
      <MenuTitle>Nossos cafés</MenuTitle>
      <CoffeeGrid>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeGrid>
    </div>
  )
}
