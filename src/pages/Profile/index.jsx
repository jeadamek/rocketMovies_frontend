import { useState } from "react";
import { Container, Form, Avatar } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NavLink } from "../../components/NavLink";

import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";


export function Profile(){
  const { user } = useAuth();
  
  const [name, setName] = useState(user.name); 
  const [email, setEmail] = useState(user.email); 

  const [passowordOld, setPasswordOld] = useState("");
  const [passowordNew, setPasswordNew] = useState("");

  return(
    <Container>
      <header>
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
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button 
          title="Salvar"
          type="submit"
        />
      </Form>

    </Container>
  )
}