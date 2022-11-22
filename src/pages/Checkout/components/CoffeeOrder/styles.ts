import styled from 'styled-components'

export const AddressContainer = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
`

export const AddressTitleContainer = styled.div`
  display: flex;
  gap: 8px;

  svg {
    color: ${(props) => props.theme['brand-yellow-dark']};
  }

  p:nth-child(1) {
    font-weight: 400;
    font-size: 1rem;
    line-height: 20.8px;
  }

  p:nth-child(2) {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 18.2px;
  }
`
export const FormOrderContainer = styled.form`
  display: grid;
  margin-top: 32px;
  grid-column-gap: 12px;
  grid-row-gap: 16px;

  input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};
  }

  .cep {
    grid-area: cep;
  }
  .road {
    grid-area: road;
  }
  .number {
    grid-area: number;
  }
  .complement {
    grid-area: complement;
  }
  .district {
    grid-area: district;
  }
  .city {
    grid-area: city;
  }
  .uf {
    grid-area: uf;
  }

  grid-template-areas:
    'cep cep . . . .'
    'road road road road road road'
    'number number complement complement complement complement'
    'district district city city city uf'; ;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.75rem;
  flex: 1;
  gap: 0.75rem;

  justify-content: center;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['base-card']};
`

export const PaymentText = styled.div`
  display: flex;
  column-gap: 8px;

  p:first-child {
    margin-bottom: 2px;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 20.8px;
  }

  p:last-child {
    font-size: 14px;
    line-height: 18.2px;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme['brand-purple']};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;

  justify-content: center;
`
export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > p {
    grid-column: span 3;
  }
`
