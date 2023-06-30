import logo from '../../assets/logomarca-ativa-hospitalar.png'
import { StyledHeader } from './style'

export function Header() {
  return (
    <StyledHeader>
      <div>
        <img
          src={logo}
          alt="Logotipo da Ativa escrito ativa hospitalar na cor branca." />
      </div>
    </StyledHeader>
  )
}

