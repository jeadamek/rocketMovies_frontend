import { Container, Profile, Brand, Logout } from './styles';
import { Input } from '../../components/Input';

export function Header() {
  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile>
        <div>
          <strong>Jessica Adamek</strong>
          <Logout>
            sair
          </Logout>
        </div>
        <img 
          src="https://github.com/jeadamek.png" 
          alt="Foto do Usuário"
        />
      </Profile>
    </Container>
  )
}