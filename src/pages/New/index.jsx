import { Container, Form } from './styles';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { FiArrowLeft } from "react-icons/fi";

export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText 
              title="Voltar"
              icon={FiArrowLeft}
            />
            <h1>Novo filme</h1>
          </header>


            <div>
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </div>

          <Textarea placeholder="Observações" />

          <div>Tags</div>
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