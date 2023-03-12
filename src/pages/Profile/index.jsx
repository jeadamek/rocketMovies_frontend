import { Container } from "./styles";

import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

import { FiArrowLeft } from "react-icons/fi";


export function Profile(){
  return(
    <Container>
      <header>
        <ButtonText title="Voltar" icon={FiArrowLeft}/>
      </header>

    </Container>
  )
}