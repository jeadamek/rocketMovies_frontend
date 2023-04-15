import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Brand, Logout } from './styles';
import { Input } from '../../components/Input';

export function Header() {
  const { signOut } = useAuth();

  return(
    <Container>
      <div>
        <Brand>
          <h1>RocketMovies</h1>
        </Brand>

        <Input placeholder="Pesquisar pelo título"/>

        <Profile to="/profile">
          <div>
            <strong>Jessica Adamek</strong>
            <Logout 
              onClick={signOut}
              to="/"
            >
              sair
            </Logout>
          </div>
          <img
            src="https://github.com/jeadamek.png"
            alt="Foto do Usuário"
          />
        </Profile>
      </div>
    </Container>
  )
}