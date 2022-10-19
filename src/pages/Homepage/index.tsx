import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Products } from './components/Products'
import { ContentContainer } from './styles'

export function Homepage() {
  return (
    <>
      <Header />
      <ContentContainer>
        <Intro />
        <Products />
      </ContentContainer>
    </>
  )
}
