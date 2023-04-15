import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Container, Profile, Brand, Logout } from './styles';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header() {
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <div>
        <Brand>
          <h1>RocketMovies</h1>
        </Brand>

        <Input placeholder="Pesquisar pelo título"/>

        <Profile to="/profile">
          <div>
            <strong>{user.name}</strong>
            <Logout 
              onClick={signOut}
              to="/"
            >
              sair
            </Logout>
          </div>
          <img
            src={avatarURL}
            alt={`Foto de ${user.name}`}
          />
        </Profile>
      </div>
    </Container>
  )
}