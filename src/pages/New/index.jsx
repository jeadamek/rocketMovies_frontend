import { Container, Form, Section } from './styles';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { NavLink } from '../../components/NavLink';
import { Textarea } from '../../components/Textarea';
import { MovieItem } from '../../components/MovieItem';

import { FiArrowLeft } from "react-icons/fi";

export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <NavLink 
              title="Voltar"
              icon={FiArrowLeft}
              to="/"
            />
            <h1>Novo filme</h1>
          </header>


            <div>
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </div>

          <Textarea placeholder="Observações" />

          <Section>
            <h2>Marcadores</h2>
            <div className="tags">
              <MovieItem value="ação"/>
              <MovieItem isNew placeholder="Novo Marcador"/>
            </div>
          </Section>

          <div>
            <Button 
              title="Excluir filme" 
              className="secondary"
            />
            
            <Button 
              title="Salvar alterações"
            />
          </div>
        </Form>
      </main>

    </Container>
  )
}