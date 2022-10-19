import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, NavbarItems } from './styles'
import logo from '../../../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="Copo de café com foguete e logotipo da empresa Coffe Delivery"
      />
      <NavbarItems>
        <div>
          <MapPin weight="fill" height={22} width={22} />
          <p>Jaguariúna - SP</p>
        </div>
        <button>
          <ShoppingCart weight="fill" height={22} width={22} />
        </button>
      </NavbarItems>
    </HeaderContainer>
  )
}
