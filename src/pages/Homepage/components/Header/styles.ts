import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;

  @media only screen and (max-width: 1007px) {
    padding: 1.5rem 2.75rem;
  }
  @media only screen and (max-width: 640px) {
    padding: 0.7rem 1.2rem;
  }

  > img {
    height: 4.5rem;
    cursor: pointer;

    @media (max-width: 640px) {
      height: 3.5rem;
    }
  }
`

export const NavbarItems = styled.div`
  display: flex;
  padding-right: 10px;
  > div {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['brand-purple-light']};

    height: 38px;
    border-radius: 6px;
    padding: 8px;
    gap: 4px;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['brand-purple-dark']};

    > svg {
      color: ${(props) => props.theme['brand-purple']};
    }
  }

  gap: 12px;

  > button {
    display: flex;
    align-items: center;
    cursor: pointer;

    width: 38px;
    height: 38px;
    background: ${(props) => props.theme['brand-yellow-light']};
    color: ${(props) => props.theme['brand-yellow-dark']};

    border: transparent;
    border-radius: 6px;

    padding: 8px;
  }
`
