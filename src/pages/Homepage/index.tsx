import { Intro } from './components/Intro'
import { Products } from './components/Products'
import { ContentContainer } from './styles'

export function Homepage() {
  return (
    <ContentContainer>
      <Intro />
      <Products />
    </ContentContainer>
  )
}
