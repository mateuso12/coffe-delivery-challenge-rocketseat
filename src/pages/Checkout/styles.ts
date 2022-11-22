import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;

  /* padding: 0 10rem; */
  gap: 2rem;

  @media only screen and (max-width: 1007px) {
    padding: 0 2.75rem;
  }
  @media only screen and (max-width: 640px) {
    padding: 0 1.2rem;
    flex-wrap: wrap;
  }
`
