import { Container, Menu, Content } from './styles';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

export function Home() {
  return(
    <Container>
      <Header/>

      <main>
        <Menu>
          <h1>Meus filmes</h1>

          <Link to="/new"> 
            <FiPlus />
            Adicionar filme
          </Link>
        </Menu>

        <Content>
          <Movie to="/movie/22" data={{
            title: "Interestelar",
            tags: [
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ],
            description:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.'
          }}
          />
        </Content>
      </main>
      
    </Container>
  )
}