import { MapPin } from 'phosphor-react'
import { HeaderContainer, NavbarItems } from './styles'
import logo from '../../../../assets/logo.svg'
import { CartButton } from '../../../../components/CartButton'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  function handleClickGoToHome() {
    return navigate('/')
  }

  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="Copo de café com foguete e logotipo da empresa Coffe Delivery"
        onClick={handleClickGoToHome}
      />
      <NavbarItems>
        <div>
          <MapPin weight="fill" height={22} width={22} />
          <p>Jaguariúna - SP</p>
        </div>
        <CartButton
          counter={23}
          bgColor={'brand-yellow'}
          fillColor={'brand-yellow-dark'}
          disabled={false}
        />
      </NavbarItems>
    </HeaderContainer>
  )
}
