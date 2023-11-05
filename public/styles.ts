import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  max-width: 1132px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 32px 16px;
  box-sizing: border-box;
  z-index: 1;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  max-width: 21px;
  height: auto;
`

export const LogoName = styled.h1`
  margin-left: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.title};

  @media (max-width: 768px) {
    margin-left: 8px;
  }

  @media (max-width: 480px) {
    width: 40px;
    font-size: 16px;
    line-height: 18px;
  }
`

export const NavContainer = styled.nav`
  margin-left: 134px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const Menu = styled.ul`
  display: flex;
  gap: 48px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`

export const MenuItem = styled.li`
  padding: 3px 8px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.title};
  transition-duration: 350ms;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const LoginContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`

export const Login = styled.img`
  max-width: 24px;
  height: auto;
`
