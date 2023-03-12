import { Container, Form } from './styles';

import { Header } from '../../components/Header';
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

        </Form>
      </main>

    </Container>
  )
}