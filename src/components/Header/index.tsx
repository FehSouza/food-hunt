import login from '../../assets/login.svg'
import logo from '../../assets/logo.svg'
import * as S from './styles.ts'

export const Header = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <S.Logo src={logo} />
        <S.LogoName>Food Hunt</S.LogoName>
      </S.LogoContainer>

      <S.NavContainer>
        <S.Menu>
          <S.MenuItem>Breakfast</S.MenuItem>
          <S.MenuItem>Launch</S.MenuItem>
          <S.MenuItem>Dinner</S.MenuItem>
        </S.Menu>
      </S.NavContainer>

      <S.LoginContainer>
        <S.Login src={login} />
      </S.LoginContainer>
    </S.Header>
  )
}
