import styled from 'styled-components'
import background from '../../../../assets/background.jpg'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 5.875rem 10rem;

  @media only screen and (max-width: 1007px) {
    flex: 1;
    padding: 0 2.75rem;
  }
  @media only screen and (max-width: 640px) {
    flex: 1;
    padding: 0 1.2rem;
    background: none;
  }

  gap: 1rem;
  flex: 1 1 0;
  background-image: url(${background});

  .responsive {
    max-width: 100%;
    height: auto;

    @media only screen and (max-width: 640px) {
      display: none;
    }

    @media only screen and (max-width: 1007px) {
      max-width: 75%;
      height: auto;
    }
  }
`
export const IntroText = styled.div`
  > h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
  p {
    margin-top: 16px;
    font-size: 1.25rem;
    line-height: 26px;
  }
`

export const IntroItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin-top: 56px;
  gap: 20px 40px;

  div {
    display: flex;
    align-items: center;

    p {
      height: 100%;
      font-size: 1rem;
      line-height: 20.8px;
    }

    gap: 12px;
  }
`

const IconCircleBase = styled.div`
  align-items: center;
  justify-content: center;

  padding: 10px;
  border-radius: 50%;

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme['base-background']};
  }
`

export const ShoppingCartCircle = styled(IconCircleBase)`
  background-color: ${(props) => props.theme['brand-yellow-dark']};
`

export const CubeCircle = styled(IconCircleBase)`
  background-color: ${(props) => props.theme['base-text']};
`

export const TimerCircle = styled(IconCircleBase)`
  background-color: ${(props) => props.theme['brand-yellow']};
`

export const CoffeeCircle = styled(IconCircleBase)`
  background-color: ${(props) => props.theme['brand-purple']};
`
