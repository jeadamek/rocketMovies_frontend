import { useEffect, useState } from 'react';
import { Container, Menu, Content } from './styles';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

import { Link, useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

export function Home() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/movie/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/ratings?title=${search}`);
      setMovies(response.data)
    }

    fetchMovies();
  }, [search]);

  return(
    <Container>
      <Header searchMovie={e => setSearch(e.target.value)} />

      <main>
        <Menu>
          <h1>Meus filmes</h1>

          <Link to="/new"> 
            <FiPlus />
            Adicionar filme
          </Link>
        </Menu>

        <Content>
          {
            movies &&
            movies.map(movie => (
              <Movie
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            ))
          }
        </Content>
      </main>
      
    </Container>
  )
}