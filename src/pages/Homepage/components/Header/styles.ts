import styled from 'styled-components'

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;

  > img {
    height: 4.5rem;

    @media (max-width: 640px) {
      height: 3.5rem;
    }
  }
`

export const NavbarItems = styled.div`
  display: flex;

  > div {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['purple-100']};

    height: 38px;
    border-radius: 6px;
    padding: 8px;
    gap: 4px;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['purple-300']};

    > svg {
      color: ${(props) => props.theme['purple-200']};
    }
  }

  gap: 12px;

  > button {
    display: flex;
    align-items: center;
    cursor: pointer;

    width: 38px;
    height: 38px;
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-300']};

    border: transparent;
    border-radius: 6px;

    padding: 8px;
  }
`
