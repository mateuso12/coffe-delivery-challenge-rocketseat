import { Coffee, Cube, ShoppingCart, Timer } from 'phosphor-react'
import {
  CubeCircle,
  IntroContainer,
  IntroItems,
  IntroText,
  TimerCircle,
  ShoppingCartCircle,
  CoffeeCircle,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <IntroItems>
          <div>
            <ShoppingCartCircle>
              <ShoppingCart weight="fill" />
            </ShoppingCartCircle>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <CubeCircle>
              <Cube weight="fill" />
            </CubeCircle>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <TimerCircle>
              <Timer weight="fill" />
            </TimerCircle>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <CoffeeCircle>
              <Coffee weight="fill" />
            </CoffeeCircle>
            <p>O café chega fresquinho até você</p>
          </div>
        </IntroItems>
      </IntroText>

      <img
        className="responsive"
        src="src/assets/coffee-img.svg"
        alt="Um copo de café com alguns grãos de café em volta"
      />
    </IntroContainer>
  )
}
