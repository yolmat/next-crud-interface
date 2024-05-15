'use client'
import { Main, Header, LoginMain, LoginDiv, LinkPe, LoginLabel } from './styles'

export default function Home() {
  return (
    <Main>
      <Header>
        <h1>Login Api whatsapp</h1>
        <h4>Entre com sua conta para ter acesso</h4>
      </Header>
      <LoginMain>
        <LoginDiv>
          <LoginLabel>Usuario: <input type="email" placeholder="exemplo@email.com.br" /></LoginLabel>
          <LoginLabel>Senha: <input type="password" placeholder="************" /></LoginLabel>
          <button>Entrar</button>
          <LinkPe href="/Home">Esqueceu sua senha?</LinkPe>
        </LoginDiv>
      </LoginMain>
    </Main>

  )
}
