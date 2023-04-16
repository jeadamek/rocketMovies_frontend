import { useEffect, useState } from 'react';
import { Container, Menu, Content } from './styles';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

export function Home() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/ratings?title=${search}&tags`);
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
              />
            ))
          }
        </Content>
      </main>
      
    </Container>
  )
}