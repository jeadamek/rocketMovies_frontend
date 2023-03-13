import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NavLink } from "../../components/NavLink";

import { Link } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";


export function Profile(){
  return(
    <Container>
      <header>
        {/* <ButtonText title="Voltar" icon={FiArrowLeft} to="/" /> */}
        <NavLink title="Voltar" icon={FiArrowLeft} to="/" />
      </header>

      <Form>
        <Avatar>
          <img src="https://www.github.com/jeadamek.png" alt="Foto do usuário" />
          
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button 
          title="Salvar"
          type="submit"
        />
      </Form>

    </Container>
  )
}