import { useState } from 'react'
import { QuantityItemsButtonContainer } from './styles'

export function QuantityOfItemsInACart() {
  const [quantityInCart, setQuantityInCart] = useState(0)

  return (
    <QuantityItemsButtonContainer>
      <button
        onClick={() => {
          setQuantityInCart((prev) => prev - 1)
        }}
      >
        -
      </button>
      <p>{quantityInCart}</p>
      <button
        onClick={() => {
          setQuantityInCart((actual) => actual + 1)
        }}
      >
        +
      </button>
    </QuantityItemsButtonContainer>
  )
}
