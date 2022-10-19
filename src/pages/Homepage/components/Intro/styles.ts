import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 94px 0;
  gap: 1rem;

  @media (max-width: 640px) {
    align-items: center;
  }

  .responsive {
    width: 100%;
    max-width: 476px;
    height: auto;
    /* margin-left: 56px; */
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
    color: ${(props) => props.theme['base-100']};
  }
`

export const ShoppingCartCircle = styled(IconCircleBase)`
  background-color: ${(props) => props.theme['yellow-300']};
`

export const CubeCircle = styled(IconCircleBase)`
  background-color: ${(props) => props.theme['base-700']};
`

export const TimerCircle = styled(IconCircleBase)`
  background-color: ${(props) => props.theme['yellow-200']};
`

export const CoffeeCircle = styled(IconCircleBase)`
  background-color: ${(props) => props.theme['purple-200']};
`
