import { ShoppingCart } from 'phosphor-react'
import { Button } from './styles'

export function AddToCartButton() {
  return (
    <Button>
      <ShoppingCart size={22} weight="fill" />
    </Button>
  )
}
