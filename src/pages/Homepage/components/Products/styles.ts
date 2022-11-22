import styled from 'styled-components'

export const MenuTitle = styled.h1`
  margin-bottom: 54px;

  padding: 0 10rem;

  @media only screen and (max-width: 1007px) {
    padding: 0 2.75rem;
  }
  @media only screen and (max-width: 640px) {
    padding: 0 1.2rem;
  }
`

export const CoffeeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 100vw;
  column-gap: 2rem;
  row-gap: 2.5rem;

  padding: 0 10rem;

  @media only screen and (max-width: 1007px) {
    padding: 0 2.75rem;
  }
  @media only screen and (max-width: 640px) {
    padding: 0 1.2rem;
  }
`
